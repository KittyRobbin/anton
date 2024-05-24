const progressBar = document.querySelector('.progress-bar');
const heartsContainer = document.querySelector('.hearts');
const actionButton = document.getElementById('action-button');

const createHeart = (left) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = `calc(${left}% - 10px)`;
  heartsContainer.appendChild(heart);
};

const interval = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 0.1);
  progressBar.setAttribute('data-label', Math.min(width + 0.1, 100).toFixed(1) + '%');
  
  if (Math.abs(width % 10 - 0.1) < 0.1) {
    createHeart(width);
  }

  if (width >= 100) {
    clearInterval(interval);
    actionButton.style.display = 'block';
  }
}, 50);

actionButton.addEventListener('click', () => {
  window.location.href = "./secondindex.html";
});
