$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = getHostUrl();
const AUTH_URL = `${API_URL}/auth`;


function getHostUrl() {
  if (window.location.host.indexOf('localhost') != -1) {
    return 'http://localhost:3000';window.location = `/user.html?id=${result.id}`;
  } else {
    return 'herokuUrl';
  }
}


function getUserFromForm() {
  const email = $('#email').val();
  const password = $('#password').val();
  const user = {
    email,
    password
  };
  return user;
}

function showErrorMessage(message) {
  const $errorMessage = $('#errorMessage');
  $errorMessage.text(message);
  $errorMessage.show();
}

function setIdRedirect(result) {
  localStorage.user_id = result.id;
  window.location = `/user.html?id=${result.id}`;
}

function redirectIfLoggedIn() {
  if (localStorage.user_id) {
    window.location = `/user.html?id=${localStorage.user_id}`;
  }
}

function logOut() {
  localStorage.removeItem('user_id');
  $.get(`${AUTH_URL}/logout`)
    .then(result => {
      window.location = '/login';
    });
}
