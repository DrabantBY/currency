'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link className={pathname === '/' ? 'active' : ''} href='/'>
            Converter
          </Link>
        </li>
        <li>
          <Link className={pathname === '/rates' ? 'active' : ''} href='/rates'>
            Rates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
