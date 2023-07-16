interface IUSer {
  user: {
    photoURL?: string;
    displayName?: string;
  } | null;
}

const User = ({ user }: IUSer) => {
  return (
    <div className=" flex items-center">
      <img
        className=" w-8 h-8 rounded-full mr-2"
        src={user?.photoURL}
        alt={user?.displayName}
      />
      <span className=" hidden md:block">{user?.displayName}</span>
    </div>
  );
};

export default User;