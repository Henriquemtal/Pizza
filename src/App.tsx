import React, { useEffect, useState } from 'react';
import { Timer, Gift, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

function App() {
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#FFF9F9] p-4">
      <div className="max-w-3xl mx-auto">
        {/* Urgency Bar */}
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white p-4 text-center font-bold text-lg rounded-lg shadow-lg mb-6 animate-pulse">
          <div className="flex items-center justify-center gap-2">
            <Timer className="w-6 h-6" />
            <span>ÚLTIMOS 15 EBOOKS DISPONÍVEIS!</span>
          </div>
          <div className="bg-black text-yellow-400 px-6 py-3 rounded-lg inline-block my-2 font-mono text-2xl tracking-wider">
            {formatTime(countdown.hours)}:{formatTime(countdown.minutes)}:{formatTime(countdown.seconds)}
          </div>
          <div className="text-sm">Preço volta a R$47,90 quando o tempo acabar!</div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 leading-tight">
          Como <span className="text-red-600">Transformei Minha Cozinha</span> numa Pizzaria Lucrativa em 2025 <u>Sem Sair de Casa</u>
        </h1>

        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
          alt="Pizza caseira lucrativa"
          className="w-full max-w-2xl mx-auto rounded-xl border-4 border-yellow-400 shadow-xl mb-10"
        />

        {/* Benefits Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">O que você vai <u>dominar</u> com este guia:</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span><strong>Método passo a passo</strong> para começar com menos de R$100 - mesmo sem experiência</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span><strong>5 apps grátis</strong> que substituem uma loja física</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span><strong>Segredos do algoritmo</strong> para aparecer no topo do iFood</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span><strong>Planilha automática</strong> que calcula lucros e custos</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span><strong>7 receitas infalíveis</strong> com ingredientes baratos</span>
            </li>
          </ul>
        </div>

        {/* Bonus Section */}
        <div className="bg-[#FFF9E6] border-2 border-dashed border-yellow-400 p-6 rounded-xl text-center mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            HOJE você leva <span className="text-red-700">3 BÔNUS EXCLUSIVOS</span>:
          </h3>
          <div className="max-w-xl mx-auto text-left space-y-4 text-lg">
            <div className="flex items-center gap-2">
              <Gift className="text-yellow-600 w-6 h-6 flex-shrink-0" />
              <span><strong>Lista Secreta de Fornecedores</strong> - 30% mais baratos</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="text-yellow-600 w-6 h-6 flex-shrink-0" />
              <span><strong>Modelos Prontos de Cardápio</strong> - Edite em 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="text-yellow-600 w-6 h-6 flex-shrink-0" />
              <span><strong>Acesso ao Grupo VIP</strong> - Tire dúvidas com outros pizzaiolos</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://pay.hotmart.com/P98939369V"
          className="block bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-6 px-4 rounded-xl text-xl font-bold no-underline mx-auto max-w-xl mb-8 shadow-lg transform hover:-translate-y-1 transition-all hover:shadow-xl"
        >
          🍕 SIM, QUERO MEU GUIA POR R$25,90! 🍕
        </a>

        {/* Guarantee */}
        <div className="text-center text-gray-600 space-y-2 mb-8">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <strong>Garantia Incondicional de 7 Dias</strong> - Devolução garantida!
          </div>
          <div className="flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Pagamento seguro via PIX, cartão ou boleto</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;