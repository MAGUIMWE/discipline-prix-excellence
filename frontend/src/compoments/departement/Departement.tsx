import  { useEffect, useState } from 'react'
import { Departement } from '../../types/departement/departement.type'
import { fetchDepartement } from '../../api/departement.api'

type Props = {}

const Departements = (props: Props) => {
    const [departement,setDepartement]=useState<Departement[]>([])
    
    useEffect(()=>{
        const getDepartement = async () => {
            try {
                const reponse= await fetchDepartement()
                setDepartement(reponse);
            } catch (error) {
                console.error('Erreur de recuperation des departements:',error);
                
            }
        } 
        getDepartement()
    },[])


  return (
    <div>
        <h1>Departements</h1>
        {
            departement.map((depart) =>(
                <ul key={depart.dept_id}>
                    <li>
                        id:{depart.dept_id}
                    </li>
                    <li>
                       Nom departement: {depart.nom_depart}
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default Departements