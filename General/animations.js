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

ScrollOut({
    targets:".nav",
    scrollingElement: ".para",
    onShown: function(el) {
        el.classList.add("feher");
    },
    onHidden(el) {
        el.classList.remove("feher");
    },
    threshold: 0.5
});