import UserAudio from "./userAudio";
import AgentAudio from "./agentAudio";

export default function PartialAudio({
	audio,
	role,
	start,
	end,
}: {
	audio: string;
	role: string;
	start: number;
	end: number;
}) {
	console.log("start en PartialAudio", start);
	return (
		<>
			{role === "user" ? (
				<UserAudio audio={audio} start={start} />
			) : (
				<AgentAudio audio={audio} start={start} />
			)}
		</>
	);
}
