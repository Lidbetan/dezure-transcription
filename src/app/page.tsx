import CompleteAudio from "./components/audio/completeAudio";
import ChatBox from "./components/chatBox";

import transcription from "./data/transcription.json";
import { Itranscripted } from "./interfaces/transcripted";

export default async function Home() {
	const data: Itranscripted[] = transcription;
	const audioFile = "/audio/test-call.wav";

	return (
		<main>
			<CompleteAudio audio={audioFile} />
			{data &&
				data.map((msg) => (
					<>
						<ChatBox msg={msg} />
					</>
				))}
		</main>
	);
}
