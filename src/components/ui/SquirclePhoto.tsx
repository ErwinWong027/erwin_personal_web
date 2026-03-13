"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface SquirclePhotoProps {
  src: string;
  alt: string;
  size?: number;
  variant?: "squircle" | "circle";
}

export function SquirclePhoto({ src, alt, size = 320, variant = "squircle" }: SquirclePhotoProps) {
  const borderRadius = variant === "circle" ? "50%" : "48px";
  const [dominantColor, setDominantColor] = useState("rgba(6, 182, 212, 0.4)");
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const glareX = useTransform(rotateY, [-15, 15], [-50, 50]);
  const glareY = useTransform(rotateX, [-15, 15], [50, -50]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const sampleSize = 50;
      canvas.width = sampleSize;
      canvas.height = sampleSize;

      ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

      const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
      const data = imageData.data;

      let r = 0,
        g = 0,
        b = 0,
        count = 0;

      for (let i = 0; i < data.length; i += 4) {
        const pixelR = data[i];
        const pixelG = data[i + 1];
        const pixelB = data[i + 2];
        const brightness = (pixelR + pixelG + pixelB) / 3;

        if (brightness > 30 && brightness < 220) {
          r += pixelR;
          g += pixelG;
          b += pixelB;
          count++;
        }
      }

      if (count > 0) {
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        setDominantColor(`rgba(${r}, ${g}, ${b}, 0.35)`);
      }

      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotate = 12;
    const newRotateY = (mouseX / (rect.width / 2)) * maxRotate;
    const newRotateX = -(mouseY / (rect.height / 2)) * maxRotate;

    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative cursor-pointer"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        <div
          className="absolute inset-0 blur-2xl transition-all duration-500"
          style={{
            background: dominantColor,
            borderRadius,
            transform: "translateY(20px) scale(0.9)",
            opacity: isLoaded ? 1 : 0,
          }}
        />
        <div
          className="absolute inset-0 blur-xl transition-all duration-500"
          style={{
            background: dominantColor,
            borderRadius,
            transform: "translateY(12px) scale(0.95)",
            opacity: isLoaded ? 0.6 : 0,
          }}
        />

        <div
          className="relative overflow-hidden border border-white/20 dark:border-white/10"
          style={{
            borderRadius,
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.1) inset,
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 12px 24px -8px rgba(0, 0, 0, 0.15)
            `,
          }}
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            style={{ aspectRatio: "1/1" }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius,
              background: `linear-gradient(
                ${glareX}deg,
                ${glareY}deg,
                transparent 40%,
                rgba(255, 255, 255, 0.15) 50%,
                transparent 60%
              )`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
