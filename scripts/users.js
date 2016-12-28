const API_URL = 'http://localhost:3000'

$(document).ready(() => {
  const query = parseQueryString(window.location.search);

  $.get(`${API_URL}/users/${query.id}`, data => {
    $('.user').append(`<h1>${data.name}</h1>`);
  });

});


function parseQueryString(queryString) {
  let answer = {};
  let splitStr = queryString.split('&');
  splitStr.forEach((str) => {
    let pair = str.replace('?', '');
    pair = pair.split('=');
    answer[pair[0]] = pair[1];
  });
  return answer;
}
