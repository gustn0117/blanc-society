"use client";

import Image from "next/image";
import { useState } from "react";

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
  const links = [
    { href: "#problem", label: "문제 인식" },
    { href: "#results", label: "성과" },
    { href: "#case", label: "사례" },
    { href: "#service", label: "서비스" },
    { href: "#funnel", label: "퍼널" },
    { href: "#difference", label: "차별점" },
    { href: "#contact", label: "문의" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/images/logo-text-white-cropped.png" alt="BLANC SOCIETY" width={1523} height={188} className="invert h-7 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-muted hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-5 py-2 text-[13px] font-semibold rounded-full bg-accent text-white hover:bg-accent-light transition">
            상담 문의
          </a>
        </div>

        <button className="lg:hidden text-muted" onClick={() => setOpen(!open)} aria-label="메뉴">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l10 10M6 16L16 6" /> : <path d="M4 6h14M4 11h14M4 16h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border px-5 py-4 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-primary py-1.5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 px-5 py-2 text-sm font-semibold rounded-full bg-accent text-white">
            상담 문의
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-[2px] bg-accent" />
      <span className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
        {children}
      </span>
    </div>
  );
}

/* ─── CARD ─── */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card border border-border rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/* ─── ICON BOX ─── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
      {children}
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-bg-alt to-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 w-full">
        <SectionLabel>PREMIUM MARKETING PROPOSAL</SectionLabel>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] mt-6 mb-6 text-primary">
          노출이 아니라,
          <br />
          <span className="text-accent">매출이 올라가는 구조</span>를
          <br />
          설계합니다
        </h1>

        <p className="text-muted text-base sm:text-lg max-w-lg mt-4 mb-10 leading-relaxed">
          단순 광고가 아닌,
          <br />
          내원 → 결제 → 재방문 구조를 설계하는 피부과 전문 마케팅
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold text-sm rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all">
            무료 상담 신청
            <IconArrowRight />
          </a>
          <a href="#results" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-accent border border-accent/25 rounded-full hover:bg-accent/5 transition">
            성과 확인하기
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "제안 대상", value: "개인 운영 피부과 원장님" },
            { label: "제안 주체", value: "블랑 소사이어티 | 대표 정혜원" },
            { label: "문의", value: "theblanc.society@gmail.com" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-accent text-[11px] tracking-wide mb-1">{item.label}</p>
              <p className="text-primary/70 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONCERNS ─── */
