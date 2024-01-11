import React, { lazy, Suspense } from 'react';

const TestPage = lazy(() => import('./TestPage'));

const LazyTestPage = () => (
	<Suspense fallback={null}>
		<TestPage />
	</Suspense>
);

export default LazyTestPage;
