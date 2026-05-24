"use client";

import { useEffect, useRef } from "react";

interface BackgroundParticlesProps {
  theme: "dark" | "light";
}

export default function BackgroundParticles({ theme }: BackgroundParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    let numberOfParticles = 80;

    const adjustParticleCount = () => {
      if (window.innerWidth < 768) {
        numberOfParticles = 30;
      } else if (window.innerWidth < 1200) {
        numberOfParticles = 60;
      } else {
        numberOfParticles = 85;
      }
    };

    const initCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      adjustParticleCount();
    };

    initCanvasSize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        // Extremely slow drift for that premium Apple/Linear feel
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.6;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Soft blue/cyan nodes in dark mode, darker slate in light mode
        ctx.fillStyle = theme === "dark" ? "rgba(0, 242, 254, 0.3)" : "rgba(15, 23, 42, 0.15)";
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
    }

    const createParticles = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    createParticles();

    const connectParticles = () => {
      const maxDistance = 140;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * (theme === "dark" ? 0.08 : 0.04);
            ctx.strokeStyle = theme === "dark" 
              ? `rgba(79, 172, 254, ${opacity})` 
              : `rgba(15, 23, 42, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initCanvasSize();
        createParticles();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500"
      style={{ opacity: theme === "dark" ? 0.95 : 0.6 }}
    />
  );
}
