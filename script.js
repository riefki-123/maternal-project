// ===============================================
// LOGIKA APLIKASI LITERASI MATERNAL - KKN GRADASI
// ===============================================

// --- DATABASE PERTUMBUHAN ANAK (LENGKAP 0-24 BULAN) ---
// Catatan: Bulan 13, 14, 16, 17, 19-23 adalah hasil interpolasi (rata-rata)
// karena data asli PDF meloncat (12 -> 15 -> 18 -> 24).
const dataPertumbuhan = {
    laki: {
        0: { bb: [2.5, 4.4], tb: [46.1, 53.7] },
        1: { bb: [3.4, 5.8], tb: [50.8, 58.6] },
        2: { bb: [4.3, 7.1], tb: [54.4, 62.4] },
        3: { bb: [5.0, 8.0], tb: [57.3, 65.5] },
        4: { bb: [5.6, 8.7], tb: [59.7, 68.0] },
        5: { bb: [6.0, 9.3], tb: [61.7, 70.1] },
        6: { bb: [6.3, 9.8], tb: [63.3, 71.9] }, 
        7: { bb: [6.7, 10.3], tb: [64.8, 73.5] },
        8: { bb: [6.9, 10.7], tb: [66.2, 75.0] },
        9: { bb: [7.1, 11.0], tb: [67.5, 76.5] },
        10: { bb: [7.4, 11.4], tb: [68.7, 77.9] },
        11: { bb: [7.6, 11.7], tb: [69.9, 79.2] },
        12: { bb: [7.7, 12.0], tb: [71.0, 80.5] },
        13: { bb: [7.9, 12.3], tb: [72.0, 81.7] }, // Interpolasi
        14: { bb: [8.1, 12.5], tb: [73.0, 83.0] }, // Interpolasi
        15: { bb: [8.3, 12.8], tb: [74.1, 84.2] },
        16: { bb: [8.5, 13.1], tb: [75.0, 85.4] }, // Interpolasi
        17: { bb: [8.7, 13.4], tb: [76.0, 86.5] }, // Interpolasi
        18: { bb: [8.8, 13.7], tb: [76.9, 87.7] },
        19: { bb: [9.0, 14.0], tb: [77.7, 88.7] }, // Interpolasi
        20: { bb: [9.1, 14.2], tb: [78.5, 89.8] }, // Interpolasi
        21: { bb: [9.3, 14.5], tb: [79.3, 90.8] }, // Interpolasi
        22: { bb: [9.4, 14.8], tb: [80.1, 91.9] }, // Interpolasi
        23: { bb: [9.6, 15.0], tb: [80.9, 92.9] }, // Interpolasi
        24: { bb: [9.7, 15.3], tb: [81.7, 93.9] }
    },
    perempuan: {
        0: { bb: [2.4, 4.2], tb: [45.4, 52.9] },
        1: { bb: [3.2, 5.5], tb: [49.8, 57.6] },
        2: { bb: [3.9, 6.6], tb: [53.0, 61.1] },
        3: { bb: [4.5, 7.5], tb: [55.6, 64.0] },
        4: { bb: [5.0, 8.2], tb: [57.8, 66.4] },
        5: { bb: [5.4, 8.8], tb: [59.6, 68.5] },
        6: { bb: [5.7, 9.3], tb: [61.2, 70.3] },
        7: { bb: [6.0, 9.8], tb: [62.7, 71.9] },
        8: { bb: [6.3, 10.2], tb: [64.0, 73.5] },
        9: { bb: [6.5, 10.5], tb: [65.3, 75.0] },
        10: { bb: [6.7, 10.9], tb: [66.5, 76.4] },
        11: { bb: [6.9, 11.2], tb: [67.7, 77.8] },
        12: { bb: [7.0, 11.5], tb: [68.9, 79.2] },
        13: { bb: [7.2, 11.8], tb: [69.9, 80.5] }, // Interpolasi
        14: { bb: [7.4, 12.1], tb: [71.0, 81.7] }, // Interpolasi
        15: { bb: [7.6, 12.4], tb: [72.0, 83.0] },
        16: { bb: [7.8, 12.7], tb: [73.0, 84.2] }, // Interpolasi
        17: { bb: [7.9, 12.9], tb: [73.9, 85.3] }, // Interpolasi
        18: { bb: [8.1, 13.2], tb: [74.9, 86.5] },
        19: { bb: [8.3, 13.5], tb: [75.8, 87.6] }, // Interpolasi
        20: { bb: [8.4, 13.7], tb: [76.6, 88.6] }, // Interpolasi
        21: { bb: [8.6, 14.0], tb: [77.5, 89.7] }, // Interpolasi
        22: { bb: [8.7, 14.3], tb: [78.3, 90.8] }, // Interpolasi
        23: { bb: [8.9, 14.5], tb: [79.2, 91.8] }, // Interpolasi
        24: { bb: [9.0, 14.8], tb: [80.0, 92.9] }
    }
};

// --- DATABASE KEHAMILAN (Sesuai PDF) ---
const dataKehamilan = {
    8: { bbJanin: "1 gr", bbIbu: "0.5 kg", tbJanin: "4 cm" },
    9: { bbJanin: "2 gr", bbIbu: "0.7 kg", tbJanin: "4 cm" },
    10: { bbJanin: "4 gr", bbIbu: "0.9 kg", tbJanin: "6.5 cm" },
    11: { bbJanin: "7 gr", bbIbu: "1.1 kg", tbJanin: "6.5 cm" },
    12: { bbJanin: "14 gr", bbIbu: "1.4 kg", tbJanin: "9.0 cm" },
    13: { bbJanin: "25 gr", bbIbu: "1.7 kg", tbJanin: "9.0 cm" },
    14: { bbJanin: "45 gr", bbIbu: "2.0 kg", tbJanin: "12.5 cm" },
    15: { bbJanin: "70 gr", bbIbu: "2.3 kg", tbJanin: "12.5 cm" },
    16: { bbJanin: "100 gr", bbIbu: "2.7 kg", tbJanin: "16.0 cm" },
    17: { bbJanin: "140 gr", bbIbu: "3.0 kg", tbJanin: "16.0 cm" },
    18: { bbJanin: "190 gr", bbIbu: "3.4 kg", tbJanin: "20.5 cm" },
    19: { bbJanin: "240 gr", bbIbu: "3.8 kg", tbJanin: "20.5 cm" },
    20: { bbJanin: "300 gr", bbIbu: "4.3 kg", tbJanin: "25.0 cm" },
    21: { bbJanin: "360 gr", bbIbu: "4.7 kg", tbJanin: "25.0 cm" },
    22: { bbJanin: "430 gr", bbIbu: "5.1 kg", tbJanin: "27.5 cm" },
    23: { bbJanin: "501 gr", bbIbu: "5.5 kg", tbJanin: "27.5 cm" },
    24: { bbJanin: "600 gr", bbIbu: "5.9 kg", tbJanin: "30.0 cm" },
    25: { bbJanin: "700 gr", bbIbu: "6.4 kg", tbJanin: "30.0 cm" },
    26: { bbJanin: "800 gr", bbIbu: "6.8 kg", tbJanin: "32.5 cm" },
    27: { bbJanin: "900 gr", bbIbu: "7.2 kg", tbJanin: "32.5 cm" },
    28: { bbJanin: "1.001 gr", bbIbu: "7.4 kg", tbJanin: "35.0 cm" },
    29: { bbJanin: "1.175 gr", bbIbu: "7.7 kg", tbJanin: "35.0 cm" },
    30: { bbJanin: "1.350 gr", bbIbu: "8.1 kg", tbJanin: "37.5 cm" },
    31: { bbJanin: "1.501 gr", bbIbu: "8.4 kg", tbJanin: "37.5 cm" },
    32: { bbJanin: "1.675 gr", bbIbu: "8.8 kg", tbJanin: "40.0 cm" },
    33: { bbJanin: "1.825 gr", bbIbu: "9.1 kg", tbJanin: "40.0 cm" },
    34: { bbJanin: "2.001 gr", bbIbu: "9.5 kg", tbJanin: "42.5 cm" },
    35: { bbJanin: "2.160 gr", bbIbu: "10.0 kg", tbJanin: "42.5 cm" },
    36: { bbJanin: "2.340 gr", bbIbu: "10.4 kg", tbJanin: "45.0 cm" },
    37: { bbJanin: "2.591 gr", bbIbu: "10.5 kg", tbJanin: "45.0 cm" },
    38: { bbJanin: "2.775 gr", bbIbu: "11.0 kg", tbJanin: "47.5 cm" },
    39: { bbJanin: "3.001 gr", bbIbu: "11.3 kg", tbJanin: "47.5 cm" },
    40: { bbJanin: "3.250 gr", bbIbu: "11.6 kg", tbJanin: "50.0 cm" },
    41: { bbJanin: "3.501 gr", bbIbu: "12.0 kg", tbJanin: "50.0 cm" },
    42: { bbJanin: "4.001 gr", bbIbu: "12.4 kg", tbJanin: "52.5 cm" },
    43: { bbJanin: "4.501 gr", bbIbu: "12.7 kg", tbJanin: "52.5 cm" }
};

