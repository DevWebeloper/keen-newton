"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { PERSON } from "@/data/site";

const ZONES: { tz: string; label: string }[] = [
  { tz: "America/Los_Angeles", label: "San Francisco" },
  { tz: "America/New_York", label: "New York" },
  { tz: "America/Toronto", label: "Toronto" },
  { tz: "Europe/London", label: "London" },
  { tz: "Europe/Paris", label: "Paris" },
  { tz: "Europe/Zurich", label: "Geneva" },
  { tz: "Europe/Oslo", label: "Oslo" },
  { tz: "Europe/Berlin", label: "Berlin" },
  { tz: "Asia/Dubai", label: "Dubai" },
  { tz: "Asia/Kolkata", label: "Bangalore" },
  { tz: "Asia/Singapore", label: "Singapore" },
  { tz: "Australia/Sydney", label: "Sydney" },
];

const START_HOURS = [6, 7, 8, 9, 10, 11, 12];
const END_HOURS = [14, 15, 16, 17, 18, 19, 20];

// Minutes a time zone is ahead of UTC at a given moment.
function offsetMinutes(timeZone: string, date: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  return Math.round((asUtc - Math.floor(date.getTime() / 60000) * 60000) / 60000);
}

const subscribeNever = () => () => {};
let clientNow: Date | undefined;
const getNow = () => (clientNow ??= new Date());
const getLocalTz = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

const mod24 = (h: number) => ((h % 24) + 24) % 24;

function clock(h: number) {
  const m = Math.round(mod24(h) * 60);
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

function hours(n: number) {
  const v = Number.isInteger(n) ? String(n) : n.toFixed(1);
  return `${v} hour${n === 1 ? "" : "s"}`;
}

export default function HoursOverlap() {
  const id = useId();
  const [picked, setPicked] = useState<string | null>(null);
  const [start, setStart] = useState(9);
  const [end, setEnd] = useState(17);

  // Client-only values: the server renders with a fixed date and Geneva.
  const now = useSyncExternalStore(subscribeNever, getNow, () => null);
  const localTz = useSyncExternalStore(subscribeNever, getLocalTz, () => null);
  const detected = localTz && localTz !== PERSON.timeZone ? localTz : null;
  const zones =
    detected && !ZONES.some((z) => z.tz === detected)
      ? [{ tz: detected, label: `${detected.split("/").pop()!.replace(/_/g, " ")} (yours)` }, ...ZONES]
      : ZONES;
  const tz = picked ?? detected ?? "Europe/Zurich";

  const at = now ?? new Date(Date.UTC(2026, 0, 15, 12));
  const shift = (offsetMinutes(PERSON.timeZone, at) - offsetMinutes(tz, at)) / 60;
  const teamStart = mod24(start + shift);
  const length = end - start;

  let overlap = 0;
  for (const k of [-24, 0, 24]) {
    overlap += Math.max(0, Math.min(teamStart + length + k, PERSON.dayEnd) - Math.max(teamStart + k, PERSON.dayStart));
  }

  const inTeam = (h: number) => {
    const rel = mod24(h + 0.5 - teamStart);
    return rel < length;
  };
  const inMine = (h: number) => h >= PERSON.dayStart && h < PERSON.dayEnd;

  // Is the team's day centred before or after mine, going the short way round the clock?
  const earlier = mod24(teamStart + length / 2 - (PERSON.dayStart + PERSON.dayEnd) / 2 + 12) < 12;
  const move = earlier ? "start earlier" : "work later";

  let verdict: string;
  if (overlap >= 6) {
    verdict = `${hours(overlap)} of your day overlap with mine. Plenty of time for standups, reviews and pairing.`;
  } else if (overlap >= 3) {
    verdict = `${hours(overlap)} overlap with my usual day. Enough for a standup and reviews, and I can ${move} to give you more.`;
  } else {
    verdict = `${overlap > 0 ? `Only ${hours(overlap)} overlap` : "None of your day overlaps"} with my usual day, so I would ${move} to meet yours. I worked four years with the Human Rights Foundation's team in New York.`;
  }

  return (
    <>
      <div className="hours-input">
        <p className="hours-sentence">
          My team works from{" "}
          <label className="sr-only" htmlFor={`${id}-start`}>
            Start time
          </label>
          <select id={`${id}-start`} value={start} onChange={(e) => setStart(+e.target.value)}>
            {START_HOURS.map((h) => (
              <option key={h} value={h}>
                {clock(h)}
              </option>
            ))}
          </select>{" "}
          to{" "}
          <label className="sr-only" htmlFor={`${id}-end`}>
            End time
          </label>
          <select id={`${id}-end`} value={end} onChange={(e) => setEnd(+e.target.value)}>
            {END_HOURS.map((h) => (
              <option key={h} value={h}>
                {clock(h)}
              </option>
            ))}
          </select>{" "}
          in{" "}
          <label className="sr-only" htmlFor={`${id}-tz`}>
            City
          </label>
          <select id={`${id}-tz`} value={tz} onChange={(e) => setPicked(e.target.value)}>
            {zones.map((z) => (
              <option key={z.tz} value={z.tz}>
                {z.label}
              </option>
            ))}
          </select>
          .
        </p>
        <p className="hours-note">Pick your team&apos;s hours and city to see the overlap with my day.</p>
      </div>

      <div className="hours-output">
        <div className="schedule" data-ui aria-live="polite">
          <p className="schedule-title">Your team&apos;s day, in Cairo time</p>
          <p className="schedule-range tabular">
            {clock(teamStart)} – {clock(teamStart + length)}
          </p>
          <div className="schedule-bar" role="img" aria-label={`Overlap of ${hours(overlap)} with my 09:00 to 18:00 day`}>
            {Array.from({ length: 24 }, (_, h) => (
              <span key={h} data-team={inTeam(h)} data-mine={inMine(h)} />
            ))}
          </div>
          <div className="schedule-axis tabular" aria-hidden="true">
            <span>Midnight</span>
            <span>6:00</span>
            <span>Noon</span>
            <span>18:00</span>
            <span>Midnight</span>
          </div>
          <ul className="schedule-legend">
            <li data-key="team">Your team</li>
            <li data-key="mine">
              My usual day, {clock(PERSON.dayStart)}–{clock(PERSON.dayEnd)}
            </li>
            <li data-key="both">Both</li>
          </ul>
          <p className="schedule-verdict">{verdict}</p>
        </div>
      </div>
    </>
  );
}
