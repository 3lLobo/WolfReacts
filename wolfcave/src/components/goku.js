import React from "react";
// import Footer from "./Footer";
import { ListItemIcon } from "@mui/material";

export default function GokuBox(props) {
    console.log(props)
    return (
        <div className="goku">
            {/* <ListItemIcon> */}
            {props.img && <img src={props.img} alt="Goku img" />}
            {/* </ListItemIcon> */}
        </div>
    );
}
