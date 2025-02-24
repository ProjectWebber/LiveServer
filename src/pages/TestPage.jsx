import {useState} from "react";
import {useEffect, useRef, useCallback} from "react";

function TestPage({hueDegValue = 0}) {
	const canvasRef = useRef(null);

	const [saturationValue, setSaturationValue] = useState(0); // vai de 0 a 100
	const [lightnessValue, setLightnessValue] = useState(0); // vai de 0 a 50
	const [xMousePosition, setXMousePosition] = useState(0);
	const [yMousePosition, setYMousePosition] = useState(0);
	const isDragging = useRef(false);

	const getMousePosition = (e) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect(); // Pega a posição do canvas na tela
		let mouseX = e.clientX - rect.left;
		let mouseY = e.clientY - rect.top;
		let mouseYReverse = (rect.top + rect.height) - e.clientY;

		// Se o mouse sair do canvas, continuamos atualizando os valores de X e Y
		if (mouseX < 0) mouseX = 0;
		if (mouseX > rect.width) mouseX = rect.width;
		if (mouseY < 0) mouseY = 0;
		if (mouseY > rect.height) mouseY = rect.height;

		setXMousePosition(mouseX);
		setYMousePosition(mouseY);

		setSaturationValue((mouseX / rect.width) * 100);
		setLightnessValue((mouseYReverse / rect.height) * 100);
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (isDragging.current) {
				getMousePosition(e);
			}
		};

		const handleMouseDown = (e) => {
			isDragging.current = true;
			getMousePosition(e); // Atualiza a posição inicial
			window.addEventListener("mousemove", handleMouseMove);
		};

		const handleMouseUp = () => {
			isDragging.current = false;
			window.removeEventListener("mousemove", handleMouseMove);
		};

		const canvas = canvasRef.current;
		if (canvas) {
			canvas.addEventListener("mousedown", handleMouseDown);
			window.addEventListener("mouseup", handleMouseUp);
		}

		return () => {
			if (canvas) {
				canvas.removeEventListener("mousedown", handleMouseDown);
			}
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Desenho e visual
	const drawGradient = useCallback(
		({ctx, gradientFillStyle, canvasWidth, canvasHeight}) => {
			ctx.fillStyle = gradientFillStyle;
			ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		},
		[],
	);

	const drawHSVBackground = useCallback(
		({ctx, canvasWidth, canvasHeight}) => {
			const gradientSaturation = ctx.createLinearGradient(0, 0, canvasWidth, 0);
			gradientSaturation.addColorStop(0, "#ffffff");
			gradientSaturation.addColorStop(1, `hsl(${hueDegValue}deg, 100%, 50%)`);

			const gradientValue = ctx.createLinearGradient(0, 0, 0, canvasHeight);
			gradientValue.addColorStop(0, "transparent");
			gradientValue.addColorStop(1, "#000000");

			drawGradient({
				ctx,
				gradientFillStyle: gradientSaturation,
				canvasWidth,
				canvasHeight,
			});
			drawGradient({
				ctx,
				gradientFillStyle: gradientValue,
				canvasWidth,
				canvasHeight,
			});
		},
		[hueDegValue, drawGradient],
	);

	const drawHueBackground = useCallback(
		({ctx, canvasWidth, canvasHeight}) => {
			const gradientHue = ctx.createLinearGradient(0, 0, 0, canvasHeight);
			gradientHue.addColorStop(0, "#ffffff");
			gradientHue.addColorStop(1, "#000000");

			drawGradient({
				ctx,
				gradientFillStyle: gradientHue,
				canvasWidth,
				canvasHeight,
			});
		},
		[drawGradient],
	);

	// Indicador de cor
	const drawColorIndicator = useCallback(() => {
		const ctx = canvasRef.current.getContext("2d");
		ctx.fillStyle = `hsl(${hueDegValue}deg, ${saturationValue}%, ${lightnessValue}%)`;

		ctx.beginPath();
		ctx.arc(xMousePosition, yMousePosition, 10, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
	}, [xMousePosition, yMousePosition, hueDegValue, saturationValue, lightnessValue]);

	useEffect(() => {
		if (canvasRef.current !== null) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			const canvasWidth = canvas.width;
			const canvasHeight = canvas.height;

			drawHueBackground({ctx, canvasWidth, canvasHeight});
			drawHSVBackground({ctx, canvasWidth, canvasHeight});
			drawColorIndicator();
		}
	}, [canvasRef, drawHSVBackground, drawHueBackground, drawColorIndicator]);

	return (
		<section className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-2xl text-black dark:text-white">Seletor de cores</h1>
			<canvas
				ref={canvasRef}
				width={300}
				height={300}
				className="border bg-white"
			></canvas>
		</section>
	);
}

export default TestPage;
