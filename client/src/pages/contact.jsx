import React, { Component } from 'react';


import '../App.css';
import AppNavbar from '../components/AppNavbar'
import Contactlist from '../components/Contactlist';
import ItemModel from '../components/ItemModel';
import { Container } from 'reactstrap';
import SearchList from '../components/SearchList';
import { Provider } from 'react-redux';
import store from '../store';

class ContactPage extends React.Component {

    render() {
        return (
            // for details on store check store.js
            <Provider store = {store}> 
            <body className="backgroundContact">
                <div className="App">
                    <AppNavbar />
                    <Container >
                        <ItemModel/>
                        <SearchList/>
                        <Contactlist />
                    </Container>
                </div>
            </body>
            </Provider>
        )
    }
}

export default ContactPage