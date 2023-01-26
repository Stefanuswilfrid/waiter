import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtCard from "../../components/ArtCard";
import {Button } from "@chakra-ui/react";
import Metatags from "../../components/Metatags";
import Navbar from "../../components/Navbar";
import Accordion from "../../components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import { saveAs } from "file-saver";

export default function ImagePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  

  return (
    <>
      <Metatags/>
      
      <div className="container">
      <Navbar/>
      <ImageForm/>

      </div>
      <Footer/>
    </>
  );
}

function ImageForm() {
  const [artStyle,setArtStyle] = useState("");

  const [imagePrompt,setImagePrompt] = useState("")
  const [loading,setLoading] = useState("")
  const [result,setResult] = useState("")
  const [warning,setWarning] = useState(false)
  const [number,setNumber] = useState(1)





  const onSubmit = async(e) => {
    e.preventDefault()

    if(imagePrompt === "" ||  artStyle === "" || number === 0){
      setWarning(true)
    }
    else {
      setWarning(false)
      setLoading(true)
      const response = await fetch("/api/image",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            artStyle,imagePrompt,number
        }),
      })

      const data = await response.json();
      setResult(data.data)
      setLoading(false)
    }
  }

  return (
    <div className="text-box" 
    data-aos="zoom-out"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out-cubic">
      <h1>Imagine it, Prompt it, Generate it!</h1>
      <p className="text-box-desc">
      From concept to creation, let us turn your vision into visually stunning reality.
      </p>
        <div className="img-generator-container">
          <div className="img-result-wrapper">
          { !result ?
          <>
          <Image id="copy" src={"/gradient-email.png"} width={256} height={250} alt=""/>
          <Image src={"/gradient-img.png"} width={256} height={256} alt=""/>
          </>:
          
          <>
          {result.map((r)=>{
            return (
              <img 
                src={r.url} width="256px" height="256px" alt=""/>
                
            )

          })
          }
          </>

          
          }
          </div>
          <div>
          <Accordion
          handleClick={(style)=>{setArtStyle(style)}}
          title="Choose Your Styles"
          content="Second Accordion content"
        />
          <div className="range-input-wrapper">

          <input className="range-input" type="range" min="1" max="4" step="1" value={number} onChange={(e)=>{setNumber(e.target.value)}} id="myRange"></input>
          <p>Number of image you wish to generate: {number}</p>
          </div>
          </div>
          <div className="img-button-input-wrapper">
            <input type="text" onChange={(e)=>{setImagePrompt(e.target.value)}} />
            <Button  isLoading={loading} onClick={(e)=>{onSubmit(e)}}>Generate</Button>
          </div>

        </div>
        {warning && <p style={{textAlign:"left"}}>Please fill all the credentials before generating</p>}


    

      </div>
  );
}
