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
        fullDescription: "Ce projet ",
        githubUrl: "https://github.com/Elgrnd/Trains",
        technologies: ["Java", "JavaFX"],
        imageUrl: "../../assets/img/trains.png",
        features: [
            "Authentification des utilisateurs",
            "Interface responsive",
            "Base de données en temps réel"
        ],
        challenges: [
            "Optimisation des performances",
            "Gestion du state complexe",
            "Integration de multiples APIs"
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