// --- LOGIKA INISIALISASI (LANDING PAGE) ---
const carousel = document.getElementById('carousel');
if (carousel) {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function moveSlide(n) {
        slideIndex += n;
        if (slideIndex >= totalSlides) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = totalSlides - 1; }
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -slideIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    // Auto slide landing page
    setInterval(() => { moveSlide(1); }, 4000);
}

// --- LOGIKA INISIALISASI (APP PAGE) ---
if (document.getElementById('umur')) {
    // Set Default Date hari ini untuk input pengecekan
    const today = new Date();
    const cekD = document.getElementById('cek_d');
    const cekM = document.getElementById('cek_m');
    const cekY = document.getElementById('cek_y');

    if(cekD && cekM && cekY) {
        cekD.value = today.getDate();
        cekM.value = today.getMonth(); 
        cekY.value = today.getFullYear();
    }
}

// --- FUNGSI UPDATE DISPLAY SLIDER ---
// Agar angka di sebelah slider berubah saat digeser
window.updateUmurDisplay = function(val) {
    const display = document.getElementById('umur-display');
    if(display) display.innerText = val;
}

// --- FUNGSI NAVIGASI TABS ---
window.switchTab = function(tabId) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    const btns = document.querySelectorAll('.tab-btn');
    if(tabId==='pertumbuhan') btns[0].classList.add('active'); 
    else btns[1].classList.add('active');
}

// ===========================================
// FITUR 1: LOGIKA PERTUMBUHAN ANAK
// ===========================================

window.tampilkanReferensi = function() {
    // 1. Ambil Gender dari Radio Button
    const genderEl = document.querySelector('input[name="gender"]:checked');
    if(!genderEl) return;
    const gender = genderEl.value;
    
    // 2. Ambil Umur dari Slider
    const umur = document.getElementById('umur').value;

    // 3. Cek Database (PENTING: Cegah Error Undefined)
    if (!dataPertumbuhan[gender] || !dataPertumbuhan[gender][umur]) {
        alert("Maaf, data untuk bulan ini belum tersedia di database.");
        return;
    }
    
    const standar = dataPertumbuhan[gender][umur];

    // 4. Tampilkan Tabel Referensi
    document.getElementById('label-umur').innerText = umur + " Bulan";
    document.getElementById('ref-bb').innerText = standar.bb[0] + " - " + standar.bb[1] + " kg";
    document.getElementById('ref-tb').innerText = standar.tb[0] + " - " + standar.tb[1] + " cm";

    // 5. Ganti Tampilan ke Step 2 (Input Data)
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    document.getElementById('hasil-anak').style.display = 'none';
}

window.resetForm = function() {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
    
    // Kosongkan input
    document.getElementById('berat').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('kepala').value = '';
    document.getElementById('hasil-anak').style.display = 'none';
}

