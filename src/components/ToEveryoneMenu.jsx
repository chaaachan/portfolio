"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ToEveryoneMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <div className="to-everyone-mobile-menu">
      <button
        className={`to-everyone-hamburger${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`to-everyone-mobile-nav${isOpen ? " is-open" : ""}`} aria-label="モバイルメニュー">
        <Link href="/" onClick={() => setIsOpen(false)}>Top page</Link>
        <Link href="/to-everyone" onClick={() => setIsOpen(false)}>To everyone</Link>
      </nav>
    </div>,
    document.body,
  );
}
