import React from "react";
import styled from "styled-components";
import { fluidRange } from "polished";
import PropTypes from "prop-types";

const Tag = styled.li`
  font-family: "Nunito";
  font-weight: 400;
  color: black;
  margin: 0 0 0.5em 0;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    "320px",
    "1200px"
  )}
`;

export default function ListItem(props) {
  return <Tag>{props.children}</Tag>;
}

ListItem.defaultProps = {
  tag: "li",
};

ListItem.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
