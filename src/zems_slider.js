const zems_slider = (ev) => {
    let slideIndex = 0;
    const sliderMain = document.querySelector(".zems_slider") 
    const totalSlide = sliderMain.querySelectorAll('.slide')
    // create a new div element
    const pager = document.createElement("div");
    pager.className = "slide-pager";
    
    totalSlide.forEach((slide, index)=>{
        var createDot = document.createElement("div");
        createDot.className = "dot";
        pager.appendChild(createDot);
    })
    function showSlides() {
        totalSlide.forEach((slide, index)=>{
            slide.style.display = "none";
            pager.childNodes[index].className = pager.childNodes[index].className.replace("active", "");
        })
        
        sliderMain.insertBefore(pager, sliderMain.childNodes[0]);
        // check for boundary
        if (slideIndex >= totalSlide.length) {
            slideIndex = 0;
        }
        totalSlide[slideIndex].style.display = "block";
        pager.childNodes[slideIndex].classList.add("active")
        setTimeout(showSlides, 5000);
        slideIndex++;
    }
    showSlides();  
};
const zems_slider_builder = (ev) => {
    let slideIndex = 0;
    const sliderMain = document.querySelector(".zems_slider") 
    const totalSlide = sliderMain.querySelectorAll('.slide')
    // create a new div element
    const addRemove = document.createElement("div");
    addRemove.className = "add-remove";
    const addDiv = document.createElement("div");
    addDiv.className = "add-slide";
    const addContent = document.createTextNode("➕");
    addDiv.appendChild(addContent);
    const removeDiv = document.createElement("div");
    removeDiv.className = "remove-slide";
    const removeContent = document.createTextNode("🚫");
    removeDiv.appendChild(removeContent);
    
    sliderMain.insertBefore(addDiv, sliderMain.childNodes[0]);


    const pager = document.createElement("div");
    pager.className = "slide-pager";
    const pre = document.createElement("div");
    pre.className = "prev";
    const preContent = document.createTextNode("←");
    pre.appendChild(preContent);
    sliderMain.insertBefore(pre, sliderMain.childNodes[0]);
    const next = document.createElement("div");
    next.className = "next";
    const nextContent = document.createTextNode("→");
    next.appendChild(nextContent);
    sliderMain.insertBefore(next, sliderMain.childNodes[0]);
    // totalSlide.forEach((slide, index)=>{
    //     var createDot = document.createElement("div");
    //     createDot.className = "dot";
    //     pager.appendChild(createDot);
    // })
    //

    var remItem = ""
    addDiv.addEventListener("click", () => {
        console.log("Add Slide");
        var upSlide = sliderMain.querySelector('.slide-container')
        totalSlide[0].insertBefore(removeDiv, totalSlide[0].childNodes[0]);
        upSlide.innerHTML = upSlide.innerHTML + totalSlide[0].outerHTML
        remItem = document.querySelectorAll('.remove-slide')
        rem_item()
        slidesControl();
    })
    var slideMod = ""
    totalSlide.forEach(el=>{
        el.insertBefore(removeDiv, el.childNodes[0]);
        slideMod += el.outerHTML
    })
    var updatedSlide = sliderMain.querySelector('.slide-container')
    updatedSlide.innerHTML = slideMod
    updatedSlide = updatedSlide.childNodes
    ///
    const rem_item = () => {
        remItem = sliderMain.querySelectorAll('.remove-slide')
        remItem.forEach((rem, index)=>{
            rem.addEventListener("click", (e) => {
                console.log("Remove Slide");
                if(e.target.closest('.slide').nextSibling){
                    var nexsl = e.target.closest('.slide').nextSibling.style.display = "block";
                    console.log(nexsl);
                    e.target.closest('.slide').remove()
                } else if(e.target.closest('.slide').previousSibling) {
                    console.log("pre Slide");
                    var presl = e.target.closest('.slide').previousSibling.style.display = "block";
                    console.log(presl);
                    e.target.closest('.slide').remove()
                } 
            })
        })
    }
    rem_item()

    function slidesControl() {
        updatedSlide.forEach((slide, index)=>{
            console.log(slide);
            slide.style.display = "none";
        })
        updatedSlide[slideIndex].style.display = "block";
    }
    slidesControl();
    pre.addEventListener("click", () => {
        if(slideIndex > 0){
        slideIndex = slideIndex - 1;
        }
        slidesControl();
    })
    next.addEventListener("click", () => {
        if(slideIndex < updatedSlide.length -1){
        slideIndex = slideIndex + 1;
        }
        slidesControl();
    })
};


