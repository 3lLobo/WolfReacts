import React from "react";
// import Footer from "./Footer";
import { TextField } from "@mui/material";

export default function Card(props, goku_img) {
    // const props = props;

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "2LATE SUCKER"
    } else if (props.location === "Online") {
badgeText = "ONLINE"
    }
    return (
        <div className="card" key={props.id}>
            <p> {props.title} </p>
            <img src={goku_img} alt={props.img} className="card--image" />
            { badgeText && <div className="card--image--badge">{badgeText}</div>}
            {/* <img src={`..images/${props.img}`} alt={props.img} className="card--image" /> */}
            <div className="card--stats">
                <p> {props.description} </p>
            </div>
            <TextField
                label={props.price}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <p> location: {props.location} </p>
        </div>
    );
}

// 