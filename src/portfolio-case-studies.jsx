import React from 'react';
import './page-components/Article.scss';

export const projects = {
    'luminal-website-builder': {
        meta: {
            context: 'Personal Project',
            duration: 'June 2020 - May 2030',
            role: 'Developer & Designer'
        },
        images: {
            cover: ''
        },
        jsx: (
            <article className="article project-article">
                <h1 className="title primary-color">Luminal Website Builder</h1>
                <p>Luminal Website Builder is part of a personal project I’ve been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p>
                <h2 className="heading primary-color">Goal</h2>
                <p>Whether or not I could design and build a website builder on my own was one of the many questions I asked myself when I started this project. The initial goal was to create a customizable HTML template with great design, browser support, and customization options. The idea of being able to customize the template without editing or writing code was tempting. I decided to bundle a website builder with the template that would make customization faster and easier; and would also serve as a personal challenge to test and improve my design and development skills.</p>
            </article>
        )
    }
}