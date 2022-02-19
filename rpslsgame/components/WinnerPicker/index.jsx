/**
 *
 **/

import React from 'react';

const WinnerPicker = (props) => {
	const { setClicked, placerChoose } = props;

	return (
		<div className='flex justify-center'>
			<div class='grid gap-6 lg:gap-1 grid-cols-2  grid-rows-1 '>
				<div class='col-start-1 col-span-2 lg:row-span-1 lg:row-end-6'>
					<div class='grid grid-cols-1 grid-rows-2 '>
						<div
							class={placerChoose.class + ' lg:w-60 lg:h-60 lg:ml-4 w-28 h-28'}
						>
							<img src={placerChoose.image} class='lg:w-20 lg:h-20 h-10 w-10' />
						</div>
						<div class='font-Barlow-Semi-Condensed text-white lg:text-3xl lg-font-bold  lg:row-end-1 lg:pb-5 pt-5 flex justify-center'>
							YOU PICKED
						</div>
					</div>
				</div>

				<div class='col-end-7 lg:row-span-1 lg:row-end-6'>
					<div class='grid grid-cols-1 grid-rows-2'>
						<div class='bg-black rounded-full lg:w-60 lg:h-60 opacity-75 lg:row-span-2 lg:col-span-2 lg:ml-5 w-28 h-28' />
						<div class='font-Barlow-Semi-Condensed text-white lg:text-3xl lg-font-bold lg:row-end-1 flex justify-center lg:pb-5 pt-5'>
							THE HOUSE PICKED
						</div>

						{/* <div class={placerChoose.class + ' lg:w-56 lg:h-56'}>
							<img src={placerChoose.image} class='lg:w-20 lg:h-20 h-10 w-10' />
						</div> */}
					</div>
				</div>

				<div class='col-start-1  col-end-7 lg:col-start-auto lg:col-end-6 lg:row-span-1 lg:row-end-6 lg:mb-12 lg:p-28 flex justify-center  '>
					<div class='grid grid-flow-row auto-rows-max'>
						<div class='font-Barlow-Semi-Condensed text-6xl pb-4 font-bold text-white'>
							YOU WIN
						</div>
						<div>
							<button
								class='bg-white transition ease-in-out delay-150 
                                hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
                                font-Barlow-Semi-Condensed text-lg
				                py-2 px-4 border border-white w-52
				                hover:border-transparent rounded-xl text-transparent'
								onClick={() => setClicked(false)}
							>
								<div class='text-[#3b4363]'>PLAY AGAIN</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WinnerPicker;
