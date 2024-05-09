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
import BasicModal from "./component/NewModal";
import ProfileImageComponent from "./component/ProfileImageComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const [open, setOpen] = React.useState(false);
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
          <ProfileImageComponent handleOpen={handleOpen} />

          <Navbar active />
        </div>
      </div>
      <BasicModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
}

export default App;
