"use client";

import { useDispatch } from "react-redux";

type Props = {
  paragraph: string;
  children: any;
  author: string;
};

const descrizioneMichi =
  "Nato in un piccolo paesino della Sardegna, fin da bambino mi sentivo diverso. Cercavo l'approvazione degli altri, cercando di adattarmi alla mentalità chiusa del mio ambiente. Ma dentro di me c'era una sete di creatività e cambiamento.Costruivo casette, ponti, persino ferri per i miei giocattoli. Ero un piccolo ingegnere! A scuola eccellevo, ma crescendo sentivo la necessità di liberarmi dalle convenzioni e di essere davvero me stesso.Dopo il liceo classico, volevo arruolarmi nell'esercito, ma il destino aveva altri piani. Mi ritrovai all'università, studiando psicologia, ma sentivo che non era abbastanza. Volevo autonomia, indipendenza. Non volevo diventare un 'mantenuto'.Così mi sono buttato nel mondo digitale. Ho iniziato come venditore online, sfruttando la mia capacità di comunicare e di costruire relazioni per chiudere contratti con diverse aziende. Guadagnavo bene, ma sentivo che mancava qualcosa: una direzione, uno scopo, una comunità che condividesse le mie ambizioni. È stato allora che ho scoperto il net marketing . Questa disciplina mi ha permesso di crescere sia professionalmente che personalmente. Ho sviluppato nuove competenze, ho superato i miei limiti e ho trovato un ambiente stimolante in cui collaborare con persone affini. Oggi posso dire di aver compiuto una vera e propria reinvenzione. Dal piccolo paese della Sardegna a guru del web , la mia storia dimostra che con determinazione, creatività e un pizzico di audacia si possono raggiungere grandi risultati.";

const Card = ({ paragraph, children, author }: Props) => {
  const dispatch = useDispatch();
  const handleOpenModal = (title: string, description: string) => {
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });
    dispatch({
      type: "SET_TITLE",
      payload: title,
    });
    dispatch({
      type: "SET_DESCRIPTION",
      payload: description,
    });
  };

  return (
    <div className="testimonial-card u-margin-inline-small u-margin-top-big">
      {children}
      <p className="testimonial-text">{paragraph}</p>
      <div className="testimonial-author">
        <a
          className="btn-text"
          onClick={() => {
            handleOpenModal(
              "Da paesino sardo a guru del web: la mia storia di reinvenzione",
              descrizioneMichi
            );
            window.document.body.style.overflowY = "hidden";
          }}
        >
          {author}, full story
        </a>
      </div>
    </div>
  );
};

export default Card;
