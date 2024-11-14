'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import GlobalSearch from './global-search'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Mobile from './mobile'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'
import SignupPage from './Signup'
function Navbar() {
	const { resolvedTheme } = useTheme()
	const pathName = usePathname()
	return (
		<div className=' fixed inset-0 z-40  h-[10vh] border-b bg-background backdrop-blur-sm'>
			<div className='container mx-auto flex h-[10vh] w-full max-w-6xl  items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='font-creteRound text-4xl '>AURA</h1>
				</Link>
				<SignedIn>
					{/* Navbar Links */}
					<div className='hidden gap-2 md:flex'>
						{navLinks.map(nav => (
							<Link
								key={nav.route}
								href={nav.route}
								className={cn(
									'cursor-pointer rounded-md px-3 py-1 transition-colors hover:bg-blue-400/20',
									pathName === nav.route && 'text-blue-500'
								)}
							>
								{nav.name}
							</Link>
						))}
					</div>
					{/* Search */}
					<div className='flex items-center gap-1'>
						<GlobalSearch />
						<Mobile />
						<ModeToggle />
						<UserButton
							appearance={{
								baseTheme: resolvedTheme === 'dark' ? dark : undefined,
							}}
						/>
					</div>
				</SignedIn>
				<SignedOut>
					<div className='flex items-center gap-3'>
						<ModeToggle />
						<SignUpButton mode='modal'>
							<Button variant={'ghost'} className='rounded-full'>
								Sign Up
							</Button>
						</SignUpButton>
						<SignInButton mode='modal'>
							<Button className='rounded-full'>Log In</Button>
						</SignInButton>
					</div>
				</SignedOut>
			</div>
		</div>
	)
}

export default Navbar
