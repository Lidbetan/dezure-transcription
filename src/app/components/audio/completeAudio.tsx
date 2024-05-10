import { useRef } from "react";

export default function CompleteAudio({ audio }: { audio: string }) {
	const audioRef = useRef<HTMLMediaElement>(null);
	const playAll = () => {
		audioRef.current?.play();
	};

	return (
		<button
			className="border-solid border-2 border-red-500 rounded-full p-3"
			onClick={playAll}
		>
			Audio Completo
			<audio ref={audioRef}>
				<source src={audio} type="audio/wav"></source>
			</audio>
		</button>
	);
}
