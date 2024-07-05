// src/app/login/page.js
import RootLayout from '../layout.js';  // Adjust the import path according to your directory structure
import React from 'react';
import { Header, TextInputField } from './component';
import styles from './login.module.css';

export const metadata = {
    title: 'Demo – OpenAI Assistants API Streaming',
    description: 'A sample app to demonstrate OpenAI Assistants API Streaming',
    icons: {
        icon: '/next.svg',
        shortcut: '/vercel.svg',
    },
};

const Page = () => (
    <div className={styles.container}>
      <Header />
      <TextInputField />
    </div>
  );
  
  export default Page;
