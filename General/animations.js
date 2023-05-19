//!         General
//      text
Splitting();
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