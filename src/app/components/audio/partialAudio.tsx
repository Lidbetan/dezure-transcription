import AudioContainer from "./audioContainer";

export default function PartialAudio({
	audio,
	start,
}: {
	audio: string;
	start: number;
	end: number;
}) {
	return (
		<>
			<AudioContainer audio={audio} start={start} />
		</>
	);
}
