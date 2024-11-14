import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import SignupPage from './_components/Signup'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main className='container'>{children}</main>
			<SignedIn>
				<Footer />
			</SignedIn>
			<SignedOut>
				<SignupPage />
			</SignedOut>
		</div>
	)
}

export default Layout
