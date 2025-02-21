import { useCallback, useEffect, useState, useMemo, useRef } from "react";

function TestPage() {
	const [hueColor, setHueColor] = useState('#ff0000');
	const memoizedHueColor = useMemo(() => hueColor, [hueColor])
	const canvasRef = useRef()

	const drawGradient = useCallback(({ctx, gradientFillStyle, canvasWidth, canvasHeight}) => {
		ctx.fillStyle = gradientFillStyle;
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	}, [])

	const drawHSVBackground = useCallback(({ctx, canvasWidth, canvasHeight}) => {
		const gradientSaturation = ctx.createLinearGradient(0, 0, canvasWidth, 0);
		gradientSaturation.addColorStop(0, '#ffffff')
		gradientSaturation.addColorStop(1, memoizedHueColor);

		const gradientValue = ctx.createLinearGradient(0, 0, 0, canvasHeight);
		gradientValue.addColorStop(0, 'transparent')
		gradientValue.addColorStop(1, '#000000');

		drawGradient({ctx, gradientFillStyle: gradientSaturation, canvasWidth, canvasHeight})
		drawGradient({ctx, gradientFillStyle: gradientValue, canvasWidth, canvasHeight})
	}, [memoizedHueColor, drawGradient])

	const drawHueBackground = useCallback(({ctx, canvasWidth, canvasHeight}) => {
		const gradientHue = ctx.createLinearGradient(0, 0, 0, canvasHeight);
		gradientHue.addColorStop(0, '#ffffff')
		gradientHue.addColorStop(1, '#000000');

		drawGradient({ctx, gradientFillStyle: gradientHue, canvasWidth, canvasHeight})
	}, [drawGradient])
	
	useEffect(() => {
		if(canvasRef.current !== null) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			const canvasWidth = canvas.width;
			const canvasHeight = canvas.height;

			drawHueBackground({ctx, canvasWidth, canvasHeight});
			drawHSVBackground({ctx, canvasWidth, canvasHeight});
		}
	}, [canvasRef, drawHSVBackground, drawHueBackground])

	return (
		<section className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-2xl text-black dark:text-white">Seletor de cores</h1>
			<canvas ref={canvasRef} width={200} height={200} className="border bg-white"></canvas>
		</section>
	);
}

export default TestPage;
