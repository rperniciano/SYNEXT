import Immagine1 from "./image/automatizzainvestimenti.jpg";
import Immagine2 from "./image/imparadaimigliori.jpg";
import Immagine3 from "./image/costruisciunimpero.jpg";
import Immagine4 from "./image/communityglobale.jpg";
import Image from "next/image";
import Heading from "./private/heading";

const WhySection = () => {
  return (
    <section className="section-features">
      <Heading></Heading>
      <div className="row row__flex u-margin-inline-big">
        <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
          <p className="card__heading">automatizza i tuoi investimenti</p>
          <Image
            src={Immagine1}
            alt="automatizza i tuoi investimenti"
            className="card__image"
          ></Image>
        </div>

        <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
          <p className="card__heading">impara dai migliori</p>
          <Image
            src={Immagine2}
            alt="automatizza i tuoi investimenti"
            className="card__image"
          ></Image>
        </div>

        <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
          <p className="card__heading">costruisci il tuo impero</p>
          <Image
            src={Immagine3}
            alt="automatizza i tuoi investimenti"
            className="card__image"
          ></Image>
        </div>

        <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
          <p className="card__heading">community globale</p>
          <Image
            className="card__image"
            src={Immagine4}
            alt="automatizza i tuoi investimenti"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
