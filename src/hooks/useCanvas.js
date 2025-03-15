import {useCallback} from "react";

function useCanvas() {
	const createCanvasElement = useCallback(() => {
		const canvas = document.createElement("canvas");
		canvas.width = 700;
		canvas.height = 700;

		return canvas;
	}, []);

	const clearCanvas = useCallback(({ctx, canvasWidth, canvasHeight}) => {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	}, []);

	const drawImage = useCallback(
		({category, ctx, canvasWidth, canvasHeight}) => {
			const currentImg = document.getElementById(`preview-${category}`);

			if (currentImg !== null) {
				ctx.drawImage(currentImg, 0, 0, canvasWidth, canvasHeight);
			}
		},
		[],
	);

	const download = useCallback(({canvas}) => {
		const url = canvas.toDataURL("image/png");
		const linkElement = document.createElement("a");
		linkElement.download = "portrait.png";
		linkElement.href = url;
		linkElement.click();
	}, []);

	const drawAndDownload = useCallback(
		({categories}) => {
			const canvas = createCanvasElement();

			const ctx = canvas.getContext("2d");
			const canvasWidth = canvas.width;
			const canvasHeight = canvas.height;

			///Limpa o fundo pra n acumular
			clearCanvas({ctx, canvasWidth, canvasHeight});

			///Desenhar fundo Branco
			/*ctx.fillStyle = "white";
			ctx.rect(0, 0, canvasWidth, canvasHeight);
			ctx.fill();*/

			///Desenhar imagens
			categories.forEach((category) => {
				drawImage({category, ctx, canvasWidth, canvasHeight});
			});

			///Download
			download({canvas});
		},
		[clearCanvas, drawImage],
	);

	return {drawAndDownload};
}

export default useCanvas;
