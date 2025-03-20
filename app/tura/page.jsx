'use client';

import React, { LegacyRef, useRef, useEffect, useState } from 'react';

import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useLoadScript, useAutocomplete } from '@react-google-maps/api';
import Autocomplete from "react-google-autocomplete";
import { usePlacesWidget } from "react-google-autocomplete";

const libraries = ["places"];

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function Tura() {
  const { user, isLoading } = useUser();
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDS-eR3ZI__iigPwscpseRYOi8PU0jM_Q8",
  //   libraries: libraries,
  // });

  // const [value, setValue] = useState('');
  // const { ref, getSuggestion, suggestions } = Autocomplete({
  //   request: {
  //     componentRestrictions: { country: ['us'] },
  //     types: ['address']
  //   }
  // });

  // const handleInputChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSelect = () => {
  //   if (getSuggestion) {
  //     const place = getSuggestion();
  //     setValue(place?.formatted_address || '');
  //     // Access other place details like coordinates: place?.geometry?.location
  //   }
  // };

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

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
          <input className='mr-5' aria-label="Frame input" type="text" name="frame" placeholder="Enter model" required></input>
          <input className='mr-5' aria-label="Location input" type="text" name="location" placeholder="Enter address" required></input>

          <Autocomplete
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
            />

          {/* <input type="text" value={value} onChange={handleInputChange} onBlur={handleSelect} placeholder="Enter location" ref={ref} />
          <ul> {suggestions.map(({ description }) => ( <li key={description} onClick={() => { setValue(description); handleSelect(); }}>{description}</li> ))} </ul>
 */}
        </form>
      </div>
    </>
  );
}

export default withPageAuthRequired(Tura, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
