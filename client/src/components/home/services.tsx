import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  PenTool,
  Users,
  BarChart4,
  Camera,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    description: "Data-driven strategies tailored to your brand's goals and target audience."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging visuals and copy that tell your brand's story and drive engagement."
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Building and nurturing authentic relationships with your audience."
  },
  {
    icon: BarChart4,
    title: "Analytics & Reporting",
    description: "Comprehensive insights and metrics to track campaign performance."
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional multimedia content creation for all platforms."
  },
  {
    icon: MessageCircle,
    title: "Social Listening",
    description: "Monitoring conversations and trends relevant to your brand."
  }
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
