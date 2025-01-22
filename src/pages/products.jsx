import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nunchaku",
    price: "Rp 100.000",
    image: "/images/nunchaku-1.jpg ",
    description: 'Anda butuh senjata sederhana, Nuchaku solusinya :)',
  },
  {
    id: 2,
    name: "Sepatu Running Ortuseight",
    price: "Rp1.869.150",
    image: "/images/Ortuseight.jpg",
    description: 'Sepatu baru Alhamdulillah. Tuk dipakai di hari raya. Tak punya pun tak apa-apa. Masih ada sepatu yang lama',
  },
  {
    id: 3,
    name: "HG-3-SISI-SAMSAK",
    price: "Rp 8.700.000",
    image: "/images/HG-3-SISI-SAMSAK.jpg",
    description: 'La victoire appartient à ceux qui persévèrent. (Kemenangan milik mereka yang bertahan)',
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  };
    return (
       <Fragment>
        <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
          {email}
          <Button className = "ml-5 bg-black" onClick={handleLogout}>
            Logout
            </Button>
          </div>
        <div className= "flex justify-center py-5">
          {products.map((products) => (
            <CardProduct key={products.id}>
              <CardProduct.Header image={products.image} />
              <CardProduct.Body name={products.name}> 
                {products.description}
              </CardProduct.Body>
              <CardProduct.Footer price={products.price} />
            </CardProduct>
          ))};
        </div>
       </Fragment>
    );
};

export default ProductsPage;