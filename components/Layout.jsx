import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>LinktoSync</title>
                <link rel="icon" href="/favicon.png" />
                <meta name='description' content="LinktoSync.com is a service that allows users to connect and post on their social media accounts from a Single Platform." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"/>
</Head>
            <Navbar />
            <main>
                {children}

        
            </main>
            
            <Footer />
        </>
    )
}

export default Layout