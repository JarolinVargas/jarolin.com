import React from 'react';
import './page-components/Article.scss';
import luminal from './assets/portfolio-img/luminal.png';
import luminalBanner from './assets/portfolio-img/luminal-banner.png';
import jobboard from './assets/portfolio-img/job-board.png';
import jobboardBanner from './assets/portfolio-img/job-board-banner.png';
import newsroom from './assets/portfolio-img/newsroom.png';
import newsroomBanner from './assets/portfolio-img/newsroom-banner.png';
import mbc from './assets/portfolio-img/mbc.png';
import mbcBanner from './assets/portfolio-img/mbc-banner.png';
import jdigital from './assets/portfolio-img/jdigital.png';
import referralService from './assets/portfolio-img/referral-service.png';

export const portfolio = {
    'luminal': {
        meta: {
            title: 'Luminal Website Builder & HTML Template',
            context: 'Personal Project',
            duration: 'April 2014 - December 2018',
            role: 'Developer & Designer',
            link: 'https://luminaldev.com',
            slug: 'luminal'
        },
        images: {
            cover: luminal,
            bannerCover: luminalBanner
        },
        jsx: (
            <React.Fragment>
                <h3 className="heading primary-color" style={{marginTop: 0}}>Luminal Website Builder</h3>
                <p>Luminal Website Builder is part of a personal project I’ve been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p>
                <h3 className="heading primary-color">Luminal HTML Template</h3>
                <p>Luminal Template is part of the Luminal personal project. It's a highly customizable, multi-purpose, responsive HTML5 template with excellent browser compatibility; and can be easily customized without writing or editing code using the Luminal Website Builder. I focused on using a component-based system when designing and building the template to let users place and reuse components in many ways without hassle.</p>
            </React.Fragment>
        )
    },
    'forcebrands-newsroom': {
        meta: {
            title: 'ForceBrands Newsroom Blog',
            context: 'ForceBrands',
            duration: 'July 2019 - August 2019',
            role: 'Front-End/Back-end Developer & Designer',
            link: 'https://forcebrands.com/blog',
            slug: 'forcebrands-newsroom'
        },
        images: {
            cover: newsroom,
            bannerCover: newsroomBanner
        },
        jsx: (
            <React.Fragment>
                <p>The ForceBrands Newsroom Blog is the place to gain insights from the CPG industry's leading recruiting firm. At ForceBrands, I was tasked with redesigning and rebuilding the wordress blog, while staying close to the design asthetic of the ForceBrands website. I worked closely with the marketing and editorial team to define goals, functionality, and expectations. I designed the blog using Adobe Xd and developed using HTML5, SCSS, PHP, and vanilla JavaScript. Learned to developed WordPress themes in the process.</p>
            </React.Fragment>
        )
    },
    'job-board-react-app': {
        meta: {
            title: 'Job Board React App',
            context: 'ForceBrands',
            duration: 'November 2019 - January 2020',
            role: 'Front-End Developer & Designer',
            link: 'https://careers.afventures.vc/',
            slug: 'job-board-react-app'
        },
        images: {
            cover: jobboard,
            bannerCover: jobboardBanner
        },
        jsx: (
            <React.Fragment>
                <p>The white-label job board app is an independent job board React application that exists on the clients domain and provides a place to list and publish open opportunities. At ForceBrands, I designed and built all front-end aspects of the application. I used ReactJS, SCSS on the front-end, and the back-end API was built by a remote developer using Ruby on Rails.</p>
            </React.Fragment>
        )
    },
    'manhattan-bridge-capital': {
        meta: {
            title: 'Manhattan Bridge Capital',
            context: 'Jwiz Marketing Solutions',
            duration: 'June 2018 - August 2018',
            role: 'Front-End/Back-end Developer & Designer',
            link: 'https://manhattanbridgecapital.com',
            slug: 'manhattan-bridge-capital'
        },
        images: {
            cover: mbc,
            bannerCover: mbcBanner
        },
        jsx: (
            <React.Fragment>
                <p>Manhattan Bridge Capital is the home page of a popular hard-money lender. At Jwiz Marketing Solutions I was tasked with re-designing and re-building the previous 12-year old design as well as digitizing the loan application, transferring press-release articles from HTML5 files to a MySQL database using PHP, and developing a custom content management system to upload, edit, and delete press release articles and other content.</p>
            </React.Fragment>
        )
    },
    'graphics-corrections-tool': {
        meta: {
            title: 'Graphics Corrections Tool',
            context: 'Jwiz Marketing Solutions',
            duration: 'March 2018 - April 2018',
            role: 'Front-End/Back-end Developer & Designer',
            link: `${process.env.PUBLIC_URL}/jwiz-corrections-tool/index.html`,
            slug: 'graphics-corrections-tool'
        },
        images: {
            cover: jdigital,
            bannerCover: ''
        },
        jsx: (
            <React.Fragment>
                <p>Jwiz Graphics Corrections is a web app I develped at Jwiz Marketing Solutions that drastically reduced the time needed to proofread and correct mistakes for client graphics. I created an editor that uses JavaScript canvas and allows the proofreader to highlight certain areas over the image that need correction. When an area is highlighted; a note is created and used to type the correction that the graphics designer can later read and correct without dealing with paper and hand-written notes. It has been used to proofread and correct the flyers, coupons, and banners of over 700 clients.</p>
            </React.Fragment>
        )
    },
    'referral-service-landing-page': {
        meta: {
            title: 'Referral Service Landing Page',
            context: 'Jwiz Marketing Solutions',
            duration: 'April 2018 - April 2018',
            role: 'Front-End/Back-end Developer & Designer',
            link: 'https://jwiz.com/jewish_referral/catering',
            slug: 'referral-service-landing-page'
        },
        images: {
            cover: referralService,
            bannerCover: ''
        },
        jsx: (
            <React.Fragment>
                <p>Referral Service Landing Page makes finding the right business easy. Users provide details on the services they need and jWiz Marketing Solutions will help find the right business that can provide the services at the right price. I was tasked with creating a new design that can target niche businesses. I created a design that is easy to maintain and customize by allowing future developers to create new themes by editing JSON file instead of the source code. Some of the themes are linked below.</p>
            </React.Fragment>
        )
    }
}