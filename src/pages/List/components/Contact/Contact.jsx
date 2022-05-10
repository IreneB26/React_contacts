import Avatar from "../../../../components/Avatar/Avatar";
import './Contact.css';

function Contact (props) {
    return (
    
    <article className="contact">
        <Avatar image={props.image} class={props.class}></Avatar>
             <div className="info">
                <h1 className="name">{props.name}</h1>
                <p className="tef">{props.state}</p>
                {props.id}
            </div>
    </article>)
}

export default Contact;