import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
function HomePage() {
    return (
        <div>
            <Header isLogin={true} role={'guess'} />
            <Footer/>
        </div>
    );
}

export default HomePage;
