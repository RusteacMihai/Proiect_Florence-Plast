import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Program() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} style={{ width: "150px", color: "white", fontWeight: "700", fontSize: "12px" }}>
        Afiseaza programul
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Program</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Luni 09:00 - 17:00 <br />
          Marţi 09:00 - 17:00 <br />
          Miercuri 09:00 - 17:00 <br />
          Joi 09:00 - 17:00 <br />
          Vineri 09:00 - 17:00 <br />
          Sâmbătă ÎNCHIS <br />
          Duminică ÎNCHIS
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Inchide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Program;
