import React from 'react';
import Separator from './page-components/ItemBanner';
import Button from './page-components/Button';
import ItemBanner from './page-components/ItemBanner';
import BlogList from './page-components/BlogList';
import './themes.scss';
import './page-components/Text.scss';
import './page-components/Layouts.scss';

export function AboutMe() {
  return (
    <div className="layouts layout-col-2 narrow-col-2 separator">
      <div>
        
      </div>
      <div>
        <h1 className="my-name">Jarolin Vargas</h1>
        <p className="my-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Button/>
      </div>
    </div>
  )
}



export function Projects() {
  return (
    <div className="layouts layout-col-3 separator-dashedborder">
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div><ItemBanner/></div>
      <div></div>
      <div></div>
    </div>
  )
}


export function Thoughts() {
  return (
    <div className="layouts padding-off">
      <div><BlogList/></div>
    </div>
  )
}



export function ProjectView() {
  return (
    <h1>Project Id:</h1>
  )
}