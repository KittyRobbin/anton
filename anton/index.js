// Simulate loading progress
let progress = 0;
const progressBar = document.getElementById('loading-bar');
const hearts = document.querySelectorAll('.heart');

const simulateLoading = () => {
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      // Hide hearts after loading is complete
      hearts.forEach(heart => heart.style.display = 'none');
    }
  }, 500);
};

simulateLoading();

