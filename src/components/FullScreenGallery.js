import React, { Component } from 'react';
import Arrow from './Arrow';
import arr from '../img/symbol-defs.svg';
import Video from './Video';

class FullScreenGallery extends Component {
    constructor(props){
        super(props);
        this.state={
            number: 0,
        }
    }

    handleClick = () =>{
        if(this.state.number===0){
            this.setState({number: 1})
        }else{
            this.setState({number: 0})
        }
    }



    render() { 


        return ( 
        <div className="full-screen">
            <div className="full-screen__bg" onClick={this.props.handleGallery}></div>
            {this.props.kind==='mov'? 
            <div className="full-screen__wrapper">
                <Video arr={arr} src={this.props.src[0]} handleGallery={this.props.handleGallery}/>
            </div>
            :(this.props.kind==='img'? (
                <div className="full-screen__wrapper">
                    <Arrow arr={arr} click={this.handleClick.bind(this)} side={true}/>
                    <figure className="full-screen__img-content">

                        <img src={this.props.src[this.state.number]} alt="Gallery" className="full-screen__img"/>

                        <span className="full-screen__close" onClick={this.props.handleGallery}></span>

                    </figure>
                    <Arrow arr={arr} click={this.handleClick.bind(this)} side={false}/>
                </div>) 
            : null)}
        </div> );
    }
}
 
export default FullScreenGallery;