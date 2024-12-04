import trains from '../../assets/img/trains.png';
import nuitinfo from '../../assets/img/nuitinfo.png';
import cgj from '../../assets/img/cgj.png';
import poursuiteetude from '../../assets/img/poursuiteetudes.png';

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
    // Poursuite d'étude
    {
        id: "project-1",
        title: "Scholaro",
        description: "Projet universitaire en HTML / CSS / PHP",
        fullDescription: "Le département Informatique de l’IUT de Montpellier se réunit chaque fin d’année afin de " +
            "décider de la poursuite d’étude de chaque étudiant. Pour chaque étudiant, il faut analyser ses notes, " +
            "les regrouper pour faire des moyennes qui ciblent chaque formation. \n" +
            "Au fil des années, ce système devient redondant et long pour tout le jury et ne permet pas d’avoir " +
            "une vue d’ensemble sur tous les étudiants avec les statistiques des avis favorables, défavorables " +
            "et réservés.\n" +
            "Le projet qui nous a été confié consiste donc à proposer une application qui permettrait d’automatiser " +
            "ce long processus afin d’aider le responsable de poursuite d’étude et le jury à faire leur choix " +
            "vis-à-vis des étudiants. Le site pourrait aider à créer des agrégations, c’est-à-dire des moyennes " +
            "entre différentes ressources majeures, créer des graphiques correspondants aux moyennes des agrégations " +
            "et des fichiers PDF remplis automatiquement visant à regrouper l’avis des profs.\n",
        githubUrl: "",
        technologies: ["HTML", "CSS", "PHP", "MySQL"],
        imageUrl: poursuiteetude,
        features: [
            "Création d'une map avec un village en 3D",
            "Le joueur peut contrôler le personnage et aller réaliser les quêtes dans le village",
            "Barre de progression des tâches"
        ],
        challenges: [
            "Prise en main de Unreal Engine compliquée",
            "Développement d'un jeu fonctionnel en 30h en partant de zéro",
            "Développer en équipe en utilisant la méthode agile"
        ],
        outcomes: [
            "Application fonctionnelle répondant aux besoins du client",
            "Application modulaire grâce au principe SOLID",
        ]
    },
    {
        // SAE TRAINS
        id: "project-2",
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
    // NUIT DE L'INFO 2023
    {
        id: "project-3",
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
    },
    // CGJ 2024
    {
        id: "project-4",
        title: "Code Game Jam 2024",
        description: "Projet réalisé lors d'un évènement universitaire",
        fullDescription: "La Code Game Jam est un événement organisé par l'IUT de Montpellier, où des équipes de développeurs ont un temps limité, généralement 36 heures, pour créer un jeu vidéo à partir d'un thème précis. Cet événement se distingue par sa courte durée et son aspect très dynamique, nécessitant une collaboration intense entre les membres de chaque équipe. Les participants doivent faire preuve de créativité, de compétences techniques et de gestion du temps pour livrer un jeu fonctionnel à la fin du challenge.\n" +
            "\n" +
            "En 2024, le thème de la Code Game Jam était \"Légendes éthérées\". Les participants ont donc " +
            "dû imaginer et développer des jeux vidéo autour de ce concept, mélangeant souvent exploration, " +
            "créatures fantastiques et éléments mystérieux. Les jeux produits durant cet événement sont variés, " +
            "allant de la 2D à la 3D, et utilisent différents moteurs de jeu comme Unity ou Unreal Engine",
        githubUrl: "https://github.com/Elgrnd/CGJ2024",
        technologies: ["Unreal Engine"],
        imageUrl: cgj,
        features: [
            "Importer des étudiants à partir de fichiers csv",
            "Importer les notes des étudiants",
            "Pouvoir se connecter en tant qu'étudiant ou professeur via LDAP",
            "Créer des agrégations par ressources",
            "Générer des graphiques en fonction des agrégations",
            "Générer des fichiers PDF pré-remplis concernant la poursuite d'étude",
        ],
        challenges: [
            "Permettre une automatisation partielle des avis de poursuite d'étude",
            "Pouvoir avoir une vue d'ensemble de tous les étudiants",
            "Développement sous pression"
        ],
        outcomes: [
            "Gestion efficace du temps.",
            "Jeu fonctionnel",
        ]
    }
];