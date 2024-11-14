'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2 } from 'lucide-react'
import { useState } from 'react'

function Footer() {
	const [active, setActive] = useState(false)

	return (
		<footer className='container mx-auto flex max-w-2xl flex-col space-y-12 py-24'>
			<h1 className='text-center font-creteRound text-5xl max-md:text-3xl'>
				Get latest posts delivered right to your inbox
			</h1>
			<div className='grid w-full grid-cols-3 max-md:grid-cols-1 md:gap-4'>
				<Input
					className='col-span-2 w-full'
					placeholder='Your email address'
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				<Button
					size={'lg'}
					variant={active ? 'default' : 'outline'}
					className='max-md:mt-2'
				>
					<User2 className='me-1 size-4' />
					<span>Join today</span>
				</Button>
			</div>
		</footer>
	)
}

export default Footer