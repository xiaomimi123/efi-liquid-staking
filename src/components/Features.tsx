import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Droplets, RefreshCw, ShieldCheck, ArrowUpRight } from 'lucide-react';

const featuresList = [
  {
    key: 'f1',
    icon: Droplets,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    key: 'f2',
    icon: RefreshCw,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    key: 'f3',
    icon: ShieldCheck,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  }
];

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {t(`features.${feature.key}_title`)}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {t(`features.${feature.key}_desc`)}
              </p>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-sm text-gray-500 group-hover:text-primary transition-colors cursor-pointer">
                Learn more <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

