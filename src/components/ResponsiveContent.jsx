"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const DESKTOP_WIDTH = 1920;
const RESPONSIVE_MAX_WIDTH = 1024;

function ScaledPage({ children, endAtFooter }) {
  const shellRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const shell = shellRef.current;
    const canvas = canvasRef.current;
    if (!shell || !canvas) return undefined;

    let frameId;

    const updateScale = () => {
      if (window.innerWidth > RESPONSIVE_MAX_WIDTH) {
        canvas.style.removeProperty("zoom");
        canvas.style.removeProperty("width");
        canvas.style.removeProperty("transform");
        canvas.style.removeProperty("transform-origin");
        canvas.style.removeProperty("margin-bottom");
        shell.style.removeProperty("height");
        return;
      }

      const availableWidth = window.visualViewport?.width ?? window.innerWidth;
      const scale = availableWidth / DESKTOP_WIDTH;

      canvas.style.setProperty("width", `${DESKTOP_WIDTH}px`);
      canvas.style.removeProperty("zoom");
      canvas.style.setProperty("transform", `scale(${scale})`);
      canvas.style.setProperty("transform-origin", "top left");
      canvas.style.removeProperty("margin-bottom");

      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        if (endAtFooter) {
          const footer = canvas.querySelector(".footer");
          const contentEnd = footer
            ? footer.offsetTop + footer.offsetHeight
            : canvas.scrollHeight;
          shell.style.setProperty("height", `${Math.ceil(contentEnd * scale)}px`);
          return;
        }

        // To everyone：縮小後に実際に表示されているフッター下端を
        // 直接測り、その位置でページを終わらせる。
        const footer = canvas.querySelector(".footer");
        const canvasRect = canvas.getBoundingClientRect();
        const footerRect = footer?.getBoundingClientRect();
        let visualHeight = footerRect
          ? footerRect.bottom - canvasRect.top
          : canvasRect.height;

        if (footer) {
          footer.style.removeProperty("margin-top");
          const cleanFooterRect = footer.getBoundingClientRect();
          visualHeight = cleanFooterRect.bottom - canvasRect.top;
          const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
          const missingHeight = Math.max(0, viewportHeight - visualHeight);

          if (missingHeight > 0) {
            footer.style.setProperty("margin-top", `${missingHeight / scale}px`);
            visualHeight += missingHeight;
          }
        }

        shell.style.setProperty("height", `${Math.ceil(visualHeight)}px`);
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, [endAtFooter]);

  return (
    <div className="responsive-shell" ref={shellRef}>
      <div className="responsive-canvas" ref={canvasRef}>
        {children}
      </div>
    </div>
  );
}

export default function ResponsiveContent({ children }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <ScaledPage endAtFooter>{children}</ScaledPage>;
  }

  return <ScaledPage endAtFooter={false}>{children}</ScaledPage>;
}
