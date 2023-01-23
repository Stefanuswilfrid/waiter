import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtCard from "../../components/ArtCard";
import {Button } from "@chakra-ui/react";
import Metatags from "../../components/Metatags";


export default function ImagePage() {
  return (
    <>
      <Metatags/>
      <Hero
        text={"Transform Your Words Into Stunning Visuals"}
        imagePos={"bottom"}
        subtext={"From stunning artwork to practical designs, we've got you covered"}
        imgUrl={
          "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/7b7bf126-c055-487c-8b7c-5f615f606a1f"
        }
      />
      <ImageForm />
    </>
  );
}

function ImageForm() {
  const [artStyle,setArtStyle] = useState("");
  const imageArray = [
    {imgUrl: "/digital-art.jpeg",text:"Digital Art"},
    {imgUrl:"/anime.JPG",text:"Anime"},
    {imgUrl:"/pixel-art.JPG",text:"Pixel Art"},
    {imgUrl:"/baroque.JPG",text:"Baroque"},
    {imgUrl:"/cute-adorable.JPG",text:"Cute and Adorable Cartoon"},
    {imgUrl:"/hyper-realistic.JPG",text:"Hyper realistic"},
  ]

  const [imagePrompt,setImagePrompt] = useState("")
  const [loading,setLoading] = useState("")
  const [result,setResult] = useState("")
  const [warning,setWarning] = useState(false)



  const onSubmit = async(e) => {
    e.preventDefault()

    if(imagePrompt === "" ||  artStyle === ""){
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
            artStyle,imagePrompt
        }),
      })

      const data = await response.json();
      setResult(data.data)
      setLoading(false)
    }
  }



  return (
    <div className="image-content">
      <div>
        <div>
        <h2>Describe What You Want To See </h2>
        <p>{imagePrompt.length}/200</p>
        </div>
        <input type="text" placeholder="Ex : Godzilla creating chaos in NYC" onChange={(e)=>setImagePrompt(e.target.value)} value={imagePrompt} />
        <div className="image-button-wrapper">
          <Button onClick={(e)=>setImagePrompt("Pikachu doing deadlifts")}>Pikachu doing deadlifts </Button>
          <Button onClick={(e)=>setImagePrompt("Portrait of a cat wearing a spacesuit")}>Portrait of a cat wearing a spacesuit</Button>
          <Button onClick={(e)=>setImagePrompt("Fire and water")}>Fire and water</Button>
        </div>
        {imagePrompt.length>200 ? <p className="warning">Your prompt should be less than 200 letters</p>:<></>}
        <h1 >Choose Your Art Style</h1>
        <div className="art-style-wrapper">
          
        <ArtCard isClicked={artStyle === imageArray[0].text} handleClick={(style)=>{setArtStyle(style)}}  imgUrl={imageArray[0].imgUrl} text={imageArray[0].text} />
        <ArtCard isClicked={artStyle === imageArray[1].text} handleClick={(style)=>{setArtStyle(style)}} imgUrl={imageArray[1].imgUrl} text={imageArray[1].text} />
        <ArtCard isClicked={artStyle === imageArray[2].text} handleClick={(style)=>{setArtStyle(style)}} imgUrl={imageArray[2].imgUrl} text={imageArray[2].text} />
        <ArtCard isClicked={artStyle === imageArray[3].text} handleClick={(style)=>{setArtStyle(style)}} imgUrl={imageArray[3].imgUrl} text={imageArray[3].text} />
        <ArtCard isClicked={artStyle === imageArray[4].text} handleClick={(style)=>{setArtStyle(style)}} imgUrl={imageArray[4].imgUrl} text={imageArray[4].text} />
        <ArtCard isClicked={artStyle === imageArray[5].text} handleClick={(style)=>{setArtStyle(style)}} imgUrl={imageArray[5].imgUrl} text={imageArray[5].text} />



        </div>

        <Button isLoading={loading} onClick={(e)=>{onSubmit(e)}} className="purple-button">Create</Button>
        {warning? <p className="warning">Please fill all the credentials ! </p>:<></>}
      </div>

      <div>
        <h2 >Art Preview</h2>
        <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-rRAPQYm6AXO5SQdadvFN6Ytm/user-3IbGlakiRjAhGNHWjLEB1Jd4/img-TfIS83xmCovx24OUXtQinFAW.png?st=2023-01-22T11%3A36%3A36Z&se=2023-01-22T13%3A36%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-22T12%3A27%3A57Z&ske=2023-01-23T12%3A27%3A57Z&sks=b&skv=2021-08-06&sig=uekBlCFnC6OFD2uwIexDpVCJqFeSihh4tgCTxR8VIpM%3D" alt="" />
        {
          result? <img src={result} alt="" />
           :  <Image src="/gradient-email.png" width={512} height={512} />

        }

      </div>
    </div>
  );
}
