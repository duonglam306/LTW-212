import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
function HomePage() {
    return (
        <div>
            <Header isLogin={false} role={'admin'} />
            HomePage
            <Footer isLogin={false}/>
        </div>
    );
}

export default HomePage;
