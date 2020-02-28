const signInButton = document.querySelector('#signInButton')
const modalContent = document.querySelector('.modal-content')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const toggle = document.querySelector('#toggle')
const body = document.querySelector('body')

signInButton.addEventListener('click',()=>{


    modalContent.classList.remove('hide')

})

close.addEventListener('click',()=>{

  
  modalContent.classList.add('hide')  

})


window.addEventListener('click', (e)=>{

  
  //console.log(e.target)
  if(e.target == modalContainer){

    modalContent.classList.add('hide')  
  }


})


toggle.addEventListener('click',()=>{


  body.classList.toggle('show-nav')



})
