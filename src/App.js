import React, { Component } from 'react';
import CardList from './CardList';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Product from './Product';
import Footer from './Footer';
import { furniture } from './furniture';
import './App.css';
import './Product.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            furniture: furniture,
            showProduct: false,
            chosen: 0
        }
    };

    onClickChange = (event) => {
        this.setState({
            showProduct: !this.state.showProduct,
            chosen: event.target.className
        });
    }

    render() {
        return (
            <div className="tc bg-gold" height="100%">
                <Sidenav />
                <Navbar/>
                <div className="tc bg-gold narrow mainPage">
                    <CardList furniture={this.state.furniture} clickChange={this.onClickChange} />
                </div>
                {this.state.showProduct ?
                    <Product
                        id={this.state.chosen}
                        name={this.state.furniture[this.state.chosen].name}
                        shortText={this.state.furniture[this.state.chosen].description}
                        longText={this.state.furniture[this.state.chosen].fullDescription}
                        closePopup={this.onClickChange.bind(this)}
                    /> : null
                }
                <Footer/>
            </div>
        )
    }
}

export default App;