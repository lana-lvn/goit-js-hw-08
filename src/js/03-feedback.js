import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500))

fillTextarea();

function onTextInput(evt) { 

    
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) { 
    evt.preventDefault();
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


function fillTextarea() { 
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) { 
        
    const parsedData = JSON.parse(savedData);

    refs.textarea.value = parsedData.message;
    refs.form.email.value = parsedData.email;
    };
};