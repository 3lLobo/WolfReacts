export default function Footer() {

    const date = new Date().getHours()
    
    return (
        <div className="foot">
            <h3> This is the Footer </h3>
            <h4>It is {date} am/pm </h4>
        </div>
    );
}
