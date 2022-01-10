import { useEffect, useRef, useState } from "react";
export default function Scroll({
  scrollbarSize,
  children,
  content1,
  content2,
}) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollY(window.pageYOffset);
      if (scrollY < scrollbarSize) {
        content1.current.style.transform = "translate(0, 180%)";
        content2.current.style.transform = "translate(0, 30%)";
      }
      if (scrollY > scrollbarSize) {
        content1.current.style.transform = "translate(0, 0)";
        content2.current.style.transform = "translate(0, 0)";
      }
    });
  }, [scrollY]);

  return <>{children}</>;
}
