import { useContext } from "react";
import Router from "next/router";
import { GlobalContext } from "../contexts/global-context";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fluidRange } from "polished";
import Icon from "./Icon";
import Ripple from "./Ripple";
import utilities from "../utilities";
const { brightness } = utilities;

export default function Social() {
  return <Nav>Social Icons</Nav>;
}

const Nav = styled.nav`
  color: #fff;
  text-align: center;
`;
