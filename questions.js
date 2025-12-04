const questions = [
  {
    question: "À quoi sert un support de communication dans une stratégie de communication ?",
    answers: [
      "À diffuser un message auprès d’une cible donnée",
      "À remplacer le travail de l’équipe de terrain",
      "À réduire automatiquement le budget de l’organisation",
      "À éviter d’avoir à définir une cible"
    ],
    correctIndex: 0,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Lequel de ces exemples correspond à un support de communication print ?",
    answers: [
      "Une story Instagram",
      "Un flyer distribué dans la ville",
      "Un site web",
      "Une vidéo YouTube"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quel support est le plus adapté pour une communication locale rapide auprès des jeunes ?",
    answers: [
      "Affiches dans le gymnase uniquement",
      "Magazine national",
      "Réseaux sociaux comme Instagram et TikTok",
      "Lettre envoyée par la Poste"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est l’intérêt principal d’utiliser plusieurs supports de communication pour une même campagne ?",
    answers: [
      "Augmenter le coût de la communication",
      "Toucher différentes cibles et renforcer le message",
      "Rendre la communication plus compliquée",
      "Éviter de définir un message clair"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Que signifie « adapter le message au support » ?",
    answers: [
      "Utiliser exactement le même visuel partout",
      "Changer complètement le message à chaque fois",
      "Garder la même idée clé mais changer la forme selon le support",
      "Écrire des messages très longs pour tous les supports"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel support est le plus approprié pour expliquer en détail les bénéfices d’un programme d’activité physique ?",
    answers: [
      "Une affiche A3",
      "Une fiche détaillée (brochure ou PDF)",
      "Un post Instagram avec une seule image",
      "Un slogan de 3 mots"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Pourquoi est-il important de connaître sa cible avant de choisir un support de communication ?",
    answers: [
      "Pour choisir des couleurs au hasard",
      "Pour adapter le langage, le canal et le format à ses habitudes",
      "Pour éviter de communiquer trop souvent",
      "Pour pouvoir ignorer les contraintes de budget"
    ],
    correctIndex: 1,
    theme: "Cibles de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quelle formulation décrit le mieux une cible de communication ?",
    answers: [
      "Tout le monde",
      "Les jeunes",
      "Les femmes de 25 à 40 ans, actives, vivant en zone urbaine",
      "Les sportifs"
    ],
    correctIndex: 2,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est l’intérêt de segmenter sa cible (faire des sous-groupes) ?",
    answers: [
      "Rendre la communication plus compliquée à gérer",
      "Adapter le message et les supports à des groupes précis pour être plus efficace",
      "Pouvoir utiliser uniquement un seul support",
      "Pouvoir ignorer certains publics"
    ],
    correctIndex: 1,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Parmi ces propositions, laquelle est une cible bien définie pour un club de sport souhaitant développer la pratique féminine ?",
    answers: [
      "Les femmes",
      "Les sportives",
      "Les filles et femmes de 12 à 25 ans du quartier, débutantes ou en reprise d’activité",
      "Les habitantes de la ville"
    ],
    correctIndex: 2,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est l’objectif principal d’un support de communication ?",
    answers: [
      "Être joli sans message précis",
      "Servir de décoration",
      "Transmettre un message clair à une cible définie",
      "Remplacer les entraîneurs"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quel type de support est idéal pour donner rapidement envie de découvrir une activité ?",
    answers: [
      "Une longue brochure détaillée",
      "Une vidéo courte ou un reel dynamique",
      "Un document Word texte brut",
      "Une affiche noir et blanc sans image"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Pourquoi un club APT utiliserait-il un flyer distribué dans les commerces de proximité ?",
    answers: [
      "Pour toucher une cible locale qui fréquente ces lieux",
      "Pour communiquer uniquement avec les partenaires",
      "Pour remplacer les réseaux sociaux",
      "Pour éviter d’utiliser des visuels"
    ],
    correctIndex: 0,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quel support est le plus adapté pour communiquer auprès des parents d’enfants licenciés ?",
    answers: [
      "Un groupe WhatsApp ou une newsletter",
      "Un panneau d’affichage dans un autre quartier",
      "Une affiche dans le vestiaire des joueurs",
      "Une vidéo TikTok sans texte"
    ],
    correctIndex: 0,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Lequel de ces éléments fait partie de la description d’une cible de communication ?",
    answers: [
      "Age, situation familiale, habitudes de pratique",
      "Le logo du club",
      "Le nom de l’entraîneur principal",
      "Le numéro de SIRET de l’association"
    ],
    correctIndex: 0,
    theme: "Cibles de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quel est le point commun entre tous les supports de communication efficaces ?",
    answers: [
      "Ils sont très colorés",
      "Ils ont un long texte",
      "Ils sont adaptés à la cible et au message",
      "Ils utilisent toujours le même format"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quel support serait le plus pertinent pour une campagne de recrutement de nouveaux bénévoles ?",
    answers: [
      "Une série de stories éphémères seulement",
      "Un mélange de posts réseaux sociaux, affiches dans le club et réunion d’information",
      "Un SMS anonyme",
      "Un message audio sans explication"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Que doit permettre un bon message de communication ?",
    answers: [
      "Créer de la confusion pour attirer l’attention",
      "Faire passer une idée clé compréhensible par la cible",
      "Parler de tout en même temps",
      "Remplacer la pratique sportive"
    ],
    correctIndex: 1,
    theme: "Message de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Laquelle de ces questions est la plus adaptée pour définir une cible de communication ?",
    answers: [
      "Qui pourrait être un peu intéressé ?",
      "Qui voulons-nous vraiment toucher concrètement ?",
      "Qui habite en France ?",
      "Qui aime le sport en général ?"
    ],
    correctIndex: 1,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est l’intérêt d’adapter le ton (langage) du message à la cible ?",
    answers: [
      "Pour paraître plus compliqué",
      "Pour être mieux compris et plus proche de la réalité de la cible",
      "Pour faire plus professionnel même si ce n’est pas clair",
      "Pour pouvoir utiliser uniquement du jargon"
    ],
    correctIndex: 1,
    theme: "Message de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel support est le plus adapté si tu veux que la cible retrouve les infos pratiques (horaires, tarifs, lieu) facilement ?",
    answers: [
      "Une affiche sans texte",
      "Un site internet ou une fiche pratique claire",
      "Un slogan uniquement",
      "Une photo de groupe sans légende"
    ],
    correctIndex: 1,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est l’objectif principal d’un plan de communication pour un club APT ?",
    answers: [
      "Multiplier les actions sans cohérence",
      "Coordonner les messages, supports et cibles pour atteindre un objectif",
      "Créer des supports uniquement esthétiques",
      "Remplacer la planification des entraînements"
    ],
    correctIndex: 1,
    theme: "Plan de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Parmi ces affirmations, laquelle décrit le mieux une cible prioritaire ?",
    answers: [
      "Un public qu’on connaît vaguement",
      "Un public sur lequel on mise particulièrement pour atteindre l’objectif",
      "Un public secondaire",
      "Un public qui n’est pas concerné par notre action"
    ],
    correctIndex: 1,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est le point fort principal d’Instagram pour un club APT ?",
    answers: [
      "Diffuser des contenus visuels (photos, vidéos, stories) pour toucher les jeunes",
      "Envoyer des courriers officiels",
      "Stocker des documents administratifs",
      "Remplacer le site internet"
    ],
    correctIndex: 0,
    theme: "Supports de communication",
    difficulty: "Niveau facile"
  },
  {
    question: "Quels types de critères utilise-t-on pour bien décrire une cible de communication ?",
    answers: [
      "Uniquement le prénom et le nom",
      "Uniquement le code postal",
      "Leur couleur préférée et leur plat favori",
      "Démographiques, géographiques et psychographiques"
    ],
    correctIndex: 3,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel est le rôle du message clé dans un plan de communication ?",
    answers: [
      "Servir uniquement de slogan pour les coachs",
      "Remplacer la charte graphique",
      "Être l’idée principale à faire retenir par la cible",
      "Définir le budget de communication"
    ],
    correctIndex: 2,
    theme: "Message de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Parmi ces exemples, lequel correspond à un objectif de communication bien formulé ?",
    answers: [
      "Faire connaître un peu le club",
      "Être plus présent sur les réseaux sociaux",
      "Augmenter de 20 % le nombre de licenciés 12–18 ans sur la prochaine saison",
      "Avoir plus de likes sur Instagram"
    ],
    correctIndex: 2,
    theme: "Objectifs de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel support serait le plus adapté pour rassurer des parents sur la sécurité et l’encadrement d’un programme APT ?",
    answers: [
      "Une affiche avec juste un logo",
      "Une vidéo courte sans explications",
      "Un document explicatif clair (brochure, PDF, page web) avec des photos des encadrants",
      "Un simple message vocal"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Pourquoi est-il utile de tester un support ou un message sur un petit groupe avant une grande campagne ?",
    answers: [
      "Pour perdre du temps",
      "Pour vérifier que le message est compris et adapté à la cible",
      "Pour pouvoir changer complètement la cible",
      "Pour rendre la campagne plus chère"
    ],
    correctIndex: 1,
    theme: "Stratégie de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Que veut dire « cohérence des supports » dans une stratégie de communication ?",
    answers: [
      "Utiliser des supports complètement différents sans lien",
      "Changer le message à chaque fois",
      "Avoir une identité visuelle, un ton et un message harmonisés sur tous les supports",
      "Utiliser uniquement des supports payants"
    ],
    correctIndex: 2,
    theme: "Supports de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Quel serait un bon exemple de message clé pour un club APT qui veut attirer des jeunes sédentaires ?",
    answers: [
      "Viens courir très vite avec nous",
      "Bouge à ton rythme, sans pression, dans une ambiance conviviale !",
      "Tu dois faire du sport pour être le meilleur",
      "Inscris-toi tout de suite sans réfléchir"
    ],
    correctIndex: 1,
    theme: "Message de communication",
    difficulty: "Niveau moyen"
  },
  {
    question: "Pourquoi la connaissance du territoire (quartier/ville) est importante pour la communication d’un club APT ?",
    answers: [
      "Pour savoir où mettre des affiches et quels partenaires mobiliser",
      "Pour décider du nombre d’entraîneurs",
      "Pour remplacer le travail des bénévoles",
      "Ce n’est pas important du tout"
    ],
    correctIndex: 0,
    theme: "Cibles et territoire",
    difficulty: "Niveau moyen"
  }
];