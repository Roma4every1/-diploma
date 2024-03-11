import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, dalay: number = 1000): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, dalay);

    return () => clearTimeout(handler);
  }, [value, dalay]);

  return debouncedValue;
};
