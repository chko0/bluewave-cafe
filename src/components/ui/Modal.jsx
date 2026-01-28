import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  // Prevent background scrolling
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Content */}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function ModalContent({ icon: Icon = Info, title, message, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="p-2 rounded-xl bg-brand-primary-100">
            <Icon className="w-6 h-6 text-brand-primary-600" />
          </div>
        )}
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">{message}</p>

      {/* Allows for custom buttons or inputs */}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
