type CustomButtonProps = {
  label: string;
  clickMe: () => void;
};

const CustomButton = ({ label, clickMe }: CustomButtonProps) => {
  return (
    <button onClick={clickMe} className="p-3 text-white bg-gray-900 rounded-md">
      {label}
    </button>
  );
};

export default CustomButton;
