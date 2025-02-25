import Faq from "./sections/Faq";
import HomeLandingPage from "./sections/HomeLandingPage";
import Testimonial from "./sections/Testimonial.jsx";

export default function Home() {
  return (
    <main>
      <HomeLandingPage />
      <Testimonial />
      <Faq />
    </main>
  );
}