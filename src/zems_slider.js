const zems_slider = (ev) => {
    
    //// slideshow
    let slideIndex = 0;
    showSlides(); // call showslide method
    console.log("slider");
    function showSlides() {
        let i;

        // get the array of divs' with classname image-sliderfade
        let slides = document.getElementsByClassName("image-sliderfade");

        // get the array of divs' with classname dot
        let dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
            // initially set the display to
            // none for every image.
            slides[i].style.display = "none";
            const layer_animation = slides[i].querySelectorAll(".animate__animated")
            layer_animation.forEach(el=>{
                var add_anim = el.getAttribute('data-zems')
                el.classList.remove(add_anim)
            })
        }

        // increase by 1, Global variable
        slideIndex++;

        // check for boundary
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        const layer_a = slides[slideIndex - 1].querySelectorAll(".animate__animated")
        layer_a.forEach(el=>{
            var add_anim = el.getAttribute('data-zems')
            el.classList.add(add_anim)
        })
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        // Change image every 2 seconds
        setTimeout(showSlides, 5000);
      
    }
    

    
};
const zems_slider_builder = (ev) => {
    
    //// slideshow
    let slideIndex = 0;
    showSlides(); // call showslide method
    function showSlides() {
        let i;

        // get the array of divs' with classname image-sliderfade
        let slides = document.getElementsByClassName("image-sliderfade");

        // get the array of divs' with classname dot
        let dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
            // initially set the display to
            // none for every image.
            slides[i].style.display = "none";
            const layer_animation = slides[i].querySelectorAll(".animate__animated")
            layer_animation.forEach(el=>{
                var add_anim = el.getAttribute('data-zems')
                el.classList.remove(add_anim)
            })
        }

        // increase by 1, Global variable
        slideIndex++;

        // check for boundary
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        const layer_a = slides[slideIndex - 1].querySelectorAll(".animate__animated")
        layer_a.forEach(el=>{
            var add_anim = el.getAttribute('data-zems')
            el.classList.add(add_anim)
        })
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        // Change image every 2 seconds
        // setTimeout(showSlides, 5000);
        var slide_frame = document.querySelector(".slide-container");
        slide_frame.style.border = "1px solid red";
        const newDiv = document.createElement("h1");
        const newContent = document.createTextNode("Hi there and greetings!");
        newDiv.appendChild(newContent);
        slide_frame.insertBefore(newDiv, slide_frame);
    }
    

    
};

const zems_3item_slider = (ev) => {
const container = document.querySelector(".slider_container")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".pre")

let  currentIndex = 0
const slides = document.querySelectorAll(".zems_slider .slide")
const slide3 = document.getElementById("zems_3slider");
var slideMod = ""
slideMod += slides[slides.length -1].outerHTML
slides.forEach(el=>{
    slideMod += el.outerHTML
})
slideMod += slides[0].outerHTML

slide3.innerHTML = slideMod
const nextSlide = (inc) => {
//   const slides = document.getElementsByClassName("slide")
  
    
    for (let i = 0; i < slide3.children.length; i++) {
        slide3.children[i].style.display = "none"
        slide3.children[currentIndex].classList.remove("active")
        // slides[currentIndex].classList.remove("active")
    }
    
    // currentIndex=(currentIndex+slides.length+inc)%slides.length;
    currentIndex=(currentIndex+slide3.children.length+inc)%slide3.children.length;
    if(slide3.children.length-1 == currentIndex){
        console.log("Last");
        currentIndex = 1
    }
    
    if(slide3.children.length > currentIndex){
       
        slide3.children[currentIndex].previousSibling.style.display = "block";
        slide3.children[currentIndex].nextSibling.style.display = "block";
        slide3.children[currentIndex].classList.add("active")
    }


}

    nextSlide(1)

    nextBtn.addEventListener("click", () => {
        nextSlide(1)
    })

    prevBtn.addEventListener("click", () => {
        if(currentIndex == 1){
            console.log("First");
            console.log(slide3.children.length -3);
            nextSlide(slide3.children.length -3)
        } else {
            nextSlide(-1)
        }
    })
}

export { zems_slider, zems_slider_builder, zems_3item_slider }