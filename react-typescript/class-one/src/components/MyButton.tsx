interface MyButtonProps {
  title: string;
  disabled: boolean;
}

const MyButton = ({ title, disabled }: MyButtonProps) => {
  return (
    <div>
      <button className="bg-gray-500 px-2 py-1 rounded-sm" disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default MyButton;
