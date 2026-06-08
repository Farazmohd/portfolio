import React, { useEffect, useRef, useState } from 'react';

export default function HeroBackground() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [targetMouse, setTargetMouse] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate offset from center (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      setTargetMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth mouse interpolation (lerp)
  useEffect(() => {
    let animationFrameId;
    const updateParallax = () => {
      setMouse((prev) => ({
        x: prev.x + (targetMouse.x - prev.x) * 0.05,
        y: prev.y + (targetMouse.y - prev.y) * 0.05,
      }));
      animationFrameId = requestAnimationFrame(updateParallax);
    };
    updateParallax();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetMouse]);

  // Floating particles canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles (glowing code/UI dots)
    const particleCount = 40;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.6 - 0.1, // Rising up
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6', // Blue or Purple neon
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Draw particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset particle to bottom if it goes off screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          p.speedX = -p.speedX;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 bg-[#020617] overflow-hidden"
    >
      {/* Background Media Container with Parallax Translation */}
      <div 
        className="absolute inset-[-20px] z-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mouse.x * -30}px, ${mouse.y * -30}px) scale(1.05)`,
        }}
      >
        {/* Loop Background Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-50"
          src="/hero-bg.mp4"
          poster="/hero-bg-poster.png"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Floating Interactive Particles Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
        style={{
          transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)`,
        }}
      />

      {/* Premium Cinematic Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-70 z-20" />
      
      {/* Soft color highlights for neon coding vibe */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-10" />
    </div>
  );
}
