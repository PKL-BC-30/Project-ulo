import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import "./lupapass.css";
import lupapassimg from '../Lupa Password/lupapass.svg';

const LupaPass: Component = () => {
  const navigate = useNavigate();
  const [view, setView] = createSignal("reset"); // Initial view is 'reset'
  const [otp, setOtp] = createSignal(""); // Signal for the OTP input

  const handleResetPassword = () => {
    setView("checkEmail");
  };

  const handleVerifyPassword = () => {
    setView("otp"); // Show the OTP modal
  };

  const handleOtpVerification = () => {
    if (otp() === "1234") { // Example OTP verification (replace with actual logic)
      setView("newPassword");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handlePasswordResetSuccess = () => {
    setView("success"); // New view for the success message
  };

  return (
    <div class="container-syauqiy">
      {view() === "reset" && (
        <div class="left-section">
          <h1 class="reset-title">ULO.</h1>
          <h2 class="reset-subtitle">Lupa password?</h2>
          <p class="reset-text">Jangan khawatir, kami akan mengirimkan petunjuk <br />
            pengaturan ulang kepada anda.</p>
          <input type="email" placeholder="Masukan email anda" />
          <button onClick={handleResetPassword}>Reset kata sandi</button>
          <a href="#" onClick={() => navigate("/login")}>← Kembali ke login</a>
        </div>
      )}

      {view() === "checkEmail" && (
        <div class="left-section">
          <h1 class="check-title">ULO.</h1>
          <h2 class="check-subtitle">Periksa email anda</h2>
          <p class="check-text">
            Kami mengirimkan tautan pengaturan ulang kata sandi ke
            andidugong@gmail.com
          </p>
          <button onClick={handleVerifyPassword}>Verifikasi kata sandi</button>
          <p class="resend-text">Belum menerima email? <a href="#">kirim ulang</a></p>
          <a href="#" onClick={() => navigate("/login")}>← Kembali ke login</a>
        </div>
      )}

      {view() === "otp" && (
        <div class="otp-modal">
          <h2 class="otp-title">Masukan kode OTP</h2>
          <p class="otp-text">Kami mengirimkan kode OTP ke email anda.</p>
          <input
            type="text"
            maxLength="4"
            value={otp()}
            onInput={(e) => setOtp(e.target.value)}
            class="otp-input"
            placeholder="____"
          />
          <button onClick={handleOtpVerification}>Verifikasi OTP</button>
        </div>
      )}

      {view() === "newPassword" && (
        <div class="left-section">
          <h1 class="newpassword-title">ULO.</h1>
          <h2 class="newpassword-subtitle">Masukan kata sandi baru</h2>
          <div>
            <label>Kata sandi</label>
            <input type="password" placeholder="Masukan kata sandi baru" />
            <small class="password-hint">Harus minimal 8 karakter</small>
          </div>
          <div>
            <label>Konfirmasi kata sandi</label>
            <input type="password" placeholder="Masukan kata sandi baru" />
          </div>
          <button onClick={handlePasswordResetSuccess}>Reset kata sandi</button>
          <a href="#" onClick={() => navigate("/login")}>← Kembali ke login</a>
        </div>
      )}

      {view() === "success" && (
        <div class="left-section">
          <h1 class="success-title">ULO.</h1>
          <h2 class="success-subtitle">Reset kata sandi</h2>
          <p class="success-text">Kata sandi anda telah berhasil direset. Klik di bawah untuk melihat secara ajaib.</p>
          <button onClick={() => navigate("/login")}>Lanjutkan</button>
          <a href="#" onClick={() => navigate("/login")}>← Kembali ke login</a>
        </div>
      )}

      <div class="right-section">
        <img
          src={lupapassimg}
          alt="Illustration of a person standing next to a large mobile phone displaying a password input screen with a lock icon and a 'Done' button."
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};

export default LupaPass;
