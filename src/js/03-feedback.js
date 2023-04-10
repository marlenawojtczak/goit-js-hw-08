import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
const STORAGE_KEY = 'feedback-form-state';

const saveToStorage = () => {
  const state = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

email.addEventListener(`input`, throttle(saveToStorage, 500));
message.addEventListener(`input`, throttle(saveToStorage, 500));

const fillStorage = () => {
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (state) {
    email.value = state.email;
    message.value = state.message;
  }
};
fillStorage();

form.addEventListener(`submit`, event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  email.value = ``;
  message.value = ``;
});
