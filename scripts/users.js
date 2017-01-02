$(document).ready(() => {
  const query = parseQueryString(window.location.search);

  getUserInfo(query.id)
    .then(addUserInfoToPage)
    .then(getUserStickers)
    .then(addStickersToPage)
    .catch(handleError);
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

function getUserInfo(id) {
  return $.get(`${API_URL}/users/${id}`);
}

function addUserInfoToPage(data) {
  $('.user').append(`
    <h1>${data.name}</h1>
    <h2>${data.age}</h2>
    `);
  return data.id;
}

function getUserStickers(id) {
  return $.get(`${API_URL}/users/${id}/sticker`);
}

function addStickersToPage(stickers) {
  stickers.forEach(sticker => {
    $('.stickers').append(`
      <img src="${sticker.image_url}">
      <p>${sticker.description}</p>
      `);
  });
}

function handleError(error){
  window.location = '/login.html';
}
