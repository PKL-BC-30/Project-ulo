import { createSignal } from 'solid-js';
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
                        <div class='judulFilm'>
                            <div class='kategori'>
                                <p class='kategoriDeskripsi'>PETUALANGAN</p>
                                <div class='batas'></div>
                                <p class='kategoriDeskripsi'>LAGA</p>
                                <div class='batas'></div>
                                <p class='kategoriDeskripsi'>GANGSTER</p>
                            </div>
                            <h1 class='judulTrailer'>Extraction 2</h1>
                            <div class='aksi'>
                                <button class='putarSekarang'>
                                    <p class='textPutar'>Putar Sekarang</p>
                                    <img src="src/ULO/Trailer/assets/play.svg" alt="Putar Sekarang" class='playButton' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupTrailer;