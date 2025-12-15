import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import announcements from "../../../data/announcements";
import AnnouncementCard from "./AnnouncementCard";

export default function AnnouncementRail() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-16 py-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={announcements[index].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <AnnouncementCard announcement={announcements[index]} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
