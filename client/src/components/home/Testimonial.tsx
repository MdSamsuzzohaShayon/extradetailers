import { TModuleStyle } from "@/types";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ITestimonialProps {
  styles: TModuleStyle;
}
interface TestimonialData {
  name: string;
  review: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "Brandy C.1",
    review:
      "My car has never been cleaner, and I've used a few different companies over the years. I am very pleased with the detail and will continue using Extra Detailers from now on.",
    rating: 4.5,
    image: "/imgs/car-service-1.jpg",
  },
  {
    name: "Brandy C.2",
    review:
      "The service was excellent! My car looks brand new. Highly recommend Extra Detailers for anyone looking for a great car detailing service.",
    rating: 5,
    image: "/imgs/car-service-1.jpg",
  },
  {
    name: "Brandy C.3",
    review:
      "I was skeptical at first, but the results speak for themselves. My car has never been this clean and fresh. The team is professional and very detail-oriented!",
    rating: 4,
    image: "/imgs/car-service-1.jpg",
  },
];

// Function to render dynamic star ratings
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-warning" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning" />);
    }
  }
  return stars;
};

// rederence -> https://lifestwp.websitelayout.net/
function Testimonial({ styles }: ITestimonialProps) {
  useEffect(() => {
    // bootstrap/dist/js/bootstrap.bundle.min.js
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carouselElement = document.getElementById(
        "carouselExampleSlidesOnly"
      );
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
          <div className="d-flex justify-content-center w-100 reviewer-1">
            <div className="reviewer1">
              <img
                src="/imgs/testimonial-1.png"
                alt="reviewer-1"
                loading="lazy"
              />
            </div>
            <div className="reviewer2">
              <img
                src="/imgs/testimonial-2.png"
                alt="reviewer-1"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="text-uppercase text-primary fw-bold">Testimonial</p>
          <h2 className="fw-bold">What our clients say</h2>
          <span className={`${styles.icon} pe-2`}>
            <FaQuoteLeft className="text-primary" />
          </span>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <p>{testimonial.review}</p>
                  <p>{renderStars(testimonial.rating)}</p> {/* Star Ratings */}
                  <Image
                    height={100}
                    width={100}
                    src={testimonial.image}
                    alt={`reviewer-${index}`}
                    className="img-thumbnail"
                  />
                  <p>Name: {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
