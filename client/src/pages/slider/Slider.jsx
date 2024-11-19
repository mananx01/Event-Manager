import "./slider.css";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Slider = () => {

    const photos = [
       
        {
            src:"https://plus.unsplash.com/premium_photo-1697730410005-1d916de26345?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            src:"https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            src:"https://images.unsplash.com/photo-1625751950109-394d683833d0?q=80&w=2854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
        
      ];
    const [slideNumber,setSlideNumber]= useState(0);
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1;
        } else {
        newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    
    
      const navigate=useNavigate();
      const handleClick=(e)=>{
        if(slideNumber==0){
            navigate("/halls/karimnagar")
        }
        else if(slideNumber==1){
            navigate("/halls/hyderabad")
        }
        else if(slideNumber==2){
            navigate("/halls/warangal")
        }
      }

    

    return (
        <div>
           
            <div className="slider1">
                <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper1">
                <img onClick={handleClick} src={photos[slideNumber].src} alt="" className="sliderImg1" />
                </div>
                <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow1"
                onClick={() => handleMove("r")}
                />
            </div>
        </div>
        
    );
};

export default Slider;