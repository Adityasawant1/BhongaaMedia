import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

// Extended portfolio items with additional images
const portfolioItems = [
  {
    title: "Tech Startup Launch",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    stats: "300% Growth",
    additionalImages: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    ],
    fullDescription: "Our comprehensive social media strategy helped this tech startup achieve remarkable growth. Through targeted content and engagement campaigns, we established their brand voice and built a strong community of early adopters."
  },
  {
    title: "Fashion Brand Engagement",
    description: "Instagram-focused campaign that doubled follower count in 3 months",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    stats: "2x Followers",
    additionalImages: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"
    ],
    fullDescription: "Working closely with this emerging fashion brand, we developed a visual-first Instagram strategy that resonated with their target audience. Our approach combined lifestyle photography with engaging storytelling."
  },
  {
    title: "Food Delivery App",
    description: "Video content strategy that generated 1M+ views across platforms",
    image: "https://images.unsplash.com/photo-1485811055483-1c09e64d4576",
    stats: "1M+ Views",
    additionalImages: [
      "https://images.unsplash.com/photo-1493770348161-369560ae357d",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    fullDescription: "Our video-first approach helped this food delivery startup stand out in a crowded market. We created mouth-watering content that showcased both the food and the convenience of the service."
  },
  {
    title: "Fitness Challenge",
    description: "User-generated content campaign with 50K+ participants",
    image: "https://images.unsplash.com/photo-1495106245177-55dc6f43e83f",
    stats: "50K+ Participants",
    additionalImages: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e"
    ],
    fullDescription: "We created a viral fitness challenge that engaged thousands of participants. The campaign combined motivational content with user-generated stories to build a supportive community."
  },
  {
    title: "E-commerce Growth",
    description: "Social shopping integration leading to 150% increase in sales",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
    stats: "150% Sales Growth",
    additionalImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1502920514313-52581002a659"
    ],
    fullDescription: "By integrating social shopping features and creating compelling product storytelling, we helped this e-commerce brand achieve significant sales growth through social channels."
  },
  {
    title: "Travel Experience",
    description: "Influencer partnership campaign reaching 2M+ travelers",
    image: "https://images.unsplash.com/photo-1592578629295-73a151d69c96",
    stats: "2M+ Reach",
    additionalImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc"
    ],
    fullDescription: "Our influencer-driven campaign showcased unique travel experiences to millions of potential travelers. We carefully selected partners who could authentically share the brand's story."
  }
];

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer"
          >
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
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

      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">{selectedItem.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{selectedItem.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedItem.additionalImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${selectedItem.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-4">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-lg font-medium">
                  {selectedItem.stats}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}