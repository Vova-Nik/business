
business = {
    images: [
        "url('./images/laptop_screen0.jpg')",
        "url('./images/laptop_screen1.jpg')",
        "url('./images/laptop_screen2.jpg')",
       // "url('https://f.kyivmaps.com/location/1673/tEJtg.jpg')",
    ],

    counter: 1,
    screen: null,
    num_of_img: 0,
    indicators: null,
    indicator: [],

    constructor() {
        this.screen = document.querySelector(".laptop ");
        this.indicators = document.querySelector(".indicators ");
        this.num_of_img = this.images.length;
        if(this.num_of_img>12)
            this.num_of_img=12;
        this.indicators.innerHTML = '';
        for(i=0; i<this.num_of_img; i++)
        {
            this.indicator[i] = document.createElement("div");
            this.indicator[i].classList.add('indicator');
            this.indicators.appendChild(this.indicator[i]);
        }
        this.indicator[0].classList.add('active');
    },

    show() {
        this.screen.style.backgroundImage = this.images[this.counter];
        for(i=0; i<this.num_of_img; i++)
            this.indicator[i].classList.remove('active');
        this.indicator[this.counter].classList.add('active');
        this.counter++;
        if (this.counter == this.num_of_img)
            this.counter = 0;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () { business.show(); }, 4000);
    business.constructor();
});

const fbtn = function(){
    console.log("buttonnnnnnnnnnnnnnnnn!");
}