import { useEffect, useRef } from "react";

export default function useAutoRotate({ enabled, delay, onTick }) {
  const ref = useRef(null);

  const stopRotation = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  const startRotation = () => {
    if (!enabled || ref.current) return;
    ref.current = setInterval(onTick, delay);
  };

  useEffect(() => {
    startRotation();
    return stopRotation;
  }, [enabled, delay, onTick]);

  return { startRotation, stopRotation };
}
