import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { useSEO } from '../hooks/useSEO';

const DataProcessing: React.FC = () => {
  useSEO(
    "Политика обработки данных — Cashflow",
    "Политика в отношении обработки персональных данных.",
    "/data-processing"
  );

  return (
    <Layout>
      <div className="bg-corporate-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-white">Политика обработки персональных данных</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-slate">
          <p className="text-corporate-600 mb-8">Дата публикации: 01.01.2025</p>
          
          <h3>1. Введение</h3>
          <p>
            Настоящая политика разработана в соответствии с Федеральным законом от 27.07.2006 г. № 152-ФЗ «О персональных данных».
          </p>

          <h3>2. Цели обработки</h3>
          <p>
            Сайт Cashflow является информационным ресурсом и не производит сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных пользователей.
          </p>

          <h3>3. Безопасность</h3>
          <p>
            Мы предпринимаем необходимые организационные и технические меры для защиты любой информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default DataProcessing;