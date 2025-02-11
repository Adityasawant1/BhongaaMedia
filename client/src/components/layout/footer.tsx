import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { BsTwitterX, BsInstagram, BsLinkedin ,BsYoutube, BsFacebook} from "react-icons/bs";
import { Logo } from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-bold text-primary">Bhongaa Media</span>
              </div>
            </Link>
            <p className="text-muted-foreground">
              Transforming brands through strategic social media marketing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
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
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Social Media Strategy</p>
              <p>Content Creation</p>
              <p>Community Management</p>
              <p>Paid Advertising</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/bhongaa-media/?originalSubdomain=in" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
                <BsLinkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/bhongaa_media/" className="text-muted-foreground hover:text-[#E1306C] transition-colors">
                <BsInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/BhongaaMedia/" className="text-muted-foreground hover:text-[#0077B5] transition-colors">
                <BsFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@bhongamedia" className="text-muted-foreground hover:text-[#FF0000] transition-colors">
              <BsYoutube className="h-6 w-6" />
                </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bhongaa Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}