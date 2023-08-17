import React, { useState } from 'react';

export default function AddCity() {
    const initialState = {
        city: "",
        country: "",
        population: ""
    }

    const [state, setState] = useState(initialState);

    const handleOnChange = (text, input) => {
        setState(prevState => ({...prevState, [input]: text}));
    }

    return (
        <div className='addCity'>
            <h2>Add City</h2>
            <label>
                City:
                <input
                    className='city'
                    placeholder='City Name'
                    onChangeText = {text => handleOnChange(text, 'city')}
                    // value = {state.city}
                    // label = "City"
                />
            </label>
            <label>
                Country:
                <input
                    className='country'
                    placeholder='Country Name'
                    // value = {state.country}
                    onChange={text => handleOnChange(text, 'country')}
                    // label = "Country"
                />
            </label>
            <label>
                Population:
                <input
                    className='population'
                    placeholder='Population'
                    // value = {state.population}
                    onChange={text => handleOnChange(text, 'population')}
                    // label = "Population"
                />
            </label>
            <button className='add'
                    onClick={handleOnChange}>
                Add
            </button>
        </div>
    );
}
