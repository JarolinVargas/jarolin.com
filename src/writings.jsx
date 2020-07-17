import React from 'react';
import './page-components/Article.scss';
import jarolinVargas from './assets/writings-img/jarolinvargas.png';
import jarolinVargasBanner from './assets/writings-img/jarolinvargas-banner.png';
import awsAmplify from './assets/writings-img/aws-amplify.png';
import awsAmplifyBanner from './assets/writings-img/aws-amplify-banner.png';

export const writings = {
    'aws-amplify-is-awesome': {
        meta: {
            title: 'AWS Amplify is awesome!',
            published: 'July 16, 2020',
            topic: 'Development',
            slug: 'aws-amplify-is-awesome'
        },
        images: {
            cover: awsAmplify,
            bannerCover: awsAmplifyBanner
        },
        jsx: (
            <React.Fragment>
                <p>I’ve been using Hostgator to host my apps for a few years. Whenever I need to deploy some changes; I upload the files to the server using Transmit FTP client. This works well enough for traditional websites that don’t need to be compiled, so I haven’t bothered looking for an alternative method. I pay $12 per month for hosting and have Cloudflare CDN set up to improve speed and reliability. I recently deployed my personal website built with React, and while the process for deployment is similar; it felt tedious having to run build, wait, and then upload the files of the build directory to the server manually every time.</p>
                <p>I decided to give AWS amplify a shot. This has allowed me to deploy to production whenever I commit and push changes to the master branch on GitHub. From there, AWS automatically builds and deploys the assets of this website to a global CND network. This resulted in Hostgator hosting, and Cloudflare CND being two fewer things to manage. Not only has this made the deployment process easier; it also encouraged me to work on this website more often and iterate more frequently knowing how easy it is to deploy my changes.</p>
            </React.Fragment>
        )
    },
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
                <p>I’m just sitting in my living room working on this site. I don’t know what I want this portion of this website to be like, but more than anything; it should be a page that can serve as an outlet for whatever that may be. I don’t know what I want to work on and for that reason, I’m probably going to end up watching Netflix or something. I guess this post will serve as the perfect example of what I want this page to be. I felt like writing this post; and that’s what I did. and that’s why you’re reading this. Whenever I feel like writing something here, I will; and won’t restrict myself with topics or whatever. I’m honestly doing this for myself and won’t be comfortable with the idea that someone else is reading this. But that’s part of the reason why I’m writing this. I’ve been working on the contact page and felt like putting this post on the website and remembered I haven’t really implemented a blogging system into this so I’m just going to put this up right now.</p>
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