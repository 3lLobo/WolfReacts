import { TextField, Stack, Button } from "@mui/material"
import { EmojioneV4 } from 'react-emoji-render'
import { useEffect, useState } from "react"
import { Formik } from "formik"
import MemeData from "./MemeData"



export default function Meme(props) {

    const [buttonText, setButtonText] = useState("Get your Meme :grin:")

    function handleClick() {
        setButtonText(function (oldText) {
            if (oldText === "Get your Meme :grin:") {
                return "Get your :grin:"
            } else {
                return "Get your Meme :grin:"
            }
        })
        const rndmIdx = Math.floor(Math.random() * MemeData.data.memes.length)
        console.log(rndmIdx)
        setMemeImg(prevMeme => ({
            ...prevMeme,
            url: MemeData.data.memes[rndmIdx].url
        }))
    }

    const [memeImg, setMemeImg] = useState({
        text1: "",
        text2: "",
        url: MemeData.data.memes[11].url
    })


    function handleTextChange(event) {
        console.log(event.value)
        const { name, value, type, checked } = event.target
        setMemeImg(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }))
        console.log(memeImg)
    }


    useEffect(() => {
        return function () {

        }
    }, [])

    return (
        <main>
            <Stack className="meme--box" spacing={3} alignItems="center">
                <Stack direction="row" spacing={3} className="meme--stack">
                    <TextField variant="filled"
                        placeholder="top text"
                        className="meme--text"
                        value={memeImg.text1}
                        onChange={handleTextChange}
                        name="text1" />

                    <TextField variant="filled"
                        placeholder="bottom text"
                        className="meme--text"
                        value={memeImg.text2}
                        onChange={handleTextChange}
                        name="text2" />
                </Stack>
                <Button variant="contained" className="meme--button" onClick={handleClick}>
                    <EmojioneV4 text={buttonText} />
                </Button>
                <div className="meme">
                    <img src={memeImg.url} alt={memeImg.url} className="meme--img" />
                    <h2 className="meme--img--text" style={{ top: 0 }} >{memeImg.text1}</h2>
                    <h2 className="meme--img--text" style={{ bottom: 0 }} >{memeImg.text2}</h2>
                </div>
            </Stack>
        </main>
    )
}