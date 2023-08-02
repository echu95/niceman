form = document.querySelector('.form');;
firstname = document.getElementById('firstname');
lastname = document.getElementById('lastname');
email= document.getElementById('email');
call = document.getElementsByName('phone');
gende = document.getElementsByName('gender');
age = document.getElementById('age');
password = document.getElementById('passWrd')
text = document.getElementById('subject')
btn = document.getElementById('btn');
firstNameErr = document.getElementById('firstNameErr');
passwdErr = document.getElementById('lastNameErr');
emailErr = document.getElementById('emailErr');
gendeErr = document.getElementById('genderErr');
ageErr = document.getElementById('ageErr');
phoneErr = document.getElementById('phoneErr');
passwdErr = document.getElementById('passwrdErr')
textErr = document.getElementById('subjectErr');
texted = document.getElementById('summaryDiv');


let registrations = [];
btn.addEventListener('click', (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  if (firstname.value == '' || firstname.value == undefined) {
    firstNameErr.innerHTML = 'first name is required';
    firstNameErr.style.color = 'black';
    firstNameErr.style.fontStyle = 'italic';
   
  }
  if (lastname.value == '' || lastname.value == undefined) {
    lastNameErr.innerHTML = 'last name is required';
    lastNameErr.style.color = 'black';
    lastNameErr.style.fontStyle = 'italic';
  
  }
  if (email.value == '' || email.value == undefined) {
    emailErr.innerHTML = 'email is required';
    emailErr.style.color = 'black';
    emailErr.style.fontStyle = 'italic';
   
  }
  if (age.value == '') {
    ageErr.innerHTML = 'age is required';
    ageErr.style.color = 'black';
    ageErr.style.fontStyle = 'italic';
    
  }
  if (phone.value == '') {
    phoneErr.innerHTML = 'phone number is required';
    phoneErr.style.color = 'black';
    phoneErr.style.fontStyle = 'italic';
    
  }
  if (passWrd.value == '') {
    passwrdErr.innerHTML = 'password is required';
    passwrdErr.style.color = 'black';
    passwrdErr.style.fontStyle = 'italic';
    
  }
  if (gender.value == '' ) {
    genderErr.innerHTML = 'gender is required';
    genderErr.style.color = 'black';
    genderErr.style.fontStyle = 'italic';
 
  }

  if (text.value == '' ) {
    textErr.innerHTML = 'text is required';
    textErr.style.color = 'black';
    textErr.style.fontStyle = 'italic'; 
  }

 
  const formData = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    age: age.value,
    phone: phone.value,
    gender: gender.value,
    password: passWrd.value,
    text: text.value,
  };


  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data has been saved to local storage!');


}

function handleSubmit(e) {
  e.preventDefault();
  validation();

  const formData = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    age: age.value,
    phone: phone.value,
    gender: gender.value,
    password: password.value,
    text: text.value,
  };

  
  registrations.push(formData);

  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data has been saved to local storage!');
}

form.addEventListener('submit', handleSubmit);

const storedRegistrations = localStorage.getItem('registrations');
if (storedRegistrations) {
  registrations = JSON.parse(storedRegistrations);
}




