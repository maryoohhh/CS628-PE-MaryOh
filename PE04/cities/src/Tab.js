import React, { useState } from "react";
import CityList from "./CityList";
import AddCity from "./AddCity";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("citiesList");

    const handleCityList = () => {
        setActiveTab("citiesList");
    }
    
    const handleAddCity = () => {
        setActiveTab("addCity");
    }

    return(
        <div className="Tabs">
            <ul className="nav">
                <li className={activeTab === "citiesList" ? "active": "" }
                    onClick={handleCityList}>
                        Cities List
                </li>
                <li className={activeTab === "addCity" ? "active": "" }
                    onClick={handleAddCity}>
                        Add City
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "citiesList" ? <CityList /> : <AddCity />}
            </div>
        </div>
    );
}

export default Tabs;
