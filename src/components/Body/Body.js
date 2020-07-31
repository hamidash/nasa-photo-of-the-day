import React from "react";

function Body(props) {
    const {url, title, explanation} = props.nasaData;

    return(
        <div>
            <section className="container content">
                <h2>{title}</h2>
                <p>{explanation}</p>
            </section>
            <section className="container image ">
                <img src={url}/>
            </section>
        </div>
    )
}

export default Body;