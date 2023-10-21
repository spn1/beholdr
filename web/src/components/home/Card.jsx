import Link from "next/link";

export const Card = ({ children }) => {
  return (
    <div className="p-8 border-gray-500 rounded-lg border-solid shadow-lg">
      {children}
    </div>
  );
};
