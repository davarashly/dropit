import { useEffect, useState } from "react";

type UseWindow = () => {
  windowWidth: number;
  windowHeight: number;
};

const useWindow: UseWindow = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const handler = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handler, false);

    handler();

    return () => {
      window.removeEventListener("resize", handler, false);
    };
  }, []);

  return { windowWidth, windowHeight };
};

export default useWindow;
