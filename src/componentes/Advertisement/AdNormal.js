import * as React from 'react';
import { useEffect, useRef } from "react";

export default function AdNormal() {

    const banner = useRef();
    const atOptions = {
    key : 'fd813b742d227d914dfc32a7bd5bbaea',
    format : 'iframe',
    height : 90,
    width : 728,
    params : {}
    };
    useEffect(() => {
        if (!banner.current.firstChild) {
            const conf = document.createElement("script");
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `//www.profitabledisplayformat.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
    
            if (banner.current) {
                banner.current.append(conf);
                banner.current.append(script);
            }
        }
    });

    return(
        <div><div ref={banner}/></div>
  );
}
