import logo from "../assets/prsalogo.png";

export default function Banner() {
    {/*TODO: Figure out why the banner passes the navbar when maxWidth is not 100% */}
    return(
        <div className="row" style={{backgroundColor:"black", color: "white"}}>
            <div className="col" style={{maxWidth: "20%"}}>
                <img src={logo} alt="PRSA Logo" classname="banner-logo" style={{width: "10em", padding: ".25em"}}/>
            </div>
            <div className="col" style={{maxWidth: "70%"}}>
                <h1 className="banner-title">Puerto Rican Student Association</h1>
                <h2 className="banner-subtitle">University of Wisconsin-Madison</h2>
            </div>
        </div>
    );
}