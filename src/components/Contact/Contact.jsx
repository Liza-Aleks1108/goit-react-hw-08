import { FaUser, FaPhoneAlt, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { useState } from "react";
import ContactEditor from "../Modal/Modal";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log(item.id);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <a href={`tel:${item.number}`} className={css.phoneLink}>
          <FaPhoneAlt className={css.icon} />
          {item.number}
        </a>
      </div>
      <div className={css.btnGroup}>
        <button className={css.btn} onClick={openModal}>
          <FaEdit className={css.btnIcon} />
        </button>
        <button
          className={css.btn}
          onClick={() => {
            dispatch(deleteContact(item.id))
              .unwrap()
              .then(() => {
                toast.success("Contact successfully deleted!");
              })
              .catch((err) => {
                toast.error(`${err.message}`);
              });
          }}
        >
          <FaTrashCan className={css.btnIcon} />
        </button>
      </div>
      <Toaster />

      {modalIsOpen && (
        <ContactEditor
          initialName={item.name}
          initialNumber={item.number}
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          contactId={item.id}
        />
      )}
    </div>
  );
}
