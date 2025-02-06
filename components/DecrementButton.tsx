"use client";

type Props = {
  decrement: () => void;
};

const DecrementButton = ({ decrement }: Props) => {
  return (
    <button
      onClick={decrement}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
    >
      Decrement
    </button>
  );
};

export default DecrementButton;
