"use client"
import React, { useEffect, useRef, useState } from 'react';
import CategroyComponents from '@/components/categoryComponents';

const CategoryPage = () => {

  return (
    <>
      <div className="container mx-auto hidden xl:block 2xl:px-22 py-3 xl:py-6">
        <CategroyComponents />
      </div>

      <div className='block xl:hidden px-2 lg:px-16 py-4 xl:py-6'>
        <CategroyComponents />
      </div>
    </>
  );
};

export default CategoryPage;