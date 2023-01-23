import Hero from "../../components/Hero";
import {Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Metatags from "../../components/Metatags";
export default function Email() {
  return (
    <>
          <Metatags/>

      <Hero
        text={"Say Goodbye to Awkward Messaging"}
        imagePos={"center"}
        imgUrl={
          "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/7ca99551-0d58-4980-88a9-c56de1af314a"
        }
        subtext={"Get personalized message recommendations - tailored to your taste!"}
      />

      <EmailForm />
    </>
  );
}

function EmailForm() {
  const [messageType, setMessageType] = useState(null);
  const [warmOrCold, setWarmOrCold] = useState("");
  const [personReceiving, setPersonReceiving] = useState("");
  const [messageReason, setMessageReason] = useState("");
  const [loading,setLoading] = useState(false);
  const [result, setResult] = useState(null);


  const [showWarning,setShowWarning] =useState(false);

  const onSubmit = async(e) => {
    e.preventDefault();

    if( messageType === null  ||  warmOrCold === null || personReceiving ===null || messageReason ==null){
        setShowWarning(true)
    }

    else {
        setShowWarning(false)
        setResult("")
        setLoading(true)
        const response = await fetch("/api/email",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            messageType,warmOrCold,personReceiving,messageReason
        }),
        })

        const data = await response.json();
        setResult(data.data.text)
        // alert(data.data)
        setLoading(false)
        
    } 
  }
  return (
    <div className="email-content">
      <h1>What kind of message do you wish to generate? </h1>

      <form onSubmit={onSubmit} className="email-form">
        <select
          className="select"
          name=""
          id=""
          defaultValue="email template"
          onChange={(e) => setMessageType(e.target.value)}
        >
          <option value="email template">Email Template</option>
          <option value="Linkedin DMs">Linkedin DMs</option>
          <option value="Whatsapp Message">WhatsApp Message</option>
        </select>

        <h1>Do you wish to generate a warm / cold message ? </h1>

        <select
          className="select"
          name=""
          id=""
          onChange={(e) => setWarmOrCold(e.target.value)}
        >
          <option value="cold">Cold</option>
          <option value="warm">Warm</option>
        </select>


        <div className="textarea-wrapper">
          <h1>Describe The Person You're Messaging</h1>
          <textarea
            onChange={(e) => setPersonReceiving(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Jokowi , President of Indonesia & Ex-Governor of Solo"
          ></textarea>
          <h1>Describe You're Reasoning For Messaging Them</h1>

          <textarea
            onChange={(e) => setMessageReason(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Convinced Him To Come To My School To Give A Speech About Toxic Masculinity"
          ></textarea>
        </div>

        <Button onClick={(e)=>onSubmit(e)} isLoading={loading}  className="purple-button">Generate Message</Button>
        {
            showWarning ? <p>Please Fill All Credentials Above </p>:<></>
        }
        {
            loading? <p>Loading....</p>:<></>

        }
        {
            result ? <><h1>Result</h1><p>{result}</p></>:<></>
        }
      </form>
    </div>
  );
}
