import ChatBox from "./components/chatBox";

import transcription from "./data/transcription.json";
import { Itranscripted } from "./interfaces/transcripted";

export default async function Home() {
	const data: Itranscripted[] = transcription;
	// console.log("data", data);

	return (
		<main>
			{data &&
				data.map((msg) => (
					<>
						<ChatBox msg={msg} />
					</>
				))}
		</main>
	);
}
