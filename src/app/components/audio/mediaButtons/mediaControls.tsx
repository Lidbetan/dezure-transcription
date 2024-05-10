import ControlIcons from "../controlIcons";
import { useRef, useState } from "react";

export default function MediaControls({
	audio,
	start,
}: {
	audio: string;
	start: number;
}) {
	const [isPaused, setIsPaused] = useState(true);
	//Se hace ref al elemento audio, para poder usar sus propiedades y crear los botones de control de media.
	const audioRef = useRef<HTMLMediaElement>(null);
	//Función encargada de reproducir, pausar y reanudar
	const playPause = () => {
		if (audioRef.current != null && isPaused) {
			//se ejecuta cuando quiero reanudar la reproducción
			if (audioRef.current?.currentTime > start && isPaused) {
				setIsPaused(false);
				audioRef.current.play();
			} else {
				//Se ejecuta si el audio se reproduce por primera vez
				setIsPaused(false);
				audioRef.current.currentTime = start;
				audioRef.current.play();
			}
		} else {
			//se ejecuta para pausar la reproducción
			setIsPaused(true);
			audioRef.current?.pause();
		}
	};
	//Función encargada de hacer stop y poner el current time desde el inicio del audio.
	const stop = () => {
		if (audioRef.current != null && !isPaused) {
			audioRef.current.pause();
			setIsPaused(true);
			audioRef.current.currentTime = start;
		}
	};

	return (
		<div className="flex flex-row gap-2">
			<button
				className="border-solid border-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-[#3DA9FC] duration-300 border-zinc-700 rounded-full p-1"
				onClick={playPause}
			>
				{isPaused ? <ControlIcons icon="play" /> : <ControlIcons icon="pause" />}

				<audio ref={audioRef}>
					<source src={audio} type="audio/wav"></source>
				</audio>
			</button>

			<button
				className="border-solid border-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-[#EF4565] duration-300 border-zinc-700 rounded-full p-1"
				onClick={stop}
			>
				<ControlIcons icon="stop" />

				<audio ref={audioRef}>
					<source src={audio} type="audio/wav"></source>
				</audio>
			</button>
		</div>
	);
}
