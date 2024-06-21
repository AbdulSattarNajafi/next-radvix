import { useEffect, useState } from "react";

function getScrollTop() {
  return window.scrollY;
}

export default function useWindowScroll() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(getScrollTop());
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollTop;
}
