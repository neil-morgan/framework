import PropTypes from "prop-types";
import styled from "styled-components";
import { isInteger } from "lodash";

import Config from "../config";

const { dimensions } = Config();

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const offsetProps = dimensions.map((d) => d + "Offset");
const DimensionPropTypes = dimensions.reduce((propTypes, dimension) => {
  propTypes[dimension] = ModificatorType;
  propTypes[dimension + "Offset"] = PropTypes.number;
  return propTypes;
}, {});

const Col = styled.div`
  position:relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-direction: column;
  min-height:1px;
  padding:0 ${(props) => Config(props).gutterWidth / 2}rem;

  ${(props) =>
    Object.keys(props)
      .filter((key) => ~dimensions.indexOf(key))
      .sort((key1, key2) => dimensions.indexOf(key1) - dimensions.indexOf(key2))
      .map(
        (key) =>
          Config(props).media[key]`${
            isInteger(props[key])
              ? `
                flex-basis: ${(100 / Config(props).gridSize) * props[key]}%;
                max-width: ${(100 / Config(props).gridSize) * props[key]}%;
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
          Config(props).media[key.replace(/Offset$/, "")]`
            margin-left: ${(100 / Config(props).gridSize) * props[key]}%;
        `
      )}

  ${(props) => props && Config().preset(props)}
`;

Col.displayName = "Col";

Col.propTypes = {
  ...DimensionPropTypes,
  children: PropTypes.node,
};

export default Col;
