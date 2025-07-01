const zemsSlider_basic = (data= false) => {
    const masterSlider = document.querySelectorAll('.zems_slider');
    
    var slideInterval = 3000; // 3 seconds
    masterSlider.forEach(mainSlider => {
        const slider = mainSlider.querySelector('.zems_slider_container');
        const slides = slider.querySelectorAll('.zems_slide');
        // console.log(mainSlider.dataset);
        let currentSlideIndex = 0;
        var slidesPerPage = 3;
        var slideSetting = {slideWidth:0, slideGap:0}
        if(mainSlider.dataset.timeout){
            slideInterval = mainSlider.dataset.timeout
        } else {
            slideInterval = 3000;
        }
        if(mainSlider.dataset.slide){
            slidesPerPage = mainSlider.dataset.slide
            slideSetting.slideWidth = mainSlider.offsetWidth / slidesPerPage
        }
        var slideGap = 0
        if(mainSlider.dataset.gap){
            slideGap = mainSlider.dataset.gap
            slideSetting.slideWidth = (mainSlider.offsetWidth / slidesPerPage) - slideGap
        }
        slider.style.gap = slideGap+"px"
        var slidePager = document.createElement('div')
        slidePager.className = 'zems_slide_pager'
        slides.forEach((element, i) => {
            element.style.width = slideSetting.slideWidth+"px"
            const slideDot = document.createElement('li')
            slidePager.appendChild(slideDot)
        })
        function showSlide(index) {
            const translateX = -index * (slides[0].offsetWidth + parseInt(slideGap));
            slider.style.transform = `translateX(${translateX}px)`;
        }
        function prevSlide() {
            console.log(currentSlideIndex);
            currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - slidesPerPage;
            const translateX = -currentSlideIndex * (slides[0].offsetWidth + parseInt(slideGap));
            slider.style.transform = `translateX(${translateX}px)`;
        }
        function nextSlide() {
            
            currentSlideIndex = (currentSlideIndex < slides.length - slidesPerPage) ? currentSlideIndex + 1 : 0;
            showSlide(currentSlideIndex);
        }
        if(mainSlider.dataset.play && mainSlider.dataset.play == 'on'){
            // Start autoplay
            let autoplayTimer = setInterval(nextSlide, slideInterval);
        }
        if(mainSlider.dataset.control && mainSlider.dataset.control == 'on'){
            const pagerControl = document.createElement('div')
            pagerControl.className = 'zems_control'
            const pre = document.createElement('div')
            pre.className = 'prev-btn'
            const preContent = document.createTextNode('←')
            pre.appendChild(preContent)
            pre.addEventListener('click', ()=>{
                prevSlide()
            })
            pagerControl.appendChild(pre)
            const next = document.createElement('div')
            next.className = 'next-btn'
            const nextContent = document.createTextNode('→')
            next.appendChild(nextContent)
            next.addEventListener('click', () => {
                nextSlide()
            });
            pagerControl.appendChild(next)
            mainSlider.insertBefore(pagerControl, mainSlider.childNodes[0])
        }
        if(mainSlider.dataset.pager && mainSlider.dataset.pager == 'on'){
            // const slidePager = document.createElement('div')
            // slidePager.className = 'zems_slide_pager'
            // const pre = document.createElement('div')
            // pre.className = 'btn'
            // const preContent = document.createTextNode('←')
            // pre.appendChild(preContent)
            // slidePager.appendChild(pager)
            
            mainSlider.insertBefore(slidePager, mainSlider.childNodes[0])
        }
        showSlide(currentSlideIndex);
    })   
}
const zemsSlider_basic_main = (data= false) => {
    const masterSlider = document.querySelectorAll('.zems_slider');
    masterSlider.forEach(mainSlider => {
        const slider = mainSlider.querySelector('.zems_slider_container');
        const slides = slider.querySelectorAll('.zems_slide');
        console.log("----");
        console.log(mainSlider.dataset);
        console.log("----");
        let slideIndex = 0;
        var slidesPerPage = 3;
        var slideSetting = {slideWidth:0, slideGap:0}
        if(mainSlider.dataset.slide){
            slidesPerPage = mainSlider.dataset.slide
            slideSetting.slideWidth = mainSlider.offsetWidth / slidesPerPage
        }
        var slideGap = 0
        if(mainSlider.dataset.gap){
            slideGap = mainSlider.dataset.gap
            slideSetting.slideWidth = (mainSlider.offsetWidth / slidesPerPage) - slideGap
        }
        if(mainSlider.dataset.play && mainSlider.dataset.play == 'auto'){
            // mainSlider.dataset.gap
            console.log("Yes");
            slides.forEach((el, i)=>{
                // setInterval(zemsSliding(slides, slider, i), 100);
            })
            console.log("Loop");
            setInterval(zemsSliding(slides, slider, slideIndex), 1000);
        }
        slider.style.gap = slideGap+"px"
        zemsPager(mainSlider, slideIndex, slideSetting)
        zemsControl(mainSlider,slidesPerPage, slideIndex)
    });
    
}
const zemsSliding = (slides, slider, slideIndex) => {
    console.log(slideIndex);
    const translateX = -slideIndex * (slides[0].offsetWidth + 10);
    slider.style.transform = `translateX(${translateX}px)`;
}

const zemsControl = (sliderMain, slidesPerPage, slideIndex) => {
    const slider = sliderMain.querySelector('.zems_slider_container');
    const slides = sliderMain.querySelectorAll('.zems_slide');
    const pagerControl = document.createElement('div')
    pagerControl.className = 'zems_control'
    const pre = document.createElement('div')
    pre.className = 'prev-btn'
    const preContent = document.createTextNode('←')
    pre.appendChild(preContent)
    pre.addEventListener('click', ()=>{
        if(slideIndex == 0){
            slideIndex = slides.length - slidesPerPage + 1;
            console.log(slideIndex);
            zemsSliding(slides, slider, slideIndex);
        }
        if (slideIndex > 0) {
            slideIndex--;
            zemsSliding(slides, slider, slideIndex);
        }
    })
    pagerControl.appendChild(pre)
    // sliderMain.insertBefore(pre, sliderMain.childNodes[0])
    const next = document.createElement('div')
    next.className = 'next-btn'
    const nextContent = document.createTextNode('→')
    next.appendChild(nextContent)
    next.addEventListener('click', () => {
        if(slideIndex == slides.length - slidesPerPage){
            slideIndex = -1
            zemsSliding(slides, slider, slideIndex);
        }
        if (slideIndex < slides.length - slidesPerPage) {
            slideIndex++;
            zemsSliding(slides, slider, slideIndex);
        }
    });
    pagerControl.appendChild(next)
    sliderMain.insertBefore(pagerControl, sliderMain.childNodes[0])
}
const zemsPager = (sliderMain, slideIndex, slideSetting) => {
    const slides = sliderMain.querySelectorAll('.zems_slide');
    const pager = document.createElement('ul')
    pager.className = 'zems_slide_pager'
    slides.forEach((element, i) => {
        element.style.width = slideSetting.slideWidth+"px"
        const next = document.createElement('li')
        next.className = 'zems_pager_dot'
        const nextContent = document.createTextNode(i+1)
        next.appendChild(nextContent)
        pager.appendChild(next)
    });
    sliderMain.insertBefore(pager, sliderMain.childNodes[0])
}
export { zemsSlider_basic}