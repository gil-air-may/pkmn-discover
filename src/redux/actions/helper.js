export const getHighScore = () => localStorage.getItem("highScore") || 0;
export const setHighScore = async (score) =>
  score > getHighScore() && localStorage.setItem("highScore", score);
