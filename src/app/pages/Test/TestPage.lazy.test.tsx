import React  from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import LazyTestPage from './TestPage.lazy';

const renderTest = () => {
	return render(<LazyTestPage />);
};

describe('TestPage', () => {
	it('should render page', () => {
		const { findByTestId } = renderTest();
		expect(findByTestId('testPage')).toBeDefined();
	});
});