import { createSignal, onCleanup, onMount, For } from 'solid-js';
import './Baru&Populer.css';
import Navbar from '../Navbar/Navbar';

const Baru_populer = () => {

    let movieBaru;  // Ref for "Rekomendasi untuk Anda"
    let moviePopuler;
    let moviePilihan;
    let movieLayak      // Ref for "Film & Acara TV Indonesia"

    // Scroll functions for "Rekomendasi untuk Anda"
    const scrollLeftBaru = () => {
        movieBaru.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightBaru = () => {
        movieBaru.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Scroll functions for "Film & Acara TV Indonesia"
    const scrollLeftPopuler = () => {
        moviePopuler.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightPopuler = () => {
        moviePopuler.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const scrollLeftPilihan = () => {
        moviePilihan.scrollBy({ left: -300, behavior: 'smooth' })
    };

    const scrollRightPilihan = () => {
        moviePilihan.scrollBy({ left: 300, behavior: 'smooth' })
    };

    const scrollLeftLayak = () => {
        movieLayak.scrollBy({ left: -300, behavior: 'smooth' })
    };

    const scrollRightLayak = () => {
        movieBaru.scrollBy({ left: 300, behavior: 'smooth' })
    };


    return (
        <div class="container">
            <Navbar />
            <div class="">
                <h2 class="section-title">Baru di Ulo</h2>
                <div class="movie-row">
                    <div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div><div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\Baru1.svg" alt="Movie 1" class="movie-card" />
                    </div>
                </div>

                <section class="numbered-section">
                    <h2 class="section-title">10 Film Terpopuler di Ulo Hari Ini</h2>
                    <div class="movie-row">
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 1" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 2" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 3" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 4" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 4" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                    </div>
                </section>

                <section class="numbered-section">
                    <h2 class="section-title">10 Pilihan pengguna</h2>
                    <div class="movie-row">
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 1" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 2" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 3" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                        <div class="movie-card-number">
                            <img src="src\foto\numberik1.svg" alt="Popular Movie 4" />
                            <div class="badge">Baru Ditambahkan</div>
                        </div>
                    </div>
                </section>

                <h2 class="section-title">Akan Hadir Minggu Ini</h2>
                <div class="movie-row">
                    <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                    </div>
                    <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                    </div>
                </div>

                <section>
                    <h2 class="section-title">Layak Ditunggu</h2>
                    <div class="movie-row">
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                        <div class="movie-card">
                        <img src="src\foto\akanhadir1.svg" alt="Upcoming Movie 1" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Baru_populer;