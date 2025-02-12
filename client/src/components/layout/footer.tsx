import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { BsInstagram, BsLinkedin ,BsYoutube, BsFacebook} from "react-icons/bs";
import { Logo } from "@/components/ui/logo";
import src from "../../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-muted/50 w-full">
      <div className="container max-w-screen-2xl mx-auto py-12 md:py-16 px-12 sm:px-16 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-28 justify-between">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
              <img src={src} alt="Bhongaa Media Logo" className="h-240 w-40 object-contain" />
                
              </div>
            </Link>
            
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-3">
            <Link href="/services">
                <span className="block text-muted-foreground hover:text-primary cursor-pointer">Services</span>
              </Link>
              <Link href="/about">
                <span className="block text-muted-foreground hover:text-primary cursor-pointer">About</span>
              </Link>
              <Link href="/portfolio">
                <span className="block text-muted-foreground hover:text-primary cursor-pointer">Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className="block text-muted-foreground hover:text-primary cursor-pointer">Contact</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>Social Media Strategy</p>
              <p>Content Creation</p>
              <p>Community Management</p>
              <p>Paid Advertising</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/company/bhongaa-media/?originalSubdomain=in" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
                <BsLinkedin className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/bhongaa_media/" className="text-muted-foreground hover:text-[#E1306C] transition-colors">
                <BsInstagram className="h-8 w-8" />
              </a>
              <a href="https://www.facebook.com/BhongaaMedia/" className="text-muted-foreground hover:text-[#0077B5] transition-colors">
                <BsFacebook className="h-8 w-8" />
              </a>
              <a href="https://www.youtube.com/@bhongamedia" className="text-muted-foreground hover:text-[#FF0000] transition-colors">
                <BsYoutube className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="text-center text-base text-muted-foreground">
          © {new Date().getFullYear()} Bhongaa Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

