import React from 'react';

const OptionButton = (props) => {
	const { options } = props;

	console.log(options);

	return (
		<div class='flex justify-center'>
			<button {...props}>
				<img src={options.image} class=' lg:w-14 lg:h-14 h-10 w-10' />
			</button>
		</div>
	);
};

export default OptionButton;
