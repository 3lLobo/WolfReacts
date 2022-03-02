
export default function Header(props) {

    return (
        <div className={props.darkMode ? "dark" : ""} >
            <div className="hdr">
                <h1 className="hdr--h1">Meme Gen</h1>
                <p className="hdr--p">by Wolf</p>
                <div className="toggler" >
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider"
                        onClick={props.toggleDarkMode} >
                        <div className="toggler--slider--circle" />
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </div>
        </div>
    )
}
