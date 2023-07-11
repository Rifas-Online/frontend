"use client"

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Skeletor from '@/components/skeleton/Skeletor';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/register');
    }
  }, []);

  return (
    <>
      <h1>Home aqui</h1>
      <Skeletor/>
    </>
  );
};

export default Home;
