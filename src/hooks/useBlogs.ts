import { useState } from "react";
import { dbblogs } from "../data/Blogs";


export const useBlogs = () => {
    const [datablog] = useState(dbblogs)

    return {
        datablog,
    }
}