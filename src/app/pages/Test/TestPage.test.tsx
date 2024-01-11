import React  from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import TestPage from './TestPage';

const renderTest = () => {
	return render(<TestPage />);
};

describe('TestPage', () => {
	it('should render page', () => {
		const { findByTestId } = renderTest();
		expect(findByTestId('testPage')).toBeDefined();
	});
});