import { Button,Input } from "@chakra-ui/react"
import Hero from "../../components/Hero"
import { useState } from "react";
import { UserAuth } from "../../lib/AuthContext";
import Chat from "../../components/Chat";
import Metatags from "../../components/Metatags";

export default function ChatPage() {
    return (
        <>
        <Metatags/>

        <Hero
        text={"Say Hello To Our Chatbot"}
        imagePos={"top"}
        imgUrl={
          "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/73476cac-fdfa-45ca-8e1f-69e943f02650"
        }
        subtext={"Effortlessly find what you need with the power of our chatbot's instant messaging feature!"}
      />
            <ChatForm/>
        </>
    )
}

function ChatForm(){
    const [userInput, setUserInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [chat, setChat] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(userInput === "") {

        }
        else {
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
    }

    return (
        <div className="chat-content">
            <div>
                <Input type="text" placeholder="Type Here" onChange={(e)=>setUserInput(e.target.value)}  />
                <Button isLoading={isGenerating} onClick={(e)=>handleSubmit(e)}>Send</Button>
            </div>
            <Chat chat={chat} />
        </div>
    )
}
