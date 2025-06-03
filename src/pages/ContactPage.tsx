import { Mail, Phone, MapPin, Github as GitHub, Linkedin, FileText, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Je suis à la recherche d'une alternance pour ma 3e année de BUT Informatique
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:your.email@example.com" className="hover:text-blue-600 transition-colors">
                        galdric.dc@laposte.net
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                    <p className="text-gray-600 mt-1">+33 7 86 88 34 32</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Localisation</h3>
                    <p className="text-gray-600 mt-1">Montpellier, France</p>
                  </div>
                </div>
              </div>

              {/* CV Download */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Téléchargez mon CV</h2>
                <a 
                  href="/assets/CV.pdf"
                  download="YourName_CV.pdf"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-blue-700 transition-colors shadow-md"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Téléchargez-moi !
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajoutez-moi !</h2>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://github.com/Elgrnd"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-gray-700 transition-colors"
                  >
                    <GitHub className="mr-2 h-5 w-5" />
                    Profil Github
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/galdric-desert-caparros-5869ab2aa/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Profil Linkedin
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message !</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="votre.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="De quoi voulez-vous parler ?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Votre message ici..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md w-full md:w-auto"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;