import { motion } from 'framer-motion';

const partners = [
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Unity', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg' },
  { name: 'Unreal', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/UE_Logo_Black_Centered.svg' },
  { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
];

function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl font-bold mb-4">Trusted Partners</h2>
          <p className="text-gray-400 text-sm sm:text-base">Working with industry leaders to shape the future</p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-12 w-auto filter invert opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;