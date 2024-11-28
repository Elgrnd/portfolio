import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Projets Professionnels</h1>

        <div className="space-y-8">
          {/* Vision Section */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Ma Vision</h2>
            <p className="text-gray-600 mb-6">
              [Décrivez votre vision professionnelle et vos objectifs à long terme]
            </p>
          </section>

          {/* Future Projects */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Projets Envisagés</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Projet 1</h3>
                <p className="text-gray-600">
                  [Description détaillée du premier projet professionnel envisagé]
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
                <p className="text-gray-600">
                  [Description détaillée du deuxième projet professionnel envisagé]
                </p>
              </div>
            </div>
          </section>

          {/* Skills Development */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Développement des Compétences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Compétences Techniques</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Développement Full-Stack</li>
                  <li>Architecture Cloud</li>
                  <li>DevOps</li>
                  {/* Add more skills */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Gestion de Projet</li>
                  <li>Communication</li>
                  <li>Travail d'équipe</li>
                  {/* Add more soft skills */}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;