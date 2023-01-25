import { MotionProps } from 'framer-motion';

const BACK_IN: MotionProps = {
	viewport: { once: true },
	transition: { type: 'spring', duration: 1.4, damping: 9 }
};

export const BACK_IN_RIGHT: MotionProps = {
	initial: { x: 200, opacity: 0.7 },
	whileInView: { x: 0, opacity: 1 },
	...BACK_IN
};

export const BACK_IN_LEFT: MotionProps = {
	initial: { x: -200, opacity: 0.7 },
	whileInView: { x: 0, opacity: 1 },
	...BACK_IN
};
