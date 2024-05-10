import MediaControls from "./mediaButtons/mediaControls";

export default function AudioContainer({
	audio,
	start,
}: {
	audio: string;
	start: number;
}) {
	return (
		<>
			<MediaControls audio={audio} start={start} />
		</>
	);
}
