//use strict

const items = document.querySelectorAll('.images');
const icons = document.querySelectorAll('.images a');
const addOrder = document.querySelectorAll('.add-to-cart'); 

const overlay = document.querySelector('.overlay');

const cancelHamburger = document.querySelector('.cancel');
const addFrameContainer = document.querySelector('.add-frame-container');




for(let i = 0; i< items.length; i++){
    // console.log(items[i]);
    items[i].addEventListener('mouseenter', ()=>{
        // console.log([i], items[i]);
        // console.log([i], icons[i]);
        icons[i].classList.add('active');
    })
    items[i].addEventListener('mouseleave', ()=>{
        // console.log([i], items[i]);
        // console.log([i], icons[i]);
        icons[i].classList.remove('active');
    })

}

//Add to cart



for(let i =0; i< addOrder.length; i++){
    addOrder[i].addEventListener('click', ()=>{
        console.log('add');
        addFrameContainer.classList.add('show');
        overlay.classList.add('active');


    })
}



cancelHamburger.addEventListener('click',()=>{
    console.log('closed');
    // addFrameContainer.classList.add('active');
    overlay.classList.remove('active');
    addFrameContainer.classList.add('active');
})

// const addToCart = document.querySelector('.add-to-cart');

// addToCart.addEventListener('click', ()=>{
//     console.log('cart updated');
// })

// for(let j = 0; j< icons.length; j++){
//     console.log(icons[j]);
//     icons[j].classList.toggle('active');
// }

