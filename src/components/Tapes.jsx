function Tape({ phrase, className }) {
  // 16 copies = two identical halves, so the -50% scroll loops seamlessly
  const items = Array.from({ length: 16 }, (_, i) => <span key={i}>{phrase}</span>);
  return (
    <div className={`tape ${className}`}>
      <div className="track">{items}</div>
    </div>
  );
}

export default function Tapes({ phrases }) {
  return (
    <div className="tapes" aria-hidden="true">
      {phrases.map((phrase, i) => (
        <Tape phrase={phrase} className={`t${i + 1}`} key={i} />
      ))}
    </div>
  );
}
