import React from 'react';
import './page-components/Article.scss';
import jarolinVargas from './assets/writings-img/jarolinvargas.png';
import jarolinVargasBanner from './assets/writings-img/jarolinvargas-banner.png';

export const writings = {
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