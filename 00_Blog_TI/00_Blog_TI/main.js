// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

//Script opção 1 de modal
//Na pasta Backup 2

//Inicio do modal post 1
const modal1 = document.querySelector('.modal-container1')

function openModal1() {
  modal1.classList.add('active1')
}

function closeModal1() {
  modal1.classList.remove('active1')
}
//Fim do modal post 1

// ----------------------------------------------------------

//Inicio do modal post 2
const modal2 = document.querySelector('.modal-container2')

function openModal2() {
  modal2.classList.add('active2')
}

function closeModal2() {
  modal2.classList.remove('active2')
}
//Fim do modal post 2

// ----------------------------------------------------------

//Inicio do modal post 3
const modal3 = document.querySelector('.modal-container3')

function openModal3() {
  modal3.classList.add('active3')
}

function closeModal3() {
  modal3.classList.remove('active3')
}
//Fim do modal post 3

// ----------------------------------------------------------

//Inicio do modal post 4
const modal4 = document.querySelector('.modal-container4')

function openModal4() {
  modal4.classList.add('active4')
}

function closeModal4() {
  modal4.classList.remove('active4')
}
//Fim do modal post 4

// ----------------------------------------------------------

//Inicio do modal post 5
const modal5 = document.querySelector('.modal-container5')

function openModal5() {
  modal5.classList.add('active5')
}

function closeModal5() {
  modal5.classList.remove('active5')
}
//Fim do modal post 5

// ----------------------------------------------------------

//Inicio do modal post 6
const modal6 = document.querySelector('.modal-container6')

function openModal6() {
  modal6.classList.add('active6')
}

function closeModal6() {
  modal6.classList.remove('active6')
}
//Fim do modal post 6