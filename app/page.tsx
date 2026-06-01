"use client";

import { useState, useEffect } from "react";

export default function DataPanel() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  async function loadData() {
    try {
      setError(null);

      const res = await fetch("https://api.github.com/users/octocat");

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
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
      <div className="space-y-2">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p role="alert">Error: {error}</p>
        <button onClick={refresh}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{data.login}</h2>
      <img src={data.avatar_url} width="120" alt={data.login} />
      <p>Followers: {data.followers}</p>

      <button
        onClick={refresh}
        disabled={refreshing}
        aria-busy={refreshing}
      >
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}