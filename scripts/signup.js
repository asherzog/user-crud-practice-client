$(() => {
  $('form').submit((event) => {
    event.preventDefault();
    const user = getUserFromForm();
    user['name'] = $('#name').val();
    user['age'] = $('#age').val();
    console.log(user);
    signup(user)
    .then(result => {
      window.location = `/user.html?id=${result.id}`
    }).catch(error => {
      console.error(error);
      showErrorMessage(error.responseJSON.message);
    });
  });
});

function signup(user) {
  return $.post(`${AUTH_URL}/signup`, user);

}
