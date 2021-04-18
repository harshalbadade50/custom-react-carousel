import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { CarouselComponent } from "./CarouselComponent.jsx";
import FilterComponent from './FilterComponent.js';

import { ImageData } from '../data/imageData.js';

export class CarouselContainer extends Component{

    constructor(){
        super();
        this.state = {
            category: "All"
        }
    }

    setCategory = (category) => {
        this.setState({category});
    }

    render(){
        let categoryWiseImageData = ImageData;
        if(this.state.category !== "All"){
            categoryWiseImageData = ImageData.filter(item => item.category === this.state.category);
        }

        return(
            <React.Fragment>

                <AppBar position="static">
                    <Toolbar>
                        <FilterComponent setCategory={this.setCategory}/>
                    </Toolbar>
                </AppBar>
            
                <div className="container">
                    <CarouselComponent imageData={categoryWiseImageData} selectedCategory={this.state.category}/>
                </div>

            </React.Fragment>
        )
    }
}