import { Itranscripted } from "../interfaces/transcripted";

export default function AgentMsg({ msg }: { msg: Itranscripted }) {
	return (
		<div key={msg.start} className={`flex flex-col items-start gap-3 w-full`}>
			<div className="flex flex-row justify-center items-center gap-2">
				<p className="text-md font-bold">{msg.role}</p>
			</div>
			<p>{msg.content}</p>
		</div>
	);
}
