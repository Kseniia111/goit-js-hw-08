import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (!formLoad) {
      return;
    }

    data = formLoad;
    form.email.value = data.email || '';
    form.message.value = data.message || '';
  } catch (error) {
    console.error('Error.message ', error.message);
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}

    //Object.entries(dataForm).forEach(([name, value]) => {
      //form.elements[name].value = value;

      //{
//  if (dataForm) {
//    email.value = dataForm.email || '';
//    message.value = dataForm.message || '';
//  }
//}