// MOBILE MENU

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// CONTACT FORM

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        "Portfolio Contact - " + name;


    const body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;


    const mail =
        "mailto:pradeeniyat2005@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    window.location.href = mail;

}