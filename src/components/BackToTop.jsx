"use client";

import Image from "next/image";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
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
    </button>
  );
}
