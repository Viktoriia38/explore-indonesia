(() => {
  const mobileMenuContacts = document.querySelector(
    '.js-menu-container-contacts'
  );
  const openMenuBtn = document.querySelector('.js-open-menu-contacts');
  const closeMenuBtn = document.querySelector('.js-close-menu-contacts');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenuContacts.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.addEventListener('change', e => {
    if (!e) return;
    mobileMenuContacts.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
