"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "kivro-welcome-seen";
const AUTO_CLOSE_MS = 6000;

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)) {
      return true;
    }
    return false;
  });

  const close = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(close, AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#eef2f6]/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Loading Bar */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-50">
              <div className="h-full w-full origin-left animate-[fill-right-to-left_6s_ease-in-out_forwards]" />
            </div>

            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Top Content */}
            <div className="px-6 pt-10 pb-6 md:px-10 md:pt-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  We Value Your Time
                </span>
              </div>

              <h2 className="mb-3 text-2xl leading-tight font-bold text-slate-900 md:text-3xl">
                Let&apos;s Find the Right <br className="hidden md:block" />
                Solution for You
              </h2>

              <p className="max-w-xl text-sm text-slate-500 md:text-base">
                Our experts understand your unique challenges and craft a tailored strategy. No
                generic pitches, just real answers.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100" />

            {/* Bottom Content */}
            <div className="px-6 py-7 md:px-10">
              <div className="mb-5 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-slate-600">Responds in 2 hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="text-sm font-medium text-slate-600">Tailored Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span className="text-sm font-medium text-slate-600">No Commitment</span>
                </div>
              </div>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  onClick={close}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-800 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02]"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  onClick={close}
                  className="flex flex-1 items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                >
                  Explore Automation Solutions
                </Link>
              </div>

              <p className="text-center text-xs text-slate-400">
                Trusted by businesses globally · No spam, ever
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
