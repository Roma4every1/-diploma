import { useState, useEffect } from "react";

interface ISize {
  screenWidth: number | undefined;
  screenHeight: number | undefined;
}

const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    screenWidth: undefined,
    screenHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export { useWindowSize };
