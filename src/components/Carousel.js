import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [img,setImg]=useState(0)
    const back=()=>{
        if(img>0){
            setImg(img-1)
        }
        else{
            setImg(2)
        }
    }
    const front =()=>{
        if(img<2){
            setImg(img+1)
        }
        else{
            setImg(0)
        }
    }

    return(
        <div id="display">
            <ArrowBackIosIcon onClick={back} />
            <img src={images[img].img} alt="hjdoh" />
            <ArrowForwardIosIcon onClick={front} />
        </div>
    )
}

export default Carousel;