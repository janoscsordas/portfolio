"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const FollowCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const cursorStyles = {
    translateX: "-50%",
    translateY: "-50%"
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-foreground rounded-full pointer-events-none z-50"
        style={{
          x: mouseX,
          y: mouseY,
          ...cursorStyles
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-accent-foreground rounded-full pointer-events-none z-50"
        style={{
          x: ringX,
          y: ringY,
          ...cursorStyles
        }}
      />
    </>
  );
};

export default FollowCursor;
