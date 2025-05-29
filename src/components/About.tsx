
import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sempre acreditei que tecnologia é mais do que código — é ferramenta de transformação. 
              Foi com esse olhar que fiz minha transição da engenharia civil para a área de tecnologia, 
              onde desempenho, resiliência e sustentabilidade se encontram.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Atuei como SRE no Itaú e como Analista de Sustentabilidade na NTT DATA, unindo práticas 
              de DevOps, observabilidade e automação com visão de negócio. Domino ferramentas como 
              Prometheus, Grafana, Terraform, AppDynamics, além de ambientes AWS e OCI.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Minha formação em Big Data e Inteligência Analítica, somada a certificações em 
              Chaos Engineering, Cloud, SRE e liderança, me torna um profissional que busca 
              entender tanto o comportamento dos sistemas quanto das pessoas que os constroem.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Foco em Resultados</h3>
              <p className="text-gray-600">
                Antecipar falhas, reduzir desperdícios e escalar aplicações com eficiência.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação Contínua</h3>
              <p className="text-gray-600">
                Aplicação de práticas modernas de observabilidade e automação.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Colaboração</h3>
              <p className="text-gray-600">
                Liderança técnica com foco na experiência do cliente e usuário final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
