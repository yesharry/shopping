import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import Button from "./style/Button";
import { useEffect, useState } from "react";
import User from "./User";
import { login, logout, onUserStateChange } from "../api/firebase";

export interface IUser {
  photoURL: string;
  displayName: string;
  isAdmin?: boolean;
}

const Navbar = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    onUserStateChange((user: any) => {
      console.log(
        "useEffect onUserStateChange 인자 type check ->",
        typeof user
      );
      setUser(user);
    });
  }, []);

  console.log("state of Nav, user type check->", user, typeof user);

  return (
    <header className="flex justify-between border-b border-gray-300 p-5">
      <Link to="/" className=" flex items-center text-4xl text-brand font-bold">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className=" flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className=" text-l">
            <BsFillPencilFill />
          </Link>
        )}
        {user && (
          <User photoURL={user.photoURL} displayName={user.displayName} />
        )}
        {!user ? (
          <Button text={"Login"} onClick={login} />
        ) : (
          <Button text={"Logout"} onClick={logout} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
