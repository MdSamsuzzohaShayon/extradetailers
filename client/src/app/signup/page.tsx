import React from 'react';
import styles from "./signup.module.scss";
import Auth from '@/components/auth/Auth';

/**
 * Reference -> https://dribbble.com/shots/24671160-Fillianta-Sign-Up
 */

function SignupPage() {
  return (
    <main className={`${styles.signup || ""} w-100 d-flex align-items-center`}>
      <Auth signin={false} headTest="Let's create your account" />
    </main>
  )
}

export default SignupPage;