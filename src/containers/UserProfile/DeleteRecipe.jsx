import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const DeleteRecipe = props => {
  const { deleteRecipe, userRecipe } = props;
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);


  return (
    <Modal toggle={toggle} isOpen={modal} className={className}>
      <ModalHeader toggle={toggle}>Confirm deleting this recipe</ModalHeader>
      <ModalBody>{userRecipe.title}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => deleteRecipe(userRecipe.id)}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteRecipe;
