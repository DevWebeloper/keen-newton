"use client";

import { useSyncExternalStore } from "react";
import { PERSON } from "@/data/site";

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

export default function WorkingHours() {
  // Client-only values: the server renders without the visitor's time zone line.
  const now = useSyncExternalStore(subscribeNever, getNow, () => null);
  const localTz = useSyncExternalStore(subscribeNever, getLocalTz, () => null);

  let local: string | null = null;
  if (now && localTz) {
    const shift = (offsetMinutes(localTz, now) - offsetMinutes(PERSON.timeZone, now)) / 60;
    if (shift !== 0) {
      const city = localTz.split("/").pop()!.replace(/_/g, " ");
      local = `That's ${clock(PERSON.dayStart + shift)} – ${clock(PERSON.dayEnd + shift)} in ${city}.`;
    }
  }

  const inMine = (h: number) => h >= PERSON.dayStart && h < PERSON.dayEnd;

  return (
    <div className="schedule">
      <p className="schedule-title">My usual day, Egypt time (Cairo)</p>
      <p className="schedule-range tabular">
        {clock(PERSON.dayStart)} – {clock(PERSON.dayEnd)}
      </p>
      <div
        className="schedule-bar"
        role="img"
        aria-label={`Working from ${clock(PERSON.dayStart)} to ${clock(PERSON.dayEnd)} Egypt time`}
      >
        {Array.from({ length: 24 }, (_, h) => (
          <span key={h} data-mine={inMine(h)} />
        ))}
      </div>
      <div className="schedule-axis tabular" aria-hidden="true">
        <span>Midnight</span>
        <span>6:00</span>
        <span>Noon</span>
        <span>18:00</span>
        <span>Midnight</span>
      </div>
      <p className="schedule-verdict">
        {local ? `${local} ` : ""}I can shift my hours to overlap with your team.
      </p>
    </div>
  );
}
