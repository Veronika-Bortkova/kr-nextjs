import React from 'react';
import "./HeaderComponent.css"
import LogoComponent from "@/src/components/LogoComponent/LogoComponent";
import FormComponent from "@/src/components/FormComponent/FormComponent";
import UserInfoComponent from "@/src/components/UserInfoComponent/UserInfoComponent";

const HeaderComponent = () => {
    return (
        <div className={"header"}>
            <LogoComponent/>
            <FormComponent/>
            <UserInfoComponent/>

        </div>
    );
};

export default HeaderComponent;