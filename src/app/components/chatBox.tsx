"use client";

import { Itranscripted } from "../interfaces/transcripted";
import AgentMsg from "./agentMsg";
import UserMsg from "./userMsg";
import PartialAudio from "./audio/partialAudio";

export default function ChatBox({ msg }: { msg: Itranscripted }) {
	const audioFile = "/audio/test-call.wav";

	return (
		<div className="border border-solid border-slate-400 flex flex-col gap-6 p-4">
			{msg.role === "user" && (
				<div>
					<UserMsg msg={msg} />
					<PartialAudio audio={audioFile} start={msg.start} end={msg.end} />
				</div>
			)}
			{msg.role === "agent" && (
				<div>
					<AgentMsg msg={msg} />
					<PartialAudio audio={audioFile} start={msg.start} end={msg.end} />
				</div>
			)}
		</div>
	);
}
