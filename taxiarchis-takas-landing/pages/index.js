
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Home() {
  useEffect(() => {
    document.title = "Taxiarchis Takas";
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-indigo-900 to-black text-white">
      {/* 3D Stars Background */}
      <Canvas className="absolute inset-0 z-0">
        <Stars
          radius={100}
          depth={50}
          count={8000}
          factor={6}
          saturation={0.8}
          fade
          speed={2}
        />
      </Canvas>

      {/* Centered Name Text with Glow */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >
          Taxiarchis Takas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-6 text-xl md:text-2xl text-indigo-200"
        >
          Welcome to my galaxy ✨
        </motion.p>
      </section>
    </main>
  );
}
