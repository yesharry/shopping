interface IButton {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <button
      className=" bg-brand text-white font-bold py-2 px-4 rounded-xl hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
