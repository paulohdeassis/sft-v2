import { useQuery  } from 'react-query'
import axios from 'axios'



const token = process.env.DIRECTUS_TOKEN

export const useFetch = (userUrl: string) => {
    const config = {
        headers:{
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`
        }
      }
    
      const url = `https://cms-directus.l3na2o.easypanel.host/items/Users?access_token=${token}&filter[MG_URL][_eq]=${userUrl}&fields=Name,Instagram_URL,MG_Email,MG_URL,Phone`
      return useQuery({
            queryFn: async () =>{
            const  { data }  = await axios.get(url, config)
            return  data
          },
      })

}



  