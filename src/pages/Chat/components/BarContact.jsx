import Avatar from "../../../components/Avatar/Avatar"
import { Link } from "react-router-dom"
import "./barContact.css"

export default function BarContact(props) {


    return (

        <section>

            <div className="topbar_chat">
            <Link to='/list'><svg className="svg" viewBox="0 0 448 512"> <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></Link>


                <Avatar image={props.image} class={props.class}></Avatar> 
                <Link to={`/infcontact/${props.id}`}>

                    <div className="status_contact">
                        <h1>{props.name}</h1>
                        <p>{props.state}</p>
                    </div>

                </Link>

            </div>
                        
        </section>
    )

}

