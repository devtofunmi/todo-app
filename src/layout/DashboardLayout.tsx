import  { useState, ReactNode, FC } from "react";
import Sidebar from "../components/Sidebar";
import MobileTopbar from "../components/MobileTopbar";
import MobileSidebar from "../components/MobileSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }: DashboardLayoutProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="h-[120vh] md:h-[100vh]">
      <div className=" md:hidden p-5">
        <MobileTopbar toggleSidebar={toggleSidebar} />
      </div>
      {isSidebarVisible && (
        <div className="fixed right-[10px] z-30 md:hidden">
          <MobileSidebar />
        </div>
      )}
      <div className="hidden md:block w-[20%] h-screen fixed left-0  z-10">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] md:ml-[20%]  z-0 p-5 ">
        <div className="h-full flex lg:justify-center md:justify-end md:pr-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
