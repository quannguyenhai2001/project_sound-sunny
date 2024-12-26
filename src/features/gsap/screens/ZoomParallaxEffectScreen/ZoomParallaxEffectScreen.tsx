/* eslint-disable @typescript-eslint/no-unused-vars */
// link: https://www.youtube.com/watch?v=r6yyNjPIXU4&list=PLZ44pviE5AD2pDMeXWcJUsS1huj8lwFvA&index=6
import bg from '@/assets/images/gsap/zoom-parallax-effect/bg.webp';
import img4 from '@/assets/images/gsap/zoom-parallax-effect/igm4.jpg';
import img1 from '@/assets/images/gsap/zoom-parallax-effect/img1.jpg';
import img2 from '@/assets/images/gsap/zoom-parallax-effect/img2.jpg';
import img3 from '@/assets/images/gsap/zoom-parallax-effect/img3.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef, useState } from 'react';

import Todo from './Todo';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);
const ZoomParallaxEffectScreen = () => {
	const mask = useRef(null);
	const img_container = useRef(null);
	const img = useRef(null);
	const text1 = useRef(null);
	const text2 = useRef(null);
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: mask.current,
				pin: mask.current,
				pinSpacing: false,
				start: 'top top',
				endTrigger: '.last',
				end: 'bottom bottom'
			});
			gsap
				.timeline({
					scrollTrigger: {
						trigger: img_container.current,
						pin: img_container.current,
						scrub: 1,
						start: '0% 0%'
					}
				})
				.to(img.current, {
					transform: 'translateZ(2200px)'
				});
		});

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div className='relative'>
				<div ref={mask} className='bg bg-[#141414] absolute h-screen w-screen z-[-1]'></div>
				<section>
					<div
						ref={img_container}
						className='img-container perspective flex items-center justify-center h-screen w-screen'
					>
						<img ref={img} className='image' src={bg} alt='bg' />
						<div className='absolute flex flex-col items-center justify-center text-white'>
							<h1 className='text-[120px]'>
								<span className='text-stroke'>Outlook</span> above
							</h1>
							<p className='opacity-50 w-48 text-[13px] text-center'>
								A Showcase of the world&apos;s best aerial photography
							</p>
						</div>
					</div>
					<div className='container flex flex-wrap items-center justify-around'>
						<div className='col-1 flex flex-col gap-16 translate-y-[32%]'>
							<img className='w-[450px] h-[350px]' src={img1} alt='img1' />
							<img className='w-[400px] h-[300px]' src={img2} alt='img2' />
						</div>
						<div className='col-2 flex flex-col gap-16'>
							<img className='w-[600px] h-[400px]' src={img3} alt='img3' />
							<img className='w-[400px] h-[300px]' src={img4} alt='img4 last' />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ZoomParallaxEffectScreen;
