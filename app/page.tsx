"use client";

import { useState, useEffect } from "react";

type GitHubUser = {
  login: string;
  avatar_url: string;
  followers: number;
};

export default function DataPanel() {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

async function loadData() {
  try {
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch("https://api.github.com/users/THIS_USER_DOES_NOT_EXIST_123456")

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json: GitHubUser = await res.json();
      setData(json);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function refresh() {
    setRefreshing(true);

    try {
      await loadData();
    } finally {
      setRefreshing(false);
    }
  }

 if (loading) {
  return (
    <div>
      <h1>Loading State Screenshot</h1>
      <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mt-4"></div>
      <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mt-4"></div>
    </div>
  );
}

  if (error) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Week 7: Async JavaScript</h1>

        <div className="border rounded p-6 max-w-md">
          <p role="alert" className="text-red-600 mb-4">
            Error: {error}
          </p>

          <button
            onClick={refresh}
            disabled={refreshing}
            aria-busy={refreshing}
            className="border px-4 py-2 rounded"
          >
            {refreshing ? "Trying again..." : "Try Again"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Week 7: Async JavaScript</h1>

      <div className="border rounded p-6 max-w-md space-y-4">
        <h2 className="text-2xl font-semibold">{data?.login}</h2>

        <img
          src={data?.avatar_url}
          width="120"
          height="120"
          alt={data?.login}
          className="rounded-full"
        />

        <p>Followers: {data?.followers}</p>

        <button
          onClick={refresh}
          disabled={refreshing}
          aria-busy={refreshing}
          className="border px-4 py-2 rounded"
        >
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>
    </main>
  );
}