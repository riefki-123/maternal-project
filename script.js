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


// --- UTILITY: VALIDASI TANGGAL KETAT (FIX ISU FEBRUARI 31) ---
function isValidDate(day, month, year) {
    // Month di JS 0-11, jadi tidak perlu +1 di sini karena input value kita sesuaikan nanti
    const date = new Date(year, month, day);
    // Cek apakah JS menggeser tanggalnya (misal 31 Feb jadi 3 Mar)
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

// --- LOGIKA UTAMA ---

if (document.getElementById('umur')) {
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

window.updateUmurDisplay = function(val) {
    const display = document.getElementById('umur-display');
    if(display) display.innerText = val;
}

window.switchTab = function(tabId) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    const btns = document.querySelectorAll('.tab-btn');
    if(tabId==='pertumbuhan') btns[0].classList.add('active'); 
    else btns[1].classList.add('active');
}

// ===========================================
// FITUR 1: LOGIKA PERTUMBUHAN ANAK (FIXED)
// ===========================================

window.tampilkanReferensi = function() {
    const genderEl = document.querySelector('input[name="gender"]:checked');
    if(!genderEl) return;
    const gender = genderEl.value;
    const umur = document.getElementById('umur').value;

    if (!dataPertumbuhan[gender] || !dataPertumbuhan[gender][umur]) {
        alert("Maaf, data untuk bulan ini belum tersedia.");
        return;
    }
    
    const standar = dataPertumbuhan[gender][umur];

    document.getElementById('label-umur').innerText = umur + " Bulan";
    document.getElementById('ref-bb').innerText = standar.bb[0] + " - " + standar.bb[1] + " kg";
    document.getElementById('ref-tb').innerText = standar.tb[0] + " - " + standar.tb[1] + " cm";

    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    document.getElementById('hasil-anak').style.display = 'none';
    document.getElementById('btn-export-anak').style.display = 'none';
}

window.resetForm = function() {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
    document.getElementById('berat').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('kepala').value = '';
    document.getElementById('hasil-anak').style.display = 'none';
    document.getElementById('btn-export-anak').style.display = 'none';
    document.getElementById('chart-wrapper').style.display = 'none';
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
    
    const standar = dataPertumbuhan[gender][umur];
    if(!standar) { alert("Data standar tidak ditemukan."); return; }

    const resultBox = document.getElementById('hasil-anak');
    const btnExport = document.getElementById('btn-export-anak');

    // -- LOGIKA SKRINING (BUKAN VONIS) --
    // Menggunakan istilah "Pita Hijau" sesuai KMS
    
    function getStatusBB(val, min, max) {
        if (val < min) return `<span style='color:#c0392b; font-weight:bold;'><i class="fa-solid fa-triangle-exclamation"></i> Resiko Berat Kurang<br><small style='color:#555; font-weight:normal;'>Di bawah Pita Hijau/Standar. Pantau asupan gizi.</small></span>`;
        if (val > max) return `<span style='color:#f39c12; font-weight:bold;'><i class="fa-solid fa-triangle-exclamation"></i> Resiko Berat Lebih<br><small style='color:#555; font-weight:normal;'>Di atas Pita Hijau/Standar.</small></span>`;
        return `<span style='color:#27ae60; font-weight:bold;'><i class="fa-solid fa-circle-check"></i> Pita Hijau (Aman)<br><small style='color:#555; font-weight:normal;'>Pertumbuhan sesuai jalur standar.</small></span>`;
    }
    
    function getStatusTB(val, min, max) {
        if (val < min) return `<span style='color:#c0392b; font-weight:bold;'><i class="fa-solid fa-triangle-exclamation"></i> Resiko Pendek<br><small style='color:#555; font-weight:normal;'>Di bawah standar tinggi badan.</small></span>`;
        if (val > max) return `<span style='color:#f39c12; font-weight:bold;'><i class="fa-solid fa-ruler"></i> Perawakan Tinggi<br><small style='color:#555; font-weight:normal;'>Di atas rata-rata.</small></span>`;
        return `<span style='color:#27ae60; font-weight:bold;'><i class="fa-solid fa-circle-check"></i> Pita Hijau (Aman)<br><small style='color:#555; font-weight:normal;'>Tinggi badan ideal.</small></span>`;
    }

    const statusBB = getStatusBB(berat, standar.bb[0], standar.bb[1]);
    const statusTB = getStatusTB(tinggi, standar.tb[0], standar.tb[1]);
    
    let infoKepala = "";
    if (kepala) {
        infoKepala = `
        <div class="result-divider"></div>
        <div class="result-item compact-item">
            <span class="res-label">Lingkar Kepala:</span>
            <span class="res-value">${kepala} cm</span>
        </div>`;
    }

    resultBox.style.display = 'block';
    btnExport.style.display = 'block'; // Tampilkan tombol download
    
    // TAMPILAN COMPACT (Cocok untuk Screenshot)
    resultBox.innerHTML = `
        <div style="border-bottom: 2px dashed #ccc; padding-bottom:10px; margin-bottom:10px;">
            <h3 style="margin:0; font-size:1.2rem; color:var(--primary-color);">HASIL SKRINING AWAL</h3>
            <span style="font-size:0.85rem; color:#777;">Si-LIMA Karyamukti - ${new Date().toLocaleDateString('id-ID')}</span>
        </div>
        
        <div class="result-grid">
            <div class="res-row">
                <strong>Anak:</strong> ${gender === 'laki' ? 'Laki-laki' : 'Perempuan'}, ${umur} Bulan
            </div>
            
            <div class="result-divider"></div>
            
            <div class="result-item">
                <p><strong>Berat (${berat} kg):</strong></p>
                ${statusBB}
            </div>
            
            <div class="result-divider"></div>
            
            <div class="result-item">
                <p><strong>Tinggi (${tinggi} cm):</strong></p>
                ${statusTB}
            </div>
            
            ${infoKepala}
        </div>
        
        <div style="background:#fff3cd; color:#856404; padding:8px; font-size:0.8rem; margin-top:15px; border-radius:5px;">
            <i class="fa-solid fa-info-circle"></i> <strong>Catatan:</strong> Ini adalah skrining awal berdasarkan standar WHO/Kemenkes. Untuk diagnosa medis (Stunting/Gizi Buruk), silakan validasi ke Bidan Desa/Puskesmas.
        </div>
    `;
    
    // Render Grafik Chart.js
    renderChart(gender, parseInt(umur), berat);
}

// ===========================================
// FITUR 2: LOGIKA KEHAMILAN (FIXED DATE)
// ===========================================

window.hitungKehamilan = function() {
    const d1 = parseInt(document.getElementById('hpht_d').value);
    const m1 = parseInt(document.getElementById('hpht_m').value); // 0-11
    const y1 = parseInt(document.getElementById('hpht_y').value);

    const d2 = parseInt(document.getElementById('cek_d').value);
    const m2 = parseInt(document.getElementById('cek_m').value);
    const y2 = parseInt(document.getElementById('cek_y').value);

    // VALIDASI INPUT KOSONG
    if (!d1 || !y1 || !d2 || !y2) { alert("Mohon lengkapi semua kolom tanggal."); return; }
    
    // VALIDASI TANGGAL KETAT (Pencegahan 31 Februari)
    if (!isValidDate(d1, m1, y1)) {
        alert("Tanggal HPHT tidak valid! Cek kembali jumlah hari pada bulan tersebut.");
        return;
    }
    if (!isValidDate(d2, m2, y2)) {
        alert("Tanggal Pengecekan tidak valid!");
        return;
    }

    if (y1 < 2024 || y2 < 2024) { alert("Tahun minimal 2024."); return; }
    if (y1 > 3000 || y2 > 3000) { alert("Tahun tidak valid."); return; }

    const hpht = new Date(y1, m1, d1);
    const cek = new Date(y2, m2, d2);

    if (cek < hpht) { alert("Tanggal cek tidak boleh sebelum HPHT."); return; }

    const diffTime = Math.abs(cek - hpht);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const usiaMinggu = Math.floor(diffDays / 7);
    const sisaHari = diffDays % 7;
    
    const stats = dataKehamilan[usiaMinggu];
    
    const hpl = new Date(hpht); 
    hpl.setDate(hpl.getDate() + 280); 

    let contentData = "";
    const resultBox = document.getElementById('hasil-hamil');

    if (stats) {
        contentData = `
            <table class="result-table">
                <tr><td>Est. Berat Janin<br><strong>${stats.bbJanin}</strong></td></tr>
                <tr><td>Est. Panjang Janin<br><strong>${stats.tbJanin}</strong></td></tr>
            </table>
            <p style="font-size:0.8rem; color:#777; text-align:center; margin-top:5px;">
                *Estimasi rata-rata. Kondisi asli tergantung gizi Ibu.
            </p>`;
    } else {
        if (usiaMinggu < 8) contentData = "<p class='info-text'>Usia kehamilan awal (< 8 minggu).</p>";
        else contentData = "<p class='info-text'>Data spesifik minggu ini tidak tersedia.</p>";
    }

    resultBox.style.display = 'block';
    
    resultBox.innerHTML = `
        <h3>Usia Kehamilan</h3>
        <h1 style="color:var(--primary-color); font-size:2em; margin:10px 0;">${usiaMinggu} <span style="font-size:0.5em; color:#777;">Minggu</span></h1>
        <p style="color:#777;">+ ${sisaHari} Hari</p>
        
        <div style="background:var(--accent-color); padding:10px; border-radius:8px; margin-top:15px;">
            ${contentData}
        </div>
        
        <div style="margin-top:15px; padding:10px; background:#e8f6f3; border-radius:8px; color:#16a085; text-align:center;">
            <strong>HPL (Hari Perkiraan Lahir)</strong><br>
            <span style="font-size:1.1em; font-weight:bold;">${hpl.toLocaleDateString('id-ID', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}</span>
        </div>
    `;
}

// ===========================================
// FITUR EKSTRA: DOWNLOAD GAMBAR HASIL
// ===========================================
window.downloadHasil = function(elementId, fileName) {
    const element = document.getElementById(elementId);
    
    // Gunakan html2canvas yang sudah diload di HTML
    html2canvas(element, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = fileName + '_' + new Date().getTime() + '.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.9);
        link.click();
    });
}

