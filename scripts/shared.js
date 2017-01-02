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
    return 'http://localhost:3000';
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
