import axios from "axios";
import { Departement } from "../types/departement/departement.type";


const apiDepartement=axios.create({
    baseURL:'http://localhost:4000/api',
    headers:{"Content-Type":"application/json"}

})

export const fetchDepartement=async():Promise<Departement[]> =>{
    const response=await apiDepartement.get<Departement[]>('/departement')
    return response.data;

}
