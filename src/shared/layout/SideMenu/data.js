import { Bank, Home, Messages, Text } from "shared/components/Icons";

export const SIDE_URL = [
  {
    id: 1,
    inner: "Dashboard",
    icon: <Home />,
    url: "/home",
  },
  {
    id: 2,
    inner: "Transit Declaration",
    icon: <Text />,
    url: "/transit-declaration",
  },
  {
    id: 3,
    inner: "Requests",
    icon: <Messages />,
    url: "/requests",
  },
  {
    id: 4,
    inner: "Customs offices",
    icon: <Bank />,
    url: "/customs-offices",
  },
];
