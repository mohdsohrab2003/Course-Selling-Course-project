// change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY>100)
})


// show/hide of answer in faqs
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        //change icons 
        const icons=faq.querySelector('.faqs-icon i');
        if(icons.className==='uil uil-plus'){
            icons.className="uil uil-minus";
        }
        else{
            icons.className="uil uil-plus"
        }
    })
})

// swiper testimonial students
var swiper = new Swiper(".mySwiper", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoint:{
        768:{
            slidesPerView:2
        }
    }
  });

  //show/hide nav 
  let menu = document.querySelector(".nav_menu");
  let menubtn = document.querySelector("#open-menu-btn");
  let closebtn = document.querySelector("#close-menu-btn");

  menubtn.addEventListener('click',() =>{
    menu.style.display= "flex";
    closebtn.style.display= "inline-block";
    menubtn.style.display= "none";

  })

//   close navbtn
  let closeNav = () =>{
    menu.style.display="none";
    closebtn.style.display="none";
    menubtn.style.display="inline-block";
  }
    closebtn.addEventListener('click',closeNav);

  // function for contact us page
  // function sendEmail(){
  //   Email.send({
  //     Host : "smtp.gmail.com",
  //     Username : "ansarizakir701@gmail.com",
  //     Password : "Mohammad@786",
  //     To : 'ansarizakir701@gmail.com',
  //     From : document.getElementById("Email").value,
  //     Subject : "New Contact for Enquiry",
  //     Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );
  // }

//blog faqs:
const blog_faqs=document.querySelectorAll('.blog-faqs');
blog_faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        //change icons 
        const icons=faq.querySelector('.faqs-icon i');
        if(icons.className==='uil uil-plus'){
            icons.className="uil uil-minus";
        }
        else{
            icons.className="uil uil-plus"
        }
    })
})