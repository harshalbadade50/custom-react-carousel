import React, { Component } from 'react';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import ImageSection from './ImageSection.js';

export class CarouselComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedImgIndx: 1
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.selectedCategory !== this.props.selectedCategory){
            this.setState({
                selectedImgIndx: 1
            })
        }
    }

    handleArrowClick (direction) {
        let {selectedImgIndx} = {...this.state};
        
        if(direction === "prev"){
            selectedImgIndx = ((selectedImgIndx - 1) <= 0) ? selectedImgIndx : selectedImgIndx - 1;
            
        } else {
            selectedImgIndx = ((selectedImgIndx + 1) >= (this.props.imageData.length - 1)) ? selectedImgIndx : selectedImgIndx + 1;
        }
        this.setState({
            selectedImgIndx: selectedImgIndx
        })
    }

    render(){
        let {selectedImgIndx} = {...this.state};
        
        let prevImgData = this.props.imageData[this.state.selectedImgIndx - 1];
        let selectedImgData = this.props.imageData[this.state.selectedImgIndx];
        let nextImgData = this.props.imageData[this.state.selectedImgIndx + 1];

        const prevArrowClassName = ((selectedImgIndx - 1) <= 0) ? "arrow-disabled" : "enabled";
        const nextArrowClassName = ((selectedImgIndx + 1) >= (this.props.imageData.length - 1)) ? "arrow-disabled" : "enabled";

        return(
            <div className="carousel">
                <div className={`left-arrow-icon ${prevArrowClassName}`} onClick={this.handleArrowClick.bind(this, "prev")}>
                    <ArrowBackIosOutlinedIcon style={{ color: "white" }} />
                </div>
                <div className={`right-arrow-icon ${nextArrowClassName}`} onClick={this.handleArrowClick.bind(this, "next")}>
                    <ArrowForwardIosOutlinedIcon style={{ color: "white" }} />
                </div>

                <div className="carousel-section">
                    <div className="carousel-img-section prev-img" style={{border: (prevImgData) ? "1px solid #eae6e6" : "none"}}>
                        <ImageSection imageInfo={prevImgData}/>
                    </div>

                    <div className="carousel-img-section selected-img">
                        <ImageSection imageInfo={selectedImgData}/>
                    </div>

                    <div className="carousel-img-section next-img" style={{border: (nextImgData) ? "1px solid #eae6e6" : "none"}}>
                        <ImageSection imageInfo={nextImgData}/>
                    </div>
                </div>
            </div>
            
        )
    }
}