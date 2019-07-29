import React, { Component } from 'react';
import Controls from './Controls';
import Screen from './Screen';

class Video extends Component {
    constructor(props){
        super(props);
        this.state={
            icon: '#icon-play2',
            paused: true,
            muted: false,
            length: null,
            formattedLength: null,
            currentTime: 0,
            formattedTime: null,
            volume: 0.5
        }
    }

    togglePlayPause = () => {
        const video = document.querySelector('.full-screen__video');
        if(video.paused){
            this.setState({icon: '#icon-pause'});
            video.play();
        }else if(!video.paused  || video.ended){
            this.setState({icon: '#icon-play2'});
            video.pause();
        }

    }

    timeUpdate = () => {
        const video = document.querySelector('.full-screen__video');
        const fill = document.querySelector('.controls__fill');
        let videoPos = video.currentTime / video.duration;
        fill.style.width = videoPos * 100 + '%';
    }

    duration() {
        let dur = document.querySelector('.full-screen__video').duration;
        dur = dur.toFixed();
        let formattedLength = dur.toHHMMSS();
    
        this.setState({
          length: dur,
          formattedLength: formattedLength
        });
    
        return dur;
    }
    
    currentTime() {
        String.prototype.toHHMMSS = function() {
          let sec_num = parseInt(this, 10);
          let hours = Math.floor(sec_num / 3600);
          let minutes = Math.floor((sec_num - hours * 3600) / 60);
          let seconds = sec_num - hours * 3600 - minutes * 60;
    
          if (hours < 10) {
            hours = "0" + hours;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
    
          return hours + ":" + minutes + ":" + seconds;
        };
    
        let time = document.querySelector('.full-screen__video').currentTime;
        time = time.toFixed();
        let formattedTime = time.toHHMMSS();
    
        this.setState({
          currentTime: time,
          formattedTime: formattedTime
        });
        if (parseInt(this.state.currentTime) === parseInt(this.state.length)) {
          this.setState({ paused: true });
        }
    
        return time;
    }
    
    customTime() {
    const timeRange = document.querySelector(".controls__time");
    document.querySelector('.full-screen__video').currentTime = timeRange.value;

    this.setState({
        currentTime: timeRange.value
    });
    }

    customVolume() {
    const volumeRange = document.querySelector(".controls__volume");
    document.querySelector('.full-screen__video').volume = volumeRange.value;

    this.setState({
        volume: volumeRange.value
    });

    if (volumeRange.value === 0) {
        this.setState({
        muted: true
        });
    } else {
        this.setState({
        muted: false
        });
    }
    }

    mute() {
    document.querySelector('.full-screen__video').muted = true;

    this.setState({
        muted: true
    });

    if (this.state.muted === true) {
        document.querySelector('.full-screen__video').muted = false;

        this.setState({
        muted: false
        });
    } else {
        document.querySelector('.full-screen__video').muted = true;
        this.setState({
        muted: true
        });
    }
    }

    componentDidMount() {
    this.customVolume();
    const indexTime = setInterval(() => this.setState({ currentTime: this.currentTime() }), 10);

    const indexLength = setInterval(() => this.setState({ length: this.duration() }), 10);

    this.setState({
        indexTime, indexLength
    })
    }

    componentWillUnmount(){
        clearInterval(this.state.indexTime);
        clearInterval(this.state.indexLength);

    }
    

    render() { 
        return (  
            <>
            <div className="full-screen__video-wrap">
                <Screen timeUpdate={this.timeUpdate} src={this.props.src}/>
                <Controls 
                    icon={this.state.icon} 
                    play={this.togglePlayPause.bind('this')} 
                    arr={this.props.arr}
                    volume={this.state.volume}
                    customVolume={this.customVolume.bind(this)}
                    customTime={this.customTime.bind(this)}
                    currentTime={this.state.currentTime}
                    length={this.state.length}
                    formattedTime={this.state.formattedTime}
                    formattedLength={this.state.formattedLength}
                />
            </div>
            <span className="full-screen__close" onClick={this.props.handleGallery}></span>
            </>

            
        );
    }
}
 
export default Video;