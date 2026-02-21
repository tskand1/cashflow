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
      <div className="bg-corporate-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Контакты</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-corporate-200 rounded-sm p-8 shadow-sm">
            <h2 className="text-xl font-bold text-corporate-900 mb-6 flex items-center gap-2">
              <Building2 className="text-corporate-500" />
              Информация о владельце
            </h2>
            
            <div className="space-y-6 text-corporate-700">
              <div>
                <p className="text-sm text-corporate-500 uppercase tracking-wide mb-1">Наименование</p>
                <p className="font-medium text-lg">ИП Иванов Иван Иванович (Placeholder)</p>
              </div>
              
              <div>
                <p className="text-sm text-corporate-500 uppercase tracking-wide mb-1">ИНН</p>
                <p className="font-medium">770000000000</p>
              </div>

              <div>
                <p className="text-sm text-corporate-500 uppercase tracking-wide mb-1">ОГРНИП</p>
                <p className="font-medium">320770000000000</p>
              </div>

              <div className="border-t border-corporate-100 pt-6">
                <h3 className="text-lg font-bold text-corporate-900 mb-4 flex items-center gap-2">
                   <Mail className="text-corporate-500" />
                   Связь
                </h3>
                <p className="mb-2">Для юридически значимых сообщений и обращений:</p>
                <a href="mailto:info@cashflow.ru" className="text-emerald-600 hover:text-emerald-700 font-medium text-lg">
                  info@cashflow.ru
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-start gap-3 p-4 bg-corporate-50 rounded-sm text-sm text-corporate-600">
             <FileText className="flex-shrink-0 text-corporate-400" />
             <p>
               Сайт является информационным ресурсом. Мы не оказываем финансовых услуг, не выдаем кредиты и не заключаем договоры лизинга напрямую. Все сделки заключаются непосредственно с лизинговыми компаниями-партнерами.
             </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contacts;