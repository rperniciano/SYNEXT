import Image from "next/image";
import Card from "./private/card";
import Heading from "./private/heading";
import Immagine1 from "./image/automatizzainvestimenti.jpg";
import Immagine2 from "./image/communityglobale.jpg";
import Immagine3 from "./image/costruisciunimpero.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials">
        <Heading></Heading>
        <div className="row row__flex u-margin-inline-big">
            <Card paragraph="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." author="Luca Floris, 18">
                <Image src={Immagine1} alt="" className="testimonial-card__image"></Image>
            </Card>
            <Card paragraph="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." author="Michele Deiana, 22">
                <Image src={Immagine2} alt="" className="testimonial-card__image"></Image>
            </Card>
            <Card paragraph="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." author="Riccardo Perniciano, 25">
                <Image src={Immagine3} alt="" className="testimonial-card__image"></Image>
            </Card>
            <Card paragraph="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services." author="Matteo Presotto, 23">
                <Image src={Immagine3} alt="" className="testimonial-card__image"></Image>
            </Card>
        </div>
    </section>
  );
}

export default Testimonials;