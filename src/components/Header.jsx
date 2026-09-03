"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/", label: "Top page" },
  { href: "/to-everyone", label: "To everyone" },
];

const weekdays = [
  "Sun.",
  "Mon.",
  "Tue.",
  "Wed.",
  "Thu.",
  "Fri.",
  "Sat.",
];

function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weekday = weekdays[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}／${month}／${day}（${weekday}）${hours}:${minutes}:${seconds}`;
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(formatDateTime(new Date()));
    };

    updateClock();

    const timerId = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <header className={`header${pathname === "/" ? " header--top-page" : " header--to-everyone"}`}>
      <button
        className={`hamburger${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        aria-controls="global-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="global-navigation"
        className={`header__nav${isOpen ? " is-open" : ""}`}
        aria-label="メインメニュー"
      >
        <ul className="header__menu">
          {menuItems.map((item) => (
            <li className="header__menu-item" key={item.href}>
              <Link
                className="header__menu-link"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h4 className="header__clock">{currentTime}</h4>
    </header>
  );
}
