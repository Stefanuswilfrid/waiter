import Hero from "../../components/Hero";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Metatags from "../../components/Metatags";
import Navbar from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";

export default function Email() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Metatags />
      <div className="container">
        <Navbar />
        <EmailForm />
      </div>
      <Footer/>

    </>
  );
}

function EmailForm() {
  const [messageType, setMessageType] = useState("email template");
  const [warmOrCold, setWarmOrCold] = useState("warm");
  const [personReceiving, setPersonReceiving] = useState("");
  const [messageReason, setMessageReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [showWarning, setShowWarning] = useState(false);

  const onSubmit = async (e) => {
    let r = document.getElementById('result');

    e.preventDefault();

    if (
      messageType === null ||
      warmOrCold === null ||
      personReceiving === null ||
      messageReason == null
    ) {
      r.innerHTML =""
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setResult("");
      setLoading(true);
      r.innerHTML =""

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messageType,
          warmOrCold,
          personReceiving,
          messageReason,
        }),
      });

      const data = await response.json();
      setResult(data.data.text);
      r.innerHTML = result;
      setLoading(false);
    }
  };
  return (
    <div
      className="text-box"
      data-aos="zoom-out"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1>Say Goodbye to Awkward Messaging ! 💬</h1>
      <p className="text-box-desc">
        Say it the right way every time with our pre-written message templates -
        perfect for any occasion!
      </p>

      <div className="text-box-div-child">
        <p className="question-msg">
          <span className="span-no">1</span> Describe The Person You're
          Messaging
        </p>

        <textarea
          onChange={(e) => setPersonReceiving(e.target.value)}
          placeholder="Jokowi , President of Indonesia & Ex-Governor of Solo"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <p className="question-msg">
          <span className="span-no">2</span> Describe You're Reasoning For
          Messaging Them
        </p>

        <textarea
          onChange={(e) => setMessageReason(e.target.value)}
          placeholder="Convinced Him To Come To My School To Give A Speech About Toxic Masculinity"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <p className="question-msg">
          <span className="span-no">3</span> What kind of message do you wish to
          generate?
        </p>

        <div class="select-dropdown">
          <select onChange={(e) => setMessageType(e.target.value)}>
            <option value="email template">Email Template</option>
            <option value="whatsapp message">Whatsapp Message</option>
            <option value="Linkedin Dms">Linkedin Dms</option>
          </select>
        </div>

        <p className="question-msg">
          <span className="span-no">4</span> Do you wish to generate a warm /
          cold message ?
        </p>

        <div class="select-dropdown">
          <select onChange={(e) => setWarmOrCold(e.target.value)}>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
        </div>

        <Button
          onClick={(e) => onSubmit(e)}
          isLoading={loading}
          className="btn btn-primary "
        >
          Generate
        </Button>
        {showWarning ? (
          <p style={{ marginTop: "1rem" }}>
            Please Fill All Credentials Above{" "}
          </p>
        ) : (
          <></>
        )}
          <>
            <p id="result"></p>
          </>
       
      </div>
    </div>
  );
}
