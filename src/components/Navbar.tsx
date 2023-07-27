import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";
import Button from "./style/Button";
import User from "./User";

export interface IUser {
  displayName: string;
  photoURL: string;
  isAdmin?: string;
}

const Navbar = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-5">
      <Link
        to="/"
        className=" flex items-center text-4xl font-semibold text-brand"
      >
        <FiShoppingBag />
        <h1>Shopping</h1>
      </Link>
      <nav className=" flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className=" text-base">
            <BsFillPencilFill />
          </Link>
        )}
        {user && (
          <User photoURL={user.photoURL} displayName={user.displayName} />
        )}
        {!user ? (
          <Button text={"Sign In"} onClick={login} />
        ) : (
          <Button text={"Sign Out"} onClick={logout} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
