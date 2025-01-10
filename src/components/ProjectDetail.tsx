import { useParams, Link } from 'react-router-dom';
import { Github, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen pt-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-2xl font-bold">Projet non trouvé</h1>
                    <Link to="/portfolio" className="text-blue-600 hover:text-blue-800 inline-flex items-center mt-4">
                        <ArrowLeft className="mr-2" size={20} />
                        Retour au portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <Link to="/portfolio" className="text-blue-600 hover:text-blue-800 inline-flex items-center mb-6">
                    <ArrowLeft className="mr-2" size={20} />
                    Retour au portfolio
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-3xl font-bold">{project.title}</h1>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-700 hover:text-gray-900"
                            >
                                <Github className="mr-2" size={24}/>
                                Voir sur GitHub
                            </a>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-3">Description</h2>
                            <p className="text-gray-700">{project.fullDescription}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Technologies</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Fonctionnalités</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Défis</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-3">Résultats</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {project.outcomes.map((outcome, index) => (
                                        <li key={index}>{outcome}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <hr/>
                                <h2 className="text-xl font-semibold mb-3">Compétences travaillées</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {project.competences.map((competence, index) => (
                                        <li key={index}>{competence}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <hr/>
                                <h2 className="text-xl font-semibold mb-3">Apprentissage critique</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {project.apprcritique.map((apprcritique, index) => (
                                        <li key={index}>{apprcritique}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8">
                            {project.apprcritique.map((apprcritique, index) => (
                                <><h2 className="text-xl font-semibold mb-3" key={index}>{apprcritique}</h2><p
                                    className="text-gray-700">{project.apprcritiqueDescription[index]}</p>
                                    <hr/>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;