import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Tech Startup Launch",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    stats: "300% Growth"
  },
  {
    title: "Fashion Brand Engagement",
    description: "Instagram-focused campaign that doubled follower count in 3 months",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    stats: "2x Followers"
  },
  {
    title: "Food Delivery App",
    description: "Video content strategy that generated 1M+ views across platforms",
    image: "https://images.unsplash.com/photo-1485811055483-1c09e64d4576",
    stats: "1M+ Views"
  },
  {
    title: "Fitness Challenge",
    description: "User-generated content campaign with 50K+ participants",
    image: "https://images.unsplash.com/photo-1495106245177-55dc6f43e83f",
    stats: "50K+ Participants"
  },
  {
    title: "E-commerce Growth",
    description: "Social shopping integration leading to 150% increase in sales",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
    stats: "150% Sales Growth"
  },
  {
    title: "Travel Experience",
    description: "Influencer partnership campaign reaching 2M+ travelers",
    image: "https://images.unsplash.com/photo-1592578629295-73a151d69c96",
    stats: "2M+ Reach"
  }
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {item.stats}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
