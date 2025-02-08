import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-primary">SocialPro</a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Transforming brands through strategic social media marketing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about"><a className="block text-muted-foreground hover:text-primary">About</a></Link>
              <Link href="/portfolio"><a className="block text-muted-foreground hover:text-primary">Portfolio</a></Link>
              <Link href="/contact"><a className="block text-muted-foreground hover:text-primary">Contact</a></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Social Media Strategy</p>
              <p>Content Creation</p>
              <p>Community Management</p>
              <p>Paid Advertising</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#1DA1F2]">
                <BsTwitterX className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#E1306C]">
                <BsInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0077B5]">
                <BsLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}