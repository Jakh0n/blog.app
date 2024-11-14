import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { Search } from 'lucide-react'
import React from 'react'

function GlobalSearch() {
	return (
		<div>
			<Drawer>
				<DrawerTrigger>
					<div className='flex cursor-pointer items-center gap-1 rounded-sm px-3 py-2 transition-colors hover:bg-blue-400/20'>
						<span className='hidden md:flex'>Search</span>
						<Search className='size-4' />
					</div>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className=' flex w-full items-center justify-center'>
							Search Place
						</DrawerTitle>
					</DrawerHeader>
					<div className='container mx-auto max-w-6xl py-12'>
						<Input
							className='bg-secondary'
							placeholder='Try to search blog...'
						/>
						<div className='mt-4 flex flex-col space-y-2'>
							<p className='font-creteRound text-2xl'>
								See posts by categories
							</p>
							<div className='flex flex-wrap gap-2'>
								{popularCategories.map(categories => (
									<Badge
										className='cursor-pointer'
										variant={'secondary'}
										key={categories.slug}
									>
										{categories.name}
									</Badge>
								))}
							</div>
							<p className='font-creteRound text-2xl'>See posts by tags</p>
							<div className='flex flex-wrap gap-2'>
								{popularTags.map(tags => (
									<Badge
										className='cursor-pointer'
										variant={'secondary'}
										key={tags.slug}
									>
										{tags.name}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default GlobalSearch
