import { useRouter } from 'next/router';
import Head from 'next/head';

const Anything = () => {
	const router = useRouter();
	const query = router.query.anything;

	console.log(query);

	return (
		<div>
			<Head>
				<title>{query}</title>
			</Head>
			hello dynamic route {router.query.anything}
		</div>
	);
};

export default Anything;
