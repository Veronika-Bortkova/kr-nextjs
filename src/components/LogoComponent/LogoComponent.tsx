import React from 'react';
import logo from "../../imeges/logo7_.png";
import "./LogoComponent.css"
import Link from "next/link";

const LogoComponent = () => {
    return (
        <>
            <Link href={"/"}><img className={"logo"} src={logo.src}></img></Link>
        </>
    );
};

export default LogoComponent;