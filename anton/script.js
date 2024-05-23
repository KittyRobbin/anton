const progressBar = document.querySelector('.progress-bar');
const heartsContainer = document.querySelector('.hearts');
const actionButton = document.getElementById('action-button');

const createHeart = (left) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  // Adjust the left position slightly to align with the progress bar
  heart.style.left = `calc(${left}% - 10px)`; // Adjust -10px as needed for better alignment
  heartsContainer.appendChild(heart);
};

const interval = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 0.1);
  progressBar.setAttribute('data-label', Math.min(width + 0.1, 100).toFixed(1) + '%');
  
  // Add hearts at intervals, e.g., every 10%
  if (width % 10 < 0.1) {
    createHeart(width);
  }

  // Check if loading is complete
  if (width >= 100) {
    clearInterval(interval);
    actionButton.style.display = 'block'; // Show the button
  }
}, 50);
