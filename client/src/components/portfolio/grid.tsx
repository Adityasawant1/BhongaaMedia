import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

//Import Political Work
import img1 from "../../../../public/Images/Political_Work/Political1.png";
import img2 from "../../../../public/Images/Political_Work/Political2.jpg";
import img3 from "../../../../public/Images/Political_Work/Political3.jpg";
import img4 from "../../../../public/Images/Political_Work/Political4.jpg";
import img5 from "../../../../public/Images/Political_Work/Political5.png";
import img6 from "../../../../public/Images/Political_Work/Political6.png";
import img7 from "../../../../public/Images/Political_Work/Political7.png";
import img8 from "../../../../public/Images/Political_Work/Political8.png";
import img9 from "../../../../public/Images/Political_Work/Political9.jpg";
import img10 from "../../../../public/Images/Political_Work/Political10.jpg";
import img11 from "../../../../public/Images/Political_Work/Political11.jpg";
import img12 from "../../../../public/Images/Political_Work/Political12.jpg";
import img13 from "../../../../public/Images/Political_Work/Political13.jpg";


//Import Business images
import business1 from "../../../../public/Images/Logos/ACA.jpg";
import business2 from "../../../../public/Images/Logos/Avalon.png";
import business3 from "../../../../public/Images/Logos/KrishnaCollection.jpg";
import business4 from "../../../../public/Images/Logos/Lakshmi.png";
import business5 from "../../../../public/Images/Logos/MahilaAayog.jpeg";
import business6 from "../../../../public/Images/Logos/Manashanti.jpg";
import business7 from "../../../../public/Images/Logos/Ranjit.jpg";
import business8 from "../../../../public/Images/Logos/SaadClinic.jpg";
import business9 from "../../../../public/Images/Logos/Sankul_Gym.png";
import business10 from "../../../../public/Images/Logos/Sarswati.png";
import business11 from "../../../../public/Images/Logos/SportBeat.jpeg";
import business12 from "../../../../public/Images/Logos/SportBeatSB.jpeg";
import business13 from "../../../../public/Images/Logos/SurajSwf.jpg";
import business14 from "../../../../public/Images/Logos/Trikiaya.jpg";


//Import Desing images
import design1 from "../../../../public/Images/Designs/design1.jpg";
import design2 from "../../../../public/Images/Designs/design2.jpg";
import design3 from "../../../../public/Images/Designs/design3.jpg";
import design4 from "../../../../public/Images/Designs/design4.jpg";
import design5 from "../../../../public/Images/Designs/design5.jpg";
import design6 from "../../../../public/Images/Designs/design6.jpg";
import design7 from "../../../../public/Images/Designs/design7.jpg";
import design8 from "../../../../public/Images/Designs/design8.jpg";
import design9 from "../../../../public/Images/Designs/design9.jpg";



const portfolioItems = [
  {
    title: "Political Work",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: img2,
    additionalImages: [img11, img2, img13, img4, img5, img6, img7, img8, img9,img10,img1,img12,img3],
    fullDescription:
      "Our comprehensive social media strategy helped this tech startup achieve remarkable growth. Through targeted content and engagement campaigns, we established their brand voice and built a strong community of early adopters.",
  },
  {
    title: "Business Work",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: business1,
    additionalImages: [business2,business1,business3,business4,business5,business6,business7,business14,business9,business10,business11,business12,business8,business13],
    fullDescription:
      "Our comprehensive social media strategy helped this tech startup achieve remarkable growth. Through targeted content and engagement campaigns, we established their brand voice and built a strong community of early adopters.",
  },
  {
    title: "Design Work",
    description: "Comprehensive social media campaign that increased brand awareness by 300%",
    image: design3,
    additionalImages: [design1,design2,design3,design4,design5,design6,design7,design8,design9],
    fullDescription:
      "Our comprehensive social media strategy helped this tech startup achieve remarkable growth. Through targeted content and engagement campaigns, we established their brand voice and built a strong community of early adopters.",
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
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full transition-transform duration-300 hover:scale-105"
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

      {/* Dialog (Modal) */}
      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">{selectedItem.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{selectedItem.fullDescription}</p>

              {/* Dynamic Image Grid in Modal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedItem.additionalImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden border"
                  >
                    {/* Image Opens in New Tab on Click */}
                    <a href={image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={image}
                        alt={`${selectedItem.title} - Image ${index + 1}`}
                        className="w-full h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      />
                    </a>
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
