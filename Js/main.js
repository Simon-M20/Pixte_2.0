import { menuShow } from "./module/menuShow.js";
import scrollTopBtn from "./module/scroll-top-btn.js";
import { swiper } from "./module/swiper.js";
import { typed } from "./module/typed.js";

document.addEventListener("DOMContentLoaded", e => {
    scrollTopBtn(".scroll-top")
    swiper,
    typed,
    menuShow(".menu-btn", ".menu", ".menu-link a")
})