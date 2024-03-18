import Display from "../components/Display";
import Login from "../components/Login"

export default function DisplayPage(){

    const token = localStorage.getItem('id_token');
    if (!token) {
        return (
            < Login />
        )
    }

    return(
    
            <Display/>
     
    )
}