"use client";

type Props = {
  increment: () => void;
};

const IncrementButton = ({ increment }: Props) => {
  return (
    <button
      onClick={increment}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
    >
      Increment
    </button>
  );
};

export default IncrementButton;
