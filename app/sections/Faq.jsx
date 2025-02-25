import FaqsCard from '../components/FaqsCard';
import '../css/Faq.css';
import faqdata from "../json/faq.json";

export default function Faq() {
    return (
        <section className="faq-section"> 
            <div className="main-container faq-container">
                <div className="faq-heading">
                    <h1 className="heading faq-heading-h1">
                        Got Questions? <br /><span className="heading-span">We&apos;ve Got Answers!</span> 
                    </h1>
                    <p className="faq-subheading-p">
                        Explore our FAQs to learn more about our classes, schedules, and teaching methods.
                    </p>
                </div>
                <div className="faq-qa">
                    {faqdata.map((faq) => (
                        <FaqsCard key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}