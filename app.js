const btn = document.querySelectorAll('.button');
const btnDot = document.querySelectorAll('.btn-dot');
const vid = document.querySelector('.vid')

var burger = document.querySelector('.burger-menu');
var links = document.querySelector('.links');

const ulList = document.querySelectorAll('li');

// button mouse movement function ----------------------------------
// mouse in 
btn.forEach((button) => {
  button.addEventListener('mouseover', () => {
    btn.forEach((button) => {

      for (var i = 0; i < btnDot.length; i++) {
        // Add the class margin to the individual elements.
        btnDot[i].classList.add('active-dot');
        
      };
    });
  });
});

// mouse out ----------------------------------
btn.forEach((button) => {
  button.addEventListener('mouseout', () => {
    btn.forEach((button) => {

      for (var i = 0; i < btnDot.length; i++) {
        // Add the class margin to the individual elements.
        btnDot[i].classList.remove('active-dot');
        
      };
    });
  });
});

// vid play function ----------------------------------
let observer = new IntersectionObserver((entries, observer) => {
  // logic
  entries.forEach(entries => {
    if(entries.isIntersecting){
      vid.play();
    }
  })
})
observer.observe(vid);


// image autoplay slide ----------------------------------
var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000);



// video reveal -----------------------------
window.addEventListener('scroll', reveal);

function reveal() {
  var vidreveal = document.querySelectorAll('.reveal');

  for( var i = 0; i < vidreveal.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = vidreveal[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealtop) {
      vidreveal[i].classList.add('active');

    } else {
      vidreveal[i].classList.remove('active');

    }
  }
  
}

// burger menu -----------------------------

burger.addEventListener('click', () => {
  links.classList.toggle('active');
  if(links.classList.contains('active')){
    document.body.style.overflow = 'auto';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  };
});


// ul list function-----------------------------

for( var i = 0; i < ulList.length; i++){
  console.log(ulList[i]);
  ulList[i].addEventListener('click', () => {
    links.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  });
};