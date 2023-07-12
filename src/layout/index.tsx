import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({children}:any) => {
    return (
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

export default Layout;