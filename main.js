document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});



var testiomnialData = [
    {
        avatar: "./images/IMG_3064.jpg",
        name: "Alyssia Sharron",
        review: "After a painful breakup, I turned to Tarot Moon Reading for help. Their reconciliation spell brought my ex-partner back into my life, and now we're stronger and more in love than ever before."
    },
    {
        avatar: "./images/IMG_3067.jpg",
        name: "Merilee Beal",
        review: "I was in a stagnant relationship, but after a commitment spell from Tarot Moon, my partner proposed, and we're now happily engaged. Thank you for helping us take the next step!"
    },
    {
        avatar: "./images/IMG_3068.jpg",
        name: "Suzi Lankester",
        review: "Thanks to Psychic and Tarot Moon' lottery spell, I went from struggling to hitting the jackpot! It's been a game-changer for me and my family. Highly recommend!"
    },
    {
        avatar: "./images/IMG_3069.jpg",
        name: "Gaston Cunnow",
        review: "The protection spells cast by Psychic Moon have brought me peace of mind and security during challenging times. Truly miraculous!"
    },
    {
        avatar: "./images/IMG_3070.jpg",
        name: "Heather Alycia",
        review: "Psychic Insights helped me navigate through a difficult period in my life with their compassionate guidance and powerful healing spells. Forever grateful!"
    },
    {
        avatar: "./images/IMG_3071.jpg",
        name: "Montana Linsey",
        review: "ince I had a money spell cast by Psychic Insights, my financial situation has completely turned around. Opportunities seem to find me effortlessly, and my income has seen a significant boost. I'm truly grateful for their assistance in bringing abundance into my life!"
    }, {
        avatar: "./images/IMG_3072.jpeg",
        name: "Marys Lobb",
        review: "After years of searching for true love, I turned to Psychic Insights for help. Their love spell brought the most incredible person into my life, and now I'm happier than I've ever been. I'm forever grateful for their guidance and support in finding my soulmate."
    }]
  var slideHolder = document.querySelector("#slideHolder")
  for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`
  
  const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 500 }
  });
  window.onresize = queryResizer
  queryResizer()
  function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
  }
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.checked = false;
      });
    });
  });

  
 