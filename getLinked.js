const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const cancel = document.querySelector('.cancel');
const menu = document.querySelector('.mobile_menu');


hamburger.addEventListener('click', () =>{
  menu.classList.remove('hide');
  body.style.overflow = 'hidden'
});
cancel.addEventListener('click', () =>{
  menu.classList.add('hide');
  body.style.overflow = 'scroll';
});

menu.addEventListener('click', (e) => {
  if(e.target.tagName == 'A' ) {
    menu.classList.add('hide')
    body.style.overflow = 'scroll';
  }
})

document.addEventListener('click', (e) => {
  if(e.target.parentElement.tagName == 'DT') {
   let minus = e.target.parentElement.querySelector('.minus')
   minus.classList.add('select');
   let sibling = e.target.parentElement.nextElementSibling;
   sibling.classList.add('select');
 let ps = document.querySelectorAll('dd');
 let Ms = document.querySelectorAll('.minus');
 
   Ms.forEach(m => {
    if(m.classList.contains('hide') && !m.classList.contains('select')) {
     m.classList.add('hide')
    } else {
      m.classList.toggle('hid')
      m.classList.remove('select');
    }
  })
   ps.forEach(p => {
    if(p.classList.contains('hid') && !p.classList.contains('select')) {
     p.classList.add('hid')
    } else {
      p.classList.toggle('hid')
      p.classList.remove('select');
    }
  })
  }
});



/*  register js  */

let register = document.getElementById('register');
let successContainer = document.querySelector('.successful');
let backBtn = document.querySelector('.backBtn');


register.addEventListener('click', (e) => {
  e.preventDefault();
  successContainer.style.display = 'flex';
  window.scrollTo(0,0);
  body.style.overflow = 'hidden';
});


backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  successContainer.style.display = 'none';
  body.style.overflow = 'scroll';
});


