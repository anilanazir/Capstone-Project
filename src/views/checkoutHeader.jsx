import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          Greenstore
        </Link>
      </div>
      <div className="border-b border-gray-200" />
    </header>
  );
};

export default CheckoutHeader;
