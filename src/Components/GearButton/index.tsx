import React, { useState } from "react";
import { ReactComponent as Gear } from "../../assets/img/gear.svg";
import classNames from "classnames";
import "./styles.css";

type GearButtonProps = {
  toggleDrawer: () => void;
};
const GearButton: React.FC<GearButtonProps> = ({ toggleDrawer }) => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    toggleDrawer();
    setRotate((current) => !current);
  };

  return (
    <>
      <Gear
        className={classNames({
          "absolute top-4 right-4 cursor-pointer z-[2]": true,
          rotate: rotate,
          unrotate: !rotate,
        })}
        id="gear"
        onClick={toggleRotate}
      />
    </>
  );
};

export default GearButton;