// ===========================================
// LOGIKA GRAFIK CHART.JS (PITA WARNA)
// ===========================================
let myChart = null; 

function renderChart(gender, umurInput, beratInput) {
    const ctx = document.getElementById('growthChart').getContext('2d');
    document.getElementById('chart-wrapper').style.display = 'block';

    const labels = []; 
    const dataMin = [];
    const dataMax = [];
    
    for(let i=0; i<=24; i++) {
        labels.push(i);
        if(dataPertumbuhan[gender][i]) {
            dataMin.push(dataPertumbuhan[gender][i].bb[0]);
            dataMax.push(dataPertumbuhan[gender][i].bb[1]);
        } else {
            dataMin.push(null); dataMax.push(null);
        }
    }

    const dataAnak = new Array(25).fill(null);
    dataAnak[umurInput] = beratInput;

    if(myChart) myChart.destroy();

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
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    showLine: false 
                },
                {
                    label: 'Pita Hijau (Batas Atas)',
                    data: dataMax,
                    borderColor: 'rgba(39, 174, 96, 0.3)',
                    backgroundColor: 'rgba(39, 174, 96, 0.2)', // Area Hijau
                    fill: '+1',
                    pointRadius: 0,
                    tension: 0.4 
                },
                {
                    label: 'Pita Hijau (Batas Bawah)',
                    data: dataMin,
                    borderColor: 'rgba(39, 174, 96, 0.3)',
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
                y: { title: { display: true, text: 'Berat Badan (kg)' }, suggestedMin: 0, suggestedMax: 15 },
                x: { title: { display: true, text: 'Umur (Bulan)' } }
            },
            plugins: {
                title: { display: true, text: 'Grafik Posisi Pertumbuhan' },
                legend: { labels: { boxWidth: 10 } }
            }
        }
    });
}