import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import { FaDollarSign } from "react-icons/fa";

const Resume = ({ total }) => {
  return (
    <C.Container>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
