import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Widget from "../component/Widget";
import Featured from "../component/Featured";
import Chart from "../component/Chart";

const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%] bg-primary h-screen">
                <div className="rounded-l-3xl bg-white w-full h-[95%] p-6 my-4">
                    <Navbar />
                    <div className="title-dashboard">
                        Statistic 
                    </div>
                    <div className="widget flex gap-3 ">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="chart flex gap-3 mt-6">
                        <Featured />
                        <Chart />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home