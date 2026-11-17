import { useEffect } from "react";
import Background from "./components/Background.jsx";
import Name from "./components/Name.jsx";
import Sticker from "./components/Sticker.jsx";
import TicketButton from "./components/TicketButton.jsx";
import Tapes from "./components/Tapes.jsx";
import { NAME_LINES, STICKER_TEXT, TAPES, TICKETS_LABEL, TICKETS_URL } from "./config.js";

export default function App() {
  // Feed the pointer position to CSS for the cursor glow
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <Background />
      <main>
        <div className="stack">
          <Name lines={NAME_LINES}>
            <Sticker text={STICKER_TEXT} />
          </Name>
          <TicketButton href={TICKETS_URL} label={TICKETS_LABEL} />
        </div>
      </main>
      <Tapes phrases={TAPES} />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
