"use client";

import Cards from '../components/Cards';
import '../css/Testimonial.css';
import cardData from '../json/cardData.json';
import Image from "next/image";


export default function Testimonial() {


    const getBackgroundColor = (index) => {
        const colors = ['#FFCDD2', '#DDF1FB', '#BBDEFB', '#FFF6E6', '#DCEAFE', '#FFECF6']; // Example colors
        return colors[index % colors.length]; // Cycle through colors if more cards than colors
    };
    

    return (
        <section className="testimonial-section">
            <div className="testimonial-background-image">
                <Image src="/Images/Gradient-Background.png" alt="Background" className='testimonial-bg-img' width={773} height={704} />
            </div>
            <div className="main-container testimonial-container">
                <div className="testimonial-left">
                    <div className='testimonial-left-content'>               
                        <h1 className='testimonial-heading'>Why Students Love <span className="testimonial-heading-span">Our Quran</span> Classes</h1>
                        <p className='testimonial-para'>Hear from our students and parents about their journey of learning the Quran with us!</p>
                        <div className='start-learning'>
                            <p>Start Learning</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-right">
                    <div className="testimonial-cards">
                        {cardData.map((card, index) => (
                            <Cards key={card.name} image={card.image} name={card.name} review={card.review} backgroundColor={getBackgroundColor(index)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}