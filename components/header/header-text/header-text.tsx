import ChiSiamoButton from "../button/button";

const HeaderText: React.FC = (): React.ReactElement => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          Aiutiamo ragazzi/e in tutta Italia
        </span>
        <span className="heading-primary--sub">
          A viaggiare, crescere e guadagnare
        </span>
      </h1>
    </div>
  );
};

export default HeaderText;
