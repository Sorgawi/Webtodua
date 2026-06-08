// --- LOGIKA PLAY/OVERLAY VIDEO ---
function toggleOverlay(el) {
    let overlay = el.querySelector('.video-overlay');
    if (!overlay) return;

    // Jika overlay yang diklik sudah aktif -> sembunyikan
    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
        return;
    }

    // Hilangkan overlay aktif di gambar lain terlebih dahulu
    document.querySelectorAll('.video-overlay').forEach(function(o) {
        o.classList.remove('show');
    });

    // Tampilkan overlay di gambar yang diklik
    overlay.classList.add('show');
}

// --- LOGIKA MODAL IKLAN HITAM (COUNTDOWN) ---
var iklanHitam = document.getElementById('modal-iklan-hitam');
var timerOtomatis;
var hitunganMundurInterval;

function tutupIklanHitam() {
    if (!iklanHitam) return; 
    iklanHitam.style.opacity = '0';
    clearInterval(hitunganMundurInterval); // Hentikan hitungan mundur
    clearTimeout(timerOtomatis); // Hentikan timer penutup otomatis
    setTimeout(function() {
        iklanHitam.style.display = 'none';
    }, 300); 
}

function mulaiHitunganMundur() {
    var detikSaatIni = 4; // Mulai hitung mundur dari angka 4
    var timerDisplay = document.getElementById('countdown-timer');
    
    if (timerDisplay) {
        timerDisplay.innerHTML = 'Iklan ini akan otomatis menutup dalam <strong>' + detikSaatIni + '</strong> detik.';
    }

    hitunganMundurInterval = setInterval(function() {
        detikSaatIni--;
        
        if (timerDisplay) {
            if (detikSaatIni > 0) {
                 timerDisplay.innerHTML = 'Iklan ini akan otomatis menutup dalam <strong>' + detikSaatIni + '</strong> detik.';
            } else {
                 timerDisplay.textContent = 'Iklan ditutup.';
            }
        }

        if (detikSaatIni <= 0) {
            clearInterval(hitunganMundurInterval);
        }
    }, 1000);
}

function initIklan() {
    if (!iklanHitam) return;

    // Tampilkan iklan modal hitam
    iklanHitam.style.display = 'block';
    setTimeout(function() {
        iklanHitam.style.opacity = '1';
    }, 10);

    mulaiHitunganMundur();

    // Iklan otomatis hilang dalam 4 detik
    timerOtomatis = setTimeout(tutupIklanHitam, 4000); 
}

// --- LOGIKA POPUP ADS KEDUA (MUNCUL SETELAH 2 DETIK) ---
function initPopupAds() {
    setTimeout(function(){
        var popup = document.getElementById('adsPopup');
        if (popup) {
            popup.style.display = 'flex';
        }
    }, 2000);
}

// Jalankan semua inisialisasi ketika halaman selesai dimuat sepenuhnya
window.addEventListener('load', function() {
    initIklan();
    initPopupAds();
});