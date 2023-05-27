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

ScrollOut({
    targets:"#nav-1",
    onShown() {
        csalad.classList.add("active");
    },
    onHidden() {
        csalad.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2",
    onShown() {
        iskola.classList.add("active");
    },
    onHidden() {
        iskola.classList.remove("active");
    },
    threshold: 0.6,
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
    threshold: 0.6,
});

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
var vent = document.getElementById("nav_vent");
var audio = document.getElementById("nav_audio");
var elol = document.getElementById("nav_elol");
var usb = document.getElementById("nav_usb");

ScrollOut({
    targets:"#nav-2-1",
    onShown() {
        foglalat.classList.add("active");
    },
    onHidden() {
        foglalat.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-2",
    onShown() {
        vrm.classList.add("active");
    },
    onHidden() {
        vrm.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-3",
    onShown() {
        memoria.classList.add("active");
    },
    onHidden() {
        memoria.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-4",
    onShown() {
        hid.classList.add("active");
    },
    onHidden() {
        hid.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-5",
    onShown() {
        del.classList.add("active");
    },
    onHidden() {
        del.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-6",
    onShown() {
        pci_e.classList.add("active");
    },
    onHidden() {
        pci_e.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-7",
    onShown() {
        cmos.classList.add("active");
    },
    onHidden() {
        cmos.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-8",
    onShown() {
        pci.classList.add("active");
    },
    onHidden() {
        pci.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-9",
    onShown() {
        sata.classList.add("active");
    },
    onHidden() {
        sata.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-10",
    onShown() {
        pata.classList.add("active");
    },
    onHidden() {
        pata.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-11",
    onShown() {
        atx.classList.add("active");
    },
    onHidden() {
        atx.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-12",
    onShown() {
        i_o.classList.add("active");
    },
    onHidden() {
        i_o.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-13",
    onShown() {
        hang.classList.add("active");
    },
    onHidden() {
        hang.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-14",
    onShown() {
        vent.classList.add("active");
    },
    onHidden() {
        vent.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-15",
    onShown() {
        audio.classList.add("active");
    },
    onHidden() {
        audio.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-16",
    onShown() {
        elol.classList.add("active");
    },
    onHidden() {
        elol.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2-17",
    onShown() {
        usb.classList.add("active");
    },
    onHidden() {
        usb.classList.remove("active");
    },
    threshold: 0.6,
});

//*     Intel vs AMD
var intel = document.getElementById("nav_intel");
var amd = document.getElementById("nav_amd");
var vs = document.getElementById("nav_vs");
var ar = document.getElementById("nav_ar");

ScrollOut({
    targets:"#nav-3-1",
    onShown() {
        intel.classList.add("active");
    },
    onHidden() {
        intel.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-3-2",
    onShown() {
        amd.classList.add("active");
    },
    onHidden() {
        amd.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-3-3",
    onShown() {
        vs.classList.add("active");
    },
    onHidden() {
        vs.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-3-4",
    onShown() {
        ar.classList.add("active");
    },
    onHidden() {
        ar.classList.remove("active");
    },
    threshold: 0.6,
});

//*     Cooling
var haz = document.getElementById("nav_haz")
var proc = document.getElementById("nav_proc")
var pass = document.getElementById("nav_pass" )
var air = document.getElementById("nav_air")
var wat = document.getElementById("nav_wat")
var phase = document.getElementById("nav_phase")
var gpuc = document.getElementById("nav_gpuc")
var sum = document.getElementById("nav_sum")

ScrollOut({
    targets:"#nav-4-1",
    onShown() {
        haz.classList.add("active");
    },
    onHidden() {
        haz.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-2",
    onShown() {
        proc.classList.add("active");
    },
    onHidden() {
        proc.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-3",
    onShown() {
        pass.classList.add("active");
    },
    onHidden() {
        pass.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-4",
    onShown() {
        air.classList.add("active");
    },
    onHidden() {
        air.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-5",
    onShown() {
        wat.classList.add("active");
    },
    onHidden() {
        wat.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-6",
    onShown() {
        phase.classList.add("active");
    },
    onHidden() {
        phase.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-7",
    onShown() {
        gpuc.classList.add("active");
    },
    onHidden() {
        gpuc.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-4-8",
    onShown() {
        sum.classList.add("active");
    },
    onHidden() {
        sum.classList.remove("active");
    },
    threshold: 0.6,
});