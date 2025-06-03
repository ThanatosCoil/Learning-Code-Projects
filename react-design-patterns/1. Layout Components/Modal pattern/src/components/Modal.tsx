import { ReactNode, useState } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && (
        <button
          className="border p-5 bg-gray-300 rounded-full flex mx-auto "
          onClick={() => setShow(true)}
        >
          Show the modal
        </button>
      )}
      {show && (
        <section
          className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black bg-opacity-50"
          onClick={() => setShow(false)}
        >
          <div
            className="bg-white mx-[10%] my-auto p-[20px] w-[50%]"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            <button
              className="absolute top-4 right-4 border w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
            >
              X
            </button>
            {children}
          </div>
        </section>
      )}
    </>
  );
};
export default Modal;
