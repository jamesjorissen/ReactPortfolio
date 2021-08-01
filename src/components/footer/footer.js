import React from "react";
import "./index.css";

const footerStyle = {
    fontSize: "15px",
    color: "black",
    margin: "20px",
    textAlign: "center",
};

const ptag = {
    textAlign: "center",
    color: "black",
};

function Footer() {
    return (
        <div className='gradient-bg' style={{ minHeight: "15vh" }}>
            <footer className="footer">
                <h1 style={footerStyle}>Jorissen Productions</h1>
                <p style={ptag}>
                    By James Jorissen
                </p>
            </footer>
        </div>
    );
}

export default Footer;