// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';


const Header = () => {
    const { user, Logout } = useAuth();
    const history = useHistory();

    const handleHistory = () => {
        history.push(`/booking/${user.email}`);
    }





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







                            {!user.email ?
                                (
                                    <>

                                        <Nav.Link as={Link} to="/login"><button type="button" className="btn btn-success">Login</button></Nav.Link>

                                    </>
                                ) :

                                (
                                    <>

                                        <Nav.Link as={HashLink} to="/addServices">AddServices</Nav.Link>

                                        <Nav.Link as={HashLink} to="/manageServices">Manage Services</Nav.Link>
                                        {/* <Nav.Link as={HashLink} to="/booking/:email">My Booking</Nav.Link> */}

                                        <p className="text-primary   mt-3" onClick={handleHistory}>My booking</p>



                                        <img className="rounded-circle mx-1" height="40" width="40" src={user?.photoURL} alt="" />

                                        <Navbar.Text>
                                            <a href="#login">{user?.displayName}</a>
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