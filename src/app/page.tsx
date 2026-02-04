"use client";

import { useState } from "react";
import { solveQuadratic, type SolverResult } from "@/lib/solver";

export default function Home() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [c, setC] = useState<string>("");
  const [result, setResult] = useState<SolverResult | null>(null);

  const solveEquation = (e: React.FormEvent) => {
    e.preventDefault();

    const valA = parseFloat(a);
    const valB = parseFloat(b);
    const valC = parseFloat(c);

    if (isNaN(valA) || isNaN(valB) || isNaN(valC)) {
      setResult({
        type: "error",
        message: "Please enter valid numbers for all coefficients.",
      });
      return;
    }

    const solution = solveQuadratic(valA, valB, valC);
    setResult(solution);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            Quadratic Solver
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
            ax² + bx + c = 0
          </p>
        </div>

        <form onSubmit={solveEquation} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="a" >
                a
              </label>
              <input
                id="a"
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="1"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="b" >
                b
              </label>
              <input
                id="b"
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="5"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="c">
                c
              </label>
              <input
                id="c"
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="6"
                required
              />
            </div>
          </div>

          <button type="submit">
            Calculate Roots
          </button>
        </form>

        {result && (
          <div
            className={`mt-8 rounded-lg p-4 text-center ${
              result.type === "error"
                ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
                : result.type === "success"
                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                : "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
            }`}
          >
            <p className="font-semibold">{result.message}</p>
            {result.details && (
              <p className="mt-1 font-mono text-lg">{result.details}</p>
            )}
          </div>
        )}
      </main>
      
      <footer className="mt-8 text-xs text-gray-500 dark:text-gray-400">
        Albatross Exercise
      </footer>
    </div>
  );
}