const playFireworks = () => {
  // Create multiple sounds for a richer effect
  const sounds = [
    new Audio('/sounds/firework1.mp3'),
    new Audio('/sounds/firework2.mp3'),
    new Audio('/sounds/firework3.mp3')
  ];

  // Play sounds with slight delays
  sounds.forEach((sound, index) => {
    setTimeout(() => {
      sound.volume = 0.3; // Not too loud
      sound.play().catch(err => console.log('Sound play failed:', err));
    }, index * 300); // Stagger the sounds
  });
};

export { playFireworks };