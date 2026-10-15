document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-theme]').forEach(other => {
      const selected = other === button;
      other.classList.toggle('selected', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#demo-preview').dataset.color = button.dataset.theme;
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
