import Title from "./Title"
export default function Hero({imgUrl,text,imagePos,subtext}){

    return (
        <div 
            className="hero-main" 
            style={{
                backgroundImage:`linear-gradient(rgba(4,9,30,0.5),rgba(4,9,30,0)),url(${imgUrl})`,
                backgroundPosition:`center ${imagePos}`,
                }}>
        <Title text={text}/>
        <p>{subtext}</p>
        </div>
    )
}