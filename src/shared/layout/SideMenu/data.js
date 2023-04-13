import {
  faAddressCard,
  faCalendarCheck,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const mainAbout = [
  {
    id: 1,
    inner: "BIRTHDAY:  18.10.1999",
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
  },
  {
    id: 2,
    inner: "PHONE: +994(70)-826-10-26",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    id: 3,
    inner: "EMAIL: ishaqyg@code.edu.az",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    id: 4,
    inner: "ADDRESS: Azerbaijan, Baku",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
];
