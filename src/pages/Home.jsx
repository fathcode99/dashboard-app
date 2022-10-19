import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";



const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%]">
                <Navbar />
                Hello World !
            </div>
            
        </div>
    )
}

export default Home