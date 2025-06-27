import React from "react";
import { ShieldCheck, BatteryCharging, Headphones, Bluetooth } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <ShieldCheck size={40} className="text-[#00FFB3]" />,
    title: "Advanced Noise Cancellation",
    desc: "Block out the world and dive into pure audio with top-tier noise suppression.",
  },
  {
    id: 2,
    icon: <BatteryCharging size={40} className="text-[#00FFB3]" />,
    title: "40-Hour Battery",
    desc: "Enjoy non-stop playback with industry-leading battery life.",
  },
  {
    id: 3,
    icon: <Headphones size={40} className="text-[#00FFB3]" />,
    title: "Superior Comfort",
    desc: "Designed for long hours — no pressure, no pain, just music.",
  },
  {
    id: 4,
    icon: <Bluetooth size={40} className="text-[#00FFB3]" />,
    title: "Instant Bluetooth Pairing",
    desc: "Connect effortlessly across all your devices with fast and stable pairing.",
  },
];

const Features = () => {
  return (
    <section className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#00FFB3] mb-12">
          Why Choose Our Headphones?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-[#00FFB3]/30 transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
