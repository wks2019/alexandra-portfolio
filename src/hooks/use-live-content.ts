"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Fetches rows from a Supabase table client-side. Returns the static
 * fallback immediately, then swaps in live data when it arrives.
 * mapper converts DB snake_case rows to the site's camelCase types.
 */
export function useLiveContent<T>(
  table: string,
  fallback: T[],
  mapper: (row: Record<string, unknown>) => T,
  orderBy = "display_order"
): T[] {
  const [data, setData] = useState<T[]>(fallback);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from(table)
      .select("*")
      .order(orderBy, { ascending: true })
      .then(({ data: rows, error }) => {
        if (!error && rows && rows.length > 0) {
          setData(rows.map((r) => mapper(r as Record<string, unknown>)));
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return data;
}

export function useLiveSingleton<T>(
  table: string,
  fallback: T,
  mapper: (row: Record<string, unknown>) => T
): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from(table)
      .select("*")
      .eq("id", 1)
      .single()
      .then(({ data: row, error }) => {
        if (!error && row) setData(mapper(row as Record<string, unknown>));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return data;
}
