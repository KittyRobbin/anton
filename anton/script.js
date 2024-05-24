const progressBar = document.querySelector('.progress-bar');
const heartsContainer = document.querySelector('.hearts');
const actionButton = document.getElementById('action-button');

// Function to create a heart
const createHeart = (left) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = `calc(${left}% - 10px)`; // Adjust -10px as needed for better alignment
  heartsContainer.appendChild(heart);
};

// Interval function to update the progress bar and create hearts
const interval = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 0.1);
  progressBar.setAttribute('data-label', Math.min(width + 0.1, 100).toFixed(1) + '%');
  
  // Add hearts at intervals, e.g., every 10%
  if (Math.abs(width % 10 - 0.1) < 0.1) {
    createHeart(width);
  }

  // Check if loading is complete
  if (width >= 100) {
    clearInterval(interval);
    actionButton.style.display = 'block'; // Show the button
  }
}, 50);

// Event listener for the button click to handle redirection
actionButton.addEventListener('click', () => {
  window.location.href = "./secondindex.html";
});
