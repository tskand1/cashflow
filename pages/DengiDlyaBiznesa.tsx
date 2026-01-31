import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { ContactBlock } from '../components/ContactBlock';
import { dengiDlyaBiznesaContent } from '../content/dengiDlyaBiznesa';
import { useSEO } from '../hooks/useSEO';
import { 
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Landmark,
  Banknote,
  Users
} from 'lucide-react';

const DengiDlyaBiznesa: React.FC = () => {
  const { 
    seo, 
    hero, 
    financingMethods, 
    creditIssues, 
    leasebackDef, 
    assets, 
    taxes, 
    comparison, 
    who, 
    risks 
  } = dengiDlyaBiznesaContent;

  useSEO(seo.title, seo.description, '/dengi-dlya-biznesa');

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-corporate-900 pt-24 pb-4 border-b border-corporate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-xs text-corporate-400 uppercase tracking-wider space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <ArrowRight size={10} />
              <span className="text-white">Деньги для бизнеса</span>
           </div>
        </div>
      </div>

      {/* 1. HERO - H1 */}
      <div className="bg-corporate-900 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-corporate-800 border border-corporate-700 text-corporate-300 text-xs uppercase tracking-wider mb-6">
            <Banknote size={12} />
            Финансирование
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8">
            {hero.title}
          </h1>
          <div className="space-y-6 text-lg text-corporate-300 font-light leading-relaxed max-w-3xl">
            {hero.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FINANCING METHODS */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle>{financingMethods.title}</SectionTitle>
          <p className="text-corporate-700 mb-6">{financingMethods.intro}</p>
          <ul className="space-y-3 mb-8">
            {financingMethods.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-corporate-400 rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-corporate-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-corporate-700 font-medium border-l-2 border-corporate-300 pl-4">
            {financingMethods.conclusion}
          </p>
        </div>
      </Section>

      {/* 3. CREDIT ISSUES */}
      <Section dark>
        <div className="max-w-3xl">
          <SectionTitle>{creditIssues.title}</SectionTitle>
          <div className="bg-white p-8 rounded-sm border border-corporate-200 shadow-sm">
             <p className="text-corporate-700 mb-6">{creditIssues.intro}</p>
             <ul className="space-y-3 mb-6">
               {creditIssues.items.map((item, index) => (
                 <li key={index} className="flex items-start gap-3 text-corporate-800">
                   <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
             <p className="text-corporate-600 text-sm">
               {creditIssues.conclusion}
             </p>
          </div>
        </div>
      </Section>

      {/* 4. LEASEBACK DEFINITION */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle>{leasebackDef.title}</SectionTitle>
          <p className="text-corporate-700 mb-6">{leasebackDef.intro}</p>
          <div className="bg-corporate-50 border border-corporate-100 p-6 rounded-sm mb-6">
            <ul className="space-y-4">
              {leasebackDef.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-corporate-200 flex items-center justify-center text-xs font-bold text-corporate-700 flex-shrink-0">
                     {index + 1}
                   </div>
                   <span className="text-corporate-900 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg text-corporate-800 font-light">
            {leasebackDef.conclusion}
          </p>
        </div>
      </Section>

      {/* 5. ASSETS */}
      <Section dark>
        <SectionTitle>{assets.title}</SectionTitle>
        <p className="text-corporate-700 mb-8 max-w-3xl">{assets.intro}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {assets.items.map((item, index) => (
            <div key={index} className="bg-white p-6 border border-corporate-200 rounded-sm flex items-start gap-4">
              <item.icon className="w-6 h-6 text-corporate-600 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-corporate-800">{item.text}</span>
            </div>
          ))}
        </div>
        <p className="text-corporate-700 max-w-3xl">
          {assets.conclusion}
        </p>
      </Section>

      {/* 6. TAXES */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle>{taxes.title}</SectionTitle>
          <p className="text-corporate-700 mb-6">{taxes.intro}</p>
          <ul className="space-y-3 mb-8">
            {taxes.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-corporate-800">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-corporate-50 p-4 border-l-4 border-corporate-500 text-corporate-700 text-sm">
            {taxes.conclusion}
          </div>
        </div>
      </Section>

      {/* 7. COMPARISON TABLE */}
      <Section dark>
        <SectionTitle>{comparison.title}</SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-sm overflow-hidden">
            <thead>
              <tr className="bg-corporate-900 text-white">
                {comparison.headers.map((header, index) => (
                  <th key={index} className="p-4 border-b border-corporate-800 font-medium text-sm md:text-base">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-corporate-100">
              {comparison.rows.map((row, rowIndex) => (
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
      </Section>

      {/* 8. WHO */}
      <Section>
        <div className="max-w-3xl">
          <SectionTitle>{who.title}</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            {who.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-corporate-50 border border-corporate-100 rounded-sm">
                 <Users size={18} className="text-corporate-500" />
                 <span className="text-corporate-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. RISKS */}
      <Section dark>
        <div className="max-w-3xl">
          <SectionTitle>{risks.title}</SectionTitle>
          <div className="bg-white p-8 rounded-sm border border-corporate-200 shadow-sm border-l-4 border-amber-500">
            <p className="text-corporate-700 mb-4">{risks.intro}</p>
            <ul className="space-y-3 mb-6">
              {risks.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-corporate-800">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-corporate-600 italic text-sm">
              {risks.conclusion}
            </p>
          </div>
        </div>
      </Section>

      {/* 10. CTA */}
      <ContactBlock />
    </Layout>
  );
};

export default DengiDlyaBiznesa;