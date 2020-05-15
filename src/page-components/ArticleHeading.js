import React from 'react';
import './ArticleHeading.scss';
import ContentMeta from './ContentMeta.js';
import articleIMGPlaceholder from '../assets/article-img-placeholder.png';

export default function ArticleHeading(props) {
    return (
        <div className="ArticleHeading">
            <div className="article-img">
                <img src={articleIMGPlaceholder} alt="#"/>
            </div>
            <div className="article-meta">
                <h1 className="primary-color">This is the title of the post</h1>
                <ContentMeta/>
            </div>
        </div>
    )
}