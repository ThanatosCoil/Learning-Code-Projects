import { GrClose } from "react-icons/gr";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}

        <button
          onClick={onClose}
          className="absolute p-1 top-2 right-2 text-gray-500 border-2 rounded-full hover:text-gray-900"
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
};
export default Modal;
