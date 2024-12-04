import trains from '../../assets/img/trains.png';
//import nuitinfo from '../../assets/img/nuitinfo.png';

export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    githubUrl: string;
    technologies: string[];
    imageUrl: string;
    features: string[];
    challenges: string[];
    outcomes: string[];
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Jeu de société \"Trains\"",
        description: "Projet universitaire en Java/JavaFX",
        fullDescription: "Pour un projet universitaire, j'ai développé une simulation de jeu de gestion ferroviaire" +
            " intitulée Trains, en utilisant Java pour la logique métier et JavaFX pour l'interface graphique. " +
            "Ce projet combine des éléments de stratégie, d'optimisation, et de programmation orientée objet pour " +
            "créer une expérience engageante et interactive.",
        githubUrl: "https://github.com/Elgrnd/Trains",
        technologies: ["Java", "JavaFX"],
        imageUrl: trains,
        features: [
            "Gestion des trains :\n" +
            "\n" +
            "Les trains peuvent être ajoutés au réseau, configurés (vitesse, itinéraire), et suivis en temps réel.",
            "Construction de voies ferrées :\n" +
            "\n" +
            "Interface interactive permettant de construire des rails pour relier des villes et des industries.\n" +
            "Système de coût en ressources pour simuler des contraintes budgétaires.",
            "Interface utilisateur (UI) avec JavaFX :\n" +
            "\n" +
            "Vue dynamique : Représentation graphique des rails, gares, et trains.\n" +
            "Panneau de contrôle : Gestion centralisée des trains et des itinéraires.",

        ],
        challenges: [
            "Une mécanique de simulation réaliste (gestion des trains, construction de voies ferrées).",
            "Une interface utilisateur intuitive et visuellement attrayante.",
            "Une structure de code propre et maintenable, suivant les principes de la programmation orientée objet."
        ],
        outcomes: [
            "Amélioration de l'expérience utilisateur",
            "Réduction du temps de chargement de 50%",
            "Augmentation du taux de conversion"
        ]
    },
    {
        id: "project-2",
        title: "Projet 2",
        description: "Description courte du projet 2",
        fullDescription: "Description détaillée du projet 2. Ce projet démontre l'utilisation avancée des technologies modernes du web.",
        githubUrl: "https://github.com/username/project2",
        technologies: ["Next.js", "Node.js", "MongoDB"],
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        features: [
            "API RESTful",
            "Dashboard administrateur",
            "Système de notifications"
        ],
        challenges: [
            "Scalabilité de l'application",
            "Sécurité des données",
            "Performance du backend"
        ],
        outcomes: [
            "Architecture scalable",
            "Satisfaction client élevée",
            "Maintenance facilitée"
        ]
    }
];