import Cards from "../components/Cards";
import "../css/Testimonial.css";
import cardData from "../json/cardData.json";
import buttonArrow from "@/public/assets/svg/button-arrow.svg";
import Button from "../components/Button.jsx"


export default function Testimonial() {
  const getBackgroundColor = (index) => {
    const colors = [
      "#FDF3F0",
      "#F6E6DA",
      "#EDE4F4",
      "#F4F1EB",
      "#E5ECF6",
      "#FAEFE7",
    ];
    return colors[index % colors.length]; 
  };

  return (
    <section className="testimonial-section">
      {/* <div className="testimonial-gradient-2"></div> */}

      <div className="main-container testimonial-container">
        <div className="testimonial-left">
          <h1 className="heading">
            Why Students Love <span className="heading-span">Our Quran</span>{" "}
            Classes
          </h1>
          <p className="testimonial-para">
            Hear from our students and parents about their journey of learning
            the Quran with us!
          </p>
          <Button text="Start Learning" />
        </div>
        <div className="testimonial-right">
          <div className="testimonial-gradient-1"></div>
          <div className="testimonial-cards">
            {cardData.map((card, index) => (
              <Cards
                key={card.name}
                image={card.image}
                name={card.name}
                review={card.review}
                backgroundColor={getBackgroundColor(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
