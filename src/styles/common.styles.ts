const linearGradientText = () => {
	return {
		background: 'linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		color: 'transparent'
	};
};

export const commonStyles = {
	linearGradientText: linearGradientText
};
