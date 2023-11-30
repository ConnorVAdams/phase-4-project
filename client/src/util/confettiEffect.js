import confetti from 'canvas-confetti'

const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 100000
    });
  };

export default triggerConfetti