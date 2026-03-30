import React, { useState } from 'react';


function MyComponent() {

    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName=()=>{
    //     setName("Spongebob");
    // }

    // const incrementAge=()=>{
    //     setAge(age+1);
    // }

    // const toggleEmployedStatus = ()=>{
    //     setIsEmployed(!isEmployed);
    // }

    const [car, setCar] = useState({year:2024,
                                    make:"Ford",
                                    model:"Mustang"});

    return (<div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year}/><br/>
        <input type="text" value={car.make}/><br/>
        <input type="text" value={car.model}/><br/>
        {/* <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>); */}
    </div>
    );
}
export default MyComponent