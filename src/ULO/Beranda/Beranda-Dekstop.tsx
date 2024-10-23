import { createSignal,  onCleanup, onMount } from 'solid-js';
import './Beranda-Dekstop.css';
import Navbar from '../Navbar/Navbar';
import PopupTrailer from '../Trailer/popupTrailer';

const Dekstop = () => {

    const [scrolled, setScrolled] = createSignal(false);
    const [showPopup, setShowPopup] = createSignal(false);

    const handlePopup = () => {
        setShowPopup(true);  // Menampilkan popup
        document.body.style.overflow = 'hidden';  // Sembunyikan scrollbar
    };

    const closePopup = () => {
        setShowPopup(false);  // Menutup popup
        document.body.style.overflow = 'auto';  // Tampilkan scrollbar kembali
    };

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
    onCleanup(() => {
        window.removeEventListener("scroll", handleScroll);
        // Kembalikan scrollbar jika komponen unmount dan masih dalam keadaan tersembunyi
        document.body.style.overflow = 'auto';
    });
});

    return (
        <div class="main-countainer">
            <Navbar/>
            <div class="hero">
                <div class="hero-content">
                    <div class="tags">
                        <span class="tag">PETUALANGAN</span>
                        <span class="tag">AKSI</span>
                        <span class="tag">FANTASI</span>
                    </div>
                    <h1 class="title">Avatar: The Way of Water</h1>
                    <div class="buttons">
                        <button class="btn btn-primary">Putar Sekarang</button>
                        <button class="btn btn-secondary">Selengkapnya</button>
                    </div>
                </div>
            </div>

            <section class="section">
                <h2 class="section-title">Rekomendasi untuk Anda</h2>
                <div class="movie-grid">
                    <div class="movie-card">
                        <img src="src\foto\Rekomendasi1.svg" alt="movie 1" />
                        <div class="movie-info">
                            <h3 class="movie-title">One Piece</h3>
                            <div class="movie-duration">2j 30min</div>
                        </div>
                    </div>
                    <div class="movie-card" onClick={handlePopup}>
                        <img src="src\foto\Rekomendasi2.svg" alt="movie 2" />
                        <div class="movie-info">
                            <h3 class="movie-title">Extraction</h3>
                            <div class="movie-duration">2j 15min</div>
                        </div>
                    </div>
                    <div class="movie-card">
                        <img src="" alt="movie 3" />
                        <div class="movie-info">
                            <h3 class="movie-title">The Angry Birds 2</h3>
                            <div class="movie-duration">1j 45min</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Film & Acara TV Indonesia</h2>
                <div class="movie-grid">
                    <div class="movie-card">
                        <img src="" alt="movie 4" />
                        <div class="movie-info">
                            <h3 class="movie-title">Dua Hati Biru</h3>
                            <div class="movie-duration">1j 50min</div>
                        </div>
                    </div>
                    <div class="movie-card">
                        <img src="" alt="movie 5" />
                        <div class="movie-info">
                            <h3 class="movie-title">Mariposa</h3>
                            <div class="movie-duration">2j 5min</div>
                        </div>
                    </div>
                    <div class="movie-card">
                        <img src="" alt="movie 6" />
                        <div class="movie-info">
                            <h3 class="movie-title">Filosofi Kopi</h3>
                            <div class="movie-duration">1j 55min</div>
                        </div>
                    </div>
                </div>
            </section >
            {showPopup() && <PopupTrailer onClose={closePopup} />}
        </div>
    );
};

export default Dekstop;