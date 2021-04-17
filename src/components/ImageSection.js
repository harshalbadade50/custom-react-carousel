import React from 'react';

export default function ImageSection(props) {

    let imageElem = null;

    if(props.imageInfo){
        imageElem = (
            <React.Fragment>
                <div className="img-section" style={{backgroundImage: `url(${props.imageInfo.src}`}}>
                </div>
                <div className="product-name">{props.imageInfo.name}</div>
                <h3 className="product-price">${props.imageInfo.price}</h3>
                <div className="product-category">{props.imageInfo.category}</div>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            {imageElem}
        </React.Fragment>
    )
}