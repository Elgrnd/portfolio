const Projects = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Projets Professionnels</h1>

        <div className="space-y-8">
          {/* Future Projects */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Projets Envisagés</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Projet 1</h3>
                <p className="text-gray-600">
                  En premier projet, j'aimerais intégrer une école d'ingénieur afin de devenir ingénieur développeur en informatique
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
                <p className="text-gray-600">
                  En second projet, j'aimerais intégrer l'école des douanes de Tourcoing afin de devenir inspecteur PSE.
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
                  <li>Développement d'application</li>
                  {/* Add more skills */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Gestion de Projet</li>
                  <li>Communication</li>
                  <li>Travail d'équipe</li>
                  <li>Méthode agile</li>
                  {/* Add more soft skills */}
                </ul>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Contactez-moi</h2>
            <p className="text-gray-600 mb-6">
              Vous pouvez me contacter :
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li><a href="mailto:galdric.dc@laposte.net">galdric.dc@laposte.net</a></li>
              <li><a href="tel:+33786883432">07 86 88 34 32</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Projects;