import React, { useState } from "react";
import { ReactComponent as Gear } from "../../assets/img/gear.svg";
import classNames from "classnames";
import "./styles.css";

const GearButton: React.FC = () => {
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <Gear
        className={classNames({
          "absolute top-4 right-4 cursor-pointer z-[2]": true,
          rotate: rotate,
          unrotate: !rotate,
        })}
        id="gear"
        onClick={() => setRotate((current) => !current)}
      />
    </>
  );
};

export default GearButton;
