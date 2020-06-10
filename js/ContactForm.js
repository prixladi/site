const submitFormAsync = async (event) => {
  event.preventDefault();
  var data = new FormData(event.target);

  let i = 0;
  data.forEach(function (value, key) {
    if (value) i++;
  });

  if (i > 0) {
    await fetch('http://server.ladislavprix.cz/mail.php', {
      method: 'POST',
      body: data,
    });
  }
  document.getElementById('contact-form').reset();
  return i > 0;
};

var setupForm = () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', submitFormAsync, false);
};
