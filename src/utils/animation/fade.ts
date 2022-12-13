import { MotionProps, Variants } from 'framer-motion';

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.4 }
};

export const dropAnimation: Variants = {
	open: { opacity: 1 },
	closed: { opacity: 0 }
};
