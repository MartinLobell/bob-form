import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
   
    render() {
        return (
            <div className='product'>
                <div className='product\_inner tc dib br3 pa3 ma2 bw2' style={{ backgroundColor: '#FFE064' }}>
                    <img src={`./${this.props.id}.jpg`} alt="Bild av produkt" style={{ maxWidth: 400, height: 'auto', border: 'solid #fff 20px', borderRadius: 800 / 2 }}/>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.shortText}</h2>
                    <p>{this.props.longText}</p>  
                    <button onClick={this.props.closePopup}><strong>Gå tillbaka</strong></button>
                </div>
            </div>
        );
    }
}  


export default Product;