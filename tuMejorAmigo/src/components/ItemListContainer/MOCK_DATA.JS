import collar from "../../assets/products/collar.jpg";
import mouse from "../../assets/products/juguete.jpg";
import brush from "../../assets/products/cortaUñas.png";
import catFood from "../../assets/products/food.jpg";
import toy from "../../assets/products/toy3.jpg";
import dogFood from "../../assets/products/food2.jpg";
import petFood from "../../assets/products/food3.jpg";
import pets from "../../assets/products/food4.jpg";
import ropa from "../../assets/products/ropa3.jpg";
import ropa1 from "../../assets/products/ropa1.jpg";
import medicine from "../../assets/products/medicina.jpg";
import petToy from "../../assets/products/juguete2.jpg";
import grooming from "../../assets/products/bolsa.jpg";
import cepillo from "../../assets/products/cepillo.jpg";

import shampoo from "../../assets/products/shampoo-para-mascotas.jpg";

export const MOCK_DATA = [
  {
    id: 1,
    nombre: "Collar",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "accesorios",
    img: collar,
    stock:5,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
  {
    id: 2,
    nombre: "Corta uñas",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "higiene",
    img: brush,
    stock:5,
    sizes:  [
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 3,
    nombre: "Hueso de goma",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "juguetes",
    img: mouse,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 4,
    nombre: "Bolsa",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "higiene",
    img: grooming,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },

  {
    id: 5,
    nombre: "Alimento para perros",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "alimento",
    img: catFood,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 6,
    nombre: "Peluche de elefante",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "juguetes",
    img: toy,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 7,
    nombre: "Snack",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "alimento",
    img: dogFood,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 8,
    nombre: "Alimento",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "alimento",
    img: petFood,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 9,
    nombre: "Snack tranquilizante",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "alimento",
    img: pets,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 10,
    nombre: "Cuernos de reno",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "accesorios",
    img: ropa,
    stock:5,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
  {
    id: 11,
    nombre: "Shampoo en barra",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "higiene",
    img: shampoo,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 12,
    nombre: "Atención medica",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "medicina",
    img: medicine,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 13,
    nombre: "Juguete para gato",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "juguetes",
    img: petToy,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 14,
    nombre: "Cepillo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "higiene",
    img: cepillo,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 15,
    nombre: "Ropa navideña",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: 1500,
    category: "accesorios",
    img: ropa1,
    stock:5,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
];
