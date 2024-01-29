import { CardType } from "../models/models";

type Props = {
  card: CardType;
};

export default function Card({ card }: Props) {
  return (
    <div className="card">
      <img src={card.picture} alt="" />
      <div className="card__prices">
        <span className="card__price">{card.price} ₽</span>
        <span className="card__old_price">{card.oldPrice} ₽</span>
      </div>
      <a href="#">{card.title}</a>
    </div>
  );
}
