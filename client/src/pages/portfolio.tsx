import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import PortfolioGrid from "@/components/portfolio/grid";

export default function Portfolio() {
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
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Video 1 */}
          <div className="flex flex-col items-center p-4 w-full">
            <div className="w-full max-w-[750px]">
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=lN84w3OIiUg"
                controls={true}
                width="100%"
                height="350px"
              />
            </div>
            <p className="text-center text-lg text-black-500 mt-4">
              🌱 Discover the impact of our eco-friendly campaigns.
            </p>
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center p-4 w-full">
            <div className="w-full max-w-[750px]">
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=P58OlxJB5v4&t=313s"
                controls={true}
                width="100%"
                height="350px"
              />
            </div>
            <p className="text-center text-lg text-black-500 mt-4">
              🚀 How we helped brands grow on social media!
            </p>
          </div>

          {/* Video 3 */}
          <div className="flex flex-col items-center p-4 w-full">
            <div className="w-full max-w-[750px]">
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=MXAmhsRiK2c"
                controls={true}
                width="100%"
                height="350px"
              />
            </div>
            <p className="text-center text-lg text-black-600 mt-4">
              📢 Our top marketing strategies that went viral.
            </p>
          </div>

          {/* Video 4 */}
          <div className="flex flex-col items-center p-4 w-full">
            <div className="w-full max-w-[750px]">
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=NoQI2j-iG70"
                controls={true}
                width="100%"
                height="350px"
              />
            </div>
            <p className="text-center text-lg text-black-600 mt-4">
              🎯 A behind-the-scenes look at our creative process.
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
