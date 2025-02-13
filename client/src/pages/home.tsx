import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import client1 from "../../../public/Images/Client_Logo/BaramatiGate.png";
import client2 from "../../../public/Images/Client_Logo/CCM.png";
import client3 from "../../../public/Images/Client_Logo/Circle.png";
import client4 from "../../../public/Images/Client_Logo/DiaSadi.png";
import client5 from "../../../public/Images/Client_Logo/Dnyanganga.png";
import client6 from "../../../public/Images/Client_Logo/DosaPlaza.jpg";
import client7 from "../../../public/Images/Client_Logo/Global.png";
import client8 from "../../../public/Images/Client_Logo/InstaLogo.png";
import client9 from "../../../public/Images/Client_Logo/Killer.jpeg";
import client10 from "../../../public/Images/Client_Logo/KumssKarhati.png";
import client11 from "../../../public/Images/Client_Logo/Lakshmi.png";
import client12 from "../../../public/Images/Client_Logo/Latur.jpg";
import client13 from "../../../public/Images/Client_Logo/Manashanti.jpg";
import client14 from "../../../public/Images/Client_Logo/Rautwada.png";
import client15 from "../../../public/Images/Client_Logo/Saad_clinic.jpg";
import client16 from "../../../public/Images/Client_Logo/Sarswati.png";
import client17 from "../../../public/Images/Client_Logo/SawantDairy.png";
import client18 from "../../../public/Images/Client_Logo/shivanand logo.jpg";
import client19 from "../../../public/Images/Client_Logo/Sindeshahi.png";
import client20 from "../../../public/Images/Client_Logo/Skyagro.jpg";
import client21 from "../../../public/Images/Client_Logo/TrikayaRetret.jpg";


const images = [
  client1,client2,client3,client4,client5,client6,client7,client8,client9,client10,client11,client12,client13,client14  
];

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      <Hero />
      
      
      <motion.section 
        className="w-full py-20 bg-muted/30 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create engaging content that resonates with your audience and drives real results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section 
        className="w-full py-10 bg-muted/30 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Some Creation</h2>
      </motion.section>

      {/* Marquee Section */}
     
      <div className="w-full overflow-hidden bg-muted/30 py-6 flex justify-center items-center relative">
            <motion.div
              className="flex space-x-6 flex-nowrap w-200
              " // Increase width
              initial={{ x: 0 }}
              animate={{ x: isPaused ? 0 : "-50%" }} // Adjust movement to avoid abrupt cut-off
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {[...images, ...images].map((src, index) => ( // Duplicate for smooth looping
                <motion.div
                  key={index}
                  className="relative flex justify-center items-center"
                >
                  <motion.img 
                  src={src} 
                  alt={`Client ${index + 1}`} 
                  className="h-100 w-auto object-contain rounded-lg shadow-lg flex-shrink-0 cursor-pointer" 
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setIsPaused(true)}
                  onHoverEnd={() => setIsPaused(false)}
                  onClick={() => window.open(src, "_blank")} // Opens image in new tab
                />


                </motion.div>
              ))}
            </motion.div>
          </div>



    </div>
  );
}
