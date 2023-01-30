import Image from "next/image";
import IndexCard from "./IndexCard";
import Navbar from "./Navbar";
import Link from "next/link";
import { ChatIcon } from "@chakra-ui/icons";
import Chat from "./Chat";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { UserAuth } from "../lib/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { user,googleSignIn } = UserAuth();

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }; 



  const [userInput, setUserInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chat, setChat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput === "") {
    } else {
      setIsGenerating(true);

      fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      })
        .then((response) => response.json())
        .then((data) => {
          const { output } = data;

          const chat = {
            u: userInput,
            gpt: output.text,
          };

          setChat((prev) => [...prev, chat]);
          setIsGenerating(false);
        });
    }
  };
  return (
    <>
      <main>
        <header>
          <div className="container">
            <Navbar />

            <div className="flex hero">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <h1>Get Instant Assistance to Help Any Challenge, Any Time.</h1>
                <p>
                  {" "}
                  Get the support you need, when you need it. Our chatbot is
                  here to help you navigate daily challenges and make your life
                  a little easier.{" "}
                </p>

                <a href="#test">
                  <button href="#test" className="btn btn-primary ">
                    Get Started For Free
                  </button>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img
                  className="header-img"
                  src="https://res.cloudinary.com/dfkn1kzs0/image/upload/v1588506071/illustration-mockups_qrukpf.svg"
                  alt="mockups"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="container" id="test">
          <Link href={user ? "/email" : "/"}>
            <IndexCard
              dataAos="fade-down"
              dataAosOffset="200"
              dataAosDuration="1000"
              dataAosEasing="ease-in-out-cubic"
              title={"Generate Message Templates"}
              description={
                "Say goodbye to the hassle of crafting the perfect message. Our web  helps you easily generate professional and effective message templates for any occasion"
              }
              imgUrl={
                "https://school.mangoanimate.com/wp-content/uploads/2021/04/supper-easy-free-rigging-software-feature-1.png"
              }
            />
          </Link>
          
          <Link href={user ? "/meal" : "/"}>

          <IndexCard
            dataAos="fade-up-right"
            dataAosOffset="200"
            dataAosDuration="1000"
            dataAosEasing="ease-in-out-cubic"
            title={"Get Meals Reccomendation Based on Resources"}
            description={
              "Elevate your meal game with our web. We provide you with delicious, nutritious meal ideas and recipes tailored to your dietary needs, resources and preferences."
            }
            imgUrl={
              "https://images.squarespace-cdn.com/content/v1/5c9bd26d92441ba9c1cfb631/1628807774597-I7DQN0L1FECUY81BOZR4/Group+6.png?format=750w"
            }
            reverse={true}
          />
          </Link>

          <Link href={user ? "/image" : "/"}>
            <IndexCard
              dataAos="fade-up-left"
              dataAosOffset="200"
              dataAosDuration="1000"
              dataAosEasing="ease-in-out-cubic"
              title={"Generate Image Based on Text Prompt"}
              description={
                "Bring your ideas to life with our image generation web tool. Create stunning visuals for any purpose with our easy-to-use platform and vast library of templates and elements"
              }
              imgUrl={
                "https://sp-ao.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_600/https://www.intranets.com.au/wp-content/uploads/2019/07/comms.png"
              }
              reverse={false}
            />
          </Link>
        </div>
      </main>

      <div className="container center">
        <div
          className="box small-box"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <h2>Dont wait any longer !</h2>
              {user? <button className="btn btn-primary btn-big">
              {" "}
              Get Started For Free
            </button> : 
            <button className="btn btn-primary btn-big" onClick={handleGoogleSignIn}>
              {" "}
              Get Started For Free
            </button>
            }
            
        </div>
      </div>

      {{user && (
        <button
          class="open-button"
          onClick={() => {
            openForm();
          }}
        >
          <ChatIcon />
        </button>
      )}}

      <div className="chat-popup" id="myForm">
        <form className="form-container">
          <h1>Chat</h1>

          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="msg"
            required
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <Chat chat={chat} />

          <Button
            className="btn btn-primary"
            isLoading={isGenerating}
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </Button>

          <button
            type="button"
            className="btn"
            onClick={() => {
              closeForm();
            }}
          >
            Close
          </button>
        </form>
      </div>

      <Footer/>
    </>
  );
}
