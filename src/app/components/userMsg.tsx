import { Itranscripted } from "../interfaces/transcripted";

export default function UserMsg({ msg }: { msg: Itranscripted }) {
	return (
		<div
			key={msg.start}
			className={`flex flex-col items-start gap-3 w-10/12 rounded-lg`}
		>
			<div className="flex flex-row justify-center items-center gap-2">
				<p className=" text-md font-bold text-[#3DA9FC] ">{msg.role}</p>
			</div>
			<p className="text-justify">{msg.content}</p>
		</div>
	);
}
