import React from 'react';
import { Send, ShieldCheck, ExternalLink } from 'lucide-react';

export const ContactBlock: React.FC = () => {
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  return (
    <div id="contact" className="bg-corporate-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Получить консультацию по возвратному лизингу
        </h2>
        <p className="text-corporate-300 mb-10 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Мы не собираем ваши данные на сайте. Нажмите на кнопку ниже, чтобы перейти в защищенный чат Telegram и обсудить детали сделки с экспертом напрямую.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-6">
          <a 
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-corporate-900 font-bold py-4 px-8 rounded-sm hover:bg-corporate-50 transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Send size={20} className="text-[#229ED9]" /> 
            <span>Получить консультацию в Telegram</span>
            <ExternalLink size={16} className="text-corporate-400 ml-1" />
          </a>

          <div className="max-w-lg mx-auto bg-corporate-800/50 rounded-sm p-4 border border-corporate-700/50 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-corporate-400 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-xs text-corporate-300 leading-relaxed">
                  <strong>Конфиденциально:</strong> Сайт не содержит форм ввода и не осуществляет сбор, хранение или обработку персональных данных.
                </p>
                <p className="text-[10px] text-corporate-500 mt-1">
                  Дальнейшее взаимодействие происходит в мессенджере Telegram по инициативе пользователя.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};