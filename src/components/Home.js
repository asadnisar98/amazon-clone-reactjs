import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
         <Product
          id="12121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
         <Product
          id="12121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
        <Product
          id="12121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121223431241212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
         <Product
          id="121235423121212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
        <Product
          id="1212112352315212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121211234234212"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
