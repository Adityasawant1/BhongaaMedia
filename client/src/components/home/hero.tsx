import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for better text readability */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://cdn.pixabay.com/video/2022/02/23/108640-681143995_large.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pl-4 md:pl-8 lg:pl-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Digital Stories That <span className="text-primary">Drive Results</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg">
            We transform brands through strategic social media marketing, creative content, and data-driven campaigns.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="text-lg">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}