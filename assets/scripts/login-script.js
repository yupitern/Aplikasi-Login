/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */


/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel loginEmailmElement untuk tampilan email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel loginPasswordElement untuk tampilan password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

// menambahkan aksi klik/submit pada button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/**
* Membuat variabel email untuk menyimpan nilai email yang didapat saat button ditekan.
* @constant {string}
*/
  const email = inputEmailElement.value;

/**
* Membuat variabel password untuk menyimpan nilai password yang didapat saat button ditekan.
* @constant {string}
*/
  const password = inputPasswordElement.value;

  // memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();    // jika sesuai, program akan berpindah ke halaman Home
  } else {
    showPopUp();   // jika tidak sesuai, tampilkan input salah
  }
});
