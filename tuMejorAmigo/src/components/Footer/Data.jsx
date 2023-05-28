import { BsTelephone, BsGeoAlt, BsEnvelopeHeart } from "react-icons/bs";

export const Contacts = [
  {
    id: 1,
    subtitle: "Encuentranos",
    paragraph: "Argentina | Buenos Aires",
    icon:  <BsGeoAlt className="fs-1 mt-2" style={{fontSize: "3rem", color: "rgb(164, 100, 237)"}}/> ,
  },
  { id: 2, subtitle: "Llámanos", paragraph: "1184336432", icon:<BsTelephone className="fs-1 mt-2" style={{fontSize: "3rem", color: "rgb(164, 100, 237)"}}/>},
  {
    id: 3,
    subtitle: "Nuestro Email",
    paragraph: "tuMejorAmigo@gmail.com",
    icon:< BsEnvelopeHeart className="fs-1 mt-2" style={{fontSize: "3rem", color: "rgb(164, 100, 237)"}}/>,
  },
];

