import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {

    const { data: products, refetch, isLoading, error 
     } = useQuery({
        queryKey: ['products'],
        queryFn: async ()=> {
            const res = await axios.get("products.json")
            return res.data;
        }
     }) 

    return { products, refetch, isLoading, error };
};

export default useProducts;