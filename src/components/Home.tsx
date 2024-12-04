const Home = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Bonjour, je suis Galdric DESERT-CAPARROS
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
                                Originaire de Vendée et actuellement installé à Perpignan, j'ai toujours été passionné
                                par <strong>l'informatique</strong>
                                et le <strong>développement</strong>. Ce domaine m'a tellement attiré que j'ai décidé de
                                m'installer à
                                Montpellier pour suivre une formation en <strong>BUT Informatique</strong>, avec
                                l'ambition d'obtenir,
                                par la suite, un diplôme <strong>d'ingénieur</strong>.
                                <br></br><br></br>

                                En dehors de mes études, je suis un grand amateur de <strong>jeux vidéo</strong> et
                                j'aime consacrer du
                                temps au <strong>développement de projets personnels</strong>. J'ai également pratiqué
                                le <strong>football</strong>
                                pendant 10 ans, ce qui m'a permis d'acquérir un <strong>esprit d'équipe</strong> et
                                de <strong>persévérance</strong>.
                                Au lycée, j'ai suivi les spécialités <strong>Maths</strong> et <strong>NSI</strong>,
                                renforçant ainsi ma
                                passion pour <strong>l'informatique</strong> et la <strong>logique</strong>.
                                <br></br><br></br>

                                Je suis toujours en quête de nouveaux défis et de projets qui me permettront de
                                continuer à <strong>évoluer</strong>
                                dans ce domaine en constante innovation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Centres d'intérêt</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Développement Web</li>
                                <li>Développement d'application</li>
                                <li>Football</li>
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
                            <p className="text-gray-600">2023 - 2026</p>
                            <p className="text-gray-600">IUT de Montpellier - Sète</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Baccalauréat général</h3>
                            <p className="text-gray-400">Mention bien</p>
                            <p className="text-gray-600">2020 - 2023</p>
                            <p className="text-gray-600">Lycée Arago</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;