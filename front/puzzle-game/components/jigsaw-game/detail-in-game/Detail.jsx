'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import MyJigsawPuzzle1 from '../level1/MyJigsawPuzzle'


export default function Detail() {
    const pathname = usePathname();
    
    // Split the pathname by '/' and get the last segment
    const pathSegments = pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    
    // Now lastSegment should contain the value you want
    console.log('Last segment of the pathname:', lastSegment);
  return (
    <div>
      {
        lastSegment == 1 && <MyJigsawPuzzle1 />
      }
    </div>
  )
}
