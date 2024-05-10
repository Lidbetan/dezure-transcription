"use client";

import MediaControls from "./mediaButtons/mediaControls";

export default function CompleteAudio({ audio }: { audio: string }) {
	return (
		<>
			<button>
				Complete Audio
				<MediaControls audio={audio} start={0} />
			</button>
		</>
	);
}
