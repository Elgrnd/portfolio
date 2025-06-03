import { CheckCircle, ArrowUpRight, BookOpen } from 'lucide-react';
import { competencies } from '../data/competencies';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Porfolio d'apprentissage</h1>
          <p className="text-xl max-w-3xl mx-auto">
              Mon parcours d'apprentissage et d'acquisition de compétences en adéquation avec le référentiel de compétences BUT Informatique.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Référentiel de compétences BUT Informatique</h2>
          <p className="text-gray-600 mb-8">
              Le Bachelor Universitaire de Technologie (BUT) en Informatique s'articule autour de six compétences fondamentales qui guident le cursus et les acquis d'apprentissage. Les trois compétences suivantes sont maîtrisées au niveau 2, attestant de ma maîtrise de ces domaines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {competencies.map((competency) => (
              <div key={competency.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{competency.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{competency.description}</p>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-1" />
                  <span className="font-medium">Niveau 2 atteint</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Competencies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {competencies.map((competency, index) => (
            <div key={competency.id} className={`mb-16 ${index !== competencies.length - 1 ? "border-b border-gray-200 pb-16" : ""}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{competency.title}</h2>
              <p className="text-gray-600 mb-8">{competency.fullDescription}</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Preuve de maîtrise</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {competency.evidence.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir la preuve
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compétences acquises</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {competency.skills.map((skill, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;