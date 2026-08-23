"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, Camera, Pause, Play, RotateCcw, ShieldAlert, Timer } from "lucide-react";

const cameras = ["Hallway", "Storage", "Office", "Generator"];

export default function MonitorPlanner() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [cycleSeconds, setCycleSeconds] = useState(8);
  const [purgeSeconds, setPurgeSeconds] = useState(3);
  const [corruptionPressure, setCorruptionPressure] = useState(45);
  const [missedChecks, setMissedChecks] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const state = useMemo(() => {
    const cameraIndex = Math.floor(elapsed / Math.max(1, cycleSeconds)) % cameras.length;
    const loops = Math.floor(elapsed / Math.max(1, cycleSeconds * cameras.length));
    const checksPerMinute = Math.round((60 / Math.max(1, cycleSeconds)) * 10) / 10;
    const purgeWindow = Math.max(1, cycleSeconds - purgeSeconds);
    const risk = Math.min(100, Math.max(0, Math.round(corruptionPressure + missedChecks * 8 + purgeSeconds * 4 - checksPerMinute * 5)));
    const status = risk >= 70 ? "Critical" : risk >= 42 ? "Unstable" : "Controlled";
    const nextCamera = cameras[(cameraIndex + 1) % cameras.length];

    return {
      activeCamera: cameras[cameraIndex],
      nextCamera,
      loops,
      checksPerMinute,
      purgeWindow,
      risk,
      status,
    };
  }, [corruptionPressure, cycleSeconds, elapsed, missedChecks, purgeSeconds]);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
    setMissedChecks(0);
  };

  return (
    <div className="monitor-frame relative overflow-hidden p-5 scanlines">
      <div className="relative z-10">
        <div className="mb-5 flex flex-col gap-3 border-b border-green-300/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-mono text-2xl font-black text-white">CCTV Shift Planner</h2>
            <p className="text-sm text-green-100/70">Original timing helper for camera rotation and purge discipline.</p>
          </div>
          <span className={`rounded-md px-3 py-1 font-mono text-xs font-black ${state.risk >= 70 ? "bg-red-400 text-black" : state.risk >= 42 ? "bg-amber-300 text-black" : "bg-green-300 text-black"}`}>
            {state.status} / {state.risk}
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-md border border-green-300/15 bg-black/70 p-4">
            <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cameras.map((camera) => (
                <div key={camera} className={`rounded-md border p-3 ${state.activeCamera === camera ? "border-green-300 bg-green-300 text-black" : "border-green-300/15 bg-white/5 text-green-100"}`}>
                  <Camera className="mb-2 h-5 w-5" />
                  <span className="block font-mono text-xs font-black">{camera}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="field-tile p-4">
                <Timer className="mb-2 h-5 w-5 text-green-300" />
                <span className="block text-xs text-slate-400">Elapsed</span>
                <strong className="font-mono text-2xl text-white">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</strong>
              </div>
              <div className="field-tile p-4">
                <Activity className="mb-2 h-5 w-5 text-green-300" />
                <span className="block text-xs text-slate-400">Active Feed</span>
                <strong className="font-mono text-xl text-white">{state.activeCamera}</strong>
              </div>
              <div className="field-tile p-4">
                <ShieldAlert className="mb-2 h-5 w-5 text-amber-300" />
                <span className="block text-xs text-slate-400">Next Feed</span>
                <strong className="font-mono text-xl text-white">{state.nextCamera}</strong>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button onClick={() => setRunning((value) => !value)} className="btn-primary">
                {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {running ? "Pause Shift" : "Start Shift"}
              </button>
              <button onClick={() => setMissedChecks((value) => value + 1)} className="btn-secondary">
                Missed Check
              </button>
              <button onClick={reset} className="btn-quiet">
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block rounded-md border border-green-300/15 bg-white/5 p-4">
              <span className="mb-2 flex justify-between font-mono text-xs font-black uppercase text-green-200">
                Camera cycle seconds <strong>{cycleSeconds}s</strong>
              </span>
              <input type="range" min="4" max="18" step="1" value={cycleSeconds} onChange={(event) => setCycleSeconds(Number(event.target.value))} className="w-full accent-green-300" />
            </label>
            <label className="block rounded-md border border-green-300/15 bg-white/5 p-4">
              <span className="mb-2 flex justify-between font-mono text-xs font-black uppercase text-green-200">
                Purge action seconds <strong>{purgeSeconds}s</strong>
              </span>
              <input type="range" min="1" max="8" step="1" value={purgeSeconds} onChange={(event) => setPurgeSeconds(Number(event.target.value))} className="w-full accent-amber-300" />
            </label>
            <label className="block rounded-md border border-green-300/15 bg-white/5 p-4">
              <span className="mb-2 flex justify-between font-mono text-xs font-black uppercase text-green-200">
                Corruption pressure <strong>{corruptionPressure}</strong>
              </span>
              <input type="range" min="0" max="100" step="5" value={corruptionPressure} onChange={(event) => setCorruptionPressure(Number(event.target.value))} className="w-full accent-red-400" />
            </label>

            <div className="rounded-md border border-green-300/15 bg-black/60 p-4 text-sm leading-6 text-slate-300">
              <p>Loops completed: <strong className="font-mono text-white">{state.loops}</strong></p>
              <p>Checks per minute: <strong className="font-mono text-white">{state.checksPerMinute}</strong></p>
              <p>Safe purge window: <strong className="font-mono text-white">{state.purgeWindow}s</strong></p>
              <p>Missed checks logged: <strong className="font-mono text-white">{missedChecks}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
