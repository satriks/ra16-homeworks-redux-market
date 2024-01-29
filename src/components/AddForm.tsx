import Popup from "reactjs-popup";
import Modal from "./Modal";

function AddForm() {
  return (
    <div>
      <Popup
        trigger={<button type="button">Добавить карточку</button>}
        position="center center"
        onOpen={(event) => {
          event?.preventDefault();
          event?.stopPropagation();
          console.log(event);
        }}
      >
        {
          //eslint-disable-next-line
          (close: any) => <Modal close={close} />
        }
      </Popup>
    </div>
  );
}

export default AddForm;
