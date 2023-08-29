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
const button = document.querySelector("button")
// const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function() {
    modal.close()
}

//Script opção 2 de modal
const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

const modal2 = document.querySelector('.modal-container2')

function openModal() {
    modal.classList.add('active')
  }
  
  function closeModal() {
    modal.classList.remove('active')
  }
  