import React from "react";

var d = new Date();
let y = d.getFullYear();

function Footer(){
    return(
        
            <footer>
                <p>Copyright<sup>{y}</sup></p>
            </footer>
        
    );
}

export default Footer;