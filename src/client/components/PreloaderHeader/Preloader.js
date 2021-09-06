import React from 'react';
import Svg from '../Svg/Svg';
// import LogoEpikur from "../Svg/Images/LogoEpikur";
// import LogoEpikur2 from "../Svg/Images/LogoEpikur2";
// import Chebaturochka_logo from "../Svg/Images/Chebaturochka_logo";

const Preloader = (props) => {
  const { classname, viewBox, path } = props;
  return (
    <>
      <Svg className={classname} viewBox={viewBox} path={path} />
    </>
  );
};

export default Preloader;
