import React from 'react';
import {changeLanguage} from "../api/apiCalls";
import {withTranslation} from "react-i18next";

const LangugeSelector = (props) => {
    const onChangeLanguage=language=>{
        const {i18n}=props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }
    return (
        <div className={"container"}>
            <img src={"https://flagsapi.com/TR/flat/32.png"} style={{cursor:"pointer"}} alt={"Turkish Flag"} onClick={()=>{onChangeLanguage("tr")}}></img>
            <img src={"https://flagsapi.com/US/flat/32.png"} style={{cursor:"pointer"}} alt={"USA Flag"} onClick={()=>{onChangeLanguage("en")}}></img>
        </div>
    );
};

export default withTranslation()(LangugeSelector);
