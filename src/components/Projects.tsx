
import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Observabilidade",
      description: "Dashboard com métricas, logs, e traces aplicados para monitoramento completo de aplicações.",
      technologies: ["Python", "Grafana", "Prometheus", "AWS"],
      github: "https://github.com/aguinaldo1/Lab_Desafio-Observ",
      category: "DevOps"
    },
    {
      title: "Agenda de Aniversários",
      description: "App agenda de aniversariantes do mês que notifica como lembrete via WhatsApp e e-mail.",
      technologies: ["HTML", "CSS", "TypeScript", "IA"],
      github: "https://github.com/aguinaldo1/igreja-celebracoes-mensais",
      demo: "https://igreja-celebracoes-mensais.vercel.app/",
      category: "Web App"
    },
    {
      title: "Conversor de Moedas",
      description: "Projeto em Java orientado a objetos que realiza conversão de moedas em tempo real utilizando a API ExchangeRate-API.",
      technologies: ["Java", "API REST", "OOP"],
      github: "https://github.com/aguinaldo1/Conversor-De-Moedas",
      category: "Backend"
    },
    {
      title: "Calculadora Básica",
      description: "Calculadora de linha de comando desenvolvida com base nos princípios da Programação Orientada a Objetos.",
      technologies: ["Java", "OOP", "Console"],
      github: "https://github.com/aguinaldo1/projCalculadora",
      category: "Backend"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
