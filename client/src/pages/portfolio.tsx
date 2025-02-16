import { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import PortfolioGrid from "@/components/portfolio/grid";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Using shadcn/ui dialog

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 space-y-20">
      <div className="container px-4 md:px-8 lg:px-12 space-y-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our successful campaigns and see how we've helped brands achieve their social media goals.
          </p>
        </motion.div>

        {/* Portfolio Grid Section */}
        <div className="flex justify-center">
          <PortfolioGrid />
        </div>

        {/* YouTube Videos Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5"
        >
          {[
            { url: "https://www.youtube.com/watch?v=MXAmhsRiK2c", title: "🌱 Discover the impact of our eco-friendly campaigns." },
            { url: "https://www.youtube.com/watch?v=NoQI2j-iG70", title: "🚀 How we helped brands grow on social media!" },
            { url: "https://www.youtube.com/watch?v=LMncymUH2Ro", title: "📢 Our top marketing strategies that went viral." },
            { url: "https://www.youtube.com/watch?v=Emnan3zO50s&t=15s", title: "🎯 A behind-the-scenes look at our creative process." },
            { url: "https://www.youtube.com/watch?v=JnZ-ZJnPyW0", title: "📢 Our top marketing strategies that went viral." },
            { url: "https://www.youtube.com/watch?v=uXp5-G3O2c8", title: "📢 Our top marketing strategies that went viral." },
          ].map((video, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-full">
              <div 
                className="w-full max-w-[900px] cursor-pointer"
                onClick={() => setSelectedVideo(video.url)}
              >
                <ReactPlayer 
                  url={video.url}
                  controls={true}
                  width="100%"
                  height="250px"
                />
              </div>
              <p className="text-center text-lg text-black-500 mt-4">
                {video.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
