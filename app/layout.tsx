import type { Metadata } from 'next'
import {
	Crete_Round as CreteRound,
	Work_Sans as WorkSans,
} from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

const creteRounnd = CreteRound({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = WorkSans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})
export const metadata: Metadata = {
	title: 'Aura',
	description:
		'Explore fresh perspectives, personal reflections, and thought-provoking insights on Aura, a blog where individuality shines. Join the conversation, find inspiration, and see the world through a unique lens.',
	icons: {
		icon: '/blog.svg',
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={` ${creteRounnd.variable} ${workSans.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
