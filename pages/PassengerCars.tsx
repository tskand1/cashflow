import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { ContactBlock } from '../components/ContactBlock';
import { passengerCarsContent } from '../content/passengerCars';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  Car,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const PassengerCars: React.FC = () => {
  const { seo, hero, mainText, who, assets, mechanism, tax, faq } = passengerCarsContent;
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

  useSEO(seo.title, seo.description, '/passenger-cars', schema);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-corporate-900 pt-24 pb-4 border-b border-corporate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-xs text-corporate-400 uppercase tracking-wider space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <ChevronRight size={12} />
              <span className="cursor-default">Активы</span>
              <ChevronRight size={12} />
              <span className="text-white">Легковые автомобили</span>
           </div>
        </div>
      </div>

      {/* 1. HERO */}
      <div className="bg-corporate-900 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-corporate-800 border border-corporate-700 text-corporate-300 text-xs uppercase tracking-wider mb-6">
            <Car size={12} />
            {hero.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-corporate-300 font-light mb-8">
            {hero.subtitle}
          </p>
          <p className="text-lg text-corporate-400 max-w-3xl leading-relaxed font-light mb-10">
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

      {/* 2. MAIN TEXT (What is it) */}
      <Section>
        <div className="max-w-3xl">
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
            <div key={index} className="bg-white p-8 rounded-sm border border-corporate-200 shadow-sm">
              <h3 className="text-lg font-bold text-corporate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. ASSETS (List) */}
      <Section id="assets">
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="bg-white border border-corporate-200 rounded-sm p-8 md:p-10 shadow-sm">
          <ul className="grid md:grid-cols-2 gap-y-4 gap-x-12">
            {assets.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-corporate-600 flex-shrink-0 mt-0.5" />
                <span className="text-corporate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 5. PROCESS */}
      <Section id="mechanism" dark>
        <SectionTitle subtitle>{mechanism.title}</SectionTitle>
        <div className="grid md:grid-cols-4 gap-6">
          {mechanism.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-12 h-12 bg-corporate-200 rounded-full flex items-center justify-center text-corporate-800 font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-corporate-900 mb-2 min-h-[48px] flex items-end pb-1">
                {step.title}
              </h3>
              <p className="text-sm text-corporate-600 border-t border-corporate-200 pt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. TAXES */}
      <Section id="tax">
        <SectionTitle subtitle>{tax.title}</SectionTitle>
        <div className="bg-corporate-50 p-8 rounded-sm border border-corporate-200">
          <p className="text-lg text-corporate-800 mb-6 leading-relaxed">
            {tax.description}
          </p>
          <p className="text-sm text-corporate-600 leading-relaxed mb-6">
            {tax.subDescription}
          </p>
          <Link to="/#tax" className="inline-flex items-center text-corporate-900 font-medium hover:underline">
            Подробнее — в разделе «Налоги» <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section id="faq" dark>
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      {/* 8. CTA - REPLACED */}
      <ContactBlock />
    </Layout>
  );
};

export default PassengerCars;