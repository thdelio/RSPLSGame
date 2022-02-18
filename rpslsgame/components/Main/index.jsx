/**
 *
 **/

import React from 'react';
import OptionButton from '../OptionButton';
import scissors from '../../public/images/icon-scissors.svg';
import spock from '../../public/images/icon-spock.svg';
import paper from '../../public/images/icon-paper.svg';
import lizard from '../../public/images/icon-lizard.svg';
import rockIcon from '../../public/images/icon-rock.svg';
/* import Pentagon from '../../public/images/bg-pentagon.svg'; */

const Main = () => {
	const options = {
		ROCK: {
			color: 'rock',
			value: 'R',
			image: rockIcon,
		},
		SCISSORS: {
			color: 'scissors',
			value: 'SC',
			image: scissors,
		},
		SPOCK: {
			color: 'spock',
			value: 'SP',
			image: spock,
		},
		PAPER: {
			color: 'paper',
			value: 'P',
			image: paper,
		},
		LIZARD: {
			color: 'lizard',
			value: 'L',
			image: lizard,
		},
	};

	return (
		<div class='flex justify-center p-14 lg:p-8'>
			<div class='grid '>
				<div class='grid-rows-1 '>
					<OptionButton
						class='border-gradient-br-scissors-gray-50 
                				gradient-border-4 rounded-full flex justify-center inline-flex 
								items-center shadow-2xl  shadow-inner box-container 
                   				lg:w-32 lg:h-32 w-24 h-24'
						options={options.SCISSORS}
					/>
				</div>

				<div class='grid-rows-2 '>
					<div class='columns-2 flex space-x-32 lg:space-x-40'>
						<div>
							<OptionButton
								class='border-gradient-br-spock-gray-50 
                				gradient-border-4 rounded-full flex justify-center 
								inline-flex items-center shadow-2xl  shadow-inner box-container 
                   				lg:w-32 lg:h-32 w-24 h-24'
								options={options.SPOCK}
							/>
						</div>
						<div>
							<OptionButton
								options={options.PAPER}
								class='border-gradient-br-paper-gray-50 
                				gradient-border-4 rounded-full flex justify-center 
								inline-flex items-center shadow-2xl  shadow-inner box-container 
                   				lg:w-32 lg:h-32 w-24 h-24'
							/>
						</div>
					</div>
				</div>

				<div class='grid-rows-3 lg:pt-8 pt-6 '>
					<div class='columns-2 flex justify-around '>
						<div>
							<OptionButton
								options={options.LIZARD}
								class='border-gradient-br-lizard-gray-50 
                				gradient-border-4 rounded-full flex justify-center 
								inline-flex items-center shadow-2xl  shadow-inner box-container 
                   				lg:w-32 lg:h-32 w-24 h-24'
							/>
						</div>
						<div>
							<OptionButton
								options={options.ROCK}
								class='border-gradient-br-rock-gray-50 
                				gradient-border-4 rounded-full flex justify-center 
								inline-flex items-center shadow-2xl  shadow-inner box-container 
                   				lg:w-32 lg:h-32 w-24 h-24'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
