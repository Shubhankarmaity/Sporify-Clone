// Spotify Clone JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Play/Pause functionality
    const playPauseBtn = document.getElementById('play-pause');
    let isPlaying = false;
    
    playPauseBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playPauseBtn.classList.remove('fa-circle-play');
            playPauseBtn.classList.add('fa-circle-pause');
        } else {
            playPauseBtn.classList.remove('fa-circle-pause');
            playPauseBtn.classList.add('fa-circle-play');
        }
    });
    
    // Volume control
    const volumeBar = document.querySelector('.volume-bar');
    volumeBar.addEventListener('input', function() {
        // In a real app, this would control audio volume
        console.log('Volume changed to: ' + volumeBar.value);
    });
    
    // Progress bar functionality
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const totalTimeEl = document.querySelector('.total-time');
    
    // Simulate progress update
    setInterval(() => {
        if (isPlaying) {
            const currentVal = parseInt(progressBar.value);
            if (currentVal < 100) {
                progressBar.value = currentVal + 0.1;
                updateProgressTime();
            } else {
                // Reached end, reset to beginning
                progressBar.value = 0;
                updateProgressTime();
            }
        }
    }, 1000);
    
    function updateProgressTime() {
        const currentPercent = parseInt(progressBar.value);
        const totalSeconds = 225; // 3:45 in seconds
        const currentSeconds = Math.floor((currentPercent / 100) * totalSeconds);
        
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        
        currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
    
    // Update progress when clicked
    progressBar.addEventListener('input', updateProgressTime);
    
    // Initialize time display
    totalTimeEl.textContent = '3:45';
    updateProgressTime();
    
    // Navigation options active state
    const navOptions = document.querySelectorAll('.nav-option');
    navOptions.forEach(option => {
        option.addEventListener('click', function() {
            navOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Card hover effect enhancement
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Playlist item click
    const playlistItems = document.querySelectorAll('.playlists li');
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            playlistItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Like button functionality
    const likeBtn = document.querySelector('.fa-heart');
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('liked');
        if (this.classList.contains('liked')) {
            this.style.color = '#1db954';
            this.classList.remove('fa-regular');
            this.classList.add('fa-solid');
        } else {
            this.style.color = '';
            this.classList.remove('fa-solid');
            this.classList.add('fa-regular');
        }
    });
    
    // Next and previous buttons
    const nextBtn = document.querySelector('.fa-forward-step');
    const prevBtn = document.querySelector('.fa-backward-step');
    
    nextBtn.addEventListener('click', function() {
        // In a real app, this would go to the next song
        console.log('Next song');
        progressBar.value = 0;
        updateProgressTime();
    });
    
    prevBtn.addEventListener('click', function() {
        // In a real app, this would go to the previous song
        console.log('Previous song');
        progressBar.value = 0;
        updateProgressTime();
    });
    
    // Initialize first nav option as active
    if (navOptions.length > 0) {
        navOptions[0].classList.add('active');
    }
});