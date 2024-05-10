import { useRef } from "react";
import ControlIcons from "./controlIcons";

export default function AgentAudio({
	audio,
	start,
}: {
	audio: string;
	start: number;
}) {
	console.log("start en agentAudio", start);
	const audioRef = useRef<HTMLMediaElement>(null);
	const playAgent = () => {
		if (audioRef.current != null) {
			console.log("audio duration", audioRef.current.duration);
			console.log("AudioCurrentTime", audioRef.current.currentTime);
			audioRef.current.currentTime = start;
			audioRef.current.play();
		}
	};
	return (
		<button
			className="border-solid border-2 border-red-500 rounded-full p-1"
			onClick={playAgent}
		>
			<ControlIcons icon="play" />
			<audio ref={audioRef}>
				<source src={audio} type="audio/wav"></source>
			</audio>
		</button>
	);
}
