"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`/api/capital`);
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  return (
    <div className="container mx-auto p-4">
      <Input
      className="p-4 mb-8"
        type="text"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table className="mim-w-full bg-white">
        <TableCaption>A list of countries and their capitals</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="px-16 py-4 font-bold bg-teal-500 text-blue-50">Country</TableHead>
            <TableHead className="px-16 py-4 font-bold bg-teal-500 text-blue-50">Capital</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCountries.map((country) => (
            <TableRow key={country.name} className="even:bg-teal-50 odd:bg-white">
              <TableCell className="px-16 py-4">{country.name}</TableCell>
              <TableCell className="px-16 py-4"> {country.capital ? country.capital : "NA"} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
