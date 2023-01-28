import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>
          {active ? (
            ""
          ) : (
            <svg
              style={{ display: "flex" }}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              className=""
            >
              <path
                fill-rule="evenodd"
                d="M5 3.912L1.282.218a.756.756 0 0 0-1.062 0 .744.744 0 0 0 0 1.056L4.465 5.49l.003.005c.147.146.34.218.532.218a.751.751 0 0 0 .532-.218c.003-.001.003-.003.004-.005l4.245-4.217a.745.745 0 0 0 0-1.056.756.756 0 0 0-1.062 0L5 3.912z"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="img-style-wrapper">
          <div>
            <Image
              onClick={() => {
                props.handleClick("anime");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/anime.JPG"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Anime</p>
          </div>
          <div>
            <Image
            onClick={() => {
                props.handleClick("digital art");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/digital-art.jpeg"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Digital Art</p>
          </div>

          <div>
            <Image
            onClick={() => {
                props.handleClick("pixel art");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/pixel-art.JPG"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Pixel Art</p>
          </div>

          <div>
            <Image
             onClick={() => {
                props.handleClick("baroque");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/baroque.JPG"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Baroque</p>
          </div>

          <div>
            <Image
            onClick={() => {
                props.handleClick("cute and adorable");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/cute-adorable.JPG"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Cute & Adorable</p>
          </div>
          <div>
            <Image
            onClick={() => {
                props.handleClick("hyper realistic");
              }}
              className="art-style-img"
              style={{ border: props.isClicked ? "1px solid #B2B2B2" : "" }}
              src={"/hyper-realistic.JPG"}
              alt="hey"
              width={80}
              height={85}
            />
            <p className="art-style-label">Hyper realistic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
