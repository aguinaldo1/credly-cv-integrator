
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      period: "2022 - 2024",
      company: "NTT DATA BRASIL",
      role: "DevOps/SRE",
      location: "Brasil",
      description: "Aplicação de práticas de SRE com monitoramento de aplicações através de métricas, traces e logs.",
      technologies: ["AppDynamics", "Splunk", "Grafana", "Prometheus", "DataDog", "AWS CloudWatch", "Terraform"],
      projects: [
        {
          client: "Itaú - Projeto PIX",
          description: "Práticas de SRE com monitoramento através de AppDynamics, Splunk, AppMetrics, Grafana, Prometheus. Provisionamento de métricas e alarmes na AWS CloudWatch com Terraform."
        },
        {
          client: "Ambev - Logística",
          description: "Monitoramento e atendimento de tickets de chamados, sustentação de aplicação logística, análise de falhas sistêmicas, consultas via DataDog, integração SAP4/Hana."
        }
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">Tecnologias utilizadas:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Projetos principais:</h5>
                <div className="space-y-4">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-4 border-blue-200 pl-4">
                      <h6 className="font-semibold text-gray-800 mb-2">{project.client}</h6>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
