// Array de tweets (puedes agregar o eliminar tweets según tus necesidades)
var tweets = ["Tweet 1", "Tweet 2", "Tweet 3"];

// Función para rotar los tweets en la sección de tweets
function rotateTweets() {
  var tweetContainer = document.getElementById("tweet-container");
  var currentTweetIndex = 0;

  setInterval(function() {
    tweetContainer.textContent = tweets[currentTweetIndex];
    currentTweetIndex = (currentTweetIndex + 1) % tweets.length;
  }, 3000); // Cambia cada 3 segundos (puedes ajustar el tiempo según tus necesidades)
}

// Función para manejar el envío del formulario de contacto
function handleContactFormSubmit(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtén los valores de los campos del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Aquí puedes realizar acciones adicionales, como enviar los datos a través de una solicitud HTTP (AJAX), etc.

  // Restablece el formulario después de enviar
  document.getElementById("contact-form").reset();
}

// Llama a las funciones necesarias cuando se carga la página
window.onload = function() {
  rotateTweets();

  var contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleContactFormSubmit);
};
