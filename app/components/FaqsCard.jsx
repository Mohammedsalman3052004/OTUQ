"use client";

import '../css/faqCard.css';
import { useState } from "react";

export default function FaqsCard({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);


    const toggleSidebar = () => {
        // const faqs = document.querSelectorAll(".faq");

        // faqs.forEach((faq) =>{
        //     faq.addEventListener("click",() => {
        //         faq.classList.toggle("active");
        //     });
        // });
        if (isOpen) {
            console.log("mohammed")
          } else {
            console.log("salman")
          }
    }
    

    return (
        <div className="faqs-card">
            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">How do online Quran classes work?</h3>
                    <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>
            

            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">What age group do you teach?</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>

            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">Do I need any prior knowledge of Arabic to join?</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>

            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">What if I miss a class?</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>

            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">How can I book a free demo class?</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>

            <div className="faq">
                <div className="faq-questions">
                    <h3 className="faq-question-h3">What payment methods do you accept?</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-black flex-shrink-0 transition duration-300 "><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className="faq-answers">
                    <p className='faq-answers-p'>Our online Quran classes are conducted via live video sessions with expert instructors. You can join from anywhere using a computer, tablet, or smartphone.</p>
                </div>
            </div>






        </div>
    );
}
