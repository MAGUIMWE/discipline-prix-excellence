import axios from "axios";
import { Activite } from "../types/activites/activite.type";


const apiActivite=axios.create({
    baseURL:'http://localhost:4000/api',
    headers:{"Content-Type":"application/json"}

})

export const fetchActivite=async():Promise<Activite[]> =>{
    const response=await apiActivite.get<Activite[]>('/activite')
    return response.data;

}
