
import React, { useState } from 'react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    { name: 'AWS', category: 'cloud', level: 90 },
    { name: 'OCI', category: 'cloud', level: 85 },
    { name: 'Docker', category: 'devops', level: 95 },
    { name: 'Kubernetes', category: 'devops', level: 85 },
    { name: 'Terraform', category: 'devops', level: 90 },
    { name: 'Prometheus', category: 'monitoramento', level: 95 },
    { name: 'Grafana', category: 'monitoramento', level: 95 },
    { name: 'DataDog', category: 'monitoramento', level: 90 },
    { name: 'AppDynamics', category: 'monitoramento', level: 85 },
    { name: 'Linux', category: 'sistema', level: 95 },
    { name: 'Shell Script', category: 'sistema', level: 90 },
    { name: 'Chaos Engineering', category: 'chaos', level: 80 },
    { name: 'Java', category: 'linguagem', level: 85 },
    { name: 'Python', category: 'linguagem', level: 80 },
    { name: 'TypeScript', category: 'linguagem', level: 75 }
  ];

  const categories = [
    { key: 'all', label: 'Todas', color: 'bg-gray-600' },
    { key: 'cloud', label: 'Cloud', color: 'bg-blue-600' },
    { key: 'devops', label: 'DevOps', color: 'bg-green-600' },
    { key: 'monitoramento', label: 'Monitoramento', color: 'bg-purple-600' },
    { key: 'sistema', label: 'Sistema', color: 'bg-orange-600' },
    { key: 'chaos', label: 'Chaos Eng.', color: 'bg-red-600' },
    { key: 'linguagem', label: 'Linguagens', color: 'bg-indigo-600' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      cloud: 'bg-blue-100 text-blue-800',
      devops: 'bg-green-100 text-green-800',
      monitoramento: 'bg-purple-100 text-purple-800',
      sistema: 'bg-orange-100 text-orange-800',
      chaos: 'bg-red-100 text-red-800',
      linguagem: 'bg-indigo-100 text-indigo-800'
    };
    return categoryMap[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="habilidades" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.key
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(skill.category)}`}>
                  {skill.category}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiência</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhuma habilidade encontrada nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};
