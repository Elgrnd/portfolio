export interface Evidence {
  title: string;
  description: string;
  link?: string;
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  evidence: Evidence[];
  skills: string[];
}

export const competencies: Competency[] = [
  {
    id: "comp1",
    title: "Développement d'application",
    description: "Créer des solutions logicielles qui répondent aux besoins des utilisateurs tout en suivant les meilleures pratiques de développement.",
    fullDescription: "Cette compétence se concentre sur la capacité à concevoir, développer et maintenir des applications sur plusieurs plateformes. Elle couvre l'ensemble du cycle de développement logiciel, de la collecte des exigences aux tests et au déploiement, en mettant l'accent sur la création de solutions centrées sur l'utilisateur et répondant à des besoins spécifiques.",
    evidence: [
      {
        title: "Scholaro",
        description: "Projet universitaire de poursuite d'études développé en HTML, CSS, PHP",
        link: "/projects/web-app"
      },
      {
        title: "My BabySittings",
        description: "Projet personnel de suivi de ses babysittings développé en HTML, CSS, JS",
        link: "/projects/mobile-app"
      }
    ],
    skills: [
      "AC 1.1 : Élaborer et implémenter les spécifications fonctionnelles et non\n" +
      "fonctionnelles à partir des exigences\n",
      "AC 1.2 : Appliquer des principes d’accessibilité et d’ergonomie",
      "AC 1.3 : Adopter de bonnes pratiques de conception et de programmation",
      "AC 1.4 : Vérifier et valider la qualité de l’application par les tests",
      "AC 5.2 : Formaliser les besoins du client et de l’utilisateur",
      "AC 5.3 : Identifier les critères de faisabilité d’un projet informatique",
      "AC 6.3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe\n" +
      "informatique"
    ]
  },
  {
    id: "comp2",
    title: "Optimiser des applications",
    description: "Amélioration des performances, de la sécurité et de la maintenabilité des applications logicielles.",
    fullDescription: "Cette compétence consiste à analyser les applications existantes afin d'identifier les axes d'amélioration en termes de performances, de sécurité et de maintenabilité. Elle comprend la mise en œuvre d'optimisations, la refactorisation du code, l'application de modèles de conception et la garantie de l'évolutivité des applications pour répondre à la demande croissante.",
    evidence: [
      {
        title: "Nuit de l'info 2023",
        description: "Optimisation des algorithmes de chatbot",
        link: "/projects/nuit-info"
      },
      {
        title: "SAE trains",
        description: "Analyse d'algorithmes pour optimiser les itinéraires des trains.",
        link: "/projects/trains"
      }
    ],
    skills: [
      "AC 1.1 : Implémenter des conceptions simples",
      "AC 1.4 : Développer des interfaces utilisateurs\n",
      "AC 2.3 : Formaliser et mettre en œuvre des outils mathématiques pour\n" +
      "l’informatique",
      "AC 5.1 : Appréhender les besoins du client et de l’utilisateur\n",
      "AC 6.4 : Acquérir les compétences interpersonnelles pour travailler en équipe"
    ]
  },
  {
    "id": "comp3",
    "title": "Administrer des systèmes informatiques communicants complexes",
    "description": "Gestion, sécurisation et optimisation de systèmes réseaux et serveurs complexes.",
    "fullDescription": "Cette compétence consiste à installer, configurer et maintenir des systèmes informatiques interconnectés. Elle implique la gestion des réseaux, des serveurs et des services, la mise en œuvre de politiques de sécurité, la surveillance des performances, la gestion des incidents et la garantie de la disponibilité continue des ressources informatiques.",
    "evidence": [
      {
        "title": "Virtualisation avec Docker",
        "description": "Déploiement et gestion de machines virtuelles dans un environnement isolé."
      }
    ],
    "skills": [
      "AC 3.1 : Installer et configurer des composants logiciels et matériels",
      "AC 3.3 : Sécuriser un système d'information",
      "AC 3.4 : Gérer des incidents et des problèmes",
      "AC 4.2 : Déployer une solution informatique",
      "AC 6.2 : Mettre en œuvre une démarche de veille"
    ]
  },
  {
    id: "comp4",
    title: "Gérer des données de l’information",
    description: "Conception, mise en œuvre et maintenance de systèmes de bases de données pour un stockage et une récupération efficaces des données.",
    fullDescription: "Cette compétence couvre la capacité à concevoir des schémas de bases de données, à mettre en œuvre des modèles de données et à garantir l'efficacité du stockage, de la récupération et de la manipulation des données. Elle inclut la compréhension des différents paradigmes de bases de données, de l'intégrité des données, des considérations de sécurité et des techniques de traitement de grands ensembles de données.",
    evidence: [
      {
        title: "Conception de la base de données de Scholaro",
        description: "Création d'une base de données normalisée pour le projet Scholaro",
        link: "/projects/web-app"
      }
    ],
    skills: [
      "AC 4.1 : Optimiser les modèles de données de l’entreprise\n",
      "AC 4.2 : Assurer la confidentialité des données (intégrité et sécurité)",
      "AC 4.3 : Organiser la restitution de données à travers la programmation et la visualisation"
    ]
  },
  {
    "id": "comp5",
    "title": "Conduire un projet",
    "description": "Planification, pilotage et évaluation de projets informatiques.",
    "fullDescription": "Cette compétence englobe l'organisation, la coordination et le suivi de projets informatiques. Elle comprend la gestion des délais, des ressources humaines et matérielles, la communication avec les parties prenantes et l’adaptation aux aléas du projet pour garantir l’atteinte des objectifs dans les temps impartis.",
    "evidence": [
      {
        "title": "SAE gestion de projet",
        "description": "Planification d’un projet logiciel avec Gantt et SCRUM.",
        "link": "/projects/web-app"
      }
    ],
    "skills": [
      "AC 4.1 : Identifier les besoins et les contraintes d’un projet",
      "AC 4.3 : Suivre l’avancement d’un projet",
      "AC 4.4 : Évaluer les résultats d’un projet",
      "AC 6.1 : S’adapter à un contexte particulier",
      "AC 6.5 : Mobiliser les compétences pour animer une équipe"
    ]
  },
  {
    "id": "comp6",
    "title": "Collaborer au sein d’une équipe informatique",
    "description": "Participation active à la dynamique et à l'organisation d'une équipe de développement.",
    "fullDescription": "Cette compétence implique de travailler efficacement en équipe dans un cadre de projet informatique. Elle comprend la communication avec les membres, la gestion des outils collaboratifs, le respect des rôles définis, la participation aux décisions collectives et l’adoption des méthodes agiles pour une coordination optimale.",
    "evidence": [
      {
        "title": "Nuit de l’info 2023",
        "description": "Travail collaboratif intensif sur un projet de 24 heures.",
        "link": "/projects/nuit-info"
      },
      {
        "title": "Projet Agile",
        "description": "Développement d’un site web en équipe avec méthode SCRUM.",
        "link": "/projects/web-app"
      }
    ],
    "skills": [
      "AC 1.2 : Travailler en environnement collaboratif",
      "AC 5.3 : Communiquer efficacement avec les parties prenantes",
      "AC 6.3 : Adopter une posture professionnelle",
      "AC 6.4 : Acquérir les compétences interpersonnelles pour travailler en équipe",
      "AC 6.6 : Participer à une démarche qualité"
    ]
  }
];