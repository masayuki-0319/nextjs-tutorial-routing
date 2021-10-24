import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio Page</Link>
        </li>
        <li>
          <Link href='/clients'>Clients Page</Link>
        </li>
        <li>
          <Link href='/blog/2021/01/01/name'>Blog Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
