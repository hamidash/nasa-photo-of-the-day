import React from "react";
import logo from "./nasa-logo-footer.jpg"
//import "./footer.css"

function Footer(){

    return(
        <footer class = {"footer"}>
            <img class={"App-logo"} src={logo} alt="nasa logo image"/>
            <div class="contact">
                <p>National&nbsp;Aeronautics and Space&nbsp;Administration</p>
                <p>Page Last Updated: April 3, 2019</p>
                <p>Page Editor: Gary Daines</p>
                <p>NASA Official: Brian Dunbar</p>
            </div>
        </footer>
    )

}

export default Footer;