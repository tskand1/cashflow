import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { ContactBlock } from '../components/ContactBlock';
import { specialMachineryContent } from '../content/specialMachinery';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  AlertTriangle,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Settings
} from 'lucide-react';

const SpecialMachinery: React.FC = () => {
  const { seo, hero, mainText, who, assets, mechanism, parameters, tax, risks, faq } = specialMachineryContent;
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  useSEO(seo.title, seo.description, '/special-machinery', schema);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-white pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em] space-x-3">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="cursor-default">Активы</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-corporate-900">Спецтехника</span>
           </div>
        </div>
      </div>

      {/* 1. HERO */}
      <div className="bg-white pt-12 pb-24 md:pt-20 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 text-accent text-xs font-bold uppercase tracking-widest mb-10 border border-gray-100">
              <Briefcase size={16} />
              {hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-corporate-900 leading-[0.9] tracking-tight mb-8 font-display">
              {hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-corporate-500 font-light mb-10 leading-tight">
              {hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-corporate-600 max-w-2xl leading-relaxed mb-12">
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

      {/* 2. MAIN TEXT (What is it) */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{mainText.title}</SectionTitle>
          <div className="space-y-6 text-corporate-700 text-lg leading-relaxed font-light">
            {mainText.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. WHO (Target Audience) */}
      <Section id="who" dark>
        <SectionTitle subtitle>{who.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {who.items.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-corporate-900 mb-4 font-display">{item.title}</h3>
              <p className="text-base text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. ASSETS */}
      <Section id="assets">
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-card">
            <h4 className="text-xl font-bold text-corporate-900 mb-8 border-b border-gray-100 pb-4 font-display">{assets.listTitle}</h4>
            <ul className="space-y-5">
              {assets.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-corporate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 shadow-sm">
            <h4 className="text-xl font-bold text-corporate-900 mb-8 border-b border-gray-200 pb-4 font-display">{assets.requirementsTitle}</h4>
            <ul className="space-y-5">
              {assets.requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-corporate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-corporate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. PROCESS */}
      <Section id="mechanism" dark>
        <SectionTitle subtitle>{mechanism.title}</SectionTitle>
        <div className="grid md:grid-cols-5 gap-8">
          {mechanism.steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-14 h-14 bg-white shadow-card group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-2xl flex items-center justify-center text-corporate-900 font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="font-bold text-corporate-900 mb-3 text-lg leading-tight font-display">
                {step.title}
              </h3>
              <p className="text-sm text-corporate-500 border-t border-gray-100 pt-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. PARAMETERS */}
      <Section id="parameters">
        <SectionTitle subtitle>{parameters.title}</SectionTitle>
        <div className="max-w-4xl">
          <p className="text-xl text-corporate-700 mb-10 font-light leading-relaxed">{parameters.text}</p>
          <ul className="space-y-5 bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
            {parameters.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-lg text-corporate-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7. TAXES */}
      <Section id="tax" dark>
        <SectionTitle subtitle>{tax.title}</SectionTitle>
        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-card max-w-4xl">
          <p className="text-xl text-corporate-800 mb-8 leading-relaxed font-light">
            {tax.description}
          </p>
          <p className="text-base text-corporate-500 leading-relaxed mb-8">
            {tax.subDescription}
          </p>
          <Link to="/#tax" className="inline-flex items-center text-corporate-900 font-bold hover:text-accent text-lg transition-colors border-b-2 border-transparent hover:border-accent pb-1">
            Подробнее — в разделе «Налоги» <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* 8. RISKS */}
      <Section id="risks">
        <div className="bg-white border border-gray-100 p-10 rounded-2xl shadow-card max-w-4xl">
          <h2 className="text-2xl font-bold text-corporate-900 mb-8 flex items-center gap-4 font-display">
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="text-accent w-8 h-8" />
            </div>
            {risks.title}
          </h2>
          <div className="space-y-5 text-lg text-corporate-700 leading-relaxed font-light">
            {risks.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section id="faq" dark>
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      {/* 10. CTA - REPLACED */}
      <ContactBlock />
    </Layout>
  );
};

export default SpecialMachinery;