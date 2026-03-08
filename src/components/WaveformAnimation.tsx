import { motion } from "framer-motion";

const WaveformAnimation = () => {
  const bars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="flex items-end justify-center gap-[3px] h-12 opacity-60">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-primary"
          animate={{
            height: [8, Math.random() * 40 + 8, 12, Math.random() * 32 + 8, 8],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
};

export default WaveformAnimation;
