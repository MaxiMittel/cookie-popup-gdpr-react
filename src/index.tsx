import * as React from "react";
import { useEffect } from 'react';
import {CookiePopupConfig, CheckboxItem, ButtonItem, ResultObject, CookiePopup as CP} from "cookie-popup-gdpr";

export type CookiePopupProps = {
    config: CookiePopupConfig;
};

const CookiePopup: React.FC<CookiePopupProps> = (props: CookiePopupProps) => {

    useEffect(() => {
        new CP(props.config);
    });

  return (<div></div>);
};

export default CookiePopup;
export {CookiePopupConfig, CheckboxItem, ButtonItem, ResultObject};

