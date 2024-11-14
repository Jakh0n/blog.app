import { SignUp } from '@clerk/nextjs'

export default function Page() {
	return (
		<div className='mt-24'>
			<h1 className='flex items-center justify-center font-creteRound text-4xl'>
				Join Aura Today!{' '}
			</h1>
			<p className='mt-5 justify-center text-center text-muted-foreground '>
				Create your free account to start sharing, exploring, and engaging with
				our community.
			</p>
			<div className='container mx-auto mt-24 flex max-w-6xl items-center justify-center  '>
				<SignUp routing='hash' />
			</div>
		</div>
	)
}
