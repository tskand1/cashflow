import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { ContactBlock } from '../components/ContactBlock';
import { homeContent } from '../content/home';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  AlertTriangle,
  Briefcase,
  Building2,
  Car,
  Truck,
  FileText,
  TrendingUp,
  Clock,
  ShieldCheck,
  PieChart,
  Shuffle,
  CheckCircle2,
  Send,
  Scale,
  Users
} from 'lucide-react';

const getIconForAsset = (index: number) => {
  switch (index) {
    case 0: return <Car className="w-8 h-8 text-corporate-800 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />;
    case 1: return <Truck className="w-8 h-8 text-corporate-800 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />;
    case 2: return <Briefcase className="w-8 h-8 text-corporate-800 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />;
    case 3: return <Building2 className="w-8 h-8 text-corporate-800 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />;
    default: return <Briefcase className="w-8 h-8 text-corporate-800" strokeWidth={1.5} />;
  }
};

const getIconForBenefit = (index: number) => {
  const icons = [
    <TrendingUp className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
    <Briefcase className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
    <Clock className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
    <Shuffle className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
    <PieChart className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />,
  ];
  return icons[index % icons.length];
};

const Home: React.FC = () => {
  const { seo, hero, mechanism, forWhom, benefits, assets, process, taxes, risks, faq, howWeWork, expertSummary } = homeContent;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Cashflow",
        "url": "https://cashflow.ru",
        "logo": "https://cashflow.ru/logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+74950000000",
          "areaServed": "RU"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faq.items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  useSEO(seo.title, seo.description, '/', schema);

  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  return (
    <Layout>
      {/* 1. HERO */}
      <div id="hero" className="bg-white pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-corporate-900 leading-[0.9] tracking-tight mb-8 font-display">
              {hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-corporate-500 font-light mb-10 leading-tight">
              {hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-corporate-400 max-w-2xl leading-relaxed mb-12">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-10 py-5 bg-accent text-white hover:bg-accent-hover transition-all duration-300 rounded-2xl font-bold text-xl shadow-2xl shadow-red-500/30 hover:-translate-y-1"
              >
                {hero.ctaPrimary}
              </a>
              <Link 
                to="/calculator"
                className="inline-flex justify-center items-center px-10 py-5 border-2 border-gray-100 text-corporate-900 hover:border-corporate-900 hover:bg-corporate-900 hover:text-white transition-all duration-300 rounded-2xl font-bold text-xl"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MECHANISM */}
      <Section id="mechanism">
        <div className="max-w-3xl">
          <SectionTitle subtitle>{mechanism.title}</SectionTitle>
          <div className="space-y-6 text-corporate-700 text-lg leading-relaxed font-light">
            {mechanism.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. FOR WHOM */}
      <Section id="forwhom" dark>
        <SectionTitle subtitle>{forWhom.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {forWhom.items.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-4 font-display">{item.title}</h3>
              <p className="text-base text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. BENEFITS */}
      <Section id="benefits">
        <SectionTitle subtitle>{benefits.title}</SectionTitle>
        
        {/* Intro */}
        <div className="max-w-4xl mb-16">
          <p className="text-2xl text-corporate-600 leading-relaxed font-light">
            {benefits.intro}
          </p>
        </div>

        {/* 1. Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 p-10 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="mb-8 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                {getIconForBenefit(index)}
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-4 font-display">{item.title}</h3>
              <p className="text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 2. Comparison Table */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-24 border border-gray-100">
          <h3 className="text-3xl font-bold text-corporate-900 mb-10 font-display">{benefits.comparison.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white shadow-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-corporate-900 text-white">
                  {benefits.comparison.headers.map((header, index) => (
                    <th key={index} className="p-6 font-bold text-sm uppercase tracking-widest">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {benefits.comparison.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={`p-6 text-base text-corporate-800 ${cellIndex === 0 ? 'font-bold' : ''}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-white rounded-2xl border-l-8 border-accent shadow-sm">
            <p className="text-lg text-corporate-900 font-bold italic">
              {benefits.comparison.conclusion}
            </p>
          </div>
        </div>

        {/* 3. Targets and CTA */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-corporate-900 mb-8 font-display">Кому особенно подходит инструмент</h3>
            <ul className="space-y-4">
              {benefits.targets.map((target, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-corporate-700 font-medium">{target}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-corporate-900 p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-white text-2xl font-bold mb-4 font-display">Нужны деньги для развития бизнеса?</h4>
            <p className="text-corporate-400 text-lg mb-10 leading-relaxed">Получите финансирование под активы компании на индивидуальных условиях.</p>
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white hover:bg-accent-hover font-bold rounded-2xl transition-all duration-300 w-full justify-center shadow-xl shadow-red-500/20"
            >
              <Send size={20} />
              Получить консультацию
            </a>
          </div>
        </div>
      </Section>

      {/* NEW: HOW WE WORK */}
      <Section id="how-we-work" dark>
        <SectionTitle subtitle>{howWeWork.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
           {howWeWork.steps.map((step, index) => (
             <div key={index} className="relative p-10 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group">
               <span className="absolute -top-4 left-8 bg-accent text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-red-500/20">
                 {step.number}
               </span>
               <h3 className="mt-4 text-2xl font-bold text-corporate-900 mb-4 font-display">{step.title}</h3>
               <p className="text-corporate-600 leading-relaxed">{step.text}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 5. ASSETS */}
      <Section id="assets">
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assets.items.map((item, index) => (
            <Link 
              key={index}
              to={item.link} 
              className="group bg-white p-10 border border-gray-100 rounded-2xl block hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {getIconForAsset(index)}
                </div>
                <ArrowRight className="w-6 h-6 text-corporate-300 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-3 font-display relative z-10">{item.title}</h3>
              <p className="text-sm text-corporate-500 leading-relaxed relative z-10">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. PROCESS */}
      <Section id="process" dark>
        <SectionTitle subtitle>{process.title}</SectionTitle>
        <div className="relative border-l border-corporate-300 ml-3 md:ml-6 space-y-10 py-2">
          {process.steps.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[5px] md:-left-[7px] top-1.5 w-2.5 h-2.5 rounded-full bg-corporate-900 ring-4 ring-corporate-100"></span>
              <h4 className="text-lg font-medium text-corporate-900">{index + 1}. {step}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. TAXES */}
      <Section id="taxes">
        <SectionTitle subtitle>{taxes.title}</SectionTitle>
        <div className="max-w-5xl">
          {/* Intro Text */}
          <div className="flex items-start gap-6 mb-16 bg-gray-50 p-10 rounded-3xl border border-gray-100">
             <div className="p-4 bg-white rounded-2xl shadow-sm flex-shrink-0">
               <FileText className="w-8 h-8 text-accent" />
             </div>
             <div>
                <p className="text-2xl text-corporate-800 leading-relaxed font-light">
                  {taxes.intro}
                </p>
             </div>
          </div>

          {/* Tax Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {taxes.details && taxes.details.map((detail, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-10 shadow-card hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-corporate-900 mb-8 flex items-center gap-4 font-display">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  {detail.title}
                </h3>
                <ul className="space-y-4">
                  {detail.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-corporate-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Legal Footer */}
          {taxes.legal && (
            <div className="mt-12 bg-corporate-900 p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
               <div className="p-5 bg-white/10 rounded-2xl">
                <Scale className="w-10 h-10 text-accent" />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-white mb-3 font-display">{taxes.legal.title}</h4>
                  <p className="text-corporate-400 leading-relaxed">
                    {taxes.legal.text}
                  </p>
               </div>
            </div>
          )}

          <div className="mt-16 text-center">
             <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-corporate-900 font-bold text-xl hover:text-accent transition-colors group"
             >
               Обсудить налоговые аспекты вашей сделки 
               <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
             </a>
          </div>

        </div>
      </Section>

      {/* 8. RISKS */}
      <Section id="risks" dark>
        <div className="bg-white border-l-[12px] border-amber-500 p-10 md:p-16 rounded-3xl shadow-card max-w-4xl">
          <h2 className="text-3xl font-bold text-corporate-900 mb-8 flex items-center gap-4 font-display">
            <div className="p-3 bg-amber-50 rounded-xl">
              <AlertTriangle className="text-amber-500 w-8 h-8" />
            </div>
            {risks.title}
          </h2>
          <div className="space-y-6 text-xl text-corporate-700 leading-relaxed font-light">
            <p>{risks.text}</p>
            <p className="text-corporate-900 font-bold">{risks.subText}</p>
            <div className="pt-4">
              <Link to="#" className="inline-flex items-center text-corporate-400 font-bold hover:text-accent text-lg transition-colors cursor-default opacity-50">
                 Подробнее <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section id="faq">
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      {/* NEW: EXPERT SUMMARY (SEO TEXT) */}
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-corporate-900 mb-10 font-display">{expertSummary.title}</h2>
          <div className="prose prose-lg prose-slate text-corporate-600 max-w-none leading-relaxed space-y-6 italic">
             {expertSummary.content.map((paragraph, index) => (
               <p key={index} className="relative pl-8">
                 <span className="absolute left-0 top-0 text-accent text-4xl font-serif opacity-20">"</span>
                 {paragraph}
               </p>
             ))}
          </div>
        </div>
      </Section>

      {/* 10. CTA */}
      <ContactBlock />
    </Layout>
  );
};

export default Home;