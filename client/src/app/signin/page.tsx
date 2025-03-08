import React from 'react';
import styles from "./signin.module.scss";
import Auth from '@/components/auth/Auth';

/**
 * Reference -> https://dribbble.com/shots/24671160-Fillianta-Sign-Up
 */

function SigninPage() {
  return (
    <main className={`${styles.signin || ""} w-100 d-flex align-items-center`}>
      {/* Let&apos;s access to your account */}
      <Auth signin headTest="Let's access to your account" />
    </main>
  )
}

export default SigninPage;