"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input"

export default function CountryList(){
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`/api/capital`);
                setCountries(response.data);
                setFilteredCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }
        fetchCountries();
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter(country => 
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, countries]);

    return (
        <div className="container mx-auto p-4">
            <Input 
            type="text"
            placeholder="Search for a country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="mt-4">
                {filteredCountries.map((country) => (
                    <li key={country.name} className="p-2 border-b border-gray-200">
                        <span className="font-bold">{country.name}</span> - {country.capital ? country.capital : "NA"}
                    </li>
                ))}
            </ul>
        </div>
    );
}