export default function IndexCard({title,description,imgUrl,reverse,dataAos,dataAosOffset,dataAosDuration,dataAosEasing}) {

    return (
        <>
        {<>
            {reverse? 
                <div class="box flex box-reverse-mobile" data-aos={dataAos} 
                data-aos-offset={dataAosOffset} data-aos-duration={dataAosDuration} data-aos-easing={dataAosEasing} >
        <div>
        <img src={imgUrl} alt=""/>
        </div>
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        
      </div>
      :

      <div class="box flex"  data-aos={dataAos} 
                data-aos-offset={dataAosOffset} data-aos-duration={dataAosDuration} data-aos-easing={dataAosEasing}>
        <div>
        <h2>{title} </h2>      
        <p>{description}</p>
        </div>
        <div>

        <img src={imgUrl} alt=""/>
        </div>
      </div>
            }

                </>
            
        }
        {
            


        }
        
      </>
    )
}
