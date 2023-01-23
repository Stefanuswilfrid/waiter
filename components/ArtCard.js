import Image from "next/image";

export default function ArtCard(props) {
  return (
    <div className="art-style-img-wrapper">
      <Image
        onClick={(text) => {
          props.handleClick(props.text );
        }}
        className="art-style-img"
        style={{border:props.isClicked? "1px solid #B2B2B2" :""}}
        src={props.imgUrl}
        alt={props.text}
        width={80}
        height={85}
      />
      <p>{props.text}</p>
    </div>
  );
}
