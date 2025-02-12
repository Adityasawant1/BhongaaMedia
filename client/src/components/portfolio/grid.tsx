import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Tech Startup Launch",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: "/images/portfolio/2.jpg",
    additionalImages: [
      "/images/portfolio/1.png",
      "/images/portfolio/1.png",
      "/images/portfolio/2.jpg"
    ],
    fullDescription: "Our comprehensive social media strategy helped this tech startup achieve remarkable growth. Through targeted content and engagement campaigns, we established their brand voice and built a strong community of early adopters."
  },
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
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}