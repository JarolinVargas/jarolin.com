import React from 'react';
import './page-components/Article.scss';
import jarolinVargas from './assets/writings-img/jarolinvargas.png';
import jarolinVargasBanner from './assets/writings-img/jarolinvargas-banner.png';

export const writings = {
    'what-i-want-this-page-to-be': {
        meta: {
            title: 'What I want this page to be',
            published: 'July 15, 2020',
            topic: 'Personal',
            slug: 'what-i-want-this-page-to-be'
        },
        images: {
            cover: jarolinVargas,
            bannerCover: jarolinVargasBanner
        },
        jsx: (
            <React.Fragment>
                <p>I’m just sitting in my living room working on this site. I don’t know what I want this portion of this website to be like, but more than anything; it should be a page that can serve as an outlet for whatever that may be. I don’t know what I want to work on and for that reason, I’m probably going to end up watching Netflix or something. I guess this post will serve as the perfect example of what I want this page to be. I felt like writing this post; and that’s what I did. and that’s why you’re reading this. Whenever I feel like writing something here, I will; and won’t restrict myself with topics or whatever. I’m honestly doing this for myself and won’t be comfortable with the idea that someone else is reading this. But that’s part of the reason why I’m writing this.</p>
                <p>I’ve been working on the contact page and felt like putting this post on the website and remembered I haven’t really implemented a blogging system into this so I’m just going to put this up right now. The contact form isn’t working; and so It’s only fair I set my own standards when not trying to live up to someone else’s. So this is going up right now!</p>
            </React.Fragment>
        )
    },
    'check-out-my-new-site': {
        meta: {
            title: 'Check out my new site!',
            published: 'July 5, 2020',
            topic: 'Development & Design',
            slug: 'check-out-my-new-site'
        },
        images: {
            cover: jarolinVargas,
            bannerCover: jarolinVargasBanner
        },
        jsx: (
            <React.Fragment>
                <p>I finally got around to redesigning my personal website, and you're on it. To be honest, I only wrote this post to fill this page up with something; but hope that having a 'blog' page on my website will encourage me to write more and share some thoughts and opinions. I might expand on this post later on to include details on my design and development process. There's still work to do, but I made the source code available on Github for educational/inspirational purposes: <a href="https://github.com/JarolinVargas/jarolin.com" target="_blank" rel="noopener noreferrer">Jarolin.com Github Repo</a>.</p>
                <p>Shout out to <a href="https://dribbble.com/ndumisonyoni" target="_blank" rel="noopener noreferrer">Ndumiso Nyoni</a> for the awesome portrait illustration.</p>
            </React.Fragment>
        )
    }
}