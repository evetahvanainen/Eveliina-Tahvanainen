'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-notice-dismissed';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== 'true') {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore storage failures
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-text/10 bg-white/95 backdrop-blur-[2px]"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <p className="text-[0.7rem] leading-relaxed tracking-[0.12em] text-text/70 md:text-[0.75rem]">
          We use cookies to run this shop and understand how it&apos;s used.{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 transition hover:text-text"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 text-[0.7rem] tracking-[0.18em] text-text/80 transition hover:text-text"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
