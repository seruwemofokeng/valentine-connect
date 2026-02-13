import { useEffect, useState } from "react";

const HEART_EMOJIS = ["❤️", "💕", "💗", "💖", "💘", "💝", "🌹"];

interface Heart {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = ({ count = 12 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            animationIterationCount: "infinite",
          }}
        >
          {h.emoji}
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
