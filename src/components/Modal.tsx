import { useDispatch } from "react-redux";
import { addCard } from "../redux/CardsSlice";

type Props = {
  //eslint-disable-next-line
  close: any;
};

export default function Modal({ close }: Props) {
  const dispatch = useDispatch();

  return (
    <form className="add_modal">
      <h2>Добавление карточки</h2>
      <label htmlFor="">
        Название
        <input className="add__title" id="title"></input>
      </label>
      <label htmlFor="">
        Старая цена
        <input type="number" className="add__old_price" id="oldPrice"></input>
      </label>
      <label htmlFor="">
        Новая цена
        <input type="number" className="add__new_price" id="price"></input>
      </label>
      <label htmlFor="">
        Ссылка на картинку
        <input className="add__picture" id="picture"></input>
      </label>

      <button
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          const target = evt.target as HTMLElement;
          const form = target.parentElement as HTMLFormElement;
          dispatch(
            addCard({
              title: (form.title as HTMLFormElement[string]).value,
              oldPrice: form.oldPrice.value,
              price: form.price.value,
              picture: form.picture.value,
            })
          );
          close();
        }}
      >
        Добавить
      </button>
    </form>
  );
}
