import Image from "next/image";
import Button from "./Button";
import { InfoProps } from "../../../types/PropTypes";





function Card(props:InfoProps) {
   
    return (
        <section>
            <div className="card-container">
                <div className="carddetails">
                 <h1 className="mainheading">{props.mainheading} <span className="heading">{props.heading}</span></h1>
                 <p className="description">{props.description}</p>
                 <Button href={props.href} title={props.title}/>
                </div>

                <div className="cardimage">
                    <Image 
                    src={props.image} 
                    alt={props.alt} 
                    width={300} 
                    height={300}  
                    object-fit="cover" 
                    
                    className="image"/>
                </div>
            </div>
        </section>
    )
}
export default Card