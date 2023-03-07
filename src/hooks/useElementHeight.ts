import { useRef, useEffect, useState } from 'react';

export function useElementHeight<E extends HTMLElement>(
  deps: any[] = [],
  reff: React.RefObject<E | null> = { current: null },
): [React.RefObject<E>, number] {
  const ref = useRef<E>(reff.current || null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [ref, ...deps]);

  return [ref, height];
}
