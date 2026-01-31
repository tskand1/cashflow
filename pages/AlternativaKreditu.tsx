import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { ContactBlock } from '../components/ContactBlock';
import { alternativaKredituContent } from '../content/alternativaKreditu';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Scale
} from 'lucide-react';

const AlternativaKreditu: React.FC = () => {
  const { seo, hero, whyDenied, notOptimal, alternatives, backLeasing, assets, relevance, faq } = alternativaKredituContent;
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

  useSEO(seo.title, seo.description, '/alternativa-kreditu', schema);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-corporate-900 pt-24 pb-4 border-b border-corporate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-xs text-corporate-400 uppercase tracking-wider space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <ChevronRight size={12} />
              <span className="text-white">Альтернатива кредиту</span>
           </div>
        </div>
      </div>

      {/* 1. HERO */}
      <div className="bg-corporate-900 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-corporate-800 border border-corporate-700 text-corporate-300 text-xs uppercase tracking-wider mb-6">
            <Scale size={12} />
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

      {/* 2. WHY DENIED */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle>{whyDenied.title}</SectionTitle>
          <div className="space-y-6 text-corporate-700 text-lg leading-relaxed font-light">
            <p>{whyDenied.text}</p>
            <p>{whyDenied.subText}</p>
          </div>
        </div>
      </Section>

      {/* 3. NOT OPTIMAL */}
      <Section dark>
        <div className="bg-white p-8 md:p-10 rounded-sm border border-corporate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-corporate-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-corporate-600" />
            {notOptimal.title}
          </h2>
          <div className="space-y-4 text-corporate-700 leading-relaxed">
            <p>{notOptimal.text}</p>
            <p>{notOptimal.subText}</p>
          </div>
        </div>
      </Section>

      {/* 4. ALTERNATIVES */}
      <Section>
        <SectionTitle subtitle>{alternatives.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {alternatives.items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-sm border border-corporate-200 hover:border-corporate-300 transition-colors">
              <div className="w-10 h-10 bg-corporate-50 rounded-sm flex items-center justify-center text-corporate-900 mb-4">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-corporate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. BACK LEASING ALTERNATIVE */}
      <Section dark>
        <div className="max-w-3xl">
          <SectionTitle subtitle>{backLeasing.title}</SectionTitle>
          <div className="space-y-6 text-corporate-700 text-lg leading-relaxed font-light mb-8">
            <p>{backLeasing.text}</p>
            <p>{backLeasing.subText}</p>
          </div>
          <Link to="/" className="inline-flex items-center text-corporate-900 font-medium hover:underline">
             Подробнее о возвратном лизинге <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* 6. ASSETS */}
      <Section>
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="grid md:grid-cols-4 gap-6">
          {assets.items.map((item, index) => (
            <Link 
              key={index}
              to={item.link} 
              className="group bg-white p-6 border border-corporate-200 rounded-sm block hover:border-corporate-400 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="flex justify-between items-start mb-6">
                <item.icon className="w-8 h-8 text-corporate-800 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
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

      {/* 7. RELEVANCE */}
      <Section dark>
        <SectionTitle subtitle>{relevance.title}</SectionTitle>
        <div className="bg-white p-8 rounded-sm border border-corporate-200 shadow-sm max-w-3xl">
          <ul className="space-y-4">
            {relevance.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-corporate-600 flex-shrink-0 mt-0.5" />
                <span className="text-corporate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section>
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      {/* 9. CTA - REPLACED */}
      <ContactBlock />
    </Layout>
  );
};

export default AlternativaKreditu;