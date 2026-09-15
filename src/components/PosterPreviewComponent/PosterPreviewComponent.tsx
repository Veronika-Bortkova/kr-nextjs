import React, {FC} from 'react';
import {posterUrl} from "@/src/constants/urls";
import defaultImage from "../../imeges/placeholder.jpg";
import "./PosterPreviewComponent.css"

type propsType = {
    poster_path:string | null;
    size: string;

}

const PosterPreviewComponent:FC<propsType> = ({poster_path, size}) => {
    const img = typeof defaultImage === "string" ? defaultImage : defaultImage.src;
    const src = poster_path ? posterUrl + size + poster_path : img;


    return (
        <div className={"divPoster"}>

            <img className={"poster"} src={src} alt="poster"></img>

        </div>
    );
};
export default PosterPreviewComponent;