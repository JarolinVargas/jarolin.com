import React from 'react';
import './page-components/Article.scss';

export const writings = {
    'this-is-the-slug-and-key': {
        meta: {
            title: 'Designing and building applications',
            summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            published: 'July 24, 2020',
            topic: 'Design',
            slug: 'this-is-the-slug-and-key'
        },
        images: {
            cover: ''
        },
        jsx: (
            <React.Fragment>
                <p>Luminal Website Builder is part of a personal project I’ve been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p>
                <h2 className="heading primary-color">Goal</h2>
                <p>Whether or not I could design and build a website builder on my own was one of the many questions I asked myself when I started this project. The initial goal was to create a customizable HTML template with great design, browser support, and customization options. The idea of being able to customize the template without editing or writing code was tempting. I decided to bundle a website builder with the template that would make customization faster and easier; and would also serve as a personal challenge to test and improve my design and development skills.</p>
            </React.Fragment>
        )
    },
    'this-is-another-article': {
        meta: {
            title: 'This is another article',
            summary: 'oasidjf aosidfjaosidfja sdoifj asdiofj asdf',
            published: 'July 4, 2020',
            topic: 'Development',
            slug: 'this-is-another-article'
        },
        images: {
            cover: ''
        },
        jsx: (
            <React.Fragment>
                <p>Luminal Website Builder is part of a personal project I’ve been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p>
                <h2 className="heading primary-color">Goal</h2>
                <p>Whether or not I could design and build a website builder on my own was one of the many questions I asked myself when I started this project. The initial goal was to create a customizable HTML template with great design, browser support, and customization options. The idea of being able to customize the template without editing or writing code was tempting. I decided to bundle a website builder with the template that would make customization faster and easier; and would also serve as a personal challenge to test and improve my design and development skills.</p>
            </React.Fragment>
        )
    }
}