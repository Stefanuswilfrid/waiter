import { Button, Input } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import { useState } from "react";
import { UserAuth } from "../../lib/AuthContext";
import Chat from "../../components/Chat";
import Metatags from "../../components/Metatags";
import Navbar from "../../components/Navbar";
import { CheckIcon } from '@chakra-ui/icons';
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChatPage() {

  return (
    <>
      <Metatags />

      <div className="container">
        <Navbar/>
        <EmailForm/>
        
      </div>
      <Footer/>
    </>
  );
}

function EmailForm() {
  const [duration,setDuration] = useState(0)
  const [ingredients,setIngredients] = useState("")

  const [isOven,setIsOven] = useState(false)
  const [isStove,setIsStove] = useState(false)
  const [isMicrowave,setIsMicrowave] = useState(false)
  const [isBlender,setIsBlender] = useState(false)

  const [ovenStyle,setOvenStyle] = useState("tools-check")
  const [stoveStyle,setStoveStyle] = useState("tools-check")
  const [microwaveStyle,setMicrowaveStyle] = useState("tools-check")
  const [blenderStyle,setBlenderStyle] = useState("tools-check")

  const [showWarning,setShowWarning] = useState(false)
  const [loading,setLoading] = useState(false)
  const [result,setResult] = useState("")
  const [isResult,setIsResult] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault();
    let r = document.getElementById('result');


    if (
      ingredients === "" ||
      duration === 0 ||
      (isOven === false && isBlender === false && isMicrowave === false && isStove === false)
    ) {
      r.innerHTML =""
      setShowWarning(true);
    } else {
      r.innerHTML =""
      setShowWarning(false);
      setResult("");
      setLoading(true);
      const response = await fetch("/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients,
          duration,
          isOven,
          isBlender,
          isMicrowave,
          isStove
        }),
      });

      const data = await response.json();
      setResult(data.data.text);
      

      setLoading(false);
  
      r.innerHTML = result; 
    }
  };

  const handleStyle = (tools) => {
    if(tools === "oven"){
      setIsOven(!isOven)
      const oven = document.querySelector(".oven")
      oven.classList.toggle("active")      
    }

    if(tools === "stove"){
      setIsStove(!isStove)
      const stove = document.querySelector(".stove")
      stove.classList.toggle("active")  
    }

    if(tools === "microwave"){
      setIsMicrowave(!isMicrowave)
      const microwave = document.querySelector(".microwave")
      microwave.classList.toggle("active")  
    }

    if(tools === "blender"){
      setIsBlender(!isBlender)
      const blender = document.querySelector(".blender")
      blender.classList.toggle("active") 
    }

  }

  return (
    <div className="text-box" data-aos="zoom-out"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out-cubic">
          <h1>Elevate your meal game  with us 🥘.</h1>
          <p className="text-box-desc">
          Let our meal recommendation website be your guide to delicious, resource-friendly meals that will leave your taste buds happy.
          </p>

          <div className="text-box-div-child">
        <p className="question-msg">
          <span className="span-no">1</span> Describe Ingredients You Have
        </p>

        <textarea
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="100g of Noodles 🍜 , 400ml of Milk 🍼"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <p className="question-msg">
          <span className="span-no">2</span> How Much Time Do You Have? (minutes)
        </p>

        <div className="range-input-wrapper">

          <input  className="range-input-center" type="range" min="10" max="120" step="10" value={duration} onChange={(e)=>{setDuration(e.target.value)}} class="slider" id="myRange"></input>
          <p className="label-range">{duration} 🕓</p>
          </div>

          <p className="question-msg" style={{marginBottom:"1rem"}}>
          <span className="span-no">3</span> What Kitchen Tools do you have?
        </p>

        <div className={ovenStyle + " oven"} onClick={()=>{handleStyle("oven")}} >
          Oven <CheckIcon/>
        </div>
        <div className={stoveStyle + " stove"} onClick={()=>{handleStyle("stove")}}>
          Stove <CheckIcon/>
        </div>
        <div className={microwaveStyle + " microwave"} onClick={()=>{handleStyle("microwave")}}>
          Microwave <CheckIcon/>
        </div>
        <div className={blenderStyle + " blender"} onClick={()=>{handleStyle("blender")}}>
          Blender <CheckIcon/>
        </div>
        



        </div>
        <Button
          onClick={(e)=>{onSubmit(e)}}
          isLoading={loading}
          className="btn btn-primary "
        >
          Generate
        </Button>
        {showWarning && <p>Please Fill all credentials</p>}
     <div id="result"></div>
        </div>
  );
}
