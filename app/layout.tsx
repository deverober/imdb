import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IMDb Clone",
	description: "An IMDb clone website",
	viewport: "width=device-swidth, initial-scale=1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
