
import React, { useEffect, useState } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Badge {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  imageUrl: string;
  badgeUrl: string;
  description?: string;
}

export const Certifications = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Badges estáticas como fallback
  const staticBadges: Badge[] = [
    {
      id: '1',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issueDate: '2023',
      imageUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      badgeUrl: 'https://www.credly.com/badges/aws-certified-cloud-practitioner',
      description: 'Foundational understanding of AWS cloud concepts and services'
    },
    {
      id: '2',
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      issueDate: '2023',
      imageUrl: 'https://images.credly.com/size/340x340/images/8d34d489-84bf-4861-a4a0-9e9d68318c5c/image.png',
      badgeUrl: 'https://www.credly.com/badges/docker-certified-associate',
      description: 'Expertise in containerization with Docker technology'
    },
    {
      id: '3',
      title: 'Chaos Engineering Professional',
      issuer: 'Chaos Engineering Community',
      issueDate: '2023',
      imageUrl: 'https://images.credly.com/size/340x340/images/4e3d6f9f-55d3-4063-8ac5-8e7a4dcea81b/image.png',
      badgeUrl: 'https://www.credly.com/badges/chaos-engineering-professional',
      description: 'Advanced knowledge in system resilience and failure testing'
    },
    {
      id: '4',
      title: 'Oracle Certified Java Programmer',
      issuer: 'Oracle',
      issueDate: '2022',
      imageUrl: 'https://images.credly.com/size/340x340/images/a5c8e6b5-f9c3-42e7-9f02-8d2b5c67b467/image.png',
      badgeUrl: 'https://www.credly.com/badges/oracle-certified-java-programmer',
      description: 'Professional level Java programming certification'
    }
  ];

  // Função para buscar badges do Credly (simulada)
  const fetchCredlyBadges = async () => {
    setLoading(true);
    try {
      // Simular chamada à API do Credly
      // Em produção, você usaria a API oficial do Credly ou um proxy backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Por enquanto, usar badges estáticas
      setBadges(staticBadges);
      
      toast({
        title: "Certificações carregadas",
        description: "Certificações carregadas com sucesso!",
      });
    } catch (error) {
      console.error('Erro ao carregar badges:', error);
      setBadges(staticBadges); // Fallback para badges estáticas
      
      toast({
        title: "Aviso",
        description: "Exibindo certificações em modo offline.",
        variant: "default",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCredlyBadges();
  }, []);

  return (
    <section id="certificacoes" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Certificações Profissionais
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Carregando certificações...</span>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {badges.map((badge, index) => (
                <div 
                  key={badge.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4">
                      <img 
                        src={badge.imageUrl} 
                        alt={badge.title}
                        className="w-24 h-24 mx-auto rounded-lg shadow-md object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/96x96?text=Cert';
                        }}
                      />
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                      {badge.title}
                    </h3>
                    
                    <p className="text-blue-600 font-semibold mb-2 text-sm">
                      {badge.issuer}
                    </p>
                    
                    <div className="flex items-center justify-center text-gray-500 text-xs mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{badge.issueDate}</span>
                    </div>
                    
                    {badge.description && (
                      <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                        {badge.description}
                      </p>
                    )}
                    
                    <a
                      href={badge.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xs"
                    >
                      <Award className="w-3 h-3" />
                      <span>Ver Certificação</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Link para perfil completo */}
            <div className="text-center">
              <a
                href="https://www.credly.com/users/aguinaldo-americo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Award className="w-5 h-5" />
                <span>Ver todas minhas certificações no Credly</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
