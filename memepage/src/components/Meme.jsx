import { TextField, Box, Stack, Button } from "@mui/material"
import { EmojioneV4 } from 'react-emoji-render'

export default function Meme() {

    return (
        <main alignItems="center">
            <Stack className="meme--box" spacing={3} alignItems="center">
                <Stack direction="row" spacing={3} alignItems="center" className="meme--stack">
                    <TextField variant="filled" placeholder="text"></TextField>
                    <TextField variant="filled" placeholder="text"></TextField>
                </Stack>
                <Button variant="contained" className="meme--button">
                <EmojioneV4 text="Get your Meme :grin:"/>
                </Button>
            </Stack>
        </main>
    )
}