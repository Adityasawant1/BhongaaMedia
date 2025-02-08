import { motion } from "framer-motion";
import PortfolioGrid from "@/components/portfolio/grid";

export default function Portfolio() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our successful campaigns and see how we've helped brands achieve their social media goals.
          </p>
        </motion.div>

        <PortfolioGrid />
      </div>
    </div>
  );
}