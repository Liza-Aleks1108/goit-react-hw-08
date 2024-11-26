import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((item) => (
            <li key={item.id}>
              <Contact item={item} />
            </li>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
}
