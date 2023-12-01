import confetti from 'canvas-confetti';

const triggerConfetti = () => {
    confetti({
        particleCount: 500,
        spread: 360, // Increased spread to cover the entire screen
        origin: { y: 0 }, // Start from the top of the viewport
        zIndex: 100000
    });
};

export default triggerConfetti;