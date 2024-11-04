let index = 0;

    function showSlide(n) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        index = (n + totalSlides) % totalSlides; // 確保索引在範圍內
        slides.style.transform = 'translateX(' + (-index * 100) + '%)'; // 滑動效果
    }

    document.getElementById('prevBtn').onclick = function() {
        showSlide(index - 1);
    };

    document.getElementById('nextBtn').onclick = function() {
        showSlide(index + 1);
    };

    // 自動播放
    setInterval(() => {
        showSlide(index + 1);
    }, 6000); // 每3秒自動切換