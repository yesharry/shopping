interface UserProps {
  photoURL: string;
  displayName: string;
}

const User = ({ photoURL, displayName }: UserProps) => {
  return (
    <div className=" flex items-center shrink-0">
      <img
        className=" w-8 h-8 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className=" hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;
