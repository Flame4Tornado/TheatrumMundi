import React, { Component } from 'react';
import Slider from '../components/Slider';
import Articles from '../components/Articles';
import News1 from '../img/news-1.png';
import News2 from '../img/news-2.jpg';
import News3 from '../img/about-7.jpg';

class News extends Component {
    state = {  
        news: [
            {title: 'Na gali rozdania nagród.', photo: News1, date: '28.05.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'},
            {title: 'Ostatnia szansa by zobaczyć "Sen o Kalifornii"', photo: News2, date: '05.04.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'},
            {title: '"Theatrum Mundi wygrywa i kończy swoją działalność"', photo: News3, date: '06.04.2019r.', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam modi neque nam, vitae sint quis? Eos neque saepe accusamus, nostrum sunt alias doloribus in ipsum ipsam debitis. Explicabo, eum.'}
        ]
    }


    render() { 
        return ( 
            <div className="news">
                <Slider news={this.state.news}/>
                <Articles news={this.state.news}/>
            </div>
         );
    }
}
 
export default News;