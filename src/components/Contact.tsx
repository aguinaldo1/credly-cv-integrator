
import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare, MapPin, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    const email = "aguinaldoamerico2@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Email copiado!",
        description: "O email foi copiado para sua área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o email.",
        variant: "destructive",
      });
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "aguinaldoamerico2@gmail.com",
      href: "mailto:aguinaldoamerico2@gmail.com",
      action: copyEmail,
      color: "text-red-600 bg-red-50 hover:bg-red-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aguinaldo-sre-devops",
      href: "https://www.linkedin.com/in/aguinaldo-sre-devops/",
      color: "text-blue-600 bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aguinaldo1",
      href: "https://github.com/aguinaldo1",
      color: "text-gray-700 bg-gray-50 hover:bg-gray-100"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vamos trabalhar juntos?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aberto para oportunidades, freelas e trocas de ideia. 
            Entre em contato e vamos construir algo incrível!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <div 
              key={index}
              className={`${contact.color} p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
              onClick={contact.action || (() => window.open(contact.href, '_blank'))}
            >
              <div className="text-center">
                <contact.icon className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                <p className="text-sm opacity-80 break-all">{contact.value}</p>
                {contact.action && (
                  <div className="mt-3 flex items-center justify-center">
                    {copied ? (
                      <Check className="w-4 h-4 mr-1" />
                    ) : (
                      <Copy className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-xs">
                      {copied ? 'Copiado!' : 'Clique para copiar'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:aguinaldoamerico2@gmail.com"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            <span>Enviar Email</span>
          </a>
          
          <a
            href="https://wa.me/5561982955500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-600 mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">Brasília - DF, Brasil</span>
          </div>
          <p className="text-sm text-gray-500">
            Disponível para projetos remotos e presenciais
          </p>
        </div>
      </div>
    </section>
  );
};
