"use client";

import MediaControls from "./mediaButtons/mediaControls";

export default function CompleteAudio({ audio }: { audio: string }) {
	return (
		<div className="bg-white flex flex-col justify-center items-center w-50% shadow-md  hover:translate-y-2 transition ease-in-out delay-150 hover:shadow-lg rounded-full py-2 px-4">
			<p className="font-bold">Audio Completo</p>
			<MediaControls audio={audio} start={0} />
		</div>
	);
}
