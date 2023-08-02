interface IUserProps {
  photoURL: string;
  displayName: string;
}

const User = ({ photoURL, displayName }: IUserProps) => {
  return (
    <div className=" flex items-center shrink-0">
      <img
        className=" w-7 h-7 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className=" hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;
