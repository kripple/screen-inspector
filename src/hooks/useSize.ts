import { useEffect, useRef, useState } from 'react';

export function useSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ height?: number; width?: number }>({});

  useEffect(() => {
    if (!ref.current) return;
    const current = ref.current;
    setSize({ height: current.clientHeight, width: current.clientWidth });
  }, [ref]);

  return { ref, size };
}
