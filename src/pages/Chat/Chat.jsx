import { Link, useParams } from "react-router-dom"
import userList from "../../data/userList";
import BarContact from "./components/BarContact";
import Input from "./components/Input";


export default function Chat() {

    // recojo el id que paso por url
    const parameter = useParams()

    // busco el usuario que corresponde al id recibido por url
    const infoUser = userList.users.find(element => element.id === parameter.id)


    return(
        
       
        <div>

            <BarContact 
                image={infoUser.image} 
                name={infoUser.name} 
                state={infoUser.state}
                class={"avatar"}
                
                id={infoUser.id}>
            </BarContact>

            <Input></Input>

            
        </div>
    )
}
