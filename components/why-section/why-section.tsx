import Immagine1 from "./image/automatizzainvestimenti.jpg";
import Immagine2 from "./image/imparadaimigliori.jpg";
import Immagine3 from "./image/costruisciunimpero.jpg";
import Immagine4 from "./image/communityglobale.jpg";
import Heading from "./private/heading";
import Card from "./private/card";
import Image from "next/image";

const WhySection = () => {
  return (
    <section className="section-features">
      <Heading></Heading>
      <div className="row row__flex u-margin-inline-small">
        <Card paragraph="Automatizza i tuoi investimenti">
          <Image
            src={Immagine1}
            alt="automatizza i tuoi investimenti"
            className="card__image"
          ></Image>
        </Card>
        <Card paragraph="Impara dai migliori">
          <Image
            src={Immagine2}
            alt="impara dai migliori"
            className="card__image"
          ></Image>
        </Card>
        <Card paragraph="costruisci il tuo impero">
          <Image
            src={Immagine3}
            alt="costruisci il tuo impero"
            className="card__image"
          ></Image>
        </Card>
        <Card paragraph="community globale">
          <Image
            src={Immagine4}
            alt="community globale"
            className="card__image"
          ></Image>
        </Card>
      </div>
    </section>
  );
};

export default WhySection;
