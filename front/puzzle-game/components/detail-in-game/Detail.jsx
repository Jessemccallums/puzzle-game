'use client'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Image from 'next/image';
import styles from './levels.module.css';
import GameView from '../../../puzzle-game/components/levels-components/GameView';
import { usePathname } from 'next/navigation';

export default function Detail() {
  // Get the pathname from useRouter
  const pathname = usePathname();
  
  // Split the pathname by '/' and get the last segment
  const pathSegments = pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  
  // Now lastSegment should contain the value you want
  console.log('Last segment of the pathname:', lastSegment);

  return (
    <div className={styles.bghome}>
      <GameView id={lastSegment} />
    </div>
  );
}
