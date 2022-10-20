import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";



const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%] bg-primary h-screen">
                <div className="rounded-l-3xl bg-white w-full h-[95%] p-6 my-4">
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