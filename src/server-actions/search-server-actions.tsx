"use server";

import {SearchformData} from "@/src/components/FormComponent/FormComponent";
import searchValidator from "@/src/lib/search.validator";
import {redirect} from "next/navigation";

export async function searchAction (data: SearchformData):Promise<void>{

    const { error, value } = searchValidator.validate(data);
    if (error){
        console.log("Validation error:", error.details);
        throw new Error("Something went wrong!");
    }
    console.log("success", value);
    const searchPath = "/MovieSearchdPage/" + encodeURIComponent(data.search.trim()) + "/?page=1";
    redirect(searchPath);
}