function Concerns() {
  const items = [
    { icon: <IconMonitor className="w-5 h-5" />, text: '"블로그 맡겼는데\n효과를 모르겠다"' },
    { icon: <IconCurrency className="w-5 h-5" />, text: '"광고비는 쓰는데\n환자는 늘지 않는다"' },
    { icon: <IconUser className="w-5 h-5" />, text: '"직원 두고 마케팅 하기엔\n부담된다"' },
    { icon: <IconBuilding className="w-5 h-5" />, text: '"네트워크는 싫지만 혼자\n하자니 막막하다"' },
  ];
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>DIRECTOR&apos;S CONCERNS</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          이런 <span className="text-accent">고민</span> 있으신가요?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <Card key={i} className="p-6 sm:p-7 flex items-start gap-4">
              <IconBox>{item.icon}</IconBox>
              <p className="text-[15px] sm:text-base font-medium whitespace-pre-line leading-relaxed text-primary/85">
                {item.text}
              </p>
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
    "광고는 하지만 '결제까지 이어지는 구조'가 없음",
    "채널은 많은데, KPI와 책임 소재가 불명확함",
    "전담 인력 운영 부담(채용·교육·관리)으로 실행력 저하",
    "네트워크는 지양하지만, 혼자 하기엔 전략·리소스 모두 부족",
  ];
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>PROBLEM RECOGNITION</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5 text-primary">
              많은 병원이
              <br />
              <span className="text-accent">실패</span>하는 이유
            </h2>
            <p className="text-muted leading-relaxed text-[15px]">
              단순한 광고 지출이 아닌,
              <br />
              근본적인 매출 구조의 부재가
              <br />
              지속적인 성장을 가로막습니다.
            </p>
          </div>
          <div className="space-y-3">
            {problems.map((p, i) => (
              <Card key={i} className="p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-[14px] sm:text-[15px] font-medium text-primary/80">{p}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS ─── */
function Results() {
  const stats = [
    { icon: <IconChart className="w-5 h-5" />, label: "매출 성장", value: "4억", unit: "원대", desc: "개원 첫 달 1억 9천만 원 → 1년 6개월 후 달성" },
    { icon: <IconDatabase className="w-5 h-5" />, label: "고객 DB", value: "12,000", unit: "명", desc: "체계적인 고객 데이터베이스 구축 및 지속적 관리 시스템 확립" },
    { icon: <IconUsers className="w-5 h-5" />, label: "의료진 확장", value: "3인", unit: " 체제", desc: "부원장 3인 추가 영입으로 안정적인 진료 시스템 구축" },
    { icon: <IconStar className="w-5 h-5" />, label: "평판 자산", value: "1,900", unit: "+", desc: "실제 내원 환자 기반의 네이버 영수증 리뷰 확보" },
  ];
  return (
    <section id="results" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>PROVEN RESULTS</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          실제 성과: <span className="text-accent">데이터로 증명된 결과</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Card key={i} className="p-7 sm:p-8 text-center">
              <div className="flex justify-center mb-3">
                <IconBox>{s.icon}</IconBox>
              </div>
              <p className="text-[12px] text-accent tracking-wide mb-2">{s.label}</p>
              <p className="text-4xl sm:text-5xl font-bold text-accent">
                {s.value}
                <span className="text-lg font-normal text-muted">{s.unit}</span>
              </p>
              <p className="text-sm text-muted mt-3 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDY ─── */
function CaseStudy() {
  return (
    <section id="case" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>CASE STUDY</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          <span className="text-accent">프리미엄 확장</span> 사례
        </h2>

        <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-4 items-stretch mb-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-base font-bold mb-4 pb-4 border-b border-border text-primary">BEFORE (초기 장비)</h3>
            <ul className="space-y-2.5">
              {["올리지오 (Oligio)", "인모드 (Inmode)", "슈링크 (Shurink)"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-muted text-sm">
                  <IconCheck className="w-3.5 h-3.5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <div className="hidden lg:flex items-center justify-center text-3xl text-accent/50">
            <IconArrowRight className="w-8 h-8" />
          </div>
          <div className="lg:hidden text-accent/50 flex justify-center py-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>

          <Card className="p-6 sm:p-7 border-accent/20!">
            <h3 className="text-base font-bold mb-4 pb-4 border-b border-border text-primary">AFTER (확장 장비)</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {["울쎄라 (Ultherapy)", "티타늄 (Titanium)", "써마지 (Thermage)", "리팟 (Repot)"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted text-sm">
                  <span className="text-accent text-xs font-bold">+</span>
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-[12px] font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full shrink-0">핵심 결과</span>
          <div>
            <p className="text-[15px] font-bold text-primary">고가 리프팅 중심 병원으로 포지셔닝 전환 성공</p>
            <p className="text-[13px] text-muted mt-0.5">객단가 상승 + 브랜드 인식 상승 + 매출 구조 안정화</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ─── KEY MESSAGE ─── */
function KeyMessage() {
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <SectionLabel><span className="mx-auto">KEY MESSAGE</span></SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-6 mb-6 text-primary">
          우리는 &apos;환자를 늘리는 것&apos;이 아니라
          <br />
          <span className="text-accent">&apos;매출이 올라가는 구조&apos;</span>를 설계합니다
        </h2>
        <div className="w-12 h-[1px] bg-border mx-auto my-8" />
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Card className="p-6 sm:p-7 text-left">
            <div className="mb-3"><IconBox><IconFunnel className="w-5 h-5" /></IconBox></div>
            <p className="text-muted text-sm mb-1">단순 노출이 아닌</p>
            <p className="font-bold text-base text-primary">내원 → 결제 → 재방문<br />퍼널 구축</p>
          </Card>
          <Card className="p-6 sm:p-7 text-left">
            <div className="mb-3"><IconBox><IconChart className="w-5 h-5" /></IconBox></div>
            <p className="text-muted text-sm mb-1">실제 병원 운영의</p>
            <p className="font-bold text-base text-primary">차트·결제 데이터를<br />기반으로 한 설계</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICE ─── */
function Service() {
  const services1 = [
    { icon: <IconClipboard className="w-5 h-5" />, title: "매출형 이벤트 설계", items: ["월별 이벤트 + 게릴라 이벤트", "객단가 & 회전율 동시 설계"] },
    { icon: <IconPencil className="w-5 h-5" />, title: "네이버 블로그 운영", items: ["키워드 기반 콘텐츠 전략", "실제 사례형 (매출 연결 핵심)"] },
    { icon: <IconGlobe className="w-5 h-5" />, title: "지역 커뮤니티 장악", items: ["지역 맘카페, 뷰티 카페 침투", "실제 내원 유도 집중 운영"] },
    { icon: <IconPhone className="w-5 h-5" />, title: "타겟 인스타그램 광고", items: ["핵심 타겟 고객층 맞춤형 노출", "시술별 반응 데이터 기반 최적화"] },
    { icon: <IconMap className="w-5 h-5" />, title: "네이버 플레이스 최적화", items: ["순위 최적화 + 정보 품질 관리", "리뷰·사진 등 신뢰 자산 설계"] },
    { icon: <IconTarget className="w-5 h-5" />, title: "오프라인 전환 설계", items: ["상권 맞춤형 전단지 제작 및 배포", "지역 상권 타겟 오프라인 브랜딩"] },
  ];
  const services2 = [
    { icon: <IconStar className="w-5 h-5" />, title: "네이버 리뷰 관리", items: ["악성 리뷰 대응 및 삭제", "리뷰 구조 설계 (자연 유입 증가)"] },
    { icon: <IconSearch className="w-5 h-5" />, title: "키워드 선점 전략", items: ['"○○동 피부과 리프팅"', "지역 + 시술 검색 점유"] },
    { icon: <IconChat className="w-5 h-5" />, title: "카카오톡 채널 운영", items: ["상담 전환율 상승 구조 설계", "재방문 유도 메시지 운영"] },
    { icon: <IconUser className="w-5 h-5" />, title: "체험단 운영 (월 3명)", items: ["실제 후기 콘텐츠 확보", "블로그 + 카페 확산"] },
  ];

  const renderServiceCard = (s: { icon: React.ReactNode; title: string; items: string[] }, i: number) => (
    <Card key={i} className="p-6">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
        <IconBox>{s.icon}</IconBox>
        <h3 className="font-bold text-[15px] text-primary">{s.title}</h3>
      </div>
      <ul className="space-y-2">
        {s.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-[13px] text-muted">
            <IconCheck className="w-3.5 h-3.5 text-accent mt-[2px] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );

  return (
    <section id="service" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>MARKETING SCOPE</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary">
          마케팅 진행 범위: <span className="text-accent">매출형 채널 운영</span>
        </h2>
        <p className="text-muted text-sm mb-10">핵심은 유입이 아닌 결제 구조 설계입니다</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {services1.map(renderServiceCard)}
        </div>

        <h3 className="text-2xl font-bold mb-6 mt-14 text-primary">
          <span className="text-accent">전환·평판 강화</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services2.map(renderServiceCard)}
        </div>
      </div>
    </section>
  );
}

/* ─── FUNNEL ─── */
function Funnel() {
  const steps = [
    { label: "인지/흥미", sub: "노출" },
    { label: "유입", sub: "문의/예약" },
    { label: "내원", sub: "방문 경험" },
    { label: "상담", sub: "패키지 제안" },
    { label: "결제", sub: "매출 전환" },
    { label: "사후관리", sub: "만족도 제고" },
    { label: "재방문", sub: "리뷰/추천" },
  ];
  const strategies = [
    { icon: <IconMagnet className="w-5 h-5" />, title: "유입 강화", items: ["키워드 콘텐츠 배포", "지역 커뮤니티 장악", "인스타 맞춤 광고"] },
    { icon: <IconChat className="w-5 h-5" />, title: "전환율 향상", items: ["카카오톡 채널 세팅", "고효율 상담 스크립트"] },
    { icon: <IconCreditCard className="w-5 h-5" />, title: "결제 최적화", items: ["객단가 상승 패키지 구성", "전환율 극대화 가격전략"] },
    { icon: <IconRefresh className="w-5 h-5" />, title: "재방문 유도", items: ["자연유입 증가 리뷰 설계", "자동화된 리콜 메시지"] },
  ];

  return (
    <section id="funnel" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>SALES STRUCTURE FUNNEL</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-primary">
          매출 구조 설계: <span className="text-accent">내원→결제→재방문 퍼널</span>
        </h2>

        <div className="relative mb-14 overflow-x-auto pb-2">
          <div className="flex items-start justify-between min-w-[650px] relative">
            <div className="absolute top-[6px] left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/40 to-border" />
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div className="w-3.5 h-3.5 rounded-full bg-accent shrink-0 shadow-sm" />
                <p className="font-semibold text-[13px] mt-2.5 text-primary/80">{s.label}</p>
                <p className="text-[11px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strategies.map((s, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                <IconBox>{s.icon}</IconBox>
                <h3 className="font-bold text-sm text-primary">{s.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-[13px] text-muted">
                    <IconCheck className="w-3.5 h-3.5 text-accent mt-[2px] shrink-0" />
                    {item}
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

/* ─── DIFFERENTIATION ─── */
function Differentiation() {
  const points = [
    { icon: <IconHome className="w-5 h-5" />, title: "실제 병원 운영 경험을 바탕으로 한", desc: "현실적이고 검증된 전략" },
    { icon: <IconChart className="w-5 h-5" />, title: "직감에 의존하지 않는", desc: "차트·결제 데이터 기반 의사결정" },
    { icon: <IconBriefcase className="w-5 h-5" />, title: "단순한 트래픽 노출을 넘어선", desc: "'결제 중심'의 최적화된 설계" },
    { icon: <IconUser className="w-5 h-5" />, title: "마케팅 인력 부담을 줄이는", desc: "1인 의원 최적화 실행 구조" },
  ];
  return (
    <section id="difference" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>DIFFERENTIATION</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          블랑 소사이어티가 <span className="text-accent">다른 이유</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <Card key={i} className="p-6 sm:p-7 flex items-start gap-4">
              <IconBox>{p.icon}</IconBox>
              <div>
                <p className="text-muted text-sm mb-1">{p.title}</p>
                <p className="font-bold text-base text-primary">{p.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONSULTING ─── */
function Consulting() {
  const items = [
    { icon: <IconTarget className="w-5 h-5" />, title: "병원 상권 분석", desc: "유동 / 상주 / 경쟁 밀도 기반 타겟 정의" },
    { icon: <IconSearch className="w-5 h-5" />, title: "경쟁 병원 포지셔닝 분석", desc: "가격·장비·콘텐츠 비교 리포트 제공" },
    { icon: <IconClipboard className="w-5 h-5" />, title: "장비 / 시술 구성 전략", desc: "고가 리프팅축 중심의 효율적인 패키지화" },
    { icon: <IconPencil className="w-5 h-5" />, title: "이벤트 구조 리디자인", desc: "시즌 및 수요 탄력을 반영한 맞춤형 기획" },
  ];
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel>ADDITIONAL CONSULTING</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          단순 광고를 넘어선 <span className="text-accent">추가 컨설팅</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {items.map((item, i) => (
            <Card key={i} className="p-6 flex items-start gap-3.5">
              <IconBox>{item.icon}</IconBox>
              <div>
                <h3 className="font-bold text-[15px] mb-0.5 text-primary">{item.title}</h3>
                <p className="text-[13px] text-muted">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-5 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <p className="text-accent font-bold text-sm">제공 방식</p>
          <span className="hidden sm:inline text-border">|</span>
          <p className="text-muted text-sm">초기 2주 진단 리포트 제공 + 월간 성과 리뷰 미팅 진행</p>
        </Card>
      </div>
    </section>
  );
}

/* ─── CLOSING ─── */
function Closing() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <SectionLabel><span className="mx-auto">CONCLUSION &amp; NEXT STEP</span></SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-6 mb-4 text-primary">
          마케팅의 본질은 결국 하나입니다.
          <br />
          <span className="text-accent">&apos;환자가 실제로 늘어나느냐&apos;</span>
        </h2>
        <p className="text-muted leading-relaxed mt-4 mb-3 text-[15px]">
          블랑 소사이어티는 그 결과를 숫자로 증명해왔습니다.
        </p>
        <p className="text-muted leading-relaxed mb-10 text-[15px]">
          원장님 병원의 상황에 맞는{" "}
          <strong className="text-primary">맞춤 전략과 상권 분석</strong>을 함께 제안드리겠습니다.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all">
          무료 상담 신청하기
          <IconArrowRight />
        </a>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-2xl mx-auto px-5">
        <SectionLabel>CONTACT</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary">
          <span className="text-accent">상담 문의</span>
        </h2>

        <Card className="p-7 sm:p-9">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex-1">
              <p className="text-muted text-sm mb-3">편하게 문의 주시면 빠르게 검토 후 안내드리겠습니다.</p>
              <p className="font-bold text-base text-primary">블랑 소사이어티</p>
              <p className="text-muted text-sm">대표 정혜원 드림</p>
            </div>
            <div className="space-y-3">
              <a href="mailto:theblanc.society@gmail.com" className="flex items-center gap-3 text-primary/70 hover:text-accent transition text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <IconMail className="w-4 h-4 text-accent" />
                </div>
                theblanc.society@gmail.com
              </a>
              <a href="tel:010-8143-7018" className="flex items-center gap-3 text-primary/70 hover:text-accent transition text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <IconPhoneCall className="w-4 h-4 text-accent" />
                </div>
                010-8143-7018
              </a>
            </div>
          </div>

          <form
            className="mt-8 pt-7 border-t border-border space-y-4"
            onSubmit={(e) => { e.preventDefault(); alert("문의가 접수되었습니다. 빠르게 연락드리겠습니다."); }}
          >
            <h3 className="font-bold text-[15px] mb-3 text-primary">상담 신청</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text" placeholder="병원명" required className="w-full px-4 py-3 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 transition placeholder:text-muted/50" />
              <input type="text" placeholder="원장님 성함" required className="w-full px-4 py-3 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 transition placeholder:text-muted/50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="tel" placeholder="연락처" required className="w-full px-4 py-3 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 transition placeholder:text-muted/50" />
              <input type="text" placeholder="병원 위치 (시/구)" className="w-full px-4 py-3 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 transition placeholder:text-muted/50" />
            </div>
            <textarea placeholder="궁금하신 내용이나 현재 고민을 자유롭게 적어주세요" rows={4} className="w-full px-4 py-3 bg-bg-alt border border-border rounded-xl text-sm text-primary focus:outline-none focus:border-accent/50 transition placeholder:text-muted/50 resize-none" />
            <button type="submit" className="w-full py-3.5 bg-accent text-white font-bold text-sm rounded-full hover:bg-accent-light transition">
              상담 신청하기
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Image src="/images/logo-text-white-cropped.png" alt="BLANC SOCIETY" width={1523} height={188} className="invert opacity-60 h-5 w-auto" />
        <p className="text-[11px] text-muted/50">
          &copy; {new Date().getFullYear()} BLANC SOCIETY. All rights reserved.
        </p>
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
        <KeyMessage />
        <Service />
        <Funnel />
        <Differentiation />
        <Consulting />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
