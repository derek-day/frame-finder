'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function Brands() {
  const { user, isLoading } = useUser();

    useEffect(() => {
      document.title = 'Tura | Frame Finder';
    }, []);

  return (
    <>
      <h1 className='center-text'>All Brands</h1>

      <div className='brand-grid mb-5'>
        <a href="/tura">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/tura.webp' alt='Tura cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Tura</h4>
            </div>
          </div>
        </a>

        <a href="/lara-spencer">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/lara.webp' alt='Lara Spencer cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Lara Spencer</h4>
            </div>
          </div>
        </a>

        <a href="/kate-young">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/kate.webp' alt='Kate Young cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Kate Young</h4>
            </div>
          </div>
        </a>

        <a href="/barbour">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/barbour.webp' alt='Barbour cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Barbour</h4>
            </div>
          </div>
        </a>

        <a href="/botaniq">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/botaniq.webp' alt='Botaniq cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Botaniq</h4>
            </div>
          </div>
        </a>

        <a href="/brendel">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/brendel.webp' alt='Brendel cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Brendel</h4>
            </div>
          </div>
        </a>

        <a href="/buffalo">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/buffalo.webp' alt='Buffalo David Britton cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Buffalo David Britton</h4>
            </div>
          </div>
        </a>

        <a href="/free-country">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/free.webp' alt='Free Country cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Free Country</h4>
            </div>
          </div>
        </a>

        <a href="/geoffrey-beene">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/geoffrey.webp' alt='Geoffrey Beene cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Geoffrey Beene</h4>
            </div>
          </div>
        </a>

        <a href="/glemaud">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/glemaud.webp' alt='Glemaud x Tura cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Glemaud x Tura</h4>
            </div>
          </div>
        </a>

        <a href="/gx">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/gx.webp' alt='GX by Gwen Stefani cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>GX by Gwen Stefani</h4>
            </div>
          </div>
        </a>

        <a href="/humphrey">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/humphrey.webp' alt='Humphreys cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Humphrey's</h4>
            </div>
          </div>
        </a>

        <a href="/lamb">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/lamb.webp' alt='L.A.M.B. cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>L.A.M.B.</h4>
            </div>
          </div>
        </a>

        <a href="/lulu-guinness">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/lulu.webp' alt='Lulu Guinness cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Lulu Guinness</h4>
            </div>
          </div>
        </a>

        <a href="/mini">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/mini.webp' alt='Mini cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Mini</h4>
            </div>
          </div>
        </a>

        <a href="/oneill">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/oneill.webp' alt='ONeill cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>O'Neill</h4>
            </div>
          </div>
        </a>

        <a href="/superdry">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/superdry.webp' alt='Superdry cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Superdry</h4>
            </div>
          </div>
        </a>

        <a href="/ted-baker">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/ted.webp' alt='Ted Baker cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Ted Baker</h4>
            </div>
          </div>
        </a>

        <a href="/titanflex">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/titanflex.webp' alt='Titanflex cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Titanflex</h4>
            </div>
          </div>
        </a>

        <a href="/zuma-rock">
          <div className='brand-item'>
            <img className='brand-img' src='../brands/zuma.webp' alt='Zuma Rock cover photo' />
            <div className='brand-text'>
              <h4 className='center-text'>Zuma Rock</h4>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default withPageAuthRequired(Brands, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
