import React from "react";
// import Footer from "./Footer";
import { Button } from "@mui/material";
import GokuBox from "./goku";


export default function Navbar(props) {
    const { love, transp: tr , goku} = props;

    return (
        <nav>
            <Button variant={tr ? "outlined" : "contained"}>
                <h1>Favorite Person</h1>
            </Button>
            <ol>
                { props.love  && <li>Nuka</li> }
                <li>Nuka</li>
                <li>WimHof</li>
            </ol>
            <GokuBox img={goku} />
        </nav>
    );
}
