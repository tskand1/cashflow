import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Building2, Mail, FileText } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const Contacts: React.FC = () => {
  useSEO(
    "Контакты и реквизиты — Cashflow",
    "Контактная информация сервиса Cashflow. Реквизиты, электронная почта для обращений.",
    "/contacts"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-corporate-900 mb-8 font-display tracking-tight">Контакты</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-[40px] p-10 md:p-16 shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold text-corporate-900 mb-12 flex items-center gap-4 font-display relative z-10">
              <div className="p-3 bg-gray-50 rounded-xl">
                <Building2 className="text-accent w-8 h-8" />
              </div>
              Информация о владельце
            </h2>
            
            <div className="space-y-10 text-corporate-700 relative z-10">
              <div>
                <p className="text-[10px] text-corporate-400 uppercase tracking-[0.3em] font-bold mb-3">Наименование</p>
                <p className="font-bold text-3xl text-corporate-900 font-display">ИП Иванов Иван Иванович (Placeholder)</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-[0.3em] font-bold mb-3">ИНН</p>
                  <p className="font-bold text-2xl text-corporate-900 font-display tracking-wider">770000000000</p>
                </div>

                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-[0.3em] font-bold mb-3">ОГРНИП</p>
                  <p className="font-bold text-2xl text-corporate-900 font-display tracking-wider">320770000000000</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-12">
                <h3 className="text-2xl font-bold text-corporate-900 mb-8 flex items-center gap-4 font-display">
                   <div className="p-3 bg-gray-50 rounded-xl">
                    <Mail className="text-accent w-6 h-6" />
                   </div>
                   Связь
                </h3>
                <p className="mb-6 text-lg text-corporate-500">Для юридически значимых сообщений и обращений:</p>
                <a href="mailto:info@cashflow.ru" className="text-accent hover:text-accent-hover font-bold text-4xl font-display transition-colors border-b-4 border-accent/20 hover:border-accent">
                  info@cashflow.ru
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex items-start gap-6 p-10 bg-gray-50 rounded-3xl text-base text-corporate-500 border border-gray-100 shadow-sm">
             <FileText className="flex-shrink-0 text-accent w-8 h-8" />
             <p className="leading-relaxed italic">
               Сайт является информационным ресурсом. Мы не оказываем финансовых услуг, не выдаем кредиты и не заключаем договоры лизинга напрямую. Все сделки заключаются непосредственно с лизинговыми компаниями-партнерами.
             </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contacts;