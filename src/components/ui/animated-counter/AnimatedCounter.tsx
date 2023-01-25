import { animate, motion } from 'framer-motion';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { FADE_IN } from '@/utils/animation/fade';
import { formatNumber } from '@/utils/number/number.format';

import styles from './AnimatedCounter.module.scss';

interface IAnimateCounter {
	to: number;
}

const AnimatedCounter: FC<IAnimateCounter> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null);
	const [inViewRef, inView] = useInView();
	const from = to * 0.2;

	useEffect(() => {
		if (!inView) return;

		const node = nodeRef.current;

		const controls = animate(from, to, {
			duration: 3,
			onUpdate(value) {
				if (node) node.textContent = formatNumber(Math.round(value));
			}
		});

		return () => controls.stop();
	}, [from, to, inView]);

	const setRefs = useCallback(
		(node: HTMLSpanElement) => {
			if (nodeRef) {
				// @ts-ignore
				nodeRef.current = node;
			}
			inViewRef(node);
		},
		[inViewRef]
	);

	return <motion.span {...FADE_IN} ref={setRefs}></motion.span>;
};

export default AnimatedCounter;
