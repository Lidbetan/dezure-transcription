import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dezure Transcription Component",
	description: "Transcription component, created with Next",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className && "w-11/12 mx-auto bg-slate-100"}>
				{children}
			</body>
		</html>
	);
}
