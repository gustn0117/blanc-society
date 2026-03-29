"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/* ─── SVG ICONS ─── */
function IconMonitor({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
    </svg>
  );
}
function IconCurrency({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
function IconUser({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}
function IconBuilding({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  );
}
function IconChart({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}
function IconDatabase({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}
function IconUsers({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}
function IconStar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}
function IconMagnet({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9v3h4.5v-3c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5v3H21v-3c0-4.97-4.03-9-9-9ZM7.5 15v3H3v-3h4.5Zm13.5 0v3h-4.5v-3H21Z" />
    </svg>
  );
}
function IconChat({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}
function IconCreditCard({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  );
}
function IconRefresh({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.182-3.182" />
    </svg>
  );
}
function IconClipboard({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
    </svg>
  );
}
function IconPencil({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
}
function IconGlobe({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}
function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}
function IconMap({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0-8.25a1.5 1.5 0 0 1 3 0V15m3-12.75V15M5.25 18.75h13.5m-13.5 0v-3.375c0-.621.504-1.125 1.125-1.125H18a1.125 1.125 0 0 1 1.125 1.125v3.375m-13.875 0h13.875" />
    </svg>
  );
}
function IconSearch({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}
function IconHome({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}
function IconBriefcase({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.11 48.11 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
  );
}
function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}
function IconPhoneCall({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
function IconFunnel({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
  );
}
function IconTarget({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

/* ─── NAV ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#problem", label: "문제 인식" },
    { href: "#results", label: "성과" },
    { href: "#service", label: "서비스" },
    { href: "#funnel", label: "퍼널" },
    { href: "#contact", label: "문의" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/images/logo-text-white-cropped.png" alt="BLANC SOCIETY" width={1523} height={188} className={`h-7 w-auto transition-all duration-500 ${scrolled ? "invert" : ""}`} />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-[13px] font-medium transition-colors ${scrolled ? "text-primary-light hover:text-accent" : "text-white/80 hover:text-white"}`}>{l.label}</a>
          ))}
          <a href="#contact" className="ml-3 px-6 py-2.5 text-[13px] font-semibold rounded-full bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-black/10">상담 문의</a>
        </div>
        <button className={`lg:hidden ${scrolled ? "text-primary-light" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="메뉴">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border px-6 py-5 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-primary-light hover:text-accent py-2 font-medium">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-3 px-6 py-2.5 text-sm font-semibold rounded-full bg-accent text-white">상담 문의</a>
        </div>
      )}
    </nav>
  );
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
      <div className={`w-10 h-[1.5px] rounded-full ${light ? "bg-warm" : "bg-accent"}`} />
      <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${light ? "text-warm" : "text-accent"}`}>{children}</span>
    </div>
  );
}

/* ─── CARD ─── */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card border border-border rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ${className}`}>{children}</div>
  );
}

/* ─── ICON BOX ─── */
function IconBox({ children, size = "md", color = "accent" }: { children: React.ReactNode; size?: "sm" | "md" | "lg"; color?: "accent" | "warm" | "emerald" | "rose" | "violet" }) {
  const sizeClass = size === "lg" ? "w-14 h-14 rounded-2xl" : size === "sm" ? "w-9 h-9 rounded-lg" : "w-11 h-11 rounded-xl";
  const colorMap = {
    accent: "bg-accent-bg text-accent",
    warm: "bg-warm-bg text-warm-dark",
    emerald: "bg-emerald-bg text-emerald",
    rose: "bg-rose-bg text-rose",
    violet: "bg-violet-bg text-violet",
  };
  return <div className={`${sizeClass} ${colorMap[color]} flex items-center justify-center shrink-0`}>{children}</div>;
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
          alt="Premium clinic interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1.5px] bg-white/40 rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase">PREMIUM MARKETING PROPOSAL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-8 text-white">
              노출이 아니라,<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">매출이 올라가는 구조</span>를<br />설계합니다
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-lg mb-12 leading-relaxed">
              단순 광고가 아닌,<br />내원 → 결제 → 재방문 구조를 설계하는 피부과 전문 마케팅
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary font-bold text-sm rounded-full hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all duration-300">
                무료 상담 신청 <IconArrowRight />
              </a>
              <a href="#results" className="inline-flex items-center gap-2 px-7 py-4 text-sm text-white/90 font-medium border border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">성과 확인하기</a>
            </div>
          </div>

          {/* Right side - key stats preview */}
          <div className="hidden lg:flex flex-col gap-5">
            {[
              { icon: <IconChart className="w-5 h-5" />, value: "4억", label: "원대 매출 달성", color: "text-blue-400" },
              { icon: <IconDatabase className="w-5 h-5" />, value: "12,000", label: "명 고객 DB 구축", color: "text-emerald-400" },
              { icon: <IconStar className="w-5 h-5" />, value: "1,900+", label: "건 네이버 리뷰", color: "text-amber-400" },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.08] backdrop-blur-md rounded-2xl p-6 border border-white/[0.12] hover:bg-white/[0.14] transition-all duration-300 flex items-center gap-5">
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${s.color}`}>{s.icon}</div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="text-sm text-white/50">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: "제안 대상", value: "개인 운영 피부과 원장님" },
            { label: "제안 주체", value: "블랑 소사이어티 | 대표 정혜원" },
            { label: "문의", value: "theblanc.society@gmail.com" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-white/40 text-[11px] font-semibold tracking-widest mb-1.5 uppercase">{item.label}</p>
              <p className="text-white/70 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONCERNS ─── */
function Concerns() {
  const items: { icon: React.ReactNode; text: string; color: "accent" | "warm" | "rose" | "violet" }[] = [
    { icon: <IconMonitor className="w-6 h-6" />, text: "블로그 맡겼는데 효과를 모르겠다", color: "accent" },
    { icon: <IconCurrency className="w-6 h-6" />, text: "광고비는 쓰는데 환자는 늘지 않는다", color: "warm" },
    { icon: <IconUser className="w-6 h-6" />, text: "직원 두고 마케팅 하기엔 부담된다", color: "rose" },
    { icon: <IconBuilding className="w-6 h-6" />, text: "네트워크는 싫지만 혼자 하자니 막막하다", color: "violet" },
  ];
  return (
    <section className="py-24 sm:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel center>DIRECTOR&apos;S CONCERNS</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-primary text-center">
          이런 <span className="text-accent">고민</span> 있으신가요?
        </h2>
        <p className="text-muted text-sm text-center mb-14 max-w-md mx-auto">많은 원장님들이 공통적으로 겪는 마케팅 고민입니다</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <Card key={i} className="p-8 text-center group">
              <div className="flex justify-center mb-5">
                <IconBox size="lg" color={item.color}>{item.icon}</IconBox>
              </div>
              <p className="text-[15px] font-semibold leading-relaxed text-primary">&ldquo;{item.text}&rdquo;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  const problems = [
    { title: "구조 부재", desc: "광고는 하지만 '결제까지 이어지는 구조'가 없음" },
    { title: "KPI 불명확", desc: "채널은 많은데, KPI와 책임 소재가 불명확함" },
    { title: "실행력 저하", desc: "전담 인력 운영 부담(채용·교육·관리)으로 실행력 저하" },
    { title: "리소스 부족", desc: "네트워크는 지양하지만, 혼자 하기엔 전략·리소스 모두 부족" },
  ];
  return (
    <section id="problem" className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>PROBLEM RECOGNITION</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 text-primary">
              많은 병원이<br /><span className="text-accent">실패</span>하는 이유
            </h2>
            <p className="text-primary-light leading-relaxed text-[15px] mb-10">
              단순한 광고 지출이 아닌,<br />근본적인 매출 구조의 부재가<br />지속적인 성장을 가로막습니다.
            </p>
            <div className="space-y-4 mb-10">
              {problems.map((p, i) => {
                const colors = ["bg-rose-bg text-rose", "bg-warm-bg text-warm-dark", "bg-violet-bg text-violet", "bg-accent-bg text-accent"];
                return (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-bg-alt border border-border hover:border-accent/20 transition-colors">
                    <div className={`w-9 h-9 rounded-lg ${colors[i]} flex items-center justify-center text-sm font-bold shrink-0`}>{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-sm text-primary mb-1">{p.title}</h3>
                      <p className="text-[13px] text-primary-light leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a href="#service" className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:gap-3 transition-all">
              해결 방법 보기 <IconArrowRight />
            </a>
          </div>
          {/* Right - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                alt="Skincare treatment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 border border-border">
              <p className="text-[11px] text-muted font-semibold tracking-wide mb-1">평균 전환율</p>
              <p className="text-2xl font-extrabold text-accent">3.2x <span className="text-sm font-normal text-muted">향상</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS ─── */
function Results() {
  const stats = [
    { icon: <IconChart className="w-6 h-6" />, label: "매출 성장", value: "4억", unit: "원대", desc: "개원 첫 달 1억 9천만 원 → 1년 6개월 후 달성" },
    { icon: <IconDatabase className="w-6 h-6" />, label: "고객 DB", value: "12,000", unit: "명", desc: "체계적인 고객 데이터베이스 구축 및 관리" },
    { icon: <IconUsers className="w-6 h-6" />, label: "의료진 확장", value: "3인", unit: " 체제", desc: "부원장 3인 추가 영입, 안정적 진료 시스템" },
    { icon: <IconStar className="w-6 h-6" />, label: "평판 자산", value: "1,900", unit: "+", desc: "실제 내원 환자 기반 네이버 영수증 리뷰" },
  ];
  return (
    <section id="results" className="py-24 sm:py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#162033]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-warm/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <SectionLabel light>PROVEN RESULTS</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              실제 성과: <span className="text-warm">데이터로 증명된 결과</span>
            </h2>
            <p className="text-white/40 text-sm mb-14 max-w-lg">블랑 소사이어티와 함께한 병원의 실제 성장 데이터입니다</p>

            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-7 border border-white/[0.08] hover:bg-white/[0.09] hover:border-white/[0.15] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-warm/15 flex items-center justify-center text-warm mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <p className="text-[11px] text-warm tracking-widest font-semibold mb-2 uppercase">{s.label}</p>
                  <p className="text-3xl sm:text-4xl font-extrabold mb-2">
                    {s.value}<span className="text-base font-normal text-white/40">{s.unit}</span>
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative analytics image */}
          <div className="hidden lg:block relative w-[280px] mt-20">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=1200&q=80"
                alt="Analytics dashboard"
                fill
                className="object-cover opacity-70"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1a2332] rounded-xl p-4 border border-white/10 shadow-xl">
              <p className="text-[10px] text-warm font-semibold tracking-wider mb-1">GROWTH RATE</p>
              <p className="text-xl font-extrabold text-white">+210%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDY ─── */
function CaseStudy() {
  return (
    <section id="case" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image + floating cards */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?w=1200&q=80"
                alt="Premium clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Before/After floating cards */}
            <div className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-8 bg-white rounded-2xl p-6 shadow-xl shadow-black/10 border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[11px] font-bold text-muted tracking-wider mb-3 uppercase">Before (초기)</h4>
                  <div className="space-y-1.5">
                    {["올리지오", "인모드", "슈링크"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-primary-light text-[13px]">
                        <IconCheck className="w-3.5 h-3.5 text-muted" />{item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-accent tracking-wider mb-3 uppercase">After (확장)</h4>
                  <div className="space-y-1.5">
                    {["울쎄라", "티타늄", "써마지", "리팟"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-primary text-[13px] font-medium">
                        <span className="text-accent font-bold text-xs">+</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-4 lg:pt-4">
            <SectionLabel>CASE STUDY</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-primary">
              <span className="text-accent">프리미엄 확장</span> 사례
            </h2>

            <div className="bg-gradient-to-br from-accent-bg to-white rounded-2xl p-8 border border-accent/10 mb-8">
              <h3 className="text-lg font-extrabold text-primary mb-3">핵심 결과</h3>
              <p className="text-2xl sm:text-3xl font-extrabold text-accent leading-tight mb-6">고가 리프팅 중심 병원으로<br />포지셔닝 전환 성공</p>
              <div className="space-y-3">
                {["객단가 상승으로 매출 구조 안정화", "프리미엄 브랜드 인식 확립", "고가 시술 중심 환자 유입 증가"].map((t) => (
                  <div key={t} className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-primary-light">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-3"><IconBox color="accent"><IconFunnel className="w-5 h-5" /></IconBox></div>
                <p className="text-primary-light text-xs mb-1">단순 노출이 아닌</p>
                <p className="font-bold text-sm text-primary">내원→결제→재방문<br />퍼널 구축</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-3"><IconBox color="warm"><IconChart className="w-5 h-5" /></IconBox></div>
                <p className="text-primary-light text-xs mb-1">실제 병원 운영의</p>
                <p className="font-bold text-sm text-primary">차트·결제 데이터<br />기반 설계</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICE ─── */
function Service() {
  const allServices: { icon: React.ReactNode; title: string; items: string[]; color: "accent" | "warm" | "emerald" | "rose" | "violet" }[] = [
    { icon: <IconClipboard className="w-5 h-5" />, title: "매출형 이벤트 설계", items: ["월별 이벤트 + 게릴라 이벤트", "객단가 & 회전율 동시 설계"], color: "warm" },
    { icon: <IconPencil className="w-5 h-5" />, title: "네이버 블로그 운영", items: ["키워드 기반 콘텐츠 전략", "실제 사례형 (매출 연결 핵심)"], color: "emerald" },
    { icon: <IconGlobe className="w-5 h-5" />, title: "지역 커뮤니티 장악", items: ["지역 맘카페, 뷰티 카페 침투", "실제 내원 유도 집중 운영"], color: "violet" },
    { icon: <IconPhone className="w-5 h-5" />, title: "타겟 인스타그램 광고", items: ["핵심 타겟 고객층 맞춤형 노출", "시술별 반응 데이터 기반 최적화"], color: "rose" },
    { icon: <IconMap className="w-5 h-5" />, title: "네이버 플레이스 최적화", items: ["순위 최적화 + 정보 품질 관리", "리뷰·사진 등 신뢰 자산 설계"], color: "accent" },
    { icon: <IconTarget className="w-5 h-5" />, title: "오프라인 전환 설계", items: ["상권 맞춤형 전단지 제작 및 배포", "지역 상권 타겟 오프라인 브랜딩"], color: "emerald" },
    { icon: <IconStar className="w-5 h-5" />, title: "네이버 리뷰 관리", items: ["악성 리뷰 대응 및 삭제", "리뷰 구조 설계 (자연 유입 증가)"], color: "warm" },
    { icon: <IconSearch className="w-5 h-5" />, title: "키워드 선점 전략", items: ['"○○동 피부과 리프팅"', "지역 + 시술 검색 점유"], color: "accent" },
    { icon: <IconChat className="w-5 h-5" />, title: "카카오톡 채널 운영", items: ["상담 전환율 상승 구조 설계", "재방문 유도 메시지 운영"], color: "violet" },
    { icon: <IconUser className="w-5 h-5" />, title: "체험단 운영 (월 3명)", items: ["실제 후기 콘텐츠 확보", "블로그 + 카페 확산"], color: "rose" },
  ];

  return (
    <section id="service" className="py-24 sm:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel center>MARKETING SCOPE</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-primary text-center">
          마케팅 진행 범위: <span className="text-accent">매출형 채널 운영</span>
        </h2>
        <p className="text-muted text-sm mb-14 text-center">핵심은 유입이 아닌 결제 구조 설계입니다</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {allServices.map((s, i) => (
            <Card key={i} className="p-6 group">
              <div className="mb-4"><IconBox color={s.color}>{s.icon}</IconBox></div>
              <h3 className="font-bold text-[14px] text-primary mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[12px] text-primary-light">
                    <IconCheck className="w-3 h-3 text-emerald mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FUNNEL ─── */
function Funnel() {
  const steps: { icon: React.ReactNode; label: string; sub: string; color: "accent" | "warm" | "emerald" | "rose" | "violet" }[] = [
    { icon: <IconMagnet className="w-5 h-5" />, label: "인지/흥미", sub: "노출", color: "violet" },
    { icon: <IconGlobe className="w-5 h-5" />, label: "유입", sub: "문의/예약", color: "accent" },
    { icon: <IconHome className="w-5 h-5" />, label: "내원", sub: "방문 경험", color: "accent" },
    { icon: <IconChat className="w-5 h-5" />, label: "상담", sub: "패키지 제안", color: "warm" },
    { icon: <IconCreditCard className="w-5 h-5" />, label: "결제", sub: "매출 전환", color: "emerald" },
    { icon: <IconClipboard className="w-5 h-5" />, label: "사후관리", sub: "만족도 제고", color: "emerald" },
    { icon: <IconRefresh className="w-5 h-5" />, label: "재방문", sub: "리뷰/추천", color: "warm" },
  ];

  return (
    <section id="funnel" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel center>SALES STRUCTURE FUNNEL</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-primary text-center">
          매출 구조 설계: <span className="text-accent">내원→결제→재방문 퍼널</span>
        </h2>

        <div className="relative overflow-x-auto pb-6">
          <div className="flex gap-3 min-w-[860px]">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 relative">
                <div className="bg-card border border-border rounded-2xl p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative z-10">
                  <div className="flex justify-center mb-3"><IconBox size="sm" color={s.color}>{s.icon}</IconBox></div>
                  <p className="font-bold text-[13px] text-primary">{s.label}</p>
                  <p className="text-[11px] text-muted mt-0.5">{s.sub}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-2.5 z-20 text-accent">
                    <IconArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {([
            { icon: <IconMagnet className="w-5 h-5" />, title: "유입 강화", items: ["키워드 콘텐츠 배포", "지역 커뮤니티 장악", "인스타 맞춤 광고"], color: "violet" as const },
            { icon: <IconChat className="w-5 h-5" />, title: "전환율 향상", items: ["카카오톡 채널 세팅", "고효율 상담 스크립트"], color: "accent" as const },
            { icon: <IconCreditCard className="w-5 h-5" />, title: "결제 최적화", items: ["객단가 상승 패키지 구성", "전환율 극대화 가격전략"], color: "emerald" as const },
            { icon: <IconRefresh className="w-5 h-5" />, title: "재방문 유도", items: ["자연유입 증가 리뷰 설계", "자동화된 리콜 메시지"], color: "warm" as const },
          ]).map((s, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <IconBox color={s.color}>{s.icon}</IconBox>
                <h3 className="font-bold text-sm text-primary">{s.title}</h3>
              </div>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-[13px] text-primary-light">
                    <IconCheck className="w-3.5 h-3.5 text-accent mt-[2px] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY US (DIFFERENTIATION + CONSULTING) ─── */
function WhyUs() {
  const points: { icon: React.ReactNode; title: string; desc: string; color: "emerald" | "accent" | "warm" | "violet" }[] = [
    { icon: <IconHome className="w-5 h-5" />, title: "현실적이고 검증된 전략", desc: "실제 병원 운영 경험을 바탕으로 한 전략 수립", color: "emerald" },
    { icon: <IconChart className="w-5 h-5" />, title: "데이터 기반 의사결정", desc: "차트·결제 데이터로 직감이 아닌 근거 기반 운영", color: "accent" },
    { icon: <IconBriefcase className="w-5 h-5" />, title: "'결제 중심' 최적화 설계", desc: "단순 트래픽이 아닌 실제 매출로 이어지는 구조", color: "warm" },
    { icon: <IconUser className="w-5 h-5" />, title: "1인 의원 최적화 실행", desc: "마케팅 인력 부담 없이 운영 가능한 구조 설계", color: "violet" },
  ];
  const consulting: { icon: React.ReactNode; title: string; desc: string; color: "accent" | "warm" | "emerald" | "violet" }[] = [
    { icon: <IconTarget className="w-5 h-5" />, title: "병원 상권 분석", desc: "유동/상주/경쟁 밀도 기반 타겟 정의", color: "accent" },
    { icon: <IconSearch className="w-5 h-5" />, title: "경쟁 병원 분석", desc: "가격·장비·콘텐츠 비교 리포트 제공", color: "violet" },
    { icon: <IconClipboard className="w-5 h-5" />, title: "시술 구성 전략", desc: "고가 리프팅 중심 효율적 패키지화", color: "warm" },
    { icon: <IconPencil className="w-5 h-5" />, title: "이벤트 리디자인", desc: "시즌 및 수요 탄력 맞춤형 기획", color: "emerald" },
  ];

  return (
    <section id="difference" className="py-24 sm:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Differentiation */}
        <SectionLabel>WHY BLANC SOCIETY</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-primary">
          블랑 소사이어티가 <span className="text-accent">다른 이유</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
              <IconBox size="lg" color={p.color}>{p.icon}</IconBox>
              <div>
                <p className="font-bold text-base text-primary mb-1.5">{p.title}</p>
                <p className="text-sm text-primary-light leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
            단순 광고를 넘어선 <span className="text-accent">추가 컨설팅</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {consulting.map((c, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="flex justify-center mb-4"><IconBox color={c.color}>{c.icon}</IconBox></div>
              <h4 className="font-bold text-sm text-primary mb-1.5">{c.title}</h4>
              <p className="text-[12px] text-primary-light leading-relaxed">{c.desc}</p>
            </Card>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-border p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <span className="text-accent font-bold text-sm shrink-0 px-3 py-1 bg-accent-bg rounded-full">제공 방식</span>
          <p className="text-primary-light text-sm">초기 2주 진단 리포트 제공 + 월간 성과 리뷰 미팅 진행</p>
        </div>
      </div>
    </section>
  );
}

/* ─── CLOSING + CTA ─── */
function Closing() {
  return (
    <section className="py-28 sm:py-36 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#312e81] text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet/[0.08] blur-[100px]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <IconStar className="w-6 h-6 text-warm" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          마케팅의 본질은 결국 하나입니다.<br /><span className="text-warm">&apos;환자가 실제로 늘어나느냐&apos;</span>
        </h2>
        <p className="text-white/50 leading-relaxed mt-6 mb-3 text-[15px]">블랑 소사이어티는 그 결과를 숫자로 증명해왔습니다.</p>
        <p className="text-white/60 leading-relaxed mb-12 text-[15px]">
          원장님 병원의 상황에 맞는 <strong className="text-white">맞춤 전략과 상권 분석</strong>을 함께 제안드리겠습니다.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2.5 px-10 py-4.5 bg-white text-primary font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-all duration-300 text-sm">
          무료 상담 신청하기 <IconArrowRight />
        </a>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>CONTACT</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-primary"><span className="text-accent">상담 문의</span></h2>
            <p className="text-primary-light text-sm mb-10 leading-relaxed">편하게 문의 주시면 빠르게 검토 후<br />안내드리겠습니다.</p>
            <div className="space-y-4 mb-10">
              <a href="mailto:theblanc.society@gmail.com" className="flex items-center gap-4 text-primary hover:text-accent transition-colors text-sm group">
                <div className="w-12 h-12 rounded-xl bg-accent-bg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors"><IconMail className="w-5 h-5 text-accent group-hover:text-white transition-colors" /></div>
                theblanc.society@gmail.com
              </a>
              <a href="tel:010-8143-7018" className="flex items-center gap-4 text-primary hover:text-accent transition-colors text-sm group">
                <div className="w-12 h-12 rounded-xl bg-accent-bg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors"><IconPhoneCall className="w-5 h-5 text-accent group-hover:text-white transition-colors" /></div>
                010-8143-7018
              </a>
            </div>
            <div className="border-t border-border pt-8">
              <p className="font-bold text-lg text-primary">블랑 소사이어티</p>
              <p className="text-primary-light text-sm mt-1">대표 정혜원 드림</p>
            </div>
          </div>

          <Card className="p-8 sm:p-10">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("문의가 접수되었습니다. 빠르게 연락드리겠습니다."); }}>
              <h3 className="font-extrabold text-xl mb-6 text-primary">상담 신청</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="병원명" required className="w-full px-4 py-3.5 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition placeholder:text-muted/50" />
                <input type="text" placeholder="원장님 성함" required className="w-full px-4 py-3.5 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition placeholder:text-muted/50" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="연락처" required className="w-full px-4 py-3.5 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition placeholder:text-muted/50" />
                <input type="text" placeholder="병원 위치 (시/구)" className="w-full px-4 py-3.5 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition placeholder:text-muted/50" />
              </div>
              <textarea placeholder="궁금하신 내용이나 현재 고민을 자유롭게 적어주세요" rows={5} className="w-full px-4 py-3.5 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition placeholder:text-muted/50 resize-none" />
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold text-sm rounded-full hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">상담 신청하기</button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image src="/images/logo-text-white-cropped.png" alt="BLANC SOCIETY" width={1523} height={188} className="invert opacity-40 h-5 w-auto" />
        <p className="text-[11px] text-muted">&copy; {new Date().getFullYear()} BLANC SOCIETY. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concerns />
        <Problem />
        <Results />
        <CaseStudy />
        <Service />
        <Funnel />
        <WhyUs />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
