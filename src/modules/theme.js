const themeEvent = () => {
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
};

export default themeEvent;
