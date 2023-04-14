// import Sidebar from "../components/sidebarComponent/sidebarComponent";
import Head from 'next/head'
// import Header from "../components/headerComponent/headerComponent";


const MainLayout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Admin" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="boxMain">
                <div className="boxSubMain">
                    {children}
                </div>
            </div>
        </>
    );
}
export default MainLayout;