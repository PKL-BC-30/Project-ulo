import { createSignal, onCleanup, onMount } from 'solid-js';
import './Beranda-Dekstop.css';
import Navbar from '../Navbar/Navbar';

const Dekstop = () => {

    let movieGridRefRekomendasi;  // Ref for "Rekomendasi untuk Anda"
    let movieGridRefIndo;         // Ref for "Film & Acara TV Indonesia"

    // Scroll functions for "Rekomendasi untuk Anda"
    const scrollLeftRekomendasi = () => {
        movieGridRefRekomendasi.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightRekomendasi = () => {
        movieGridRefRekomendasi.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Scroll functions for "Film & Acara TV Indonesia"
    const scrollLeftIndo = () => {
        movieGridRefIndo.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightIndo = () => {
        movieGridRefIndo.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div class="main-countainer">
            <Navbar />
            <div class="hero">
                <div class="hero-content">
                    <div class="tags">
                        <span class="tag">PETUALANGAN</span>
                        <span class="tag">AKSI</span>
                        <span class="tag">FANTASI</span>
                    </div>
                    <h1 class="title">Avatar: The Way of Water</h1>

                    <div class="carousel">
                        <img src="src\foto\carousel1.svg" alt="carousel1" />
                        <img src="src\foto\carousel2.svg" alt="carousel2" />
                        <img src="src\foto\carousel3.svg" alt="carousel3" />
                    </div>
                    <div class="buttons">
                        <button class="btn btn-primary">Putar Sekarang</button>
                        <button class="btn btn-secondary">Selengkapnya</button>
                    </div>
                </div>
            </div>

            <section class="section">
                <h2 class="section-title">Rekomendasi untuk Anda</h2>
                <div class="movie-controls">
                    <button class="scroll-button" onClick={scrollLeftRekomendasi}>
                        <img src="src\foto\kiri.svg" alt="kiri" />
                    </button>
                    <div class="movie-grid" ref={movieGridRefRekomendasi}>

                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 1" />
                            <div class="movie-info">
                                <h3 class="movie-title">One Piece</h3>
                                <div class="movie-duration">2j 30min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi2.svg" alt="movie 2" />
                            <div class="movie-info">
                                <h3 class="movie-title">Extraction</h3>
                                <div class="movie-duration">2j 15min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 3" />
                            <div class="movie-info">
                                <h3 class="movie-title">The Angry Birds 2</h3>
                                <div class="movie-duration">1j 45min</div>
                            </div>
                        </div>

                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 4" />
                            <div class="movie-info">
                                <h3 class="movie-title">The Angry Birds 2</h3>
                                <div class="movie-duration">1j 45min</div>
                            </div>
                        </div>

                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 5" />
                            <div class="movie-info">
                                <h3 class="movie-title">The Angry Birds 2</h3>
                                <div class="movie-duration">1j 45min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 5" />
                            <div class="movie-info">
                                <h3 class="movie-title">The Angry Birds 2</h3>
                                <div class="movie-duration">1j 45min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 5" />
                            <div class="movie-info">
                                <h3 class="movie-title">The Angry Birds 2</h3>
                                <div class="movie-duration">1j 45min</div>
                            </div>
                        </div>

                    </div>
                    <button class="scroll-button" onClick={scrollRightRekomendasi}>
                        <img src="src\foto\kanan.svg" alt="kanan" />
                    </button>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Film & Acara TV Indonesia</h2>
                <div class="movie-controls">
                    <button class="scroll-button" onClick={scrollLeftIndo}>
                        <img src="src\foto\kiri.svg" alt="kiri" />
                    </button>
                    <div class="movie-grid" ref={movieGridRefIndo}>
                        <div class="movie-card">
                            <img src="src/foto/Rekomendasi1.svg" alt="movie 4" />
                            <div class="movie-info">
                                <h3 class="movie-title">Dua Hati Biru</h3>
                                <div class="movie-duration">1j 50min</div>
                            </div>
                        </div>

                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 4" />
                            <div class="movie-info">
                                <h3 class="movie-title">Dua Hati Biru</h3>
                                <div class="movie-duration">1j 50min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 5" />
                            <div class="movie-info">
                                <h3 class="movie-title">Mariposa</h3>
                                <div class="movie-duration">2j 5min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 6" />
                            <div class="movie-info">
                                <h3 class="movie-title">Filosofi Kopi</h3>
                                <div class="movie-duration">1j 55min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 7" />
                            <div class="movie-info">
                                <h3 class="movie-title">Dua Hati Biru</h3>
                                <div class="movie-duration">1j 50min</div>
                            </div>
                        </div>
                        <div class="movie-card">
                            <img src="src\foto\Rekomendasi1.svg" alt="movie 8" />
                            <div class="movie-info">
                                <h3 class="movie-title">Dua Hati Biru</h3>
                                <div class="movie-duration">1j 50min</div>
                            </div>
                        </div>
                    </div>
                    <button class="scroll-button" onClick={scrollRightIndo}>
                        <img src="src\foto\kanan.svg" alt="kanan" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Dekstop;