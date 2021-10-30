// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="/home" className="">Dream Travels</Navbar.Brand>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>

                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link> */}





                            {!user.email ?
                                (
                                    <>

                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                                    </>
                                ) :

                                (
                                    <>

                                        <Nav.Link as={HashLink} to="/addServices">AddServices</Nav.Link>

                                        <Nav.Link as={HashLink} to="/manageServices">ManageServices</Nav.Link>
                                        <Nav.Link as={HashLink} to="/manageServices">My Booking</Nav.Link>

                                        <Navbar.Text>
                                            Signed in as: <a href="#login">{user?.displayName}</a>
                                        </Navbar.Text>
                                        <Button className="mx-2" onClick={Logout} variant="secondary">Logout</Button>
                                    </>

                                )

                            }







                            {/* test */}





                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;