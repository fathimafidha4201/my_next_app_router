import React from 'react'
import BannerCarousel from './components/BannerCarousel/BannerCarousel'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import OffersSection from './components/OfferSection/OfferSection'

export default function Home() {
  return (
    <div>
      <BannerCarousel />
      <OffersSection />
      <FeaturedProducts />
    </div>
  )
}