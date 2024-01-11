import React, { lazy, Suspense } from 'react';

const TemplateNamePage = lazy(() => import('./TemplateNamePage'));

const LazyTemplateNamePage = () => (
	<Suspense fallback={null}>
		<TemplateNamePage />
	</Suspense>
);

export default LazyTemplateNamePage;
