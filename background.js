(function() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let particles = [];

  const palette = ['#7ef1ff', '#5de7c6', '#7b8dff', '#5affbf'];
  const particleCount = 35;
  const maxRadius = 3.8;

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = Array.from({ length: particleCount }, createParticle);
  }

  function createParticle() {
    return {
      x: random(0, width),
      y: random(0, height),
      radius: random(0.8, maxRadius),
      speedX: random(-0.25, 0.25),
      speedY: random(-0.4, 0.4),
      drift: random(0.02, 0.08),
      alpha: random(0.18, 0.55),
      color: palette[Math.floor(Math.random() * palette.length)],
      pulse: random(0, Math.PI * 2),
      phase: random(0.003, 0.008)
    };
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      particle.x += particle.speedX + Math.sin(particle.pulse) * particle.drift;
      particle.y += particle.speedY + Math.cos(particle.pulse) * particle.drift;
      particle.pulse += particle.phase;

      if (particle.x < -50) particle.x = width + 50;
      if (particle.x > width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = height + 50;
      if (particle.y > height + 50) particle.y = -50;

      const glow = particle.alpha * 0.9;
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = glow;
      ctx.shadowBlur = 22;
      ctx.shadowColor = particle.color;
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = 'rgba(126, 241, 255,' + ((120 - dist) / 220 * 0.18) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  function init() {
    if (!ctx) return;
    resize();
    window.addEventListener('resize', resize);
    drawParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
