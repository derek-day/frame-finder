"use client";

import { useState, useEffect } from 'react';

export default function Search() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('/api/readCsv')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter(item => 
                Object.values(item).some(val => 
                    val.toLowerCase().includes(query.toLowerCase())
                )
            )
        );
    }, [query, data]);

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <ul className="mt-4">
                {filteredData.map((item, index) => (
                    <li key={index} className="p-2 border-b">
                        {JSON.stringify(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}