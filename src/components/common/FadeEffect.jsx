import { motion } from "framer-motion";

export default function FadeEffect({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 20,
  duration = 0.8,
  motionProps = {},
  ...props
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      ...motionProps?.variants?.hidden,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        ...motionProps?.variants?.show?.transition,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: "-10% 0px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
