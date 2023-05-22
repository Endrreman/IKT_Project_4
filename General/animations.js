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
var memoria = document.getElementById("nav_memoria");
var hid = document.getElementById("nav_hid");
var del = document.getElementById("nav_del");
var pci_e = document.getElementById("nav_pci_e");
var cmos = document.getElementById("nav_cmos");
var pci = document.getElementById("nav_pci");
var sata = document.getElementById("nav_sata");
var pata = document.getElementById("nav_pata");
var atx = document.getElementById("nav_atx");
var i_o = document.getElementById("nav_i_o");
var hang = document.getElementById("nav_hang");
var audio = document.getElementById("nav_vent");
var audio = document.getElementById("nav_audio");
var elol = document.getElementById("nav_elol");
var usb = document.getElementById("nav_usb");

ScrollOut({
    targets:"#nav-1",
    onShown() {
        csalad.classList.add("active");
        foglalat.classList.add("active");
    },
    onHidden() {
        csalad.classList.remove("active");
        foglalat.classList.remove("active");
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