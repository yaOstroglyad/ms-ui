import './style.scss'
import { Outlet } from 'react-router-dom'
import * as React from 'react';

const HomeMainPage: React.FC = function () {

  return (
    <section className="home-main">
      <Outlet />
    </section>
  )
}

export default HomeMainPage
