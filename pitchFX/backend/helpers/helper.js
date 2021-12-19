function checkAddVideoBody(body) {
  console.log(body);
  if (!body || !body.length)
    return false;
  return true;
}

module.exports = {
  checkAddVideoBody
}