// Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    fetch('data_edukasi.json')
        .then(response => response.json())
        .then(data => renderMateri(data.modules))
        .catch(error => console.error('Gagal memuat materi:', error));
});

// ... (Bagian atas edukasi.js tetap sama) ...

function renderMateri(modules) {
    const container = document.getElementById('materi-container');
    container.innerHTML = ''; 

    modules.forEach((modul, index) => {
        const card = document.createElement('div');
        card.className = 'edu-card';
        
        const thumbUrl = `https://img.youtube.com/vi/${modul.youtube_id}/hqdefault.jpg`;
        const videoUrl = `https://www.youtube.com/watch?v=${modul.youtube_id}`;

        card.innerHTML = `
            <div class="edu-card-header" onclick="toggleMateri(this)">
                <div class="edu-title">
                    <h4>${modul.title}</h4>
                    <span>${modul.subtitle}</span>
                </div>
                <i class="fa-solid fa-chevron-down edu-icon"></i>
            </div>
            <div class="edu-content">
                
                <div class="edu-img-wrapper" onclick="openModal('${modul.image}', '${modul.image_desc}')">
                    <img src="${modul.image}" alt="${modul.title}" class="edu-img" onerror="this.src='https://via.placeholder.com/600x300?text=Si-LIMA+Edukasi'">
                    <div class="zoom-icon"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                </div>
                
                <div class="edu-text">
                    ${modul.content.map(p => `<p>${p}</p>`).join('')}
                </div>

                <p style="font-weight:bold; margin-top:15px; margin-bottom:5px;"><i class="fa-brands fa-youtube" style="color:red;"></i> Video Penjelasan:</p>
                <a href="${videoUrl}" target="_blank" class="video-wrapper">
                    <img src="${thumbUrl}" class="video-thumb" alt="Video ${modul.title}">
                    <div class="play-icon"><i class="fa-solid fa-play"></i></div>
                </a>

                <div class="quiz-section">
                    <h5><i class="fa-solid fa-star"></i> Kuis Pemahaman</h5>
                    <div id="quiz-container-${index}"></div>
                </div>
            </div>
        `;

        container.appendChild(card);
        renderQuiz(modul.quiz, index);
    });
}

// Fungsi Buka-Tutup Accordion
function toggleMateri(header) {
    const card = header.parentElement;
    // Tutup yang lain dulu (biar rapi)
    document.querySelectorAll('.edu-card').forEach(c => {
        if(c !== card) c.classList.remove('active');
    });
    // Toggle yang diklik
    card.classList.toggle('active');
}

// Fungsi Render Kuis
function renderQuiz(quizData, moduleIndex) {
    const quizContainer = document.getElementById(`quiz-container-${moduleIndex}`);
    
    quizData.forEach((q, qIndex) => {
        const qBox = document.createElement('div');
        qBox.className = 'quiz-box';
        
        let optionsHTML = '';
        q.options.forEach((opt, optIndex) => {
            optionsHTML += `<div class="quiz-option" onclick="checkAnswer(this, ${optIndex}, ${q.correct}, 'exp-${moduleIndex}-${qIndex}')">${opt}</div>`;
        });

        qBox.innerHTML = `
            <span class="quiz-question">${qIndex+1}. ${q.question}</span>
            <div class="options-group">${optionsHTML}</div>
            <div id="exp-${moduleIndex}-${qIndex}" class="quiz-explanation">
                <strong>💡 Penjelasan:</strong> ${q.explanation}
            </div>
        `;
        quizContainer.appendChild(qBox);
    });
}

// Fungsi Cek Jawaban Kuis
window.checkAnswer = function(element, selected, correct, expId) {
    const parent = element.parentElement;
    // Cegah klik lagi jika sudah dijawab
    if(parent.classList.contains('answered')) return;
    
    parent.classList.add('answered'); // Kunci soal

    if(selected === correct) {
        element.classList.add('correct');
        element.innerHTML += ' <i class="fa-solid fa-check"></i>';
    } else {
        element.classList.add('wrong');
        element.innerHTML += ' <i class="fa-solid fa-xmark"></i>';
        // Tunjukkan jawaban benar
        parent.children[correct].classList.add('correct');
    }

    // Munculkan penjelasan
    document.getElementById(expId).style.display = 'block';
}

function openModal(src, desc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = desc; // Menampilkan deskripsi gambar di bawah
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}