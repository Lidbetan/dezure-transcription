import CompleteAudio from "./components/audio/completeAudio";
import ChatBox from "./components/chatBox";

import transcription from "./data/transcription.json";
import { Itranscripted } from "./interfaces/transcripted";

export default async function Home() {
	const data: Itranscripted[] = transcription;
	const audioFile = "/audio/test-call.wav";

	return (
		<main>
			<div className="flex flex-col justify-center w-full md:w-9/12 lg:w-7/12 xl:w-4/12 mx-auto items-center my-4">
				<CompleteAudio audio={audioFile} />
				{data &&
					data.map((msg) => (
						<>
							<ChatBox msg={msg} />
						</>
					))}
			</div>
		</main>
	);
}
