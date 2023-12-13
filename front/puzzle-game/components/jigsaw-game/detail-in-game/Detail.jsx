'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import MyJigsawPuzzle1 from '../level1/MyJigsawPuzzle'
import MyJigsawPuzzle2 from '../level2/MyJigsawPuzzle'
import MyJigsawPuzzle3 from '../level3/MyJigsawPuzzle'
import MyJigsawPuzzle4 from '../level4/MyJigsawPuzzle'


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
      {
        lastSegment == 2 && <MyJigsawPuzzle2 />
      }
      {
        lastSegment == 3 && <MyJigsawPuzzle3 />
      }
      {
        lastSegment == 4 && <MyJigsawPuzzle4 />
      }
    </div>
  )
}
