import Footer from '@/components/layout/Footer';
import React from 'react';
import styles from "./gift-cards.module.scss";
import Landing from '@/components/layout/Landing';
import PackageList from '@/components/gift-cards/PackageList';
import { getQueryClient } from '@/lib/get-query-client';
import { servicesOptions } from '../_requests/services';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

/**
 * Reference -> https://carcareful.peacefulqode.in/our-service/
 * Co9ntext like this -> https://aonetheme.com/service-finder-demo4/author/robert-marchel/?demo=style-1
 * Purchase now
 */


async function GiftCardsPage() {

  const queryClient = getQueryClient();
  
    try {
      // Always use await to properly handle errors
      await queryClient.prefetchQuery(servicesOptions);
    } catch (error) {
      console.error("Prefetch error:", error);
      // The error will automatically propagate to error.tsx
      throw error;
    }


  return (
    <>
      <main>
        <section className={styles.landing}>
          <Landing title="Gift Cards" />
        </section>
        <section className="section-pt">
          <HydrationBoundary state={dehydrate(queryClient)}>
          <PackageList styles={styles} />
      </HydrationBoundary>
        </section>
        <section className="section-pt"></section>
      </main>
      <Footer />
    </>
  )
}

export default GiftCardsPage;