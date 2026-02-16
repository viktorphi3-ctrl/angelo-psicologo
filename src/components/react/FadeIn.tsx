import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
      default: return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
