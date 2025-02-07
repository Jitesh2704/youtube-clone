import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="overflow-y-auto flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
