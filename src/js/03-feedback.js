import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let data = {};

loadForm();

form.addEventListener('input', throttle(onSaveFormInput, 500));

form.addEventListener('submit', onFormSubmit);

function onSaveFormInput(event) {
  data = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

  data[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Please fill in all the fields!');
    return;
  }

  event.target.reset();
  console.log(data);
  localStorage.removeItem(LOCAL_KEY);
}

function loadForm() {
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

//let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
//const { email, message } = form.elements;
//reloadPage();

//function onInputData(e) {
// dataForm = { email: email.value, message: message.value };
//  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
//}

//function reloadPage() {
 // if (dataForm) {
  //  email.value = dataForm.email || '';
   // message.value = dataForm.message || '';
  //}
//}

//function onFormSubmit(e) {
//  e.preventDefault();
 // console.log({ email: email.value, message: message.value });

 // if (email.value === '' || message.value === '') {
 //   return alert('Please fill in all the fields!');
 // }

 // localStorage.removeItem(LOCAL_KEY);
 // e.currentTarget.reset();
//  dataForm = {};
//}

    //Object.entries(dataForm).forEach(([name, value]) => {
      //form.elements[name].value = value;

      //{
//  if (dataForm) {
//    email.value = dataForm.email || '';
//    message.value = dataForm.message || '';
//  }
//}

 //try {
  //  let formLoad = JSON.parse(localStorage.getItem(LOCAL_KEY));
   // if (!formLoad) {
  //    return;
  //  }

  //  data = formLoad;
   // form.email.value = data.email || '';
   // form.message.value = data.message || '';
 // } catch (error) {
//    console.error('Error.message ', error.message);
//  }