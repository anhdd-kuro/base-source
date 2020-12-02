import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import styled from 'styled-components';

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
        <StyledDemo> --- This is Styled Component --- </StyledDemo>
      </main>
    </div>
  );
}

const StyledDemo = styled.div`
  font-size: 50px;
  text-align: center;
  color: red;
`;
