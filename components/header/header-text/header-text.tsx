import ChiSiamoButton from "../button/button";

const HeaderText: React.FC = (): React.ReactElement => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main heading-primary--main-yellow">coding e money</span>
        <span className="heading-primary--main">investi, impara, guadagna</span>
        <span className="heading-primary--sub">
          automatizza i tuoi investimenti, impara dai professionisti e crea la tua rete di successo
        </span>
      </h1>
    </div>
  );
};

export default HeaderText;
