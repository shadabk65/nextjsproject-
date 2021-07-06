import React, {useState} from 'react';
import Menulist from './Menulist';
import Link from 'next/link'

function Navbar() {

const[clicked , setclicked]= useState(false);

const menulist= Menulist.map(({url,title}, index ) =>{
		return(
				<li key={index}>
				<Link href={url}><a className="acttive">{title}</a></Link>
				</li>
		)
})
const handleClick=()=>{
		setclicked(!clicked)
}
return (
<React.Fragment>

		<nav id='nav'>
				<div className="container">
				<div className="row">
				<div className="col-md-7 col-sm-8">
				<div className="logo">
				<Link href="/"><a><h6>Ecommerce</h6></a></Link>
				
				
				<div className="menu-icon" onClick={handleClick}>
						<i className={clicked ? "fa fa-times" : " fa fa-bars" }></i>
				</div>
				<ul className={clicked ? "menulist" : "menulist close"}>
						{menulist}
				</ul>
				</div>
			</div>


						<div className="col-md-5 col-sm-4">
						
						<ul className="register">
								<li>
										<Link href="/register"><a>Register</a></Link>
								</li>
								<li>
										<Link href="/login"><a>Login</a></Link>
								</li>
								<li>
										<Link href="/cart"><a>Cart</a></Link>
								</li>	
						</ul>
					
						</div>

						</div>
				</div>
		</nav>
</React.Fragment>
)
}

export default Navbar