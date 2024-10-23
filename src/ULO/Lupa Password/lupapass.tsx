import { Component } from "solid-js";
import "./lupapass.css";

const LupaPass: Component = () => {
  return (
    <div class="container">
      <div class="left-section">
        <h1>ULO.</h1>
        <h2>Lupa password?</h2>
        <p>Jangan khawatir, kami akan mengirimkan petunjuk pengaturan ulang kepada anda.</p>
        <input type="email" placeholder="Masukan email anda" />
        <button>Reset kata sandi</button>
        <a href="#">← Kembali ke login</a>
      </div>
      <div class="right-section">
        <img
          src="https://storage.googleapis.com/a1aa/image/XK2xhbv24jblJR8YYSZa7Fqv8uImI5hZ8m9YJFFHP1IwoY6E.jpg"
          alt="Illustration of a person standing next to a large mobile phone displaying a password input screen with a lock icon and a 'Done' button."
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};

export default LupaPass;
