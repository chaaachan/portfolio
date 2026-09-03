"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  return createPortal(
    <button
      className="back-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label="ページのトップへ戻る"
    >
      <Image
        src="/img/common/top.png"
        alt="トップへ戻る"
        width={76}
        height={76}
        unoptimized
      />
    </button>,
    document.body,
  );
}
