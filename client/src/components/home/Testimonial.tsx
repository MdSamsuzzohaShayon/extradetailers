import Image from 'next/image';
import React, { useEffect } from 'react';


// rederence -> https://lifestwp.websitelayout.net/ 
function Testimonial() {

    useEffect(() => {
        // bootstrap/dist/js/bootstrap.bundle.min.js
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
          const carouselElement = document.getElementById("carouselExampleSlidesOnly");
          if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
              interval: 3000, // Auto-slide every 3 seconds
              ride: "carousel",
              pause: "hover", // Pause on hover
              wrap: true, // Loop slides
            });
          }
        });
      }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p>2 image with different shape of the image </p>
                    <p>A few other shapes with animation</p>
                </div>
                <div className="col-md-6">
                    <p className='text-uppercase text-primary fw-bold'>Testimonial</p>
                    <h2 className="fw-bold">What our clients say</h2>
                    <span>Icon</span>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <p>My car has never been cleaner and I&apos;ve used a few different companies over the years. I am very pleased with the detail and will continue using Extra Detailers from now on</p>
                                <p>Number of stars (Icon)</p>
                                <Image height={100} width={100} src="/imgs/car-service-1.jpg" alt="reviewer-image" className="img-thumbnail" />
                                <p>Name: Brandy C.1</p>
                            </div>
                            <div className="carousel-item">
                                <p>My car has never been cleaner and I&apos;ve used a few different companies over the years. I am very pleased with the detail and will continue using Extra Detailers from now on</p>
                                <p>Number of stars (Icon)</p>
                                <Image height={100} width={100} src="/imgs/car-service-1.jpg" alt="reviewer-image" className="img-thumbnail" />
                                <p>Name: Brandy C.2</p>
                            </div>
                            <div className="carousel-item">
                                <p>My car has never been cleaner and I&apos;ve used a few different companies over the years. I am very pleased with the detail and will continue using Extra Detailers from now on</p>
                                <p>Number of stars (Icon)</p>
                                <Image height={100} width={100} src="/imgs/car-service-1.jpg" alt="reviewer-image" className="img-thumbnail" />
                                <p>Name: Brandy C.3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial