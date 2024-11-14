'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Mobile() {
	const pathName = usePathname()
	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Button size={'icon'} variant={'ghost'} className='flex md:hidden'>
						<Menu />
					</Button>
				</SheetTrigger>

				<SheetContent side={'left'}>
					<Link href={'/'}>
						<h1 className='font-creteRound text-4xl'>AURA</h1>
					</Link>
					<Separator className='my-3' />
					<div className='flex flex-col   space-y-3'>
						{navLinks.map(nav => (
							<Link
								key={nav.route}
								href={nav.route}
								className={cn(
									'cursor-pointer flex  rounded-md px-3 py-1 transition-colors hover:bg-blue-400/20',
									pathName === nav.route && 'text-blue-500'
								)}
							>
								<nav.icon className='mr-2 size-5' />
								{nav.name}
							</Link>
						))}
					</div>
					<VisuallyHidden>
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
					</VisuallyHidden>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default Mobile
