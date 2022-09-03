window.addEventListener("DOMContentLoaded", () => {

  document.querySelector('.timeDate').textContent = new Date().getFullYear();

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 10,
      speed: 1500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        860: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
        1300: {
          slidesPerView: 10,
          spaceBetween: 70,
        },
      }
    })
    const swiper_3 = new Swiper('.swiper_clients', {
      direction: 'horizontal',
      // loop: true,
      slidesPerView: 10,
      speed: 1500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        860: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
        1300: {
          slidesPerView: 10,
          spaceBetween: 70,
        },
      }
    })

    const swiper_2 = new Swiper('.swiperMain', {
        loop: true,
        scrollbar: false,
        speed: 1500,
        pagination: {
          el: '.swiper_pagination',
        },
        navigation: {
          nextEl: '.swiper_button_next',
          prevEl: '.swiper_button_prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }
    })

  setInterval(() => {
    if(window.pageYOffset > 800){
        document.querySelector('.sci').classList.add('activeSci');
    } else {
      document.querySelector('.sci').classList.remove('activeSci');
    }
    if(window.pageYOffset > 200){
      document.querySelector('.arrowScrolling').classList.add('scroller');
    } else {
      document.querySelector('.arrowScrolling').classList.remove('scroller');
    }
    
  }, 200)
  

  async function databaseSlider(){
    let api = './../json/slider_db.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      // document.querySelector('.mainSliderServices').innerHTML += `
      //     <div class="swiper-slide mainSlide width_content">
      //         <video src="./video/services/${el.url}" autoplay loop muted></video>
      //         <div class="content_slider_check">
      //           <h1>${el.title}</h1>
      //           <p>${el.descr}</p>
      //           <p class="priceServices">${el.price}</p>
      //         </div>
      //     </div>
      // `;
    })
  }

  async function databaseSlider_2(){
    let api = './../json/slider_db_2.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.slider_technology').innerHTML += `
          <div class="swiper-slide slideTechnology">
            <img src="./img/technology/${el.url}">
          </div>
      `;
    })
  }

  async function databaseSlider_3(){
    let api = './../json/slider_db_3.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.swiper_clients_wrapper').innerHTML += `
          <div class="swiper-slide slide_client">
            <img src="./img/clients/${el.url}">
          </div>
      `;
    })
  }

  async function cards(){
    let api = './../json/cards.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.cards_products').innerHTML += `
          <div class="cardProject">
            <h3 class="title">${el.title}</h3>
            <div class="card_job">
                <p>${el.type} </p>
            </div>
            <a href="#" class="moreInfo" onclick="return modalSettingSite();">
                ПОДРОБНЕЕ
            </a>
            <img src="./img/cards/${el.image}">
          </div>
      `;
    })
  }

  setTimeout(() => {
      databaseSlider();
      databaseSlider_2();
      databaseSlider_3();
      cards();
  }, 200)
})

function menuToggle(){
  const toggle = document.querySelector(".toggle");
  const section = document.querySelector(".header_section");
  toggle.classList.toggle("active");
  section.classList.toggle("active");
}

function modalSettingSite(){

  document.querySelector('.messageTechEnginering').classList.toggle('active');

  return false;
}

function scrollingToCheckHeight(){
  if(window.pageYOffset > 200){
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 900)
  }
}

function openModal(targetMod, modal){
  let targetModal = document.querySelector(targetMod);
  let modalWindow = document.querySelector(modal);
  targetModal.addEventListener('click', () => {
    modalWindow.classList.toggle('active');
  })
}

// contacts
openModal('.contacts_open','.open_modal_contact');
openModal('.open_contact_footer','.open_modal_contact');
openModal('.close_modal_contact','.open_modal_contact');
// form
openModal('.close_modal_send','.open_modal_send');
openModal('.open_send_footer','.open_modal_send');
openModal('.form_open','.open_modal_send');

// send mail
let errors = 0;
async function formSend(e){
  e.preventDefault();
  let inputName = document.querySelector('.inputName')
  let inputEmail = document.querySelector('.inputEmail')
  let inputService = document.querySelector('.inputService')
  let inputMessage = document.querySelector('.inputMessage')

  let dataEl = new FormData();

  dataEl.append('name', inputName.value);
  dataEl.append('email', inputEmail.value);
  dataEl.append('service', inputService.value);
  dataEl.append('message', inputMessage.value);

  if(
   inputName.value.trim() === '' ||
   inputEmail.value.trim() === '' ||
   inputService.value == 'Выберите вид услуги' ||
   inputMessage.value.trim() === ''
  ){
    errors++;
  } else {
    errors = 0
  }

  if(errors == 0){
    let send = await fetch('./../phpmailer/sendmail.php', {
      method: 'POST',
      body: dataEl
    })
    alert("dfd")
    e.target.classList.remove('error')
  } else{
    e.target.classList.add('error')
  }
  console.log(errors);
}

document.querySelector('.send_data').addEventListener('submit', e => {
  formSend(e)
})

function validate(elemInput, elemError, message){
  let inputEl = document.querySelector(elemInput)
  let errorEl = document.querySelector(elemError)
  if(!!inputEl && inputEl.value.trim() === '' || inputEl.value === 'Выберите вид услуги'){
    errorEl.innerHTML = `<span>${message}</span>`
    errorEl.classList.add('error')
    inputEl.classList.add('error')
  } else{
    errorEl.classList.remove('error')
    inputEl.classList.remove('error')
  }
}