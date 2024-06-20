import { Fragment } from "react"
import SpinnerGif from "./../assets/Spinner.gif"

const Spinner = () => {
    return(
        <Fragment>
            <img src={SpinnerGif} className="d-block m-auto" style={{width:"200px"}}></img>
        </Fragment>
    )
}

export default Spinner;