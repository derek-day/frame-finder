import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';
import { useUser } from '@auth0/nextjs-auth0/client';

const Content = () => {
  const { user, isLoading } = useUser();

  useEffect(() => {
    document.title = 'Tura | Frame Finder';
  }, []);

  return (

  <div className="next-steps my-3" data-testid="content">

{user && (
    <>
      <h3 className="mb-5 text-center" data-testid="content-title">
        Welcome, {user.first}
      </h3>
</>
)}

    <h1 className="my-4 text-center" data-testid="content-title">
      Frame Finder
    </h1>
    
    {user && (
    <>
      {/* <h4 className="my-4 text-center" data-testid="content-title">
        Welcome, {user.first}
      </h4> */}

      <div className='mt-5 text-center' data-testid="pdf-items" style={{textAlign:'center'}}>
        <h4 className="my-4">
          <a href="/search">Frame Search</a>
        </h4>
        <h4 className="my-4">
          <a href="/brands">Brands</a>
        </h4>
      </div>
    </>
    )}

  </div>
  )
};

export default Content;
