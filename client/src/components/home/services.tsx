import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  PenTool,
  Users,
  BarChart4,
  Camera,
  MessageCircle,
  Palette,
  ShoppingCart,
  Globe,
  Film,
  Star,
  Rocket
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    description: "Data-driven strategies tailored to your brand's goals and target audience.",
    hiddenText: "We analyze market trends and create customized plans."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging visuals and copy that tell your brand's story and drive engagement.",
    hiddenText: "Our team crafts unique and engaging content for various platforms."
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Building and nurturing authentic relationships with your audience.",
    hiddenText: "We manage interactions to enhance customer relationships."
  },
  {
    icon: BarChart4,
    title: "Analytics & Reporting",
    description: "Comprehensive insights and metrics to track campaign performance.",
    hiddenText: "Data-driven decisions with precise analytics."
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional multimedia content creation for all platforms.",
    hiddenText: "Capturing stunning visuals that boost brand presence."
  },
  {
    icon: MessageCircle,
    title: "Social Listening",
    description: "Monitoring conversations and trends relevant to your brand.",
    hiddenText: "Tracking audience sentiment and trends for strategic insights."
  },
  {
    icon: Palette,
    title: "Branding & Creative Advertising",
    description: "Crafting unique brand identities and advertising solutions.",
    hiddenText: "We create distinctive and compelling brand visuals."
  },
  {
    icon: ShoppingCart,
    title: "Media Planning & Media Buying",
    description: "Optimizing your ad placements for maximum impact and reach.",
    hiddenText: "Ensuring cost-effective media investment strategies."
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Creating responsive and user-friendly websites tailored to your needs.",
    hiddenText: "We build high-performance, SEO-optimized websites."
  },
  {
    icon: Film,
    title: "Video Production",
    description: "High-quality video content that enhances your brand’s presence.",
    hiddenText: "Professional video creation for storytelling and marketing."
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description: "Collaborating with top influencers to boost your brand’s credibility.",
    hiddenText: "Leveraging influencer reach for maximum brand exposure."
  },
  {
    icon: Rocket,
    title: "New Brand Launching",
    description: "Comprehensive strategies to successfully introduce your brand to the market.",
    hiddenText: "Strategic launches to establish a strong market presence."
  }
];

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-24">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive social media solutions to help your brand stand out and succeed in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative flex flex-col items-center"
            >
              <Card className="h-full w-full max-w-sm mx-auto transform transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-muted/50">
                <CardHeader className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-orange-700 text-white text-center p-4 rounded-b-lg opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0, y: 20 }}
              >
                {service.hiddenText}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
