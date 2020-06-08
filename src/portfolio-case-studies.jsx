import React from 'react';
import './page-components/Article.scss';
import luminalCoverIMG from './assets/portfolio-img/luminal-site-builder-cover.png';
import luminalBannerCoverIMG from './assets/portfolio-img/luminal-site-builder.png';
import JobBoardCoverIMG from './assets/portfolio-img/job-board.jpg';
import JobBoardBannerCoverIMG from './assets/portfolio-img/job-board.jpg';
import NewsroomCoverIMG from './assets/portfolio-img/newsroom-billboard.jpg';
import NewsroomBannerCoverIMG from './assets/portfolio-img/newsroom-billboard.jpg';
import MbcCoverIMG from './assets/portfolio-img/mbc-bg.png';
import MbcBannerCoverIMG from './assets/portfolio-img/mbc-bg.png';
import GraphicsCorrectionsCoverIMG from './assets/portfolio-img/jdigital-bg.png';
import GraphicsCorrectionsBannerCoverIMG from './assets/portfolio-img/jdigital-bg.png';
import ReferralCoverIMG from './assets/portfolio-img/jdigital-bg.png';
import ReferralBannerCoverIMG from './assets/portfolio-img/jdigital-bg.png';

export const portfolio = {
    'luminal': {
        meta: {
            title: 'Luminal Website Builder & Template',
            context: 'Personal Project',
            duration: 'June 2020 - May 2030',
            role: 'Developer & Designer',
            link: 'https://luminaldev.com'
        },
        images: {
            cover: luminalCoverIMG,
            bannerCover: luminalBannerCoverIMG
        },
        jsx: (
            <React.Fragment>
                <p>Luminal Website Builder is part of a personal project I’ve been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p>
                <h2 className="heading primary-color">Goal</h2>
                <p>Whether or not I could design and build a website builder on my own was one of the many questions I asked myself when I started this project. The initial goal was to create a customizable HTML template with great design, browser support, and customization options. The idea of being able to customize the template without editing or writing code was tempting. I decided to bundle a website builder with the template that would make customization faster and easier; and would also serve as a personal challenge to test and improve my design and development skills.</p>
                <h2 className="heading primary-color">Colors Feature</h2>
                <p>The colors feature gives the user control over individual colors across their website. Most builders provide a combination of colors that change the overall theme of the website in its entirety. I wanted users to easily change colors individually and create any combination of available colors with a simple interface. I took some time to contemplate which route to take when implementing the colors feature. I came up with two solutions that would give varying levels of control to the user, and varying levels of complexity and time needed to implement.</p>
            </React.Fragment>
        )
    },
    'forcebrands-newsroom': {
        meta: {
            title: 'ForceBrands Newsroom Blog',
            context: 'ForceBrands',
            duration: 'July 2019 - August 2019',
            role: 'Front-End/Back-end Developer & Designer',
            link: 'https://forcebrands.com/blog'
        },
        images: {
            cover: NewsroomCoverIMG,
            bannerCover: NewsroomBannerCoverIMG
        },
        jsx: (
            <React.Fragment>
                <p>The ForceBrands Newsroom Blog is the place to gain insights from the CPG industry's leading recruiting firm. At ForceBrands, I was tasked with redesigning and rebuilding the wordress blog, while staying close to the design asthetic of the ForceBrands website. I worked closely with the marketing and editorial team to define goals, functionality, and expectations. I designed the blog using Adobe Xd and developed using HTML5, SCSS, PHP, and vanilla JavaScript. Learned to developed WordPress themes in the process.</p>
            </React.Fragment>
        )
    },
    'forcebrands-jobboard': {
        meta: {
            title: 'ForceBrands Job Board React App',
            context: 'ForceBrands',
            duration: 'November 2019 - January 2020',
            role: 'Front-End Developer & Designer',
            link: 'https://careers.afventures.vc/'
        },
        images: {
            cover: JobBoardCoverIMG,
            bannerCover: JobBoardBannerCoverIMG
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
            link: 'https://jarolin.com'
        },
        images: {
            cover: MbcCoverIMG,
            bannerCover: MbcCoverIMG
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
            link: 'http://jarolin.com/demo/jwiz-corrections-tool'
        },
        images: {
            cover: GraphicsCorrectionsCoverIMG,
            bannerCover: GraphicsCorrectionsBannerCoverIMG
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
            link: 'https://jwiz.com/jewish_referral/catering'
        },
        images: {
            cover: ReferralCoverIMG,
            bannerCover: ReferralBannerCoverIMG
        },
        jsx: (
            <React.Fragment>
                <p>Referral Service Landing Page makes finding the right business easy. Users provide details on the services they need and jWiz Marketing Solutions will help find the right business that can provide the services at the right price. I was tasked with creating a new design that can target niche businesses. I created a design that is easy to maintain and customize by allowing future developers to create new themes by editing JSON file instead of the source code. Some of the themes are linked below.</p>
            </React.Fragment>
        )
    }
}