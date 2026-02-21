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
      <div id="hero" className="bg-corporate-900 pt-16 pb-20 md:pt-32 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] transform -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-corporate-200 font-light mb-8 max-w-3xl">
            {hero.subtitle}
          </p>
          <p className="text-lg text-corporate-400 max-w-2xl leading-relaxed font-light mb-10">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex justify-center items-center px-6 py-3 bg-white text-corporate-900 hover:bg-corporate-100 transition-colors duration-300 rounded-sm font-medium"
            >
              {hero.ctaPrimary}
            </a>
            <Link 
              to="/calculator"
              className="inline-flex justify-center items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-corporate-900 transition-colors duration-300 rounded-sm font-medium"
            >
              {hero.ctaSecondary}
            </Link>
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
            <div key={index} className="bg-white p-8 rounded-sm border border-corporate-200 shadow-sm">
              <h3 className="text-lg font-bold text-corporate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. BENEFITS */}
      <Section id="benefits">
        <SectionTitle subtitle>{benefits.title}</SectionTitle>
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-corporate-700 leading-relaxed font-light">
            {benefits.intro}
          </p>
        </div>

        {/* 1. Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.items.map((item, index) => (
            <div key={index} className="bg-white border border-corporate-200 p-6 rounded-sm hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4 bg-emerald-50 w-12 h-12 rounded-sm flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                {getIconForBenefit(index)}
              </div>
              <h3 className="font-bold text-corporate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 2. Comparison Table */}
        <div className="bg-corporate-50 rounded-sm p-6 md:p-8 mb-16 border border-corporate-200">
          <h3 className="text-xl font-semibold text-corporate-900 mb-6">{benefits.comparison.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white shadow-sm rounded-sm overflow-hidden">
              <thead>
                <tr className="bg-corporate-900 text-white">
                  {benefits.comparison.headers.map((header, index) => (
                    <th key={index} className="p-4 border-b border-corporate-800 font-medium text-sm md:text-base">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-corporate-100">
                {benefits.comparison.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-corporate-50/50'}>
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={`p-4 text-sm text-corporate-800 ${cellIndex === 0 ? 'font-medium' : ''}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-corporate-600 italic border-l-4 border-emerald-500 pl-4 bg-white py-2 pr-2">
            {benefits.comparison.conclusion}
          </p>
        </div>

        {/* 3. Targets and CTA */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold text-corporate-900 mb-6">Кому особенно подходит инструмент</h3>
            <ul className="space-y-3">
              {benefits.targets.map((target, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-corporate-700">{target}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-corporate-900 p-8 rounded-sm text-center">
            <h4 className="text-white text-lg font-medium mb-4">Нужны деньги для развития бизнеса?</h4>
            <p className="text-corporate-300 text-sm mb-6">Получите финансирование под активы компании на индивидуальных условиях.</p>
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-corporate-900 hover:bg-emerald-50 font-bold rounded-sm transition-colors w-full justify-center"
            >
              <Send size={18} />
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
             <div key={index} className="relative p-6 bg-white border border-corporate-200 rounded-sm hover:border-corporate-300 transition-colors">
               <span className="absolute -top-3 left-6 bg-corporate-900 text-white text-xs font-bold px-2 py-1 rounded-sm">
                 {step.number}
               </span>
               <h3 className="mt-2 text-lg font-bold text-corporate-900 mb-3">{step.title}</h3>
               <p className="text-sm text-corporate-600 leading-relaxed">{step.text}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 5. ASSETS */}
      <Section id="assets">
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="grid md:grid-cols-4 gap-6">
          {assets.items.map((item, index) => (
            <Link 
              key={index}
              to={item.link} 
              className="group bg-white p-6 border border-corporate-200 rounded-sm block hover:border-corporate-400 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="flex justify-between items-start mb-6">
                {getIconForAsset(index)}
                <ArrowRight className="w-4 h-4 text-corporate-400 group-hover:text-corporate-900 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-corporate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-corporate-500 leading-relaxed">
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
        <div className="max-w-4xl">
          {/* Intro Text */}
          <div className="flex items-start gap-4 mb-10 bg-corporate-50 p-6 rounded-sm border border-corporate-100">
             <div className="p-2 bg-white rounded-sm shadow-sm flex-shrink-0">
               <FileText className="w-6 h-6 text-corporate-700" />
             </div>
             <div>
                <p className="text-lg text-corporate-800 leading-relaxed font-light">
                  {taxes.intro}
                </p>
             </div>
          </div>

          {/* Tax Details Grid */}
          <div className="space-y-6">
            {taxes.details && taxes.details.map((detail, index) => (
              <div key={index} className="bg-white border border-corporate-200 rounded-sm p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-corporate-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  {detail.title}
                </h3>
                <ul className="space-y-3">
                  {detail.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-corporate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-corporate-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Legal Footer */}
          {taxes.legal && (
            <div className="mt-10 bg-corporate-200/30 p-6 rounded-sm border-l-4 border-corporate-500 flex gap-4">
               <Scale className="w-6 h-6 text-corporate-600 flex-shrink-0" />
               <div>
                  <h4 className="font-bold text-corporate-900 mb-2">{taxes.legal.title}</h4>
                  <p className="text-sm text-corporate-700 leading-relaxed">
                    {taxes.legal.text}
                  </p>
               </div>
            </div>
          )}

          <div className="mt-10 text-center">
             <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-corporate-900 font-bold border-b-2 border-emerald-500 hover:text-emerald-700 transition-colors pb-1"
             >
               Обсудить налоговые аспекты вашей сделки <ArrowRight size={16} />
             </a>
          </div>

        </div>
      </Section>

      {/* 8. RISKS */}
      <Section id="risks" dark>
        <div className="bg-white border-l-4 border-amber-500 p-8 shadow-sm max-w-3xl">
          <h2 className="text-xl font-semibold text-corporate-900 mb-4 flex items-center gap-3">
            <AlertTriangle className="text-amber-500" />
            {risks.title}
          </h2>
          <div className="space-y-4 text-sm text-corporate-700 leading-relaxed">
            <p>{risks.text}</p>
            <p>{risks.subText}</p>
            <Link to="#" className="inline-flex items-center text-corporate-900 font-medium hover:underline mt-2 cursor-default opacity-50">
               Подробнее <ArrowRight size={14} className="ml-1" />
            </Link>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-corporate-900 mb-6">{expertSummary.title}</h2>
          <div className="prose prose-corporate text-corporate-700 max-w-none text-sm leading-relaxed space-y-4">
             {expertSummary.content.map((paragraph, index) => (
               <p key={index}>{paragraph}</p>
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