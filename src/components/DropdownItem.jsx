import React from 'react';
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropdownItem = (props) => {
    return (
        <>
        <Link to={`/company-detail/${props.id}`}>
            <ListGroup.Item className="text-left" style={{color: "black"}}>{props.title}</ListGroup.Item>
        </Link>
        </>
    );
  }
  
  export default DropdownItem;