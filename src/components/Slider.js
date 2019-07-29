import React, { Component } from 'react';
import Arrow from './Arrow.js';
import Slide from '../components/Slide';
import Dot from '../components/Dots';
import Arr from '../img/symbol-defs.svg';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state={
            number: 1,
            news: props.news,
            index: ''
        }
    }

    componentDidMount(){
        this.startInterval();
    }
    
    startInterval = () => {
        const index = setInterval(()=>{
            this.changeNumber('arr', 1)
        }, 3000);
        this.setState({
            index: index
        })
    }

    changeNumber = (from,number) => {
        if(this.state.number!==number){
            clearInterval(this.state.index);
            if(from==='dot'){
                this.setState({number: number})
                this.startInterval();
            }
            if(from==='arr'){
                if((this.state.number+number)>=4){
                    this.setState({number: 1})
                    this.startInterval();
                }
                else if((this.state.number+number)<=0){
                    this.setState({number: 3})
                    this.startInterval();
                }
                else{
                    this.setState({number: this.state.number+number})
                    this.startInterval();
                }
            }
        }else{
            clearInterval(this.state.index);
            if(from==='arr'){
                if(this.state.number+number>=4){
                    this.setState({number: 1})
                    this.startInterval();
                }
                if(this.state.number+number<=0){
                    this.setState({number: 3})
                    this.startInterval();
                }else{
                    this.setState({number: this.state.number+number})
                    this.startInterval();
                }
            }
        }
    }

    render() { 

        return ( 
        <div className="slider">
            <div className="slider__wrapper">
                <Arrow click={this.changeNumber.bind(this, 'arr', -1)} arr={Arr} side={true}/>
                <Slide number={this.state.number} news={this.state.news[this.state.number-1]}/>
                <div className="slider__dots">
                <Dot click={this.changeNumber.bind(this,'dot', 1)} active={this.state.number===1? true : false}/>
                <Dot click={this.changeNumber.bind(this, 'dot', 2)} active={this.state.number===2? true : false}/>
                <Dot click={this.changeNumber.bind(this, 'dot', 3)} active={this.state.number===3? true : false}/>
                </div>
                <Arrow click={this.changeNumber.bind(this, 'arr', 1)} arr={Arr} side={false}/>
            </div>
        </div> );
    }
}
 
export default Slider;