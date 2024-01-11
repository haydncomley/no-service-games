import React from 'react';
import styles from './TestPage.module.scss';

const TestPage = () => {
	return (
		<div
			className={styles.TestPage}
			data-testid="testPage">
			Test Works
		</div>
	);
};

export default TestPage;
