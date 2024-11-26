const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const labels = form.querySelectorAll('label');
labels.forEach(label => {
  label.classList.add('form-label');
});
const input = form.querySelector('input');
input.classList.add('form-input');
const textarea = form.querySelector('textarea');
textarea.classList.add('form-textarea');
const button = form.querySelector('button');
button.classList.add('form-button');

function dataFromStorage() {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      errorMessage.textContent = 'Fill please all fields';
      textarea.insertAdjacentElement('afterend', errorMessage);
    }
    return;
  }
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
  console.log('Form data: ', formData);
  formData = { email: '', message: '' };
  localStorage.removeItem(storageKey);
  form.reset();
});
dataFromStorage();
