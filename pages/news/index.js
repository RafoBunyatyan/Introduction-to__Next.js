import Link from 'next/link'
import { Fragment } from 'react'

function NewsPage() {
	return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href='/news/nexj.js-is-a-great-framework'>
						NextJS Is A Great Framework
					</Link>
				</li>
				<li>Someting Else</li>
			</ul>
		</Fragment>
	)
}

export default NewsPage