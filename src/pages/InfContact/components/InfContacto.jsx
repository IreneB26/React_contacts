import Avatar from "../../../components/Avatar/Avatar"
import "./infContact.css"


export default function InfContacto(props) {

    return(


        <div className="info_contact">


        <Avatar  image={props.image} class={props.class}></Avatar> 
           
                <h1>{props.name}</h1>
                <p> {props.tel}</p>

                <article className="description_user">
                    <p>{props.description}</p>
                </article>
           
        </div>

    )

}


