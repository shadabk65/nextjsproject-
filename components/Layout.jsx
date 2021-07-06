import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) =>{
	return(
		<React.Fragment>
			 <Head>
        <title>ecommerce website</title>
      </Head>
			<Header />
				{children}
			<Footer />
		</React.Fragment>
	)
}
export default Layout