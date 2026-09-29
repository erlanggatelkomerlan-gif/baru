document.addEventListener("DOMContentLoaded", function () {

    console.log("Portofolio berhasil dimuat!");

    // Ambil semua bintang
    const stars = document.querySelectorAll(
        'input[name="rating"]'
    );

    // Teks rating
    const ratingText =
        document.getElementById("ratingText");


    // Saat bintang dipilih
    stars.forEach(function (star) {

        star.addEventListener(
            "change",
            function () {

                const nilai = this.value;

                ratingText.innerText =
                    "Kamu memberikan " +
                    nilai +
                    " dari 5 bintang ⭐";

            }
        );

    });

});


// =========================
// KIRIM RATING KE EMAIL
// =========================

function kirimRating() {

    const rating =
        document.querySelector(
            'input[name="rating"]:checked'
        );

    const pesan =
        document.getElementById(
            "pesan"
        ).value;


    // Jika belum memilih bintang
    if (!rating) {

        alert(
            "Silakan pilih rating 1–5 bintang terlebih dahulu!"
        );

        return;
    }


    // Email tujuan
    const email =
        "erlanggatelkomerlan@gmail.com";


    // Judul email
    const subject =
        "Penilaian Portofolio Erlangga - " +
        rating.value +
        " Bintang";


    // Isi email
    const body =
        "Halo Erlangga,%0D%0A%0D%0A" +

        "Saya memberikan penilaian " +
        rating.value +
        " dari 5 bintang.%0D%0A%0D%0A" +

        "Komentar/Saran:%0D%0A" +

        encodeURIComponent(pesan) +

        "%0D%0A%0D%0A" +

        "Terima kasih.";


    // Buka aplikasi email
    window.location.href =
        "mailto:" +
        email +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        body;

}