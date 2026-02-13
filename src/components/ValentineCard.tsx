import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_MESSAGE = encodeURIComponent("I said YES! 💕 I'll be your Valentine! ❤️");

const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);
  const noRef = useRef<HTMLButtonElement>(null);

  const handleNo = () => {
    setNoScale((s) => Math.max(s - 0.15, 0.3));
    setYesScale((s) => Math.min(s + 0.2, 2.5));
  };

  const handleYes = () => {
    setAccepted(true);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/27677566434?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="relative z-10 mx-4 w-full max-w-md rounded-3xl bg-card p-8 shadow-2xl border border-border"
    >
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="h-16 w-16 fill-primary text-primary" />
            </motion.div>

            <h1 className="text-3xl font-bold text-foreground leading-tight md:text-4xl">
              Will you be my
              <br />
              <span className="text-primary italic">Valentine?</span> 💌
            </h1>

            <p className="text-muted-foreground text-base">
              Every love story is beautiful, but ours could be my favorite...
            </p>

            <div className="flex items-center gap-4 mt-2">
              <motion.div style={{ scale: yesScale }}>
                <Button
                  onClick={handleYes}
                  size="lg"
                  className="rounded-full px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                >
                  Yes! 💖
                </Button>
              </motion.div>

              <motion.div style={{ scale: noScale }}>
                <Button
                  ref={noRef}
                  onClick={handleNo}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-lg font-semibold border-primary/30 text-muted-foreground hover:bg-secondary"
                >
                  No 😢
                </Button>
              </motion.div>
            </div>

            {noScale < 0.7 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground italic"
              >
                Are you sure? Look how big that Yes button is... 👀
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl"
            >
              🥰
            </motion.div>

            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Yaaay! <span className="text-primary">💕</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              You just made my heart skip a beat!
              <br />
              Now let me know on WhatsApp 💬
            </p>

            <Button
              onClick={openWhatsApp}
              size="lg"
              className="rounded-full px-8 text-lg font-semibold bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground shadow-lg gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Text me on WhatsApp
            </Button>

            <div className="flex gap-2 text-2xl">
              {["💖", "💗", "💕", "💘", "💝"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ValentineCard;
