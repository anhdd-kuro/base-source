import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Karabiner Next.js!</a>
        </h1>
        <div className="text-5xl text-red-500"> --- Styled by Tailwind CSS --- </div>
      </main>
    </div>
  );
}
