import { useMemo } from "react";

export function usePseudoRandomId(
  id?: string,
  prefix: string = 'rnd'
): string {
  return  useMemo(() => id || `${prefix}-${name}-${Math.random().toString(36).substring(2, 9)}-${Date.now()}`, [id])
}
