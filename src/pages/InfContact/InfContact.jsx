import { Link, useParams } from "react-router-dom"
import userList from "../../data/userList"
import InfContacto from "./components/InfContacto"




export default function InfContact() {
  
        // recojo el id que paso por url
    const parameter = useParams()

    // busco el usuario que corresponde al id recibido por url
    const infoUser = userList.users.find(element => element.id === parameter.id)


    return(

        
        
       
        <div>
            <Link to={`/chat/${infoUser.id}`}> <svg className="svg" viewBox="0 0 448 512"> <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></Link>


            
            <InfContacto image={infoUser.image} name={infoUser.name} tel={infoUser.tel} class={"avatar_contact"} description={infoUser.description}></InfContacto>
            
            

        </div>
    )
}
    