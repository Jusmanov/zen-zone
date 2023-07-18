document.addEventListener("DOMContentLoaded", function () {
  // Hero slideshow functionality
  const slides = Array.from(document.querySelectorAll(".slideshow .slide"));
  const dots = Array.from(document.querySelectorAll(".dots-navigation .dot"));

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Guided meditation video gallery functionality
  const videoGallery = document.querySelector(".video-gallery");
  const gallerySlides = Array.from(document.querySelectorAll(".gallery-slide"));
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentVideo = Math.floor(gallerySlides.length / 2); // Set the middle video as the initial active video

  function showVideo(index) {
    gallerySlides.forEach((slide) => {
      slide.classList.remove("active");
    });

    gallerySlides[index].classList.add("active");
    currentVideo = index;
  }

  function shiftVideosLeft() {
    const lastSlide = gallerySlides.pop();
    gallerySlides.unshift(lastSlide);
    videoGallery.innerHTML = '';
    gallerySlides.forEach(slide => {
      videoGallery.appendChild(slide);
    });
    currentVideo = (currentVideo + gallerySlides.length - 1) % gallerySlides.length;
    showVideo(currentVideo);
  }

  function shiftVideosRight() {
    const firstSlide = gallerySlides.shift();
    gallerySlides.push(firstSlide);
    videoGallery.innerHTML = '';
    gallerySlides.forEach(slide => {
      videoGallery.appendChild(slide);
    });
    currentVideo = (currentVideo + 1) % gallerySlides.length;
    showVideo(currentVideo);
  }

  leftArrow.addEventListener("click", shiftVideosLeft);
  rightArrow.addEventListener("click", shiftVideosRight);

  showVideo(currentVideo); // Activate the initial active video
});










const timerDropdown = document.getElementById('timer-dropdown');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const countdownDisplay = document.querySelector('.countdown-display');
let countdown;
let isTimerRunning = false;
let isAlarmPlaying = false;
const alarmSound = new Audio('SlowMorning.mp3');

function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;

  countdown = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownDisplay.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      handleTimerEnd();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdown);
  isTimerRunning = false;
}

function stopTimer() {
  clearInterval(countdown);
  isTimerRunning = false;
  stopButton.style.display = 'none';
  if (isAlarmPlaying) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    isAlarmPlaying = false;
  }
}

function handleTimerEnd() {
  const notification = new Notification('Meditation Timer', {
    body: 'Time is up!',
  });

  alarmSound.play();
  isAlarmPlaying = true;
  stopButton.style.display = 'block';
}

startButton.addEventListener('click', function() {
  if (!isTimerRunning) {
    const duration = parseInt(timerDropdown.value);
    startTimer(duration);
    isTimerRunning = true;
  }
});

pauseButton.addEventListener('click', function() {
  if (isTimerRunning) {
    pauseTimer();
  }
});

stopButton.addEventListener('click', function() {
  if (isTimerRunning) {
    stopTimer();
  }
});






const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein"
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu"
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    text: "The power of imagination makes us infinite.",
    author: "John Muir"
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr."
  }
];


const generateButton = document.getElementById('generate-button');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const stars = document.querySelectorAll('.star');

let currentQuoteIndex = -1;

function generateRandomQuote() {
  // Generate a random quote index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Set the current quote index to the generated index
  currentQuoteIndex = randomIndex;

  // Get the quote object at the current index
  const quote = quotes[currentQuoteIndex];

  // Display the quote and author
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `- ${quote.author}`;

  // Reset the star rating
  resetStarRating();

  // Show the star rating
  const ratingStars = document.querySelector('.rating-stars');
  ratingStars.style.display = 'block';
}

function resetStarRating() {
  stars.forEach(star => star.classList.remove('filled'));
}

generateButton.addEventListener('click', generateRandomQuote);
stars.forEach(star => star.addEventListener('click', handleStarClick));
stars.forEach(star => star.addEventListener('mouseover', handleStarHover));
stars.forEach(star => star.addEventListener('mouseout', handleStarHover));

function handleStarClick() {
  const clickedStarIndex = Array.from(stars).indexOf(this);
  stars.forEach((star, index) => {
    if (index <= clickedStarIndex) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}

function handleStarHover() {
  const hoveredStarIndex = Array.from(stars).indexOf(this);
  stars.forEach((star, index) => {
    if (index <= hoveredStarIndex) {
      star.classList.add('hovered');
    } else {
      star.classList.remove('hovered');
    }
  });
}
