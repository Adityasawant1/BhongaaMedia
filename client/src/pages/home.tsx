import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

const imagePaths = [
  client1,client2,client3,client4,client5,client6,client7,client8,client9,client10,client11,client12,client13,client14,client15,client16,client17,client18,client19,client20,client21
];

export default function Home() {
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
            Let's create engaging content that resonates with your audience and
            drives real results.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Some Creations</h2>
      </motion.section>

      {/* Swiper Carousel Section */}
      <div className="w-full bg-muted/30 py-6 flex flex-col items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="w-4/5 pb-16" // Increased bottom padding to avoid overlap
        >
          {imagePaths.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  className="h-40 w-auto object-contain rounded-lg shadow-lg cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Wrapper with Increased Margin */}
        <div className="swiper-pagination mt-6"></div> 
      </div>

    </div>
  );
}
