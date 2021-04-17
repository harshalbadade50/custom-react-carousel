import React, { Component } from 'react';

import { CarouselComponent } from "./CarouselComponent.jsx";
import FilterComponent from './FilterComponent.js';

import { ImageData } from '../data/imageData.js';

export class CarouselContainer extends Component{

    constructor(){
        super();
        this.state = {
            category: "select"
        }
    }

    setCategory = (category) => {
        this.setState({category});
    }

    render(){
        let categoryWiseImageData = ImageData;
        if(this.state.category !== "select"){
            categoryWiseImageData = ImageData.filter(item => item.category === this.state.category);
        }

        return(
            <div className="container">
                <CarouselComponent imageData={categoryWiseImageData} selectedCategory={this.state.category}/>
                <FilterComponent setCategory={this.setCategory}/>
            </div>
        )
    }
}