import React  from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import TemplateName, { ITemplateName } from './TemplateName';

const renderTemplateName = (props: ITemplateName) => {
	return render(<TemplateName {...props} />);
};

describe('TemplateName', () => {
	it('should render', () => {
		const { findByTestId } = renderTemplateName({});
		expect(findByTestId('templateName')).toBeDefined();
	});
});