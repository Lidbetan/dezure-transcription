import { Itranscripted } from "../interfaces/transcripted";

export default function AgentMsg({ msg }: { msg: Itranscripted }) {
	return (
		<div
			key={msg.start}
			className={`flex flex-col items-start gap-3 w-10/12  rounded-lg`}
		>
			<div className="flex flex-row justify-center items-center gap-2">
				<p className="text-md font-bold text-[#EF4565] ">{msg.role}</p>
			</div>
			<p className="text-justify">{msg.content}</p>
		</div>
	);
}
