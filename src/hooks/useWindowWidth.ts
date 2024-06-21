import { useState, useEffect } from "react";

function getWindowDimensions(): number | null {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  } else {
    return null;
  }
}

function useWindowWidth(): number | null {
  const [width, setWidth] = useState<number | null>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

export default useWindowWidth;
