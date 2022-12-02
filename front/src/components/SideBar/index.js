import React from "react";
import * as C from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SideBarItem from "../SideBarItem";

const SideBar = ({ active }) => {
  const closeSideBar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSideBar} />
      <C.Content>
        <SideBarItem Icon={FaHome} Text="Home" />
        <SideBarItem Icon={FaChartBar} Text="Statistics" />
        <SideBarItem Icon={FaUserAlt} Text="Users" />
        <SideBarItem Icon={FaEnvelope} Text="Mail" />
        <SideBarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SideBarItem Icon={FaIdCardAlt} Text="Employees" />
        <SideBarItem Icon={FaRegFileAlt} Text="Reports" />
        <SideBarItem Icon={FaRegSun} Text="Settings" />
      </C.Content>
    </C.Container>
  );
};

export default SideBar;
