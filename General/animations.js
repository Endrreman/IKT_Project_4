//!         General
Splitting();

//      text
ScrollOut({
    targets: '.char',
    onShown(el) {
        el.classList.add("enter_anim");
    },
    onHidden(el) {
        el.classList.remove("enter_anim");
    },
    threshold: 0.99999,
});

//!         Footer
ScrollOut({
    targets: ".foot_grid",
    once: true,
    onShown(el) {
        el.classList.add("footer_load");
    }
});

//!         Nav

var csalad = document.getElementById("nav_csalad");
var iskola = document.getElementById("nav_iskola");
var tanul = document.getElementById("nav_tanul");
var iskolank = document.getElementById("nav_iskolank");

ScrollOut({
    targets:"#csalad",
    onShown() {
        csalad.classList.add("active");
    },
    onHidden() {
        csalad.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#iskola",
    onShown() {
        iskola.classList.add("active");
    },
    onHidden() {
        iskola.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#tanul",
    onShown() {
        tanul.classList.add("active");
    },
    onHidden() {
        tanul.classList.remove("active");
    },
    threshold: 0.3,
});
ScrollOut({
    targets:"#iskolank",
    onShown() {
        iskolank.classList.add("active");
    },
    onHidden() {
        iskolank.classList.remove("active");
    },
    threshold: 0.6,
});