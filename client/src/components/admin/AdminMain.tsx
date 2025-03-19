// Client Component (Dashboard.tsx)
"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utils/api";

export default function AdminMain() {
  const { data, isLoading } = useQuery(["dashboard"], fetchData, { staleTime: 5000 });

  if (isLoading) return <p>Loading...</p>;

  return <div>Data: {JSON.stringify(data)}</div>;
}
