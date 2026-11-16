import { useState } from "react";

function Letter({ char, index }) {
  // bump the key to restart the "boing" animation on every hover
  const [boing, setBoing] = useState(0);
  return (
    <span
      key={boing}
      className={boing ? "ch boing" : "ch"}
      style={{ "--i": index }}
      onPointerEnter={() => setBoing((b) => b + 1)}
    >
      {char}
    </span>
  );
}

export default function Name({ lines, children }) {
  let i = 0;
  return (
    <h1 aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span className="line" data-text={line} aria-hidden="true" key={line}>
          {[...line].map((char) => {
            const index = i++;
            return <Letter char={char} index={index} key={index} />;
          })}
        </span>
      ))}
      {children}
    </h1>
  );
}
