import {GraduationCap, Briefcase, Heart, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:w-2/3">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
                            Bonjour, je suis <span className="text-yellow-300">Galdric DESERT-CAPARROS </span>
                        </h1>
                        <p className="text-xl mb-6 text-blue-100">
                            Étudiant en 2e année de BUT Informatique à Montpellier
                        </p>
                        <p className="text-lg mb-8 max-w-2xl">
                            Bienvenue dans mon portfolio ! Je suis passionné par la création de projets informatiques
                            et la résolution de problèmes complexes grâce au code.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/projects"
                                className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-3 rounded-lg font-medium flex items-center transition-colors shadow-md"
                            >
                                Voir mes projets
                                <ArrowRight className="ml-2 h-5 w-5"/>
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-5 py-3 rounded-lg font-medium transition-colors"
                            >
                                Contactez-moi !
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">À propos de moi</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biographie</h3>
                            <p className="text-gray-600">
                                Originaire de Vendée et actuellement installé à Perpignan, j’ai toujours été passionné
                                <strong> l’informatique</strong> et le <strong>développement</strong>. Ce domaine, qui allie logique, autonomie et
                                résolution concrète de problèmes, m’a tellement attiré que j’ai décidé de m’installer à
                                Montpellier pour suivre une formation en <strong>BUT Informatique</strong>, avec pour objectif d’obtenir
                                par la suite un diplôme <strong>d’ingénieur</strong>.
                                <br/><br/>
                                Je me reconnais dans un esprit pratique et <strong>indépendant</strong>, capable de <strong>m’adapter rapidement </strong>
                                aux nouvelles situations et d’aborder les défis avec calme et <strong>efficacité</strong>. J’aime
                                comprendre le fonctionnement des choses en profondeur, ce qui me pousse à <strong>expérimenter</strong>,
                                à <strong>apprendre</strong> par la pratique, et à développer des projets personnels.
                                <br/><br/>
                                Passionné également par le sport, j’ai pratiqué le <strong>football</strong> pendant 11 ans. Cette
                                expérience m’a permis d’acquérir un <strong>sens de l’effort</strong>, de la <strong>persévérance</strong>, mais aussi de
                                l’esprit d’équipe — des qualités que je mobilise aujourd’hui dans mes études et mes
                                projets.
                                Je suis toujours en quête de nouveaux <strong>défis</strong> et de projets qui me permettront de
                                continuer à <strong>évoluer</strong> dans ce domaine en constante innovation.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <Heart className="mr-2 text-red-500" />
                                    Centre d'intérêts
                                </h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        Développement web (HTML, CSS, JavaScript, PHP)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        Développement d'applications (Java, Python)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        Football (11 ans)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <GraduationCap className="mr-2 text-blue-500" />
                                    Formations
                                </h4>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-2">
                                    <span className="font-medium">BUT Informatique</span> - IUT de Montpellier - Sète
                                </p>
                                <p className="text-gray-500 text-sm mb-4">2023 - 2026</p>
                                <p className="text-gray-600">
                                    Spécialisé en développement d'application et web, gestion de bases de données,
                                    et gestion de projet.
                                </p>
                                </div>
                                <div className="mb-6"></div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-2">
                                        <span
                                            className="font-medium">Baccalauréat spécialités mathématiques et NSI</span> -
                                    Lycée Arago
                                </p>
                                <p className="text-gray-500 text-sm mb-4">2020 - 2023</p>
                                <p className="text-gray-600">
                                    Mention bien
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Future Goals Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projets professionnels</h2>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <Briefcase className="h-6 w-6 text-blue-600"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mes projets futurs</h3>
                                <p className="text-gray-600">
                                    Après l'obtention de mon BUT Informatique j'aimerais :
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            <div
                                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">Poursuivre mes études</h4>
                                <p className="text-gray-600">
                                    Allez en école d'ingénieur pour devenir ingénieur en développement informatique
                                </p>
                            </div>

                            <div
                                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">École des douanes</h4>
                                <p className="text-gray-600">
                                    Rejoindre l'école des douanes et travailler dans le domaine informatique
                                </p>
                            </div>

                            <div
                                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">Développeur informatique</h4>
                                <p className="text-gray-600">
                                    Rejoindre le monde du travail juste après mon BUT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;