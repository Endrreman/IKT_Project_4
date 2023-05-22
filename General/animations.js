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

//*     neu_120
var csalad = document.getElementById("nav_csalad");
var iskola = document.getElementById("nav_iskola");
var tanul = document.getElementById("nav_tanul");
var iskolank = document.getElementById("nav_iskolank");

//*     alaplap
var foglalat = document.getElementById("nav_foglalat");
var vrm = document.getElementById("nav_vrm");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");
var foglalat = document.getElementById("nav_foglalat");

ScrollOut({
    targets:"#nav-1",
    onShown() {
        csalad.classList.add("active");
    },
    onHidden() {
        csalad.classList.remove("active");
    },
    threshold: 0.3,
});
ScrollOut({
    targets:"#nav-2",
    onShown() {
        iskola.classList.add("active");
    },
    onHidden() {
        iskola.classList.remove("active");
    },
    threshold: 0.3,
});
ScrollOut({
    targets:"#nav-3",
    onShown() {
        tanul.classList.add("active");
    },
    onHidden() {
        tanul.classList.remove("active");
    },
    threshold: 0.3,
});
ScrollOut({
    targets:"#nav-4",
    onShown() {
        iskolank.classList.add("active");
    },
    onHidden() {
        iskolank.classList.remove("active");
    },
    threshold: 0.3,
});