import trains from '../../assets/img/trains.png';
import nuitinfo from '../../assets/img/nuitinfo.png';
import cgj from '../../assets/img/cgj.png';
import poursuiteetude from '../../assets/img/poursuiteetudes.png';
import mybabysittings from '../../assets/img/mybabysittings.png';

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  date: string;
  team: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "web-app",
    title: "Scholaro",
    summary: "Projet universitaire en HTML / CSS / PHP",
    description: "Le département Informatique de l’IUT de Montpellier se réunit chaque fin d’année afin de " +
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
    image: poursuiteetude,
    category: "Développement web",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    date: "Septembre 2024 - Janvier 2025",
    team: "Projet de groupe (5 membres)",
    githubUrl: "https://github.com/Elgrnd/scholaro",
    liveUrl: "",
    features: [
      "Importer des étudiants à partir de fichiers csv",
      "Importer les notes des étudiants",
      "Pouvoir se connecter en tant qu'étudiant ou professeur via LDAP",
      "Créer des agrégations par ressources",
      "Générer des graphiques en fonction des agrégations",
      "Générer des fichiers PDF pré-remplis concernant la poursuite d'étude",
    ],
    learnings: [
      "Permettre une automatisation partielle des avis de poursuite d'étude",
      "Pouvoir avoir une vue d'ensemble de tous les étudiants",
      "Développer en équipe en utilisant la méthode agile"
    ]
  },
  {
    id: "mobile-app",
    title: "My BabySittings",
    summary: "Projet personnel de suivi de ses babysittings",
    description: "MyBabySittings est une Progressive Web App (PWA) destinée aux babysitters pour leur " +
        "permettre de suivre facilement leurs prestations, leurs heures travaillées, leurs revenus, " +
        "et d’obtenir des statistiques détaillées sur leurs activités. L'application offre une interface simple, " +
        "moderne, et responsive, adaptée à une utilisation sur smartphone ou tablette.",
    githubUrl: "https://github.com/Elgrnd/babysitting-salaire-tracker",
    image: mybabysittings,
    category: "Progressive web-app",
    technologies: ["HTML", "CSS", "JS"],
    date: "January 2025",
    team: "Projet individuel",
    githubUrl: "https://github.com/Elgrnd/babysitting-salaire-tracker",
    liveUrl: "https://mybabysittings.vercel.app",
    features: [
      "Enregistrer des babysittings effectués",
      "Consulter les babysittings effectués",
      "Avoir accès à des statistiques personnalisées comme le salaire ou le nombre d'heures totales"
    ],
    learnings: [
      "Apprendre à développer une progressive web app",
      "Apprendre à programmer en Javascript",
      "Aoorendre a créer une base de donnée en local avec sql.js"
    ]
  },
  {
    id: "game-jam",
    title: "Code Game Jam 2024",
    summary: "Projet réalisé lors d'un évènement universitaire",
    description: "La Code Game Jam est un événement organisé par l'IUT de Montpellier, où des équipes de développeurs ont un temps limité, généralement 36 heures, pour créer un jeu vidéo à partir d'un thème précis. Cet événement se distingue par sa courte durée et son aspect très dynamique, nécessitant une collaboration intense entre les membres de chaque équipe. Les participants doivent faire preuve de créativité, de compétences techniques et de gestion du temps pour livrer un jeu fonctionnel à la fin du challenge.\n" +
        "\n" +
        "En 2024, le thème de la Code Game Jam était \"Légendes éthérées\". Les participants ont donc " +
        "dû imaginer et développer des jeux vidéo autour de ce concept, mélangeant souvent exploration, " +
        "créatures fantastiques et éléments mystérieux. Les jeux produits durant cet événement sont variés, " +
        "allant de la 2D à la 3D, et utilisent différents moteurs de jeu comme Unity ou Unreal Engine",
    image: cgj,
    category: "Développement de jeu vidéo",
    technologies: ["Unreal Engine"],
    date: "Janvier 2024",
    team: "Code Game Jam (4 membres)",
    githubUrl: "https://github.com/Elgrnd/CGJ2024",
    features: [
      "Création d'une map avec un village en 3D",
      "Le joueur peut contrôler le personnage et aller réaliser les quêtes dans le village",
      "Barre de progression des tâches"
    ],
    learnings: [
      "Prise en main de Unreal Engine compliquée",
      "Développement d'un jeu fonctionnel en 30h en partant de zéro",
      "Développement sous pression"
    ]
  },
  {
    id: "nuit-info",
    title: "Nuit de l'info 2023",
    summary: "Projet réalisé lors d'un évènement universitaire",
    description: "La Nuit de l’Info est un événement national annuel qui réunit étudiants, enseignants, " +
        "et professionnels pour relever un défi en une nuit, généralement autour du développement " +
        "d’une application web. Le sujet principal portait sur le thème \"Faire face au changement climatique : " +
        "le vrai du faux\", avec pour objectif de concevoir une application interactive permettant de déconstruire " +
        "des idées reçues sur le climat et de promouvoir des solutions viables pour réduire les émissions de gaz à " +
        "effet de serre.",
    image: nuitinfo,
    category: "Développement web",
    technologies: ["HTML", "CSS", "JS"],
    date: "December 2023",
    team: "Le Buff Chinois (6 members)",
    githubUrl: "https://github.com/Elgrnd/Nuit-de-linfo",
    features: [
      "Présentation claire et engageante des impacts du changement climatique.",
      "Solutions proposées pour réduire l'empreinte carbone et s'adapter aux changements.",
      "Design interactif pour capter l'attention des utilisateurs.",
      "Chat bot alimenté par ChatGPT",
    ],
    learnings: [
      "Montrer comment faire face au changement climatique",
      "Travail en équipe sous pression : Durant une nuit entière, j'ai collaboré efficacement avec mes " +
      "coéquipiers malgré le stress, la fatigue et les distractions autour de nous.",
      "Gestion du temps : Nous avons dû organiser nos tâches et prioriser les fonctionnalités clés " +
      "dans un délai extrêmement restreint.",
      "Esprit d'équipe : Cette expérience m'a appris l'importance de la communication, du soutien mutuel " +
      "et de la cohésion pour mener à bien un projet ambitieux."
    ]
  },
  {
    id: "trains",
    title: "Jeu de société \"Trains\"",
    summary: "Projet universitaire en Java/JavaFX",
    description: "Pour un projet universitaire, j'ai développé une simulation de jeu de gestion ferroviaire" +
        " intitulée Trains, en utilisant Java pour la logique métier et JavaFX pour l'interface graphique. " +
        "Ce projet combine des éléments de stratégie, d'optimisation, et de programmation orientée objet pour " +
        "créer une expérience engageante et interactive.",
    image: trains,
    category: "Développement Java",
    technologies: ["Java", "JavaFX"],
    date: "Mai 2024",
    team: "Équipe de 2 personnes",
    githubUrl: "https://github.com/Elgrnd/Trains",
    features: [
      "Les trains peuvent être ajoutés au réseau, configurés (vitesse, itinéraire), et suivis en temps réel.",
      "Interface interactive permettant de construire des rails pour relier des villes et des industries.",
      "Système de coût en ressources pour simuler des contraintes budgétaires.",
      "Interface utilisateur (UI) avec JavaFX",
      "Vue dynamique : Représentation graphique des rails, gares, et trains.",
    ],
    learnings: [
      "Une mécanique de simulation réaliste (gestion des trains, construction de voies ferrées).",
      "Une interface utilisateur intuitive et visuellement attrayante.",
      "Une structure de code propre et maintenable, suivant les principes de la programmation orientée objet."
    ]
  }
];