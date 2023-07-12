import Head from 'next/head';
import ResponsiveAppBar from './AppBar';

const Header = () => {
    return  <>
    <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
    </Head>
    <ResponsiveAppBar />
  </>
}

export default Header;