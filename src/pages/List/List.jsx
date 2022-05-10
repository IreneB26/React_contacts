import Contact from "./components/Contact/Contact";
import { Link } from "react-router-dom";
import userList from "../../data/userList";
import "./List.css"

export default function List() {

    // const users = [
    //     { name: 'John', tel: '677777771', image: 'https://placekitten.com/200/300', id: 1},
    //     { name: 'Carlos', tel: '677777771', image: 'https://placekitten.com/100/100', id: 2 },
    //     { name: 'María', tel: '677777771', image: 'https://placekitten.com/200/200', id: 3 },
    //     { name: 'Marta', tel: '677777771', image: 'https://placekitten.com/400/400', id: 4},
    //   ];


    // leer el json de la lista de usuarios
    const user = userList.users
   


    return(
        <div>
            <h1 className="head_list_contact">Lista de contactos</h1>
            
            { user.map((contact) => 
            <Link to={`/chat/${contact.id}`}> 
                <Contact 
                    key= {contact.id}
                    image={contact.image}
                    name={contact.name}
                    class={"avatar"}
                    state={contact.state}></Contact>
            </Link> )
              }
            
        </div>
        
        )
}
