import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { ContactBlock } from '../components/ContactBlock';
import { useSEO } from '../hooks/useSEO';
import { 
  Calculator, 
  Send, 
  Info, 
  PieChart, 
  Coins, 
  TrendingDown,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorPage: React.FC = () => {
  useSEO(
    "Лизинговый калькулятор онлайн — расчёт возвратного лизинга | Cashflow",
    "Рассчитайте условия возвратного лизинга для бизнеса. Калькулятор платежей, экономия на налогах (НДС 22%, прибыль 25%), график выплат. Без банков.",
    "/calculator"
  );

  // Default values
  const [price, setPrice] = useState(5200000);
  const [advanceRate, setAdvanceRate] = useState(10); // %
  const [term, setTerm] = useState(60); // months

  // Calculated values
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalCost: 0,
    contractAmount: 0,
    vatRefund: 0,
    taxSavings: 0,
    advanceAmount: 0
  });

  useEffect(() => {
    // Financial Constants
    const VAT_RATE = 0.22; // 22%
    const PROFIT_TAX_RATE = 0.25; // 25%
    const ANNUAL_RATE = 0.19; // Estimated annual appreciation rate for calculation

    // 1. Advance Amount
    const advanceAmount = Math.round(price * (advanceRate / 100));

    // 2. Financed Amount (Body of lease)
    const financedAmount = price - advanceAmount;

    // 3. Monthly Payment Calculation (Annuity estimation)
    // Monthly interest rate
    const monthlyRate = ANNUAL_RATE / 12;
    // Annuity coefficient
    const k = (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    
    const monthlyPayment = Math.round(financedAmount * k);

    // 4. Contract Amount (Advance + Sum of all payments)
    const contractAmount = advanceAmount + (monthlyPayment * term);

    // 5. Total Cost (Overpayment is implied in contract amount vs price)
    // In leasing "Total Cost" usually refers to the Contract Amount
    
    // 6. VAT Refund
    // Formula: Contract Amount includes VAT. Refund = Contract / (1 + VAT) * VAT
    const vatRefund = Math.round((contractAmount / (1 + VAT_RATE)) * VAT_RATE);

    // 7. Profit Tax Savings
    // Expenses (excl. VAT) = (Contract Amount - VAT Refund)
    // Savings = Expenses * Profit Tax Rate
    const expenses = contractAmount - vatRefund;
    const taxSavings = Math.round(expenses * PROFIT_TAX_RATE);

    setResults({
      monthlyPayment,
      totalCost: contractAmount,
      contractAmount,
      vatRefund,
      taxSavings,
      advanceAmount
    });

  }, [price, advanceRate, term]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(val);

  const telegramCalcUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг. Я сделал расчёт на сайте Cashflow.");

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-corporate-900 pt-24 pb-4 border-b border-corporate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-xs text-corporate-400 uppercase tracking-wider space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <ChevronRight size={12} />
              <span className="text-white">Калькулятор</span>
           </div>
        </div>
      </div>

      <div className="bg-corporate-50 min-h-screen py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-corporate-900 mb-4">
              Лизинговый калькулятор онлайн
            </h1>
            <p className="text-xl text-corporate-600 font-light max-w-2xl mx-auto">
              Рассчитайте ориентировочные условия возвратного лизинга для бизнеса с учетом налоговых преференций 2025 года.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CONTROLS */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-sm shadow-sm border border-corporate-200">
              <div className="space-y-10">
                
                {/* Price Input */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-medium text-corporate-500 uppercase tracking-wide">
                      Стоимость актива (с НДС)
                    </label>
                    <div className="text-right">
                       <input 
                         type="number"
                         value={price}
                         onChange={(e) => setPrice(Number(e.target.value))}
                         className="text-right font-bold text-2xl text-corporate-900 border-b border-corporate-200 focus:border-emerald-500 outline-none w-48 py-1"
                       />
                       <span className="text-corporate-400 ml-2">₽</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="20000000" 
                    step="100000"
                    value={price} 
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-corporate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-700 transition-all"
                  />
                  <div className="flex justify-between text-xs text-corporate-400 mt-2 font-medium">
                    <span>1 млн ₽</span>
                    <span>20 млн ₽</span>
                  </div>
                </div>

                {/* Advance Input */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-medium text-corporate-500 uppercase tracking-wide">
                      Аванс ({advanceRate}%)
                    </label>
                    <div className="text-right font-bold text-2xl text-corporate-900">
                      {formatCurrency(results.advanceAmount)}
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    step="1"
                    value={advanceRate} 
                    onChange={(e) => setAdvanceRate(Number(e.target.value))}
                    className="w-full h-2 bg-corporate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-700 transition-all"
                  />
                  <div className="flex justify-between text-xs text-corporate-400 mt-2 font-medium">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Term Input */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-medium text-corporate-500 uppercase tracking-wide">
                      Срок лизинга
                    </label>
                    <div className="text-right font-bold text-2xl text-corporate-900">
                      {term} мес.
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="12" 
                    max="60" 
                    step="1"
                    value={term} 
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full h-2 bg-corporate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-700 transition-all"
                  />
                  <div className="flex justify-between text-xs text-corporate-400 mt-2 font-medium">
                    <span>12 мес.</span>
                    <span>60 мес.</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="bg-corporate-50 p-6 rounded-sm flex gap-4 text-sm text-corporate-600">
                  <Info className="flex-shrink-0 text-corporate-400" />
                  <p>
                    Параметры сделки могут быть скорректированы после анализа финансового состояния компании и оценки ликвидности предмета лизинга.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: RESULTS */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-corporate-900 text-white p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden">
                {/* Decorative bg element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-lg font-medium text-corporate-300 mb-8 flex items-center gap-2">
                  <Calculator size={18} />
                  Наше предложение
                </h3>

                <div className="mb-10">
                  <span className="block text-sm text-corporate-400 uppercase tracking-wider mb-2">
                    Ежемесячный платёж
                  </span>
                  <span className="block text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {formatCurrency(results.monthlyPayment)}
                  </span>
                  <span className="text-xs text-emerald-400 mt-2 block">
                    Включая НДС 22%
                  </span>
                </div>

                <div className="space-y-4 border-t border-corporate-700 pt-6 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-corporate-300">Сумма договора лизинга</span>
                    <span className="font-medium">{formatCurrency(results.contractAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-corporate-300 flex items-center gap-1.5">
                      <TrendingDown size={14} className="text-emerald-500"/> Возмещение НДС (22%)
                    </span>
                    <span className="font-medium text-emerald-300">{formatCurrency(results.vatRefund)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-corporate-300 flex items-center gap-1.5">
                      <PieChart size={14} className="text-emerald-500"/> Экономия по налогу на прибыль (25%)
                    </span>
                    <span className="font-medium text-emerald-300">{formatCurrency(results.taxSavings)}</span>
                  </div>
                </div>

                <a 
                  href={telegramCalcUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-sm transition-all duration-200 shadow-lg hover:shadow-emerald-900/20 transform hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  Получить консультацию
                </a>
                
                <p className="text-[10px] text-corporate-500 mt-6 text-center leading-normal">
                  Расчёт является ориентировочным и не является публичной офертой (ст. 437 ГК РФ).
                </p>
              </div>

              {/* Benefits Summary */}
              <div className="bg-white p-6 rounded-sm border border-corporate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-emerald-50 rounded-full text-emerald-700">
                     <Coins size={20} />
                   </div>
                   <h4 className="font-bold text-corporate-900">Налоговая выгода</h4>
                </div>
                <p className="text-sm text-corporate-600 mb-2">
                  Общая сумма налоговых преференций за весь срок лизинга:
                </p>
                <p className="text-2xl font-bold text-emerald-700">
                  {formatCurrency(results.vatRefund + results.taxSavings)}
                </p>
              </div>

            </div>
          </div>

          {/* SEO Text Block */}
          <Section className="mt-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-corporate-700 text-lg leading-relaxed font-light">
                Лизинговый калькулятор Cashflow помогает бизнесу оценить выгоду возвратного лизинга, сравнить экономическую эффективность инструмента с классическим кредитованием и принять взвешенное решение. Мы учитываем актуальные налоговые ставки РФ, чтобы вы видели реальную стоимость денег для вашего бизнеса.
              </p>
            </div>
          </Section>

        </div>
      </div>
      
      {/* Fallback Contact Block if needed, though Calculator has one */}
      {/* <ContactBlock /> */}
    </Layout>
  );
};

export default CalculatorPage;