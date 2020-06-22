import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import config from "../config";

const { dimensions } = config();

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props) => config(props).outerMargin + "rem"};
  padding-left: ${(props) => config(props).outerMargin + "rem"};

  ${(props) =>
    !props.fluid &&
    css`
      ${dimensions.map(
        (t) =>
          config(props).container[t] &&
          config(props).media[t]`
            width: ${(props) => config(props).container[t]}rem;
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
