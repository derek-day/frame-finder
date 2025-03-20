'use client';

import React, { LegacyRef, useRef, useEffect, useState } from 'react';

import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useLoadScript, useAutocomplete } from '@react-google-maps/api';
import Autocomplete from "react-google-autocomplete";
import { usePlacesWidget } from "react-google-autocomplete";
import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

const libraries = ["places"];

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

import csvData from '../../public/data/testitems3.csv'

// function Search (csvData) {
function Search({csvData}) {
  const { user, isLoading } = useUser();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const filePath = path.join(process.cwd(), 'public/data/', 'testitems.csv');
  const file = fs.readFileSync(filePath, 'utf8');

  useEffect(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        setData(results.data);
        setResults(results.data);
      },
    });
  }, [csvData]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredResults = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(term.toLowerCase())
        )
      );
      setResults(filteredResults);
    } else {
      setResults(data);
    }
  };

    useEffect(() => {
      document.title = 'Tura | Frame Finder';
    }, []);
  
  const searchRef = useRef(null);

  const handleClearSearchInput = () => {
    if (searchRef.current) {
        searchRef.current.value = "";
    }
  };

  

  return (
    <>
      <h1 className='center-text'>Find a Frame</h1>
      <h4 className='center-text'>Please enter a model and location</h4>

      <div className='mt-5 mb-5 p-5 form-background'>
        <form>
          {/* <input className='mr-5' aria-label="Frame input" type="text" name="frame" placeholder="Enter model" required></input> */}

          {/* <Autocomplete
                ref={searchRef}
                apiKey="AIzaSyDS-eR3ZI__iigPwscpseRYOi8PU0jM_Q8"
                style={{
                    width: "50%",
                    marginBottom: 8,
                    paddingInline: 8,
                    paddingBlock: 4,
                    borderRadius: 8,
                    zIndex: 100,
                }}
                options={{
                    types: [],
                    componentRestrictions: { country: "us" },
                }}
                onPlaceSelected={(place) => {
                    handleClickGolfCourse(place);
                }}
            /> */}

          <input className='mr-5' aria-label="Frame input" type="text" name="frame" placeholder="Enter model" value={searchTerm} onChange={handleSearch} required />

        </form>
      </div>

      {results.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export default withPageAuthRequired(Search, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