window.hitungStatus = function() {
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'laki';
    
    const umur = document.getElementById('umur').value;
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const kepala = document.getElementById('kepala').value;

    if (isNaN(berat) || isNaN(tinggi)) {
        alert("Mohon masukkan angka Berat Badan dan Tinggi Badan.");
        return;
    }
    
    // Ambil standar (Pastikan data ada)
    const standar = dataPertumbuhan[gender][umur];
    if(!standar) { alert("Data standar tidak ditemukan."); return; }

    const resultBox = document.getElementById('hasil-anak');

    // -- Helper Function Status BB --
    function getStatusBB(val, min, max) {
        if (val < min) return `<span style='color:#c0392b; font-weight:bold;'><i class="fa-solid fa-circle-xmark icon-danger"></i> Kurang (Underweight)</span>`;
        if (val > max) return `<span style='color:#f39c12; font-weight:bold;'><i class="fa-solid fa-triangle-exclamation icon-warning"></i> Berlebih (Overweight)</span>`;
        return `<span style='color:#27ae60; font-weight:bold;'><i class="fa-solid fa-circle-check icon-ideal"></i> Ideal (Normal)</span>`;
    }
    
    // -- Helper Function Status TB --
    function getStatusTB(val, min, max) {
        if (val < min) return `<span style='color:#c0392b; font-weight:bold;'><i class="fa-solid fa-circle-xmark icon-danger"></i> Pendek (Stunted Risk)</span>`;
        if (val > max) return `<span style='color:#f39c12; font-weight:bold;'><i class="fa-solid fa-triangle-exclamation icon-warning"></i> Tinggi</span>`;
        return `<span style='color:#27ae60; font-weight:bold;'><i class="fa-solid fa-circle-check icon-ideal"></i> Ideal (Normal)</span>`;
    }

    const statusBB = getStatusBB(berat, standar.bb[0], standar.bb[1]);
    const statusTB = getStatusTB(tinggi, standar.tb[0], standar.tb[1]);
    
    // Logic Lingkar Kepala
    let infoKepala = "";
    if (kepala) {
        infoKepala = `
        <div class="result-divider"></div>
        <div class="result-item">
            <p style="margin-bottom:5px;"><strong>Lingkar Kepala (${kepala} cm):</strong></p>
            <span style="color:#7f8c8d;"><i class="fa-solid fa-ruler"></i> Data Dicatat (Cek KMS)</span>
        </div>`;
    }

    resultBox.style.display = 'block';
    
    // Output HTML
    resultBox.innerHTML = `
        <h3>Hasil Analisis</h3>
        <p style="color:#777; margin-bottom:20px;">${gender === 'laki' ? 'Laki-laki' : 'Perempuan'}, ${umur} Bulan</p>
        
        <div class="result-item">
            <p style="margin-bottom:5px;"><strong>Berat Badan (${berat} kg):</strong></p>
            ${statusBB}
        </div>
        
        <div class="result-divider"></div>
        
        <div class="result-item">
            <p style="margin-bottom:5px;"><strong>Tinggi Badan (${tinggi} cm):</strong></p>
            ${statusTB}
        </div>
        
        ${infoKepala}
        
        <hr style="margin-top:20px;">
        <p style="font-size:0.9em; text-align:center;"><em>Segera konsultasikan dengan Bidan Desa jika hasil menunjukan tanda "Kurang" atau "Stunted Risk".</em></p>
    `;
    renderChart(gender, parseInt(umur), berat);
}

// ===========================================
// FITUR 2: LOGIKA KALENDER KEHAMILAN
// ===========================================

window.hitungKehamilan = function() {
    // 1. Ambil Input HPHT
    const d1 = parseInt(document.getElementById('hpht_d').value);
    const m1 = parseInt(document.getElementById('hpht_m').value);
    const y1 = parseInt(document.getElementById('hpht_y').value);

    // 2. Ambil Input Cek
    const d2 = parseInt(document.getElementById('cek_d').value);
    const m2 = parseInt(document.getElementById('cek_m').value);
    const y2 = parseInt(document.getElementById('cek_y').value);

    // 3. Validasi
    if (!d1 || !y1 || !d2 || !y2) { alert("Mohon lengkapi semua kolom tanggal."); return; }
    if (y1 < 2024 || y2 < 2024) { alert("Mohon masukkan Tahun minimal 2024 (Format Ribuan)."); return; }
    if (y1 > 3000 || y2 > 3000) { alert("Tahun tidak valid."); return; }

    // Buat Object Date (Month di JS mulai dari 0)
    const hpht = new Date(y1, m1, d1);
    const cek = new Date(y2, m2, d2);

    if (cek < hpht) { alert("Tanggal cek tidak boleh sebelum HPHT."); return; }

    // 4. Hitung Usia
    const diffTime = Math.abs(cek - hpht);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const usiaMinggu = Math.floor(diffDays / 7);
    const sisaHari = diffDays % 7;
    
    // 5. Cari Data Statistik
    const stats = dataKehamilan[usiaMinggu];
    
    // 6. Hitung HPL (+280 hari)
    const hpl = new Date(hpht); 
    hpl.setDate(hpl.getDate() + 280); 

    let contentData = "";
    const resultBox = document.getElementById('hasil-hamil');

    if (stats) {
        // TAMPILAN TABEL SESUAI REQUEST USER
        contentData = `
            <table class="result-table">
                <tr>
                    <td>Berat Badan Janin<br><strong>${stats.bbJanin}</strong></td>
                </tr>
                <tr>
                    <td>Tinggi Badan Janin<br><strong>${stats.tbJanin}</strong></td>
                </tr>
                <tr>
                    <td>Kenaikan Berat Badan Ibu<br><strong>${stats.bbIbu}</strong></td>
                </tr>
            </table>`;
    } else {
        if (usiaMinggu < 8) {
             contentData = "<p class='info-text' style='margin-top:20px;'>Usia kehamilan awal (< 8 minggu). Grafik fisik janin belum tersedia.</p>";
        } else if (usiaMinggu > 43) {
             contentData = "<p class='info-text' style='margin-top:20px; color:red;'>Usia kehamilan melewati 43 minggu. Segera periksa ke Dokter!</p>";
        } else {
             contentData = "<p class='info-text' style='margin-top:20px;'>Data spesifik minggu ini tidak tersedia.</p>";
        }
    }

    resultBox.style.display = 'block';
    
    // Output HTML
    resultBox.innerHTML = `
        <h3>Usia Kehamilan</h3>
        <h1 style="color:var(--primary-color); font-size:2em; margin:10px 0;">${usiaMinggu} <span style="font-size:0.5em; color:#777;">Minggu</span></h1>
        <p style="color:#777;">Lebih ${sisaHari} Hari</p>
        
        <div style="background:var(--accent-color); padding:10px; border-radius:8px; margin-top:20px;">
            <p style="text-align:center; font-weight:bold; color:var(--secondary-color); margin-bottom:0;">Statistik Perkembangan</p>
            ${contentData}
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#e8f6f3; border-radius:8px; color:#16a085; text-align:center;">
            <strong>Hari Perkiraan Lahir</strong><br>
            <span style="font-size:1.2em; font-weight:bold;">${hpl.toLocaleDateString('id-ID', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}</span>
        </div>
    `;
}

