//Carosel Functions

document.addEventListener('DOMContentLoaded', () => {//Waits until the HTML page has loaded before running JavaScript.
  // Select carousel element
  const carouselElement = document.getElementById('featuredCarousel');

  // Create Bootstrap carousel instance
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000, //Automatically changes slide after 4 seconds (4000 milliseconds)
    ride: 'carousel' // auto start
  });

    // Listen to slide events(Allows user to react or trigger actions just before slide changes)
  carouselElement.addEventListener('slide.bs.carousel', (event) => {
    console.log('Sliding from slide', event.from, 'to slide', event.to);
  }); //event.from is the index of the current slide and event.to is the index of the next slide that will be shown.

  carouselElement.addEventListener('slid.bs.carousel', (event) => { //event fires after the slide transition
    console.log('Finished sliding to slide', event.to); //execute code after the slide change is finished so it continues.
  });
});
