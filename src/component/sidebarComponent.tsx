import React from "react";
import image from "../assets/icon.png";
import Home from "../assets/home.png";
import arrowUp from "../assets/chevron-up.png";
import arrowDown from "../assets/chevron-down.png";

const SidebarComponent = ({
  text,
  image,
  arrowRight,
  componentChildren,
}: {
  text: string;
  image: string;
  arrowRight?: boolean;
  componentChildren?: [];
}) => {
  const data = ["User", "Employee", "Drivers", "Influence"];
  const [active, setActive] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div
        className="flex  w-100 justify-between py-3 cursor-pointer"
        onClick={() => setActive((prev) => !prev)}>
        <div className="flex items-center">
          {/* Icons */}
          <img className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" src={image} />
          <p
            className="text-sm font-sans text-white ml-2"
            >
            {text}
          </p>
          {/* Text */}
        </div>

        {arrowRight && !active && (
          <img style={{ width: 24, height: 24 }} src={arrowUp} />
        )}
        {arrowRight && active && (
          <img style={{ width: 24, height: 24 }} src={arrowDown} />
        )}
      </div>
      {componentChildren && active && (
        <div className="ml-6">
          {data?.map((data) => (
            <div>
              <li className="text-sm font-sans text-white cursor-pointer hover:bg-yellow-500 hover:text-green-500 py-2 rounded-lg px-4 ">
                {data}
              </li>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
