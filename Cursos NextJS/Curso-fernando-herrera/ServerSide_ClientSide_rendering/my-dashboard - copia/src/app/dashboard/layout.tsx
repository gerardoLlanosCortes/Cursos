import SideBar from "@/components/sidebar/Sidebar";
import Providers from "../../store/Providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <SideBar />
        <div className="p-2 w-full text-slate-900">
          <Providers>{children}</Providers>
        </div>
      </div>
    </div>
  );
}
