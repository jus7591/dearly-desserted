var name = document.getElementById('name');
var tele = document.querySelector('#telephone');
var email = document.getElementById('email');

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

tele.addEventListener('keypress', function (e) {
  var phoneno = /^\d{10}$/;
  if (tele.value.match(phoneno)) {
    alert('message');
  }
  if (
    e.key != 'Backspace' &&
    (tele.value.length === 3 || tele.value.length === 7)
  ) {
    tele.value += '-';
  }
});

function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-custom-purple');
    } else {
      navbar.classList.remove('bg-custom-purple');
    }
  });
}

function submitForm() {
  var params = {
    name: document.getElementById('name').value,
    telephone: document.getElementById('telephone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_3h1k4ux';
  const templateID = 'template_zpat8ae';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('telephone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Thank you for sending a message!');
    })
    .catch((err) => console.log(err));
}

document.addEventListener('DOMContentLoaded', userScroll);
