import ChiSiamoButton from "../button/button";

const HeaderText: React.FC = (): React.ReactElement => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Unisciti a SYNERGY</span>
        <span className="heading-primary--sub">
          Il tuo ponte verso l'indipendenza finanziaria
        </span>
      </h1>
    </div>
  );
};

export default HeaderText;
