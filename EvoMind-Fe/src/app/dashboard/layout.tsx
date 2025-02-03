import LayoutDashboard from "@/layouts/layout-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LayoutDashboard>{children}</LayoutDashboard>;
}
