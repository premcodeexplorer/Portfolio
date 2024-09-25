const cursorBall = document.querySelector('.cursor-ball');

document.addEventListener('mousemove', (e) => {
  cursorBall.style.top = e.clientY + 'px';
  cursorBall.style.left = e.clientX + 'px';
});

document.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A' || e.target.closest('.project') || e.target.closest('.profile-item') || e.target.closest('.contact-item') || e.target.closest('.certificate-item')) {
    cursorBall.style.width = '70px';
    cursorBall.style.height = '70px';
    cursorBall.style.backgroundColor = '#404040';  // Dark gray
  } else {
    cursorBall.style.width = '50px';
    cursorBall.style.height = '50px';
    cursorBall.style.backgroundColor = '#d3d3d3';  // Light gray
  }
});