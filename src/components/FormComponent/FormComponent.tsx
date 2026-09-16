"use client"
import React, {useEffect} from 'react';
import lupa from "../../imeges/lupa7_.png";
import "./FormComponent.css"
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import searchValidator from "@/src/lib/search.validator";
import {searchAction} from "@/src/server-actions/search-server-actions";

export type SearchformData = {
    search: string,
}


const FormComponent = () => {
    const {register, handleSubmit,watch, clearErrors, formState: {errors}} = useForm<SearchformData>({
        resolver: joiResolver(searchValidator),
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });
    const searchValue = watch("search");
    useEffect(() => {
        if (searchValue === "") {
            clearErrors("search");
        }
    }, [searchValue, clearErrors]);

    const onSubmit = async (data: SearchformData)=>{
        await searchAction(data)

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"searchBlock"}>
                    <input type={"search"}  placeholder={"Enter movie title..."} {...register("search")}
                    ></input>

                    <button className={"buttonSearch"} type={"submit"}><img className={"lupa"} src={lupa.src} alt={"search"}></img></button>
                </div>
                <div className={"errorBlock"}>
                    {errors.search && <div className={"error"}>{errors.search.message}</div>}
                </div>

            </form>
        </>
    );
};

export default FormComponent;