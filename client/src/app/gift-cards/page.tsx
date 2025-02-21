import Footer from '@/components/layout/Footer';
import React from 'react';
import styles from "./gift-cards.module.scss";
import Landing from '@/components/layout/Landing';
import { IProduct } from '@/types';
import PackageList from '@/components/gift-cards/PackageList';

/**
 * Reference -> https://carcareful.peacefulqode.in/our-service/
 * Co9ntext like this -> https://aonetheme.com/service-finder-demo4/author/robert-marchel/?demo=style-1
 * Purchase now
 */


const serviceList: IProduct[] = [
  {
    id: 1,
    title: "Ceramic Coat Windshield",
    price: 100,
    time: '1 hour',
    desc: "Coat windshield to have better visibility while driving in the rain"
  },
  {
    id: 2,
    title: "Platinum Sedan Package",
    price: 249,
    time: '3 hours, 30 minutes',
    desc: "Package Includes: Comprehensive interior cleaning, including vacuuming, dashboard treatment, and carpet cleaning Complete exterior detailing with hand wash & wax Tire and rim detailing Window cleaning inside and out"
  },

  {
    id: 3,
    title: "Motor Home/ RV/ Tractors ($20-35/sqft)",
    price: 249,
    time: '1 hour',
    desc: "Services Include Steam Wash / Polish / Wax / Oxidation Removal / RV Interior Priced upon inspection"
  },

];

function GiftCardsPage() {
  return (
    <>
      <main>
        <section className={styles.landing}>
          <Landing title="Gift Cards" />
        </section>
        <section className="section-pt">
          <PackageList serviceList={serviceList} styles={styles} />
        </section>
        <section className="section-pt"></section>
      </main>
      <Footer />
    </>
  )
}

export default GiftCardsPage;