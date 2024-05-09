import React from "react";
import "./App.css";

import SideDrawer from "./component/sideDrawer";
import Header from "./component/Header";
import Avatar from "./assets/Avatar.png";
import Menu from "./component/Menu";
import VerifiedTick from "./assets/Verified tick.png";
import profileImage from "./assets/Image-7.png";
import Navbar from "./component/Navbar";
import Table from "./component/Tables";
import ModalComponent from "./component/ModalComponent";
import BasicModal from "./component/NewModal";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideDrawer />

      <div className=" w-full sm:w-3/4 bg-white ">
        <Header />
        <div className="px-8">
          <Menu />
          <div className="flex items-center px-5">
            <div className="relative w-[60px]">
              <img
                className="w-[46px] h-p[46px] sm:w-[56px] sm:h-[56px]"
                src={profileImage}
              />
              <img
                className="absolute w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] sm:right-0 bottom-1 top-15 right-3 sm:top-10"
                src={VerifiedTick}
              />
            </div>
            <h2 className="ml-3 font-bold text-md sm:text-lg">
              Abdullah Nasir
            </h2>
          </div>
          <Navbar active />
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </div>
  );
}

export default App;
