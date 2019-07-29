import React from 'react';
import MiniArticle from '../components/MiniArticle';

const Articles = (props) => {
    return ( 
        <div className="articles">
        <MiniArticle news={props.news[0]} number={'1'}/>
        <MiniArticle news={props.news[1]} number={'2'}/>
        <MiniArticle news={props.news[2]} number={'3'}/>
        </div>
     );
}
 
export default Articles;