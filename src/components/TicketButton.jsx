import { useEffect, useRef } from "react";

export default function TicketButton({ href, label }) {
  const ref = useRef(null);

  // Magnetic pull toward the cursor when it gets close
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < Math.max(r.width, 160);
      el.style.setProperty("--tx", near ? `${dx * 0.25}px` : "0px");
      el.style.setProperty("--ty", near ? `${dy * 0.35}px` : "0px");
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="cta-wrap">
      <a ref={ref} className="cta" href={href} target="_blank" rel="noopener noreferrer">
        <span className="dot" aria-hidden="true" />
        {label}
        <span className="arrow" aria-hidden="true">→</span>
      </a>
    </div>
  );
}
