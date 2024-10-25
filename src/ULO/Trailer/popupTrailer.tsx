import { createSignal, onMount } from 'solid-js';
import './popupTrailer.css'; // Jika Anda memiliki style khusus untuk popup

const PopupTrailer = (props) => {

     // Fungsi untuk menutup popup
     const handleClose = () => {
        if (props.onClose) {
            props.onClose(); // Panggil fungsi onClose yang dikirim dari parent (Beranda-Dekstop.tsx)
        }
    };

    return (
        <div class='popup-overlay'>
            <div class='popup-scroll'>
                <div class='popup-content'>
                    <img src="src/ULO/Trailer/assets/close.svg" alt="close" class='closeIcon' onClick={handleClose} />
                    <img src="src/ULO/Trailer/assets/thumbnail.svg" alt="Thumbnail" class='thumbnail' />
                    <div class='gradasi'></div>
                    <div class='content1'>
                        <div class='kiri'>
                            <div class='kategori'>
                                <p class='kategoriDeskripsi'>PETUALANGAN</p>
                                <div class='batas'></div>
                                <p class='kategoriDeskripsi'>LAGA</p>
                                <div class='batas'></div>
                                <p class='kategoriDeskripsi'>GANGSTER</p>
                            </div>
                            <h1 class='judulTrailer'>Extraction 2</h1>
                            <div class='aksi'>
                                <button class='aksi1'>
                                    <p class='textPutar'>Putar Sekarang</p>
                                    <img src="src/ULO/Trailer/assets/play.svg" alt="Putar Sekarang" class='playButton' />
                                </button>
                                <button class='aksi2'>
                                    <img src="src/ULO/Trailer/assets/plus.svg" alt="Tambah Daftar" class='plusButton' />
                                </button>
                                <button class='aksi3'>
                                    <img src="src/ULO/Trailer/assets/like.svg" alt="Like Film" class='likeButton' />
                                </button>
                            </div>
                        </div>
                        <div class='kanan'>
                            <img src="src/ULO/Trailer/assets/suaraNyala.svg" alt="Suara" class='suara' />
                            <div class='controlVideo'>
                                <img src="src/ULO/Trailer/assets/pauseVideo.svg" alt="Pause Video" class='pauseVideo' />
                                <div class='durasiVideo'>
                                    <div class='durasiTotal'></div>
                                    <div class='durasiActive'></div>
                                </div>
                                <p class='keteranganAngka'>01:46</p>
                            </div>
                        </div>
                    </div>
                    <div class='content2'>
                        <div class='kiri2'>
                            <div class='informasi1'>
                                <p class='tanggalRilis'>2023 2h 3min</p>
                                <img src="src/ULO/Trailer/assets/hdJudul.svg" alt="HD Judul" class='hdJudul' />
                                <img src="src/ULO/Trailer/assets/audioJudul.svg" alt="Audio Judul" class='audioJudul' />
                            </div>
                            <div class='informasi2'>
                                <img src="src/ULO/Trailer/assets/18Judul.svg" alt="18 Judul" class='judul18' />
                                <p class='kekerasan'>Kekerasan, Kata-Kata Kasar</p>
                            </div>
                            <p class='deskripsiFilm'>Kali ini dirinya ditugaskan untuk menyelamatkan sebuah keluarga <br />gangster Georgia yang keji nan kejam. Misinya adalah menyelamatkan <br />semua anggota keluarga tersebut dari penjara tempat mereka ditahan. <br />Lantas, berhasilkah Tyler menyelesaikan misi tersebut?</p>
                        </div>
                        <div class='kanan2'>
                            <div class="sectionTrailer">
                                <span class="label">Pemeran:</span>
                                <span class="value">
                                Chris Hemsworth, Golshifteh Farahani, Tornike Gogrichiani, Adam Bessa, Daniel Bernhardt, Tinatin Dalakishvili, <em>lainnya</em>
                                </span>
                            </div>

                            <div class="sectionTrailer">
                                <span class="label">Genre:</span>
                                <span class="value">Film Laga & Petualangan, Film Amerika</span>
                            </div>

                            <div class="sectionTrailer">
                                <span class="label">Film ini:</span>
                                <span class="value">Penuh Ledakan, Kasar dan Brutal</span>
                            </div>
                        </div>
                    </div>
                    <div class='content3'>
                        <div class='judulKoleksi'>
                            <img src="src/ULO/Trailer/assets/koleksi.svg" alt="Koleksi" class='koleksiIcon' />
                            <h2 class='textKoleksi'>Koleksi Extraction</h2>
                        </div>
                        <div class='card-container'>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/koleksi1.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2020</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/koleksi2.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Kembali dari ambang kematian, <br />Tyler Rake, prajurit komando <br />yang amat lihai, melakukan misi <br />berbahaya lagi: menyelamatkan <br />keluarga gangster keji yang <br />sedang ditawan.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/koleksi3.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Kembali dari ambang kematian, <br />Tyler Rake, prajurit komando <br />yang amat lihai, melakukan misi <br />berbahaya lagi: menyelamatkan <br />keluarga gangster keji yang <br />sedang ditawan.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/koleksi4.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Kembali dari ambang kematian, <br />Tyler Rake, prajurit komando <br />yang amat lihai, melakukan misi <br />berbahaya lagi: menyelamatkan <br />keluarga gangster keji yang <br />sedang ditawan.</p>
                            </div>
                        </div>
                    </div>
                    <div class='content4'>
                        <h1 class='textLainnya'>Lainnya Seperti Ini</h1>
                        <div class='card-container1'>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya1.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya2.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya3.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya4.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                        </div>
                        <div class='card-container2'>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya5.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya6.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya7.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                            <div class='card'>
                                <img src="src/ULO/Trailer/assets/playFilm.svg" alt="Play Film" class='playFilm' />
                                <img src="src/ULO/Trailer/assets/lainnya8.svg" alt="Koleksi Image" class='koleksiImage' />
                                <div class='spesifikasi'>
                                    <img src="src/ULO/Trailer/assets/18Koleksi.svg" alt="18 Koleksi" class='koleksi18' />
                                    <img src="src/ULO/Trailer/assets/hdKoleksi.svg" alt="HD Koleksi" class='hdKoleksi' />
                                    <img src="src/ULO/Trailer/assets/audioKoleksi.svg" alt="Audio Koleksi" class='audioKoleksi' />
                                </div>
                                <p class='tahun'>2023</p>
                                <p class='deskripsiKoleksi'>Misi baru pembunuh bayaran <br />tangguh ini menjadi pencarian <br />jati diri demi bertahan hidup saat <br />ia diutus ke Bangladesh untuk <br />menyelamatkan putra bandar <br />narkoba yang diculik.</p>
                            </div>
                        </div>
                        <div class='pembatasLainnya'>
                            <div class='garisPembatas'></div>
                            <img src="src/ULO/Trailer/assets/arrowDown.svg" alt="Arrow Down" class='arrowDown' />
                        </div>
                    </div>
                    <div class='content5'>
                        <h1 class='textTentang'>Tentang Extraction 2</h1>
                        <div class='kiri3'>
                            <div class="sectionTentang">
                                <span class="title">Sutradara:</span>
                                <span class="isi">Sam Hargrave</span>
                            </div>

                            <div class="sectionTentang">
                                <span class="title">Pemeran:</span>
                                <span class="isi">Chris Hemsworth, Golshifteh Farahani, Tornike Gogrichiani, Adam Bessa, Daniel Bernhardt, Tinatin Dalakishvili</span>
                            </div>

                            <div class="sectionTentang">
                                <span class="title">Penulis:</span>
                                <span class="isi">Joe Russo</span>
                            </div>

                            <div class="sectionTentang">
                                <span class="title">Genre:</span>
                                <span class="isi">Film Laga & Petualangan, Film Amerika</span>
                            </div>

                            <div class="sectionTentang">
                                <span class="title">Film ini:</span>
                                <span class="isi">Penuh Ledakan, Kasar dan Brutal</span>
                            </div>

                            <div class="sectionRating">
                                <span class="title">Rating usia:</span>
                                <img src="src/ULO/Trailer/assets/18Tentang.svg" alt="18 Tentang" class='tentang18' />
                                <span class="isi">Kekerasan, Kata-Kata Kasar, Sesuai untuk yang berusia 18 tahun ke atas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupTrailer;