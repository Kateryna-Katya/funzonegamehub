document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34 30L10 30" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
  <path d="M34 22L10 22" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
  <path d="M34 14L10 14" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
</svg>
    `;
  
    const crossIcon = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34 30L10 30" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
  <path d="M34 22L10 22" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
  <path d="M34 14L10 14" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });