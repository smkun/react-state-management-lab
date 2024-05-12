// Import necessary React library components and styles
import React, { useState } from "react";
import "./App.css";

// Main component definition
function App() {
    // State hooks for managing team members and available money
    const [team, setTeam] = useState([]); // Array of team members
    const [money, setMoney] = useState(100); // Starting money for the player

    // Pre-defined list of potential zombie fighters the user can add to their team
    const [zombieFighters] = useState([
        {
            name: "Survivor",
            price: 12,
            strength: 6,
            agility: 4,
            img: "https://via.placeholder.com/150/92c952",
        },
        {
            name: "Scavenger",
            price: 10,
            strength: 5,
            agility: 5,
            img: "https://via.placeholder.com/150/771796",
        },
        {
            name: "Shadow",
            price: 18,
            strength: 7,
            agility: 8,
            img: "https://via.placeholder.com/150/24f355",
        },
        {
            name: "Tracker",
            price: 14,
            strength: 7,
            agility: 6,
            img: "https://via.placeholder.com/150/d32776",
        },
        {
            name: "Sharpshooter",
            price: 20,
            strength: 6,
            agility: 8,
            img: "https://via.placeholder.com/150/1ee8a4",
        },
        {
            name: "Medic",
            price: 15,
            strength: 5,
            agility: 7,
            img: "https://via.placeholder.com/150/66b7d2",
        },
        {
            name: "Engineer",
            price: 16,
            strength: 6,
            agility: 5,
            img: "https://via.placeholder.com/150/56acb2",
        },
        {
            name: "Brawler",
            price: 11,
            strength: 8,
            agility: 3,
            img: "https://via.placeholder.com/150/8985dc",
        },
        {
            name: "Infiltrator",
            price: 17,
            strength: 5,
            agility: 9,
            img: "https://via.placeholder.com/150/392537",
        },
        {
            name: "Leader",
            price: 22,
            strength: 7,
            agility: 6,
            img: "https://via.placeholder.com/150/602b9e",
        },
    ]);

    // Function to handle adding a fighter to the team
    const handleAddFighter = (fighter) => {
        if (money >= fighter.price) {
            setTeam([...team, fighter]); // Add fighter to team
            setMoney(money - fighter.price); // Deduct the price from available money
        } else {
            console.log("Not enough money"); // Log error if not enough money
        }
    };

    // Function to remove a fighter from the team
    const handleRemoveFighter = (fighter) => {
        const fighterIndex = team.findIndex((member) => member === fighter); // Find the index of the first occurrence of the fighter in the team array
        if (fighterIndex !== -1) {
            // Check if the fighter is found in the team array
            const updatedTeam = [...team]; // Create a new array by spreading the existing team array
            updatedTeam.splice(fighterIndex, 1); // Remove one element at the fighterIndex position from the updatedTeam array
            setTeam(updatedTeam); // Update the team state with the updatedTeam array
            setMoney(money + fighter.price); // Reimburse the fighter's cost to the available money
        }
    };

    // Calculate the total strength of the team
    const getTotalStrength = () => {
        return team.reduce((total, member) => total + member.strength, 0);
    };

    // Calculate the total agility of the team
    const getTotalAgility = () => {
        return team.reduce((total, member) => total + member.agility, 0);
    };

    // Render the component
    return (
        <div className="App">
            <h1>Zombie Fighter Team Builder</h1>
            <p>Money: ${money}</p>

            <h2>All Fighters</h2>
            <ul>
                {zombieFighters.map((fighter, index) => (
                    <li key={index}>
                        <img
                            src={fighter.img}
                            alt={fighter.name}
                        />
                        <p>Name: {fighter.name}</p>
                        <p>Price: ${fighter.price}</p>
                        <p>Strength: {fighter.strength}</p>
                        <p>Agility: {fighter.agility}</p>
                        <button onClick={() => handleAddFighter(fighter)}>
                            Add
                        </button>
                    </li>
                ))}
            </ul>

            <h2>My Team</h2>
            {team.length === 0 ? (
                <p>Pick some team members!</p>
            ) : (
                <ul>
                    {team.map((member, index) => (
                        <li key={index}>
                            <img
                                src={member.img}
                                alt={member.name}
                            />
                            <p>Name: {member.name}</p>
                            <p>Price: ${member.price}</p>
                            <p>Strength: {member.strength}</p>
                            <p>Agility: {member.agility}</p>
                            <button onClick={() => handleRemoveFighter(member)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <p>Total Team Strength: {getTotalStrength()}</p>
            <p>Total Team Agility: {getTotalAgility()}</p>
        </div>
    );
}

// Make the App component available for import
export default App;
