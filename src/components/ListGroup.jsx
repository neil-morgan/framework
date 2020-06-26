import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ListItem from "./ListItem";

const Tag = styled.ul`
  &,
  & ol,
  & ul {
    margin: 0 0 0 2rem;
  }
`;

const getListItems = (item, index) => {
  return item.tag ? (
    <Tag as={item.tag} key={index}>
      {item.content.map((item, index) => {
        return getListItems(item, index);
      })}
    </Tag>
  ) : (
    <ListItem key={index}>{item.content}</ListItem>
  );
};

export default function ListGroup({ list }) {
  return (
    <Tag>
      {list.map((item, index) => {
        return getListItems(item, index);
      })}
    </Tag>
  );
}

ListGroup.defaultProps = {
  tag: "ul",
};

ListGroup.propTypes = {
  content: PropTypes.array,
};

// USAGE
//
// const list = [
//   {
//     content: "Foo",
//   },
//   {
//     content: "Foo",
//   },
//   {
//     content: "Foo",
//   },

//   {
//     tag: "ol",
//     content: [
//       {
//         content: <strong>Bar</strong>,
//       },
//       {
//         content: <strong>Bar</strong>,
//       },
//       {
//         content: <strong>Bar</strong>,
//       },
//     ],
//   },
//   {
//     content: "Foo",
//   },
// ];
// <ListGroup list={list} />
