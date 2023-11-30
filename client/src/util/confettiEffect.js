import confetti from 'canvas-confetti'

const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

export default triggerConfetti