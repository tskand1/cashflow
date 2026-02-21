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
      <div className="bg-corporate-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-white">Политика конфиденциальности</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-slate">
          <p className="text-corporate-600 mb-8">Дата публикации: 01.01.2025</p>
          
          <h3>1. Общие положения</h3>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах, пользующихся сервисами сайта Cashflow.
          </p>

          <h3>2. Сбор данных</h3>
          <p>
            Мы не собираем персональные данные пользователей через формы на сайте. Сайт функционирует в режиме "только чтение" и предоставляет информацию. Взаимодействие с пользователями происходит исключительно через сторонние мессенджеры (Telegram) по инициативе пользователя.
          </p>

          <h3>3. Файлы Cookie</h3>
          <p>
            Сайт использует технологию cookie для улучшения качества обслуживания, персонализации контента и анализа трафика. Вы можете отключить cookie в настройках вашего браузера.
          </p>

          <h3>4. Контактная информация</h3>
          <p>
            Все предложения или вопросы по поводу настоящей Политики следует сообщать на электронную почту info@cashflow.ru.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;