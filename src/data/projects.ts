import trains from '../../assets/img/trains.png';
import nuitinfo from '../../assets/img/nuitinfo.png';

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
            "Les trains peuvent être ajoutés au réseau, configurés (vitesse, itinéraire), et suivis en temps réel.",
            "Interface interactive permettant de construire des rails pour relier des villes et des industries.",
            "Système de coût en ressources pour simuler des contraintes budgétaires.",
            "Interface utilisateur (UI) avec JavaFX",
            "Vue dynamique : Représentation graphique des rails, gares, et trains.",
        ],
        challenges: [
            "Une mécanique de simulation réaliste (gestion des trains, construction de voies ferrées).",
            "Une interface utilisateur intuitive et visuellement attrayante.",
            "Une structure de code propre et maintenable, suivant les principes de la programmation orientée objet."
        ],
        outcomes: [
            "Gestion efficace des événements en temps réel.",
            "La modularité du code, facilitant son évolution ou son extension pour de futures fonctionnalités.",
            "La qualité de l'interface utilisateur et l’expérience de jeu immersive."
        ]
    },
    {
        id: "project-2",
        title: "Nuit de l'info 2023",
        description: "Projet réalisé lors d'un évènement universitaire",
        fullDescription: "La Nuit de l’Info est un événement national annuel qui réunit étudiants, enseignants, " +
            "et professionnels pour relever un défi en une nuit, généralement autour du développement " +
            "d’une application web. Le sujet principal portait sur le thème \"Faire face au changement climatique : " +
            "le vrai du faux\", avec pour objectif de concevoir une application interactive permettant de déconstruire " +
            "des idées reçues sur le climat et de promouvoir des solutions viables pour réduire les émissions de gaz à " +
            "effet de serre.",
        githubUrl: "https://github.com/Elgrnd/Nuit-de-linfo",
        technologies: ["HTML", "CSS", "JS"],
        imageUrl: nuitinfo,
        features: [
            "Présentation claire et engageante des impacts du changement climatique.",
            "Solutions proposées pour réduire l'empreinte carbone et s'adapter aux changements.",
            "Design interactif pour capter l'attention des utilisateurs.",
            "Chat bot alimenté par ChatGPT",
        ],
        challenges: [
            "Montrer comment faire face au changement climatique",
            "Travail en équipe sous pression : Durant une nuit entière, j'ai collaboré efficacement avec mes " +
            "coéquipiers malgré le stress, la fatigue et les distractions autour de nous.",
            "Gestion du temps : Nous avons dû organiser nos tâches et prioriser les fonctionnalités clés " +
            "dans un délai extrêmement restreint.",
            "Esprit d'équipe : Cette expérience m'a appris l'importance de la communication, du soutien mutuel " +
            "et de la cohésion pour mener à bien un projet ambitieux."
        ],
        outcomes: [
            "Statistiques sur le climat",
            "Réponse à la problématique",
            "Projet contribuable"
        ]
    }
];