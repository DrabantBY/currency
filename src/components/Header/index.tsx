import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Converter</Link>
            </li>
            <li>
              <Link href='/rates'>Rates</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
