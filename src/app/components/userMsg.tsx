import { Itranscripted } from "../interfaces/transcripted";

export default function UserMsg({ msg }: { msg: Itranscripted }) {
	console.log("esto es mesg en User", msg);
	return (
		<div key={msg.start} className={`flex flex-col items-start gap-3 w-full`}>
			<div className="flex flex-row justify-center items-center gap-2">
				<p className=" text-md font-bold ">{msg.role}</p>
			</div>
			<p>{msg.content}</p>
		</div>
	);
}
