import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Modal, Button, ModalContent } from "@/components";

import announcements from "@/data/announcementsData";
import { useAutoRotate } from "@/hooks";

import AnnouncementCard from "./AnnouncementCard";

const ROTATION_INTERVAL = 5000;

export default function AnnouncementRail() {
  const [index, setIndex] = useState(0);
  const [modalAnnouncement, setModalAnnouncement] = useState(null);
  const isModalOpen = Boolean(modalAnnouncement);

  const currentAnnouncement = announcements[index];
  const openAnnouncement = modalAnnouncement ?? currentAnnouncement;

  const { startRotation, stopRotation } = useAutoRotate({
    enabled: announcements.length > 1 && !modalAnnouncement,
    delay: ROTATION_INTERVAL,
    onTick: () => setIndex((i) => (i + 1) % announcements.length),
  });

  const handleOpenModal = (announcement) => {
    setModalAnnouncement(announcement);
  };

  const handleCloseModal = () => {
    setModalAnnouncement(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      stopRotation();
      setIndex((i) => (i + 1) % announcements.length);
    }

    if (e.key === "ArrowLeft") {
      stopRotation();
      setIndex((i) => (i === 0 ? announcements.length - 1 : i - 1));
    }

    if (e.key === "Enter") {
      handleOpenModal(currentAnnouncement);
    }
  };

  return (
    <div
      className="relative h-full w-full"
      tabIndex={0}
      aria-live="polite"
      aria-roledescription="carousel"
      aria-label="Announcements"
      onKeyDown={handleKeyDown}
      onFocus={stopRotation}
      onBlur={startRotation}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAnnouncement.id || currentAnnouncement.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AnnouncementCard
            announcement={currentAnnouncement}
            onOpen={() => handleOpenModal(currentAnnouncement)}
          />
        </motion.div>
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent
          icon={openAnnouncement.icon}
          title={openAnnouncement?.title}
          message={openAnnouncement?.message}
        >
          {openAnnouncement?.cta && (
            <Button
              to={openAnnouncement?.cta.to}
              className="w-full justify-center bg-brand-primary-600 text-white py-3 rounded-2xl font-bold"
            >
              {openAnnouncement?.cta.label}
            </Button>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