const zems_slider_pager = (ev) => {
    let currentIndex = 0;
    const sliderMain = document.querySelector(".zems_slider") 
    const totalSlide = sliderMain.querySelectorAll('.slide')
    // create a new div element
    

    const pre = document.createElement("div");
    pre.className = "prev";
    const preContent = document.createTextNode("←");
    pre.appendChild(preContent);
    sliderMain.insertBefore(pre, sliderMain.childNodes[0]);
    const next = document.createElement("div");
    next.className = "next";
    const nextContent = document.createTextNode("→");
    next.appendChild(nextContent);
    sliderMain.insertBefore(next, sliderMain.childNodes[0]);
    var slideMod = ""
    slideMod += totalSlide[totalSlide.length -1].outerHTML
    totalSlide.forEach(el=>{
        slideMod += el.outerHTML
    })
    slideMod += totalSlide[0].outerHTML
    var updatedSlide = sliderMain.querySelector('.zems_slider_pager')
    updatedSlide.innerHTML = slideMod
    const nextSlide = (inc) => {
        updatedSlide.childNodes.forEach((slide, index)=>{
            slide.style.display = "none";
            updatedSlide.childNodes[currentIndex].classList.remove("active")
        })
        currentIndex=(currentIndex+updatedSlide.childNodes.length+inc)%updatedSlide.childNodes.length;
        console.log(currentIndex);
        if(updatedSlide.childNodes.length-1 == currentIndex){
            console.log("Last");
            currentIndex = 1
        }
        if(updatedSlide.childNodes.length > currentIndex){
            updatedSlide.childNodes[currentIndex].previousSibling.style.display = "block";
            updatedSlide.childNodes[currentIndex].nextSibling.style.display = "block";
            updatedSlide.childNodes[currentIndex].classList.add("active")
        }
    }

    nextSlide(1)

    next.addEventListener("click", () => {
        nextSlide(1)
    })

    pre.addEventListener("click", () => {
        if(currentIndex == 1){
            nextSlide(updatedSlide.childNodes.length -3)
        } else {
            nextSlide(-1)
        }
    })
}
const zems_slider_pager_builder = (ev) => {
    let currentIndex = 0;
    const sliderMain = document.querySelector(".zems_slider") 
    const totalSlide = sliderMain.querySelectorAll('.slide')
    // create a new div element
    const addRemove = document.createElement("div");
    addRemove.className = "add-remove";
    const addDiv = document.createElement("div");
    addDiv.className = "add-slide";
    const addContent = document.createTextNode("➕");
    addDiv.appendChild(addContent);
    const removeDiv = document.createElement("div");
    removeDiv.className = "remove-slide";
    const removeContent = document.createTextNode("🚫");
    removeDiv.appendChild(removeContent);
    
    sliderMain.insertBefore(addDiv, sliderMain.childNodes[0]);
    
    const pre = document.createElement("div");
    pre.className = "prev";
    const preContent = document.createTextNode("←");
    pre.appendChild(preContent);
    sliderMain.insertBefore(pre, sliderMain.childNodes[0]);
    const next = document.createElement("div");
    next.className = "next";
    const nextContent = document.createTextNode("→");
    next.appendChild(nextContent);
    sliderMain.insertBefore(next, sliderMain.childNodes[0]);
    var remItem = ""
    addDiv.addEventListener("click", () => {
        console.log("Add Slide");
        var upSlide = sliderMain.querySelector('.zems_slider_pager')
        upSlide.innerHTML = upSlide.innerHTML + totalSlide[0].outerHTML
        remItem = document.querySelectorAll('.remove-slide')
        rem_item()
    })
    var slideMod = ""
    totalSlide.forEach(el=>{
        el.insertBefore(removeDiv, el.childNodes[0]);
        slideMod += el.outerHTML
    })
    totalSlide[0].insertBefore(removeDiv, totalSlide[0].childNodes[0]);
    // slideMod += totalSlide[0].outerHTML
    var updatedSlide = sliderMain.querySelector('.zems_slider_pager')
    updatedSlide.innerHTML = slideMod
    updatedSlide = updatedSlide.childNodes
    const rem_item = () => {
        remItem = sliderMain.querySelectorAll('.remove-slide')
        remItem.forEach((rem, index)=>{
            rem.addEventListener("click", (e) => {
                console.log("Remove Slide");
                e.target.closest('.slide').remove()
                // updatedSlide[index].remove()
            })
        })
    }
    rem_item()
    const nextSlide = (inc) => {
        
        updatedSlide.forEach((slide, index)=>{
            slide.style.display = "none";
            slide.insertBefore(removeDiv, slide.childNodes[0]);
            updatedSlide[currentIndex].classList.remove("active")
        })
        currentIndex=(currentIndex+updatedSlide.length+inc)%updatedSlide.length;
        
        if(updatedSlide.length-1 == currentIndex){
            console.log("Last");
            currentIndex = 1
        }
        if(updatedSlide.length > currentIndex){
            console.log(currentIndex);
            updatedSlide[currentIndex-1].style.display = "block";
            updatedSlide[currentIndex+1].style.display = "block";
            updatedSlide[currentIndex].classList.add("active")
        }
    }

    nextSlide(1)

    next.addEventListener("click", () => {
        nextSlide(1)
    })

    pre.addEventListener("click", () => {
        if(currentIndex == 1){
            nextSlide(updatedSlide.length -2)
        } else {
            nextSlide(-1)
        }
    })
}

export { zems_slider, zems_slider_builder, zems_slider_pager, zems_slider_pager_builder }