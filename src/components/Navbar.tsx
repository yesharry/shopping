import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login } from "../api/firebase";

const Navbar = () => {
  return (
    <header className="flex justify-between border-b border-gray-300 p-5">
      <Link to="/" className=" flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shopping</h1>
      </Link>
      <nav className=" flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className=" text-l">
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
