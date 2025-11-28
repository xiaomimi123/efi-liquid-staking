import { useTranslation } from 'react-i18next';

const StatCard = ({ label, value, subtext }: { label: string; value: string; subtext?: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
    <div className="relative p-6 bg-dark/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-primary/30 transition-colors">
      <dt className="text-sm font-medium text-gray-400 truncate font-mono uppercase tracking-wider">{label}</dt>
      <dd className="mt-2 text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">
        {value}
      </dd>
      {subtext && <span className="text-xs text-green-400 font-mono mt-1 block">{subtext}</span>}
    </div>
  </div>
);

export const Stats = () => {
  const { t } = useTranslation();

  return (
    <section id="stats" className="relative py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            label={t('stats.tvl')} 
            value="$1,245,890,000" 
            subtext="+5.4% (24h)"
          />
          <StatCard 
            label={t('stats.apy')} 
            value="14.5%" 
            subtext="~18.2% with compound"
          />
          <StatCard 
            label={t('stats.users')} 
            value="89,432" 
          />
          <StatCard 
            label={t('stats.paid')} 
            value="$45,200,000" 
          />
        </div>
      </div>
    </section>
  );
};

