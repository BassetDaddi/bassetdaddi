"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "./NavLinks";

// "Menu" opens a full-screen navy overlay built on the native <dialog>: the
// browser supplies the focus trap, Esc, and makes the page behind inert.
// "Close" replaces "Menu". The overlay fades and rises 8px (CSS in
// globals.css); nothing else moves.
export function MobileMenu({
  items,
  labels,
  brand,
  children,
  className,
}: {
  items: NavItem[];
  labels: { menu: string; close: string };
  brand: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const id = useId();
  const pathname = usePathname();

  function show() {
    dialogRef.current?.showModal();
    setOpen(true);
  }

  function hide() {
    dialogRef.current?.close();
  }

  // Close whenever the route changes (a link inside the menu was followed).
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  // Keep body scroll locked while open, and mirror the dialog's own state
  // (Esc closes it natively without going through hide()).
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={show}
        className="t-ui text-fg"
      >
        {labels.menu}
      </button>

      <dialog
        ref={dialogRef}
        id={id}
        className="menu"
        data-surface="navy"
        onClose={() => setOpen(false)}
      >
        <div className="flex h-full flex-col px-5 pb-8 pt-0 md:px-10">
          <div className="flex h-16 items-center justify-between">
            {brand}
            <button type="button" onClick={hide} className="t-ui text-fg">
              {labels.close}
            </button>
          </div>

          <nav className="mt-10 flex flex-col border-t border-line">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-5 t-h2 no-underline text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={cn("mt-auto flex flex-col gap-6 pt-10")}>{children}</div>
        </div>
      </dialog>
    </div>
  );
}
