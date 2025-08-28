import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
  const {
    data: blogPosts,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const res = await axios.get("/blogPosts.json");
      return res.data;
    },
  });

  return { blogPosts: blogPosts || [], refetch, isLoading, error };
};

export default useBlogs;
