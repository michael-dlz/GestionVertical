import { useState } from "react";
import { dbbenefits, dbreviews, dbservices } from "../data/db";

export const useCards = () => {
    const [data] = useState(dbservices)
    const [data2] = useState(dbbenefits)
    const [data3] = useState(dbreviews)

    return{
        data,
        data2,
        data3
    }
}