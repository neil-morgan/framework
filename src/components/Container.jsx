import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Config from "../config";

const { dimensions } = Config();

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  ${(props) =>
    !props.fluid &&
    css`
      ${dimensions.map(
        (t) =>
          Config(props).container[t] &&
          Config(props).media[t]`
            width: ${(props) => Config(props).container[t]}rem;
            padding-right: ${(props) => Config(props).outerMargin + "rem"};
            padding-left: ${(props) => Config(props).outerMargin + "rem"};
      `
      )}
    `}
`;

Container.displayName = "Container";

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

export default Container;
