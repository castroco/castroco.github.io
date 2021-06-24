((new Date()).getDay() == 2) ? document.querySelector('#banner').style.display = 'block' : console.log((new Date()).getDay())

function addUpdatedDate() {
    try {
        var dateUpdated = document.lastModified;
        const pObj = document.querySelector('#lastUpdated');
        let message = `Last updated ${dateUpdated}`;
        console.log(message);
        pObj.innerHTML = message;

        //geting the full year
        let day = new Date();
        let fullYear = day.getFullYear();
        const pObj2 = document.querySelector('#fullYear');
        let message2 = `&#169; | ${fullYear} | Carlos Castro | Santiago | <a href= "https://www.byui.edu/online">BYU Online Learning</a>`
        pObj2.innerHTML = message2;
    }
        catch(err) {
        alert(err.message);
        console.log(err.message);
    }
}
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* LAZY LOAD IMAGES */

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {

  image.setAttribute('src', image.getAttribute('data-src'));
  
  image.onload = () => {
    image.removeAttribute('data-src');
  };
  
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {

        items.forEach((item) => {
 
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        
        });
    });

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

} else {

    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
 
}