"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Grid2X2 } from "lucide-react";
import { megaMenus } from "@/lib/constants";
import MegaMenuPanel from "./MegaMenuPanel";

const MegaMenuContext = createContext({
  openMenu: null,
  requestOpen: () => {},
  requestClose: () => {},
});

const navLinks = [
  { href: "/", label: "Home", isHome: true },
  { href: "/about", label: "About", hasMegaMenu: true, megaMenuKey: "about" },
  { href: "/services", label: "Services", hasMegaMenu: true, megaMenuKey: "services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

function DesktopNavItem({ link, pathname }) {
  const { openMenu, requestOpen, requestClose } = useContext(MegaMenuContext);
  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
  const isHome = link.isHome;
  const menuOpen = openMenu === link.megaMenuKey;

  if (!link.hasMegaMenu) {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href={link.href}
          onMouseEnter={requestClose}
          className={`flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
            isHome ? "h-9 w-9" : "px-4 py-2"
          } ${
            isActive
              ? "bg-[#0137a2] text-white dark:bg-white dark:text-black"
              : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          }`}
        >
          {isHome ? <Home size={18} strokeWidth={2} /> : link.label}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item value={link.megaMenuKey}>
      <NavigationMenu.Trigger
        onMouseEnter={() => requestOpen(link.megaMenuKey)}
        onMouseLeave={requestClose}
        onClick={() => (menuOpen ? requestClose(true) : requestOpen(link.megaMenuKey))}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "bg-[#0137a2] text-white dark:bg-white dark:text-black"
            : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
        }`}
      >
        {link.label}
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        onMouseEnter={() => requestOpen(link.megaMenuKey)}
        onMouseLeave={requestClose}
        className="absolute top-full left-1/2 ml-8 -translate-x-1/2 pt-2"
      >
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <MegaMenuPanel
                columns={megaMenus[link.megaMenuKey].columns}
                cta={megaMenus[link.megaMenuKey].cta}
                onSelect={() => requestClose(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function MobileNavItem({ link, pathname, onSelect }) {
  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

  if (!link.hasMegaMenu) {
    return (
      <li>
        <Link
          href={link.href}
          onClick={onSelect}
          className={`text-sm font-medium ${
            isActive
              ? "text-orange-600"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          }`}
        >
          {link.label}
        </Link>
      </li>
    );
  }

  const megaMenu = megaMenus[link.megaMenuKey];

  return (
    <li>
      <p
        className={`mb-2 text-sm font-medium ${isActive ? "text-orange-600" : "text-zinc-900 dark:text-zinc-100"}`}
      >
        {link.label}
      </p>
      <ul className="flex flex-col gap-1 pl-4">
        {megaMenu.columns.map((column) =>
          column.items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={onSelect}
                className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  const requestOpen = (key) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(key);
  };

  const requestClose = (immediate = false) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (immediate) {
      setOpenMenu(null);
      return;
    }
    // chhoti si delay — trigger aur content ke beech gap mein
    // halka hover flicker hone par menu turant band nahi hoga
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const handleSelect = () => {
    requestClose(true);
    setMobileOpen(false);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MegaMenuContext.Provider value={{ openMenu, requestOpen, requestClose }}>
      <header
        className={`sticky top-0 z-50 bg-[#f6f7fb]/80 backdrop-blur-md transition-all duration-300 dark:bg-black/80 ${
          scrolled
            ? "border-b border-zinc-100 shadow-sm dark:border-zinc-800"
            : "border-b border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex container-custom-lg items-center justify-between py-2 transition-all duration-300 ${scrolled ? "px-6" : "px-10"}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kivro Solution"
              width={666}
              height={375}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Pill Navigation */}
          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-1.5 dark:bg-zinc-800">
              {navLinks.map((link) => (
                <DesktopNavItem key={link.href} link={link} pathname={pathname} />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Right Side Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/portfolio"
              onMouseEnter={() => requestClose(true)}
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500"
            >
              <Grid2X2 size={16} strokeWidth={2} />
              Portfolio
            </Link>
            <Link
              href="/contact"
              onMouseEnter={() => requestClose(true)}
              className="rounded-full bg-[#0137a2] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#012980]"
            >
              Let&apos;s talk →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-transform dark:bg-zinc-50 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-opacity dark:bg-zinc-50 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-transform dark:bg-zinc-50 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-zinc-200 bg-[#f6f7fb] px-6 py-4 lg:hidden dark:border-zinc-800 dark:bg-black">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <MobileNavItem
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  onSelect={handleSelect}
                />
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/portfolio"
                onClick={handleSelect}
                className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700"
              >
                <Grid2X2 size={16} strokeWidth={2} />
                Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={handleSelect}
                className="rounded-full bg-[#0137a2] px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                Let&apos;s talk →
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Background Overlay */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleSelect}
          />
        )}
      </AnimatePresence>
    </MegaMenuContext.Provider>
  );
}
