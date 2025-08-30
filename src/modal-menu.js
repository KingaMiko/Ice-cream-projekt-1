(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-menu-close]'),
    modal: document.querySelector('[data-modal-menu]'),
    menuLinks: document.querySelectorAll('.modal-menu__link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.add('is-hidden');
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
