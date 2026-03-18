import { useCallback, useEffect, useRef } from "react";

export default function useAutoRotate({ enabled, delay, onTick }) {
  const intervalRef = useRef(null);

  const onTickRef = useRef(onTick);
  useEffect(() => {
    onTickRef.current = onTick;
  });

  const stopRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startRotation = useCallback(() => {
    if (!enabled || intervalRef.current) return;
    intervalRef.current = setInterval(() => onTickRef.current(), delay);
  }, [enabled, delay]);

  useEffect(() => {
    startRotation();
    return stopRotation;
  }, [enabled, delay, startRotation, stopRotation]);

  return { startRotation, stopRotation };
}
