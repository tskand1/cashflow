import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy: React.FC = () => {
  useSEO(
    "Политика конфиденциальности — Cashflow",
    "Политика конфиденциальности сервиса Cashflow.",
    "/privacy-policy"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-900 mb-8 font-display tracking-tight">Политика конфиденциальности</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-corporate-400 font-bold uppercase tracking-widest text-xs mb-12">Дата публикации: 01.01.2025</p>
              
              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">1. Общие положения</h3>
              <p className="text-corporate-600 leading-relaxed mb-10">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах, пользующихся сервисами сайта Cashflow.
              </p>

              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">2. Сбор данных</h3>
              <p className="text-corporate-600 leading-relaxed mb-10">
                Мы не собираем персональные данные пользователей через формы на сайте. Сайт функционирует в режиме "только чтение" и предоставляет информацию. Взаимодействие с пользователями происходит исключительно через сторонние мессенджеры (Telegram) по инициативе пользователя.
              </p>

              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">3. Файлы Cookie</h3>
              <p className="text-corporate-600 leading-relaxed mb-10">
                Сайт использует технологию cookie для улучшения качества обслуживания, персонализации контента и анализа трафика. Вы можете отключить cookie в настройках вашего браузера.
              </p>

              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">4. Контактная информация</h3>
              <p className="text-corporate-600 leading-relaxed">
                Все предложения или вопросы по поводу настоящей Политики следует сообщать на электронную почту info@cashflow.ru.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;