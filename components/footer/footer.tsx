import Image from "next/image";
import Sfondo from "./image/chi-siamo.webp";
import Heading from "./private/heading";
import Form from "./private/form";

const Footer = () => {
  return (
    <section className="section-footer">
      <Image src={Sfondo} alt="" className="footer-image"></Image>
      <div id="footer" className="footer">
        <Heading></Heading>
        <Form></Form>
      </div>
    </section>
  );
};

export default Footer;
