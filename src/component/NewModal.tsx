import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import illustration from "../assets/Illustration.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  boxShadow: 24,
  // borderRadius: 8,
  padding: 0,
  p: 0,
};

export default function BasicModal({open, handleClose, handleOpen}: any) {
 

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={style}
          className="lg:w-[960px] bg-[#F9FAFB] rounded-lg sm:w-[500px] w-[400px]">
          <div className="flex  h-full sm:h-[550px] justify-between items-center w-full rounded-lg ">
            {/* Left */}
            <div className="w-5/12 h-full py-4 px-4 ">
              <h1 className="text-md xs:text-lg font-sans font-semibold text-[#1A1A1A]">
                Header
              </h1>
              <p className="text-gray-500 text-sm xs:text-md font-sans">
                Optional Description
              </p>
              {/* labels */}

              {[1, 2, 3, 4, 5].map((data) => (
                <div className="my-4">
                  <p className="mb-2 text-[14px] xs:text-md font-sans">Label</p>
                  <input
                    className="bg-white text-black text-sm xs:text-md p-2 rounded-lg outline-none w-full"
                    placeholder="Filled"
                  />
                </div>
              ))}
            </div>
            {/* Right */}
            <div className="w-7/12 bg-[#FFFFFF] h-full py-4 px-4 rounded-r-lg">
              <div className="flex items-center p-2">
                <div className="bg-gray-200 rounded-md mr-2 py-2 px-4">
                  <p className=" font-sanstext-sm text-gray-700 text-[12px] lg:text-md text-center">
                    {" "}
                    Label
                  </p>
                </div>
                <div className=" rounded-md mr-2  p-4">
                  <p className=" font-sans text-sm text-gray-700 text-[12px] lg:text-md text-center">
                    {" "}
                    Label
                  </p>
                </div>
                <div className=" rounded-md mr-2 py-2 px-4">
                  <p className=" font-sans text-sm text-gray-700 text-[12px] lg:text-md text-center">
                    {" "}
                    Label
                  </p>
                </div>
              </div>
              <div>
                <img className="h-[350px]" src={illustration} />
              </div>
              <div>
                <div className="flex py-4 mt-10 items-center w-full justify-end pr-4">
                  <p
                    className="mr-4 font-sans cursor-pointer"
                    onClick={handleClose}>
                    Cancel
                  </p>
                  <button className="py-2 px-4 bg-black text-sm text-white cursor-pointer rounded-lg focus-within:outline-0 focus:border-transparent ">
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
