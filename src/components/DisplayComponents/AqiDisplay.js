

function AqiDisplay(props){
    return (<div className="text-center bg-warning bg-opacity-75">
        {console.log(props.data)}
        <h2>Air Quality Index</h2>
        <div className="card">
            <div className="card-body">
                <img src={props.current} />
                <p></p>
            </div>
        </div>






        </div>);
}

export default AqiDisplay;