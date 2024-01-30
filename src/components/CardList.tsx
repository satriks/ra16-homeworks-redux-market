import { CardType } from "../models/models";
import Card from "./Card";
import { useSelector } from "react-redux";

function CardList() {
  const cards = useSelector(
    (state: { cards: { cards: CardType[] } }) => state.cards.cards
  );

  return (
    <div>
      <h2>Приглядитесь к этим предложениям</h2>
      <div className="cards__wrapper">
        {cards.map((card: CardType) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
