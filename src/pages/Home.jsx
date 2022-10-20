import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";



const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%] bg-primary">
                <div className="rounded-l-3xl bg-white w-full h-full p-6">
                    <Navbar />
                    <div className="title-dashboard">
                        Hello World !
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home