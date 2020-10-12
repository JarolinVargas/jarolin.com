export const layoutsAnimation = {
	initial: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)'
	},
	enter: {
		boxShadow: '0px 0px 30px #000',
		backgroundColor: 'rgba(255, 255, 255, 0.005)'
	},
	exit: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderColor: 'transparent'
	}
}

export const layoutColAnimation = {
	initial: {
		y: -100,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: {
            ease: 'easeOut'
        }
	}
}

export const layoutsStagger = {
	enter: {
		transition: {
			staggerChildren: 0.05
		}
	},
	exit: {
		overflow: 'visible',
		transition: {
			staggerChildren: 0.05
		}
	}
}