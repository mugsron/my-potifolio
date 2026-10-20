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

// Set the real endpoint in index.html; keep the form inactive until configured.
const contactForm = document.querySelector('#contact-form');
if (contactForm && /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(contactForm.getAttribute('action'))) {
  contactForm.querySelector('fieldset').disabled = false;
  document.querySelector('#contact-form-note').textContent =
    'Send your enquiry here. Formspree will show the result after you submit.';
}
