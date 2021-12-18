const form = document.querySelector("#contactForm");

form.onsubmit = function () {
    event.preventDefault();

    console.log(event);
}