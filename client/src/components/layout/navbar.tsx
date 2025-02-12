import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "@/components/ui/logo";
import src from "../../../../public/logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
  
];

export default function Navbar() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${
            location === item.href
              ? "text-primary font-semibold"
              : "text-foreground hover:text-primary"
          }`}>
            {item.label}
          </span>
        </Link>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
       <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">
        <Link href="/">
          <div className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity cursor-pointer">
          <img src={src} alt="Bhongaa Media Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-primary">Bhongaa Media</span>
            
          </div>
        </Link>
      

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:flex items-center gap-1">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}