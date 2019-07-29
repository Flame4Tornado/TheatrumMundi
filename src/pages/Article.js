import React, { Component } from 'react';
import News1 from '../img/news-1.png';
import News2 from '../img/news-2.jpg';
import News3 from '../img/about-7.jpg';

class Article extends Component {
    state = {  
        number: this.props.match.params.play,
        news: [
            {title: 'Na gali rozdania nagród.', photo: News1, date: '28.05.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'},
            {title: 'Ostatnia szansa by zobaczyć "Sen o Kalifornii"', photo: News2, date: '05.04.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'},
            {title: '"Theatrum Mundi wygrywa i kończy swoją działalność"', photo: News3, date: '06.04.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'}
        ],
        content: ''
    }

    componentDidMount(){
        switch(this.state.number){
            case '1': this.setState({content: this.state.news[0]}); break;
            case '2': this.setState({content: this.state.news[1]}); break;
            case '3': this.setState({content: this.state.news[2]}); break;
            default: break;
        }
    }
    render() { 
        const { content } = this.state;
        return (  
            <div className="article">
                <div className="article__wrapper">
                    <img src={content.photo} alt="Article" className="article__img"/>
                    <h1 className="article__head">{content.title}</h1>
                    <span className="article__span">{content.date}</span>
                    <p className="article__main">{content.article}</p>
                </div>
            </div>
        );
    }
}
 
export default Article;