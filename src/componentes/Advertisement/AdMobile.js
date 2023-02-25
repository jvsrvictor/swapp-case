import * as React from 'react';
import { useEffect, useRef } from "react";

export default function AdMobile() {

    const bannerMobile = useRef();
    const atOptionsMobile = {
        key : '0130c20c6b6f6b27a49dce4c34c6e503',
        format : 'iframe',
        height : 50,
		width : 320,
        params : {}
    };
    useEffect(() => {
        if (!bannerMobile.current.firstChild) {
            const confMobile = document.createElement("script");
            const scriptMobile = document.createElement("script");
            scriptMobile.type = "text/javascript";
            scriptMobile.src = `//www.profitabledisplayformat.com/${atOptionsMobile.key}/invoke.js`;
            confMobile.innerHTML = `atOptions = ${JSON.stringify(atOptionsMobile)}`;
    
            if (bannerMobile.current) {
                bannerMobile.current.append(confMobile);
                bannerMobile.current.append(scriptMobile);
            }
        }
    });
  
    return(
        <div class="mobileShow"><div ref={bannerMobile}/></div>
  );
}
