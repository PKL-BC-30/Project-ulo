import { createSignal,  onCleanup, onMount } from 'solid-js';
import './Navbar.css';

const Navbar = () => {

    const [scrolled, setScrolled] = createSignal(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach scroll event listener on mount and clean it up on unmount
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

    return (
        <div class="main-Navbar">
            <nav class={`navbar ${scrolled() ? "scrolled" : ""}`}>
                <div class="logo">ULO.</div>
                <div class="nav-links">
                    <a href="/Beranda-Dekstop">Beranda</a>
                    <a href="/Baru&Populer">Baru & Populer</a>
                    <a href="#">Daftar Saya</a>
                    <a href="#">Filter Pencarian</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;