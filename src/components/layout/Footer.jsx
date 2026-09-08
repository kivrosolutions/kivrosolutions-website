import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/paths";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/web", label: "Web Development" },
    { href: "/services/mobile", label: "Mobile Apps" },
    { href: "/services/ux-ui", label: "UI/UX Design" },
    { href: "/services/ai-automation", label: "AI Automation" },
  ],
};

const socialLinks = [
  {
    href: "https://pk.linkedin.com/company/kivro-solutions",
    label: "Kivro Solutions on LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/kivrosolutions_/",
    label: "Kivro Solutions on Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/kivrosolutions/",
    label: "Kivro Solutions on Facebook",
    icon: FaFacebookF,
  },
];

const footerLinkClass =
  "w-fit text-[15px] text-slate-300 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07142d] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 -left-44 h-96 w-96 rounded-full border border-blue-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full border border-blue-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-6 hidden h-28 w-52 opacity-30 sm:block"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1.25px, transparent 1.25px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(1,55,162,0.3)_0%,rgba(7,20,45,0)_68%)]"
      />

      <div className="container-custom-lg relative">
        <section className="flex flex-col items-center px-2 py-16 text-center sm:py-20 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-300 uppercase sm:text-sm">
            Have a project in mind?
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us what you&apos;re working on. We&apos;ll reply within 24 hours.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#07142d] shadow-[0_0_28px_rgba(59,130,246,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:px-8 sm:py-4 sm:text-base"
          >
            Start a project
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </section>

        <div className="border-t border-blue-300/25 py-12 sm:py-14 lg:py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_1fr_1.15fr] lg:gap-10">
            <div>
              <Link
                href="/"
                aria-label="Kivro Solutions home"
                className="block w-fit rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <span className="relative block h-[116px] w-[250px] overflow-hidden sm:w-[280px]">
                  <Image
                    src={withBasePath("/images/kivro-logo-white.png")}
                    alt="Kivro Solutions"
                    fill
                    sizes="280px"
                    className="object-cover object-center mix-blend-screen"
                  />
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-300">
                Strategy, design, and engineering for digital products that move businesses forward.
              </p>
            </div>

            <FooterLinkColumn title="Company" links={footerLinks.company} />
            <FooterLinkColumn title="Services" links={footerLinks.services} />

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
                Let&apos;s connect
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:info@kivrosolutions.com"
                  className={`${footerLinkClass} flex items-center gap-3`}
                >
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-300" />
                  info@kivrosolutions.com
                </a>
                <p className="flex items-center gap-3 text-[15px] text-slate-300">
                  <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-300" />
                  Faisalabad, Pakistan
                </p>
              </div>
              <div className="mt-7 flex gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-blue-200/25 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-blue-500/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-blue-300/25 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span className="inline-flex items-center gap-2 text-slate-300">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]"
              />
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={footerLinkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
