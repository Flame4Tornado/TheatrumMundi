import React, { Component } from 'react';
import Watch from '../components/Watch';
import Gallery from '../components/Gallery';
import Description from '../components/Description';
import Adaptation from '../components/Adaptation';
import FullScreenGallery from '../components/FullScreenGallery';

class Play extends Component {
    state = {  
        play: this.props.match.params.whichPlay,
        kind: '',
        active: false
    }

    getSrc = () =>{
        let src1;
        let src2;
        let src3;
        if(this.state.kind==='mov'){
            switch(this.state.play){
                case 'rev':
                    src1 = require('../img/video1.mp4');
                    src3 = require('../img/watch-1.png');
                    break;
                case 'tgg':
                    src1 = require('../img/video2.mp4');
                    src3 = require('../img/watch-2.png');

                    break;
                case 'tan':
                    src1 = require('../img/video3.mp4');
                    src3 = require('../img/watch-3.png');

                    break;
                case 'dzi':
                    src1 = require('../img/video4.mp4');
                    src3 = require('../img/watch-4.png');

                    break;
                case 'sok':
                    src1 = require('../img/video5.mp4');
                    src3 = require('../img/watch-5.png');

                    break;
                default: break;
            }
        }else{
            switch(this.state.play){
                case 'rev':
                    src1 = require('../img/about-1.jpg');
                    src2 = require('../img/about-2.jpg'); 
                    src3 = require('../img/watch-1.png');

                    break;
                case 'tgg':
                    src1 = require('../img/about-3.jpg');
                    src2 = require('../img/about-4.jpg'); 
                    src3 = require('../img/watch-2.png');

                    break;
                case 'tan':
                    src1 = require('../img/about-5.jpg');
                    src2 = require('../img/about-6.JPG'); 
                    src3 = require('../img/watch-3.png');

                    break;
                case 'dzi':
                    src1 = require('../img/about-7.jpg');
                    src2 = require('../img/about-8.jpg'); 
                    src3 = require('../img/watch-4.png');

                    break;
                case 'sok':
                    src1 = require('../img/about-9.jpg');
                    src2 = require('../img/about-10.jpg'); 
                    src3 = require('../img/watch-5.png');

                    break;
                default: break;
            }
        }
        const arr = [];
        arr.push(src1);
        arr.push(src2);
        arr.push(src3);
        return arr;
    }

    handleGalleryShow = (kind) => {
        this.setState({active: !this.state.active, kind: kind})
    }

    render() { 
        const { play } = this.state;
        return ( 
            <>
            <div className="play">
            <Watch whichOne={play} src={this.getSrc()} handleGallery={this.handleGalleryShow.bind(this, 'mov')}/>
            <Gallery whichOne={play} handleGallery={this.handleGalleryShow.bind(this, 'img')} src={this.getSrc()}/>
            <Description whichOne={play}/>
            <Adaptation whichOne={play}/>
            {this.state.active? <FullScreenGallery kind={this.state.kind} whichOne={play} src={this.getSrc()} handleGallery={this.handleGalleryShow.bind(this, 'img')} /> : null}
            </div>
            </>
         );
    }
}
 
export default Play;