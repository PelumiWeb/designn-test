import React, { useState } from "react";
import { Button, Modal } from "antd";
import illustration from "../assets/Illustration.png";

const ModalComponent = ({ isModalOpen }: { isModalOpen: boolean }) => {
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        width={1000}
        // onOk={handleOk}
        // onCancel={handleCancel}]
         style={{
        backgroundColor: 'red',
        padding: 0 
    }}
        
        footer={false}
        // wrapClassName="p-0"
      >
        
      </Modal>
    </>
  );
};

export default ModalComponent;
