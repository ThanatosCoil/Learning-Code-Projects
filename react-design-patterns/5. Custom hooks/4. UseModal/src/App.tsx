import { useState } from "react";
import WithoutHookModal from "./components/WithoutHookModal";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <h1> Modal</h1>
        <button onClick={openModal}>Open Modal</button>
        <WithoutHookModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <hr /> <br /> <br />
      <div>
        <h1>Hook Modal</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default App;
