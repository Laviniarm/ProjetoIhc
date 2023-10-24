document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch('conatct.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Obrigado! Sua mensagem foi enviada com sucesso.');
        contactForm.reset();
      } else {
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
  });
});