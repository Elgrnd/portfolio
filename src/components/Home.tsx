import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bonjour, je suis [Votre Nom]
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Étudiant en BUT Informatique passionné par le développement web
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Biographie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">À propos de moi</h3>
              <p className="text-gray-600">
                [Votre biographie ici - Décrivez votre parcours, vos motivations et votre passion pour l'informatique]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Centres d'intérêt</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Développement Web</li>
                <li>Intelligence Artificielle</li>
                <li>Cybersécurité</li>
                <li>[Autres centres d'intérêt]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Parcours de Formation</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">BUT Informatique</h3>
              <p className="text-gray-600">2023 - Présent</p>
              <p className="text-gray-600">IUT de [Ville]</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;