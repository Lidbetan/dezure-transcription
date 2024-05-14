"use client";

import { Itranscripted } from "../interfaces/transcripted";
import AgentMsg from "./agentMsg";
import UserMsg from "./userMsg";
import PartialAudio from "./audio/partialAudio";

export default function ChatBox({ msg }: { msg: Itranscripted }) {
	const audioFile = "/audio/test-call.wav";

	return (
		//Estilosde mensajes hacia derecha o izquierda en función de si es role user o agent.
		<div
			className={
				msg.role === "agent"
					? "flex flex-col items-start text-sm w-full italic text-black p-3"
					: "flex flex-col items-end text-sm w-full italic text-black p-3"
			}
		>
			{msg.role === "user" && (
				<div className=" bg-white flex flex-col w-10/12 items-end gap-3 p-3 shadow-md hover:translate-x-2 transition ease-in delay-300 hover:shadow-lg rounded-lg">
					<UserMsg msg={msg} />
					<PartialAudio audio={audioFile} start={msg.start} end={msg.end} />
				</div>
			)}
			{msg.role === "agent" && (
				<div className=" bg-white flex flex-col w-10/12 items-start gap-3 p-3 shadow-md hover:-translate-x-2 transition ease-in delay-300 hover:shadow-lg rounded-lg">
					<AgentMsg msg={msg} />
					<PartialAudio audio={audioFile} start={msg.start} end={msg.end} />
				</div>
			)}
		</div>
	);
}
