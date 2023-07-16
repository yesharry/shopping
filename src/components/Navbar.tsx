import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useEffect, useState } from "react";
import User from "./User";

const Navbar = () => {
  const [user, setUser] = useState<{} | null>();

  useEffect(() => {
    onUserStateChange((user: {} | null) => {
      setUser(user);
    });
  }, []);

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
        {user && <User user={user} />}
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>LogOut</button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
