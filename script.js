const menu = document.querySelector('.hamburger-nav')
const links = document.querySelector('.menu-links')


menu.addEventListener('click', () => {
   links.classList.toggle('change')
    menu.classList.toggle('change')
})

var php = function(){
    document.querySelector(".php").className = "php1";
  };
  var css = function(){
    document.querySelector(".css").className = "css1";
  };
  var htm = function(){
  document.querySelector(".htm").className = "htm1";  
  };
  var jav = function(){
  document.querySelector(".javascript").className = "javascript1";  
  };
  setTimeout(php,1000);
  setTimeout(css,3000);
  setTimeout(htm,5000);
  setTimeout(jav,7000);



  // Parallax
  const parallax_el = document.querySelectorAll(".parallax");

  let xValue = 0,
      yValue = 0;
  
  let rotateDegree = 0;

  function update(cursorPosition){
    parallax_el.forEach(el => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      let speedz = el.dataset.speedz;
      let rotateSpeed = el.dataset.roatation;


      let isInLeft =
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
      let zValue = 
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0;

      el.style.transform = `
      perspective(9300px) translateZ(${zValue * speedz})
      rotateY(${rotateDegree}deg)
      translateX(calc(-50% + ${
        -xValue * speedx}px)) 
      translateY(calc(-50% + ${yValue * speedy}px)) `;
    } );
  };

  update(1);

   window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;


    rotateDegree = (xValue / (window.innerWidth / 2)) * 10;
   
    update(e.clientX);

   });



  //  GSAP Animation

  // let timeline = gsap.timeline();

  // parallax_el.forEach(el =>{
  //   timeline.from(".brush-img", {
  //   top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
  //   duration: 0.1,
  // });
  // })

  


 