// ============================================
// 1. LOGIKA PWA (INSTALL & SERVICE WORKER)
// ============================================

// Mendaftarkan Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((reg) => console.log('Service Worker terdaftar!', reg))
            .catch((err) => console.log('Gagal daftar SW:', err));
    });
}

// Logika Tombol Install Manual
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block'; // Munculkan tombol
});

installBtn.addEventListener('click', (e) => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User menginstall aplikasi');
        }
        deferredPrompt = null;
    });
});

// ============================================
// 2. LOGIKA CHART.JS (INOVASI GRAFIK)
// ============================================
let myChart = null; // Variabel global untuk chart

function renderChart(gender, umurInput, beratInput) {
    const ctx = document.getElementById('growthChart').getContext('2d');
    document.getElementById('chart-wrapper').style.display = 'block';

    // 1. Siapkan Data Garis Min & Max (KMS) 0-24 Bulan
    // Kita ambil data dari object dataPertumbuhan dan ubah jadi Array
    const labels = []; // 0, 1, 2... 24
    const dataMin = [];
    const dataMax = [];
    
    // Loop 0-24 untuk membentuk garis kurva
    for(let i=0; i<=24; i++) {
        labels.push(i);
        // Pastikan data ada (jika pakai Grid tombol non-interpolasi, ambil data terdekat atau null)
        // Agar grafik mulus, sebaiknya data JSON lengkap 0-24 (interpolasi)
        // Tapi jika pakai data bolong, Chart.js bisa handle (akan putus garisnya, atau connect gaps)
        if(dataPertumbuhan[gender][i]) {
            dataMin.push(dataPertumbuhan[gender][i].bb[0]);
            dataMax.push(dataPertumbuhan[gender][i].bb[1]);
        } else {
            // Fallback sederhana jika data bolong: ambil rata-rata tetangga (simple interpolation logic)
            // Atau biarkan null agar garis putus
            dataMin.push(null); 
            dataMax.push(null);
        }
    }

    // 2. Siapkan Data Posisi Anak (Hanya 1 titik)
    const dataAnak = new Array(25).fill(null); // Kosongkan semua
    dataAnak[umurInput] = beratInput; // Isi hanya di bulan si anak

    // 3. Hapus Chart lama jika ada (agar tidak tumuk)
    if(myChart) {
        myChart.destroy();
    }

    // 4. Buat Chart Baru
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Posisi Anak',
                    data: dataAnak,
                    backgroundColor: '#1E6F75',
                    borderColor: '#1E6F75',
                    pointRadius: 8, // Titik besar
                    pointHoverRadius: 10,
                    showLine: false // Jangan tarik garis, cuma titik
                },
                {
                    label: 'Batas Atas (Ideal)',
                    data: dataMax,
                    borderColor: 'rgba(39, 174, 96, 0.5)', // Hijau transparan
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    fill: '+1', // Fill area antara garis ini dan bawahnya
                    pointRadius: 0,
                    tension: 0.4 // Garis melengkung halus
                },
                {
                    label: 'Batas Bawah (Ideal)',
                    data: dataMin,
                    borderColor: 'rgba(39, 174, 96, 0.5)',
                    backgroundColor: 'transparent',
                    fill: false,
                    pointRadius: 0,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'Berat Badan (kg)' },
                    suggestedMin: 0,
                    suggestedMax: 15
                },
                x: {
                    title: { display: true, text: 'Umur (Bulan)' }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Grafik Pertumbuhan Anak'
                },
                legend: {
                    labels: { boxWidth: 10 }
                }
            }
        }
    });
}

