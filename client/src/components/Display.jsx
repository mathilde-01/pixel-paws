export default function Display() {

    return (
        <>  <div className="displayContainer">
            <div className="petCircle"></div>
            <div className="petStand"></div>
            <div className="btnContainer">
                <a className="waves-effect waves-light btn-small" id="greenColor">Play</a>
                <a className="waves-effect waves-light btn-small" id="blueColor">Clean</a>
                <a className="waves-effect waves-light btn-small" id="medPurpleColor">Sleep</a>
                <a className="waves-effect waves-light btn-small" id="orangeColor">Feed</a>
            </div>
            <div className="healthContainer"></div>
            </div>
        </>
    )

}