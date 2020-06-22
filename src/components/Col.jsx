import PropTypes from "prop-types";
import styled from "styled-components";
import { isInteger } from "lodash";

import config from "../config";

const { dimensions } = config();

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const offsetProps = dimensions.map((d) => d + "Offset");
const DimensionPropTypes = dimensions.reduce((propTypes, dimension) => {
  propTypes[dimension] = ModificatorType;
  propTypes[dimension + "Offset"] = PropTypes.number;
  return propTypes;
}, {});

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-direction: column;
  padding:0 ${(props) => config(props).gutterWidth / 2}rem;

  ${(props) =>
    Object.keys(props)
      .filter((key) => ~dimensions.indexOf(key))
      .sort((key1, key2) => dimensions.indexOf(key1) - dimensions.indexOf(key2))
      .map(
        (key) =>
          config(props).media[key]`
          ${
            isInteger(props[key])
              ? `
                flex-basis: ${(100 / config(props).gridSize) * props[key]}%;
                max-width: ${(100 / config(props).gridSize) * props[key]}%;
                display: flex;
                
              `
              : props[key]
              ? `
                flex-grow: 1;
                flex-basis: 0;
                max-width: 100%;
                display: flex;
              `
              : "display: none;"
          }`
      )}
      
  ${(props) =>
    Object.keys(props)
      .filter((key) => ~offsetProps.indexOf(key))
      .map(
        (key) =>
          config(props).media[key.replace(/Offset$/, "")]`
            margin-left: ${(100 / config(props).gridSize) * props[key]}%;
        `
      )}


  ${(props) =>
    props.reverse &&
    config(props).media[props.reverse]`
      flex-direction: column-reverse;
    `}
  

  ${(props) =>
    props.first &&
    config(props).media[props.first]`
    order: -1;
  `}

  ${(props) =>
    props.last &&
    config(props).media[props.last]`
    order: 13;
  `}

`;

Col.displayName = "Col";

Col.propTypes = {
  ...DimensionPropTypes,
  first: ModificatorType,
  last: ModificatorType,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Col;
