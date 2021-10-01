import React from "react"


const Description = React.memo((props) => {
    return(
        <React.Fragment>
            <h4>{props.foodName}</h4>
            <div>{props.description}</div>
            <p >Price: {props.price}$</p>
        </React.Fragment>
    )
})

export default Description