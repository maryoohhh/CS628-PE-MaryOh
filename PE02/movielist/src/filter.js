import React, { useState, useRef, useEffect } from "react";
import './filter.css';

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(undefined);
    const buttonRef = useRef(undefined);

useEffect(() => {
    const handleClickOutside = event =>{
        const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target);
        const isButtonClick = buttonRef.current && buttonRef.current.contains(event.target);
    
        if (isDropdownClick || isButtonClick){
            return;
        }

        // Otherwise close menu
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside); // handle desktops

    // Event cleanup
    return () => {
        document.removeEventListener("mousedown", handleClickOutside); // handle desktops
        };
    }, [dropdownRef, buttonRef]);

    const handleApply = event => {
        setIsOpen(false);
        onApply(event);
    };

    return (
        <div className="filter"
            ref = {buttonRef}
            onClick = {() => setIsOpen(!isOpen)}
            className="filter_button"
        />
        {label}

        {isOpen && (
            <div ref = "{dropdownRef}" classname="filter_dropdown"></div>
            <div style = "{{" paddingtop:="" "2rem", ="" paddingbottom:="" "2rem"="" }} = ""></div>
            {children}

            <div classname = "filter_dropdown__actions"></div>
            <button onClick="{handleApply}" classname="filter_dropdown_button"></button>
            Apply
        )}
    )
}
