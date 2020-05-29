import React from 'react';
import './ArticleHeading.scss';
import ContentMeta from './ContentMeta.js';
import ProjectButton from './ProjectButton';

export default function ArticleHeading(props) {
    return (
        <div className={`ArticleHeading${props.projectHeading ? ' project-heading' : ''}`} style={{height: props.height}}>
            <div className="article-img">
                {props.image && <img src={props.image} alt="#"/>}
                {props.button && <ProjectButton/>}
            </div>
            <div className="article-meta">
                <h1 className="primary-color">This is the title of the post</h1>
                <ContentMeta/>
            </div>
        </div>
    )
}