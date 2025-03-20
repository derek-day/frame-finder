'use  client';

import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';
import Dropdown from './Dropdown';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          {/* <NavbarBrand className="logo" /> */}
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  {/* Home */}
                  <img src="/logo.png" width={100} />
                </PageLink>
              </NavItem>
              {user && (
                <>
                  <NavItem>
                    <PageLink href="/search" className="nav-link" testId="navbar-search">
                      Frame Search
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/search2" className="nav-link" testId="navbar-search2">
                      Frame Search 2
                    </PageLink>
                  </NavItem>
                  {/* <NavItem>
                    <PageLink href="/brands" className="nav-link" testId="navbar-brands">
                      Brands
                    </PageLink>
                  </NavItem> */}
                  <NavItem>
                    <Dropdown trigger={<span className='drop-link'>Brands</span>}>
                      <Link href="/tura">Tura</Link>
                      <Link href="/lara-spencer">Tura by Lara Spencer</Link>
                      <Link href="/kate-young">Kate Young for Tura</Link>
                      <Link href="/barbour">Barbour</Link>
                      <Link href="/botaniq">Botaniq</Link>
                      <Link href="/brendel">Brendel</Link>
                      <Link href="/buffalo">Buffalo David Bitton</Link>
                      <Link href="/free-country">Free Country</Link>
                      <Link href="/geoffrey-beene">Geoffrey Beene</Link>
                      <Link href="/glemaud">Glemaud x Tura</Link>
                      <Link href="/gx">GX By Gwen Stefani</Link>
                      <Link href="/humphrey">Humphrey's</Link>
                      <Link href="/lamb">L.A.M.B.</Link>
                      <Link href="/lulu-guinness">Lulu Guinness</Link>
                      <Link href="/mini">Mini</Link>
                      <Link href="/oneill">O'Neill</Link>
                      <Link href="/superdry">Superdry</Link>
                      <Link href="/ted-baker">Ted Baker</Link>
                      <Link href="/titanflex">Titanflex</Link>
                      <Link href="/zuma-rock">Zuma Rock</Link>
                      <Link href="/brands">View All Brands</Link>
                    </Dropdown>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log In
                  </AnchorLink>
                </NavItem>
              )}
              {user && (

                <NavItem id="qsLogoutBtn">
                <AnchorLink
                  href="/api/auth/logout"
                  className= "btn btn-primary btn-margin mt-2"
                  icon="power-off"
                  testId="navbar-logout-mobile">
                  Log Out
                </AnchorLink>
                </NavItem>

                // <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                //   <DropdownToggle nav caret id="profileDropDown">
                //     <img
                //       src={user.picture}
                //       alt="Profile"
                //       className="nav-user-profile rounded-circle"
                //       width="50"
                //       height="50"
                //       decode="async"
                //       data-testid="navbar-picture-desktop"
                //     />
                //   </DropdownToggle>
                //   <DropdownMenu>
                //     <DropdownItem header data-testid="navbar-user-desktop">
                //       {user.name}
                //     </DropdownItem>
                //     <DropdownItem className="dropdown-profile" tag="span">
                //       <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                //         Profile
                //       </PageLink>
                //     </DropdownItem>
                //     <DropdownItem id="qsLogoutBtn">
                //       <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                //         Log out
                //       </AnchorLink>
                //     </DropdownItem>
                //   </DropdownMenu>
                // </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log In
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log Out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
