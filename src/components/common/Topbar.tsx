import { Button } from "@/components/ui/button";
import { MessageCircle, Bell, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfilePopover from "./ProfilePopover";

function formatPageTitle(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "dashboard";

  return lastSegment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <header className="flex h-16 items-center justify-between bg-white px-2 sm:px-4 mx-2 lg:mx-4 rounded-b-xl">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden text-black"
            aria-label="Toggle menu"
          >
            <Menu className="size-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground sm:text-xl">
            {formatPageTitle(pathname)}
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-black"
            onClick={() => navigate("/message")}
            aria-label="Open chat"
          >
            <MessageCircle className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-black"
            aria-label="View notifications"
          >
            <Bell className="size-5" />
          </Button>

          <ProfilePopover />
        </div>
      </header>
    </>
  );
}
