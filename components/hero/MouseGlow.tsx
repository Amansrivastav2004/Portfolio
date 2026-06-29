"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.20), transparent 70%)",
        filter: "blur(40px)",
        transition: "left .1s linear, top .1s linear",
      }}
    />
  );
}