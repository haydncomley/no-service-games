import React  from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import TemplateNamePage from './TemplateNamePage';

const renderTemplateName = () => {
	return render(<TemplateNamePage />);
};

describe('TemplateNamePage', () => {
	it('should render page', () => {
		const { findByTestId } = renderTemplateName();
		expect(findByTestId('templateNamePage')).toBeDefined();
	});
});