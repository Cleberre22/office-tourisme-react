-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 07 sep. 2022 à 10:17
-- Version du serveur : 5.7.26
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `office_tourisme`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titleArticle` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contentArticle` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articles_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titleArticle`, `contentArticle`, `image`, `created_at`, `updated_at`, `user_id`) VALUES
(9, 'That\'s George McFly?', 'As long as you hit that wire with the connecting hook at precisely 88 miles per hour azerty', 'car-3249989_1920_1661773447.jpg', '2022-08-29 08:06:59', '2022-08-29 09:44:07', 1),
(12, 'Retour en images et en musique sur les Escales 2022', 'D\'abord avec la toute nouvelle programmation globe-trotter montée en partenariat avec 9 festivals du monde entier qui a offert un panel très intéressant des musiques actuelles de l\'Australie au Pérou en passant par le Danemark. Le concept sera reconduit pour les prochaines éditions.\r\n\r\nEnsuite, avec le concert spécial 30 ans orchestré par 20Syl d\'Hocus Pocus qui a réuni sur la grande scène plus d\'une cinquantaine d\'artistes ligériens.  \r\n\r\nA retenir enfin les prestations remarquées des têtes d\'affiche 2022 en démarrant par Clara Luiciani le vendredi, Deluxe, Gaëtan Roussel et, au milieu de la nuit, Vladimir Cauchemar le samedi. Dimanche, c\'est la dynamique rappeuse Laeti qui a mis la soirée sur de bons rails. Woodkid a ensuite sorti le grand jeu sur la scène du port avant de céder la place au jeune DJ électro pop Kungs pour le final.', 'csm_DJI_0052_Large_87733f6f7b_1662040514.jpeg', '2022-09-01 11:55:14', '2022-09-01 11:55:14', 1),
(11, 'Le Vip dévoile sa programmation pour cet hiver 2022', 'L’incertitude liée aux conditions d’accueil n’empêche pas Gérald Chabaud, directeur du Vip, de dévoiler le programme d’hiver de la scène de musiques actuelles de Saint-Nazaire (Loire-Atlantique).\r\nParmi la liste des artistes qui doivent se produire au Vip, la venue du groupe Systeme Of A Down est peut-être la plus attendue. Le vendredi 4 mars, à 21 h, le musicien et interprète arrive avec son « C’est pour de vrai (tour) », et fera parler son sens de l’esthétique et son art de la formule.', 'soad_1662026781.jpeg', '2022-09-01 07:57:48', '2022-09-01 08:06:21', 1),
(13, 'Toujours plus d’élèves dans les classes de Saint-Nazaire', 'En février 2022. Vingt conseils d’école sur les 27 que compte la ville de Saint-Nazaire se sont prononcés en faveur du retour à la semaine des 4 jours. Sa mise en œuvre sera effective en septembre 2023. Le travail de préparation démarre par une phase de concertation avec les directions scolaires et les conseils d’école. Sur ces 4 jours, les élèves ne travailleront pas plus de 6h par jour et la pause du durera au moins 1h30. A noter que les centres de loisirs seront ouverts à la journée le mercredi (exemple du centre de loisirs Reberioux.', 'csm_RentreeScolaire2022_fe41f72eff_1662040602.jpg', '2022-09-01 11:56:42', '2022-09-01 11:56:42', 1),
(14, 'La Solitaire du Figaro est de retour à Saint-Nazaire', '20 août : parade au départ de Nantes entre 12h et 12h45 avec une arrivée à 17h à Saint-Nazaire et passage de l’écluse à 17h30. Les bateaux seront ensuite stationnés dans le port.\r\n\r\n21 août : appareillage des bateaux à 11h10. Passage au niveau de l’écluse sud avec un sas entre 11h30 et 12h30. Le départ sportif est prévu à 15h20 à Saint-Michel-Chef-Chef.\r\n\r\nUn écran géant sera installé sur la place du Commando à Saint-Nazaire pour une retransmission du direct de France 3 de 15h10 à 16h30.', 'csm_Solitaire_figaro_92f90e0abf_1662040653.jpg', '2022-09-01 11:57:33', '2022-09-01 11:57:33', 1),
(15, 'Interdiction de baignade sur la Grande plage', 'Les résultats de l\'auto-contrôle de la Ville de Saint-Nazaire et de l’Ars (Agence régionale de santé) ont conclu à un résultat anormal au niveau du critère « entérocoques » pour les prélèvements effectués hier sur la Grande Plage.\r\n\r\nLa baignade est donc interdite sur ce site dans l’attente de résultats conformes à la réglementation sanitaire.', 'csm_plages2_06a5521dcb_1662040717.jpg', '2022-09-01 11:58:37', '2022-09-01 11:58:37', 1),
(16, 'Rendre les pistes cyclables agréables', 'La Ville de Saint-Nazaire travaille en partenariat avec la commission Aménagement de l’association \"Place au vélo\" pour identifier les points faibles de ses 80 km d’aménagements cyclables. De nombreux itinéraires dédiés aux vélos ont aujourd’hui une dizaine d’années et voient apparaître des défauts, en particulier des soulèvements d’enrobés causés par les racines des végétaux.\r\n\r\n\"C’est un sujet prégnant quand on fait du vélo, explique l’adjoint à l’urbanisme Christophe Cotta. Des racines remontent pour venir chercher l’eau. Notre impératif, c’est d’adapter nos méthodes d’intervention à chaque situation pour garder les arbres. C’est du vivant, on fait avec l’existant tout en sécurisant les aménagements.\"', 'csm_SNAG_0226623_racines_67f0f6d6c9_1662040770.jpg', '2022-09-01 11:59:30', '2022-09-01 11:59:30', 1),
(17, 'Le full-pipe du skatepark se refait une beauté', 'La surface sera décapée, puis un revêtement spécifique et une nouvelle peinture de couleur rouge seront appliqués. Durant toute la période de travaux, le bowl sera fermé au public. Des barrières seront mises en place pour sécuriser la zone. Les autres espaces seront accessibles aux riders. La réouverture du bowl est prévue le lundi 9 mai (sauf en cas d’aléa météorologique).', 'csm_SNAG_0155295_17_661305530e_1662459828.jpg', '2022-09-06 08:21:36', '2022-09-06 08:23:48', 1);

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstnameContact` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastnameContact` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `messageContact` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `emailContact` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id`, `firstnameContact`, `lastnameContact`, `messageContact`, `emailContact`, `created_at`, `updated_at`) VALUES
(1, 'paul', 'ricard', 'azers grg rehjhjst jh htjq tjqj', 'tres@gdtj.fr', '2022-08-25 11:11:42', '2022-08-25 11:11:42'),
(2, 'henry', 'salvador', 'fsrh rg hk khr', 'azer@hotmail.fr', '2022-08-25 11:24:45', '2022-08-25 11:24:45'),
(4, 'zinedine', 'zidane', 'w hdtrj wdhtreerr dry(ee', 'test@azer.fr', '2022-08-26 07:26:06', '2022-08-26 07:26:06');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameEvent` varchar(254) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descriptionEvent` mediumtext COLLATE utf8mb4_unicode_ci,
  `imageEvent` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priceEvent` text COLLATE utf8mb4_unicode_ci,
  `startDateEvent` datetime DEFAULT NULL,
  `endDateEvent` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `event_types_id` bigint(20) UNSIGNED DEFAULT NULL,
  `places_id` bigint(20) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_event_types_id_foreign` (`event_types_id`),
  KEY `events_places_id_foreign` (`places_id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `nameEvent`, `descriptionEvent`, `imageEvent`, `priceEvent`, `startDateEvent`, `endDateEvent`, `created_at`, `updated_at`, `event_types_id`, `places_id`) VALUES
(23, 'Vide grenier Arinfo', 'zfeyrutyi', 'soad_1662127193.jpeg', '25', '2022-09-15 00:00:00', '2022-09-16 00:00:00', '2022-09-02 11:59:53', '2022-09-02 11:59:53', 7, 12),
(22, 'Saint-Nazaire Atlantique Football', 'tyuèt_y', 'csm_DJI_0052_Large_87733f6f7b_1662125014.jpeg', '5.32', '2022-09-29 00:00:00', '2022-09-30 00:00:00', '2022-09-02 11:23:34', '2022-09-02 11:23:34', 5, 8);

-- --------------------------------------------------------

--
-- Structure de la table `event_types`
--

DROP TABLE IF EXISTS `event_types`;
CREATE TABLE IF NOT EXISTS `event_types` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameEventType` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `event_types`
--

INSERT INTO `event_types` (`id`, `nameEventType`, `created_at`, `updated_at`) VALUES
(4, 'Festival de musique', '2022-08-30 05:28:21', '2022-08-30 05:28:21'),
(5, 'Marché nocturne', '2022-08-30 05:28:50', '2022-08-30 05:30:30'),
(7, 'Vide grenier', '2022-08-30 08:21:29', '2022-08-30 08:21:29');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_08_25_090949_create_article_table', 2),
(6, '2022_08_25_102619_create_articles_table', 3),
(7, '2022_08_25_120009_add_user_id_in_article', 4),
(8, '2022_08_25_122259_create_contacts_table', 5),
(9, '2022_08_25_135824_create_places_type_table', 6),
(10, '2022_08_25_140110_create_places_table', 6),
(11, '2022_08_25_141345_create_events_table', 6),
(12, '2022_08_25_142500_create_events_type_table', 6),
(13, '2022_08_25_142944_add_place_type_id_in_place', 7),
(14, '2022_08_25_143430_add_place_id_in_event', 8),
(15, '2022_08_25_143703_add_event_type_id_in_event', 9),
(16, '2022_08_26_074145_create_place_types_table', 10),
(17, '2022_08_26_081728_create_event_types_table', 11),
(18, '2022_08_26_123856_create_places_table', 12),
(19, '2022_08_26_124946_create_events_table', 12),
(20, '2022_08_26_130736_add_event_types_id_in_events', 13),
(21, '2022_08_26_131032_add_place_types_id_in_events', 14),
(22, '2022_08_26_131252_add_place_types_id_in_places', 15);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'API TOKEN', '7a98cd8be910e6d09b59ed433c2fc23a2d2ec8ada39d19188350ba028e72b62a', '[\"*\"]', NULL, NULL, '2022-08-25 07:02:09', '2022-08-25 07:02:09'),
(2, 'App\\Models\\User', 2, 'API TOKEN', 'fb80ec79457d30797c15a9b574c7bb9db98647bbedc1cec3625e0a1224edb525', '[\"*\"]', NULL, NULL, '2022-08-25 09:46:48', '2022-08-25 09:46:48'),
(3, 'App\\Models\\User', 3, 'API TOKEN', 'c9d599afe1f05f50ce59318eeadd3057421b4df72779cc025b1d4bf98fa1726f', '[\"*\"]', NULL, NULL, '2022-08-25 09:47:11', '2022-08-25 09:47:11'),
(4, 'App\\Models\\User', 4, 'API TOKEN', '4643fd368310d2ac9d66c410c7643ff2731ef64ff7ae3c882fb887e9a4c5031a', '[\"*\"]', NULL, NULL, '2022-08-30 11:56:17', '2022-08-30 11:56:17'),
(5, 'App\\Models\\User', 5, 'API TOKEN', '4b417f7a0925876589efd9190e548f6c7b60578b425f26a943ae48cc0bc60501', '[\"*\"]', NULL, NULL, '2022-08-30 11:57:24', '2022-08-30 11:57:24'),
(6, 'App\\Models\\User', 6, 'API TOKEN', '23e750611367ad4f64a70c5ee09e96d9300aa79350f0e79357134f0af828c3ce', '[\"*\"]', NULL, NULL, '2022-08-31 07:03:34', '2022-08-31 07:03:34'),
(7, 'App\\Models\\User', 7, 'API TOKEN', '117d5937fa09f52c7882b2a94134020b908c8e2b0c0c756a55fe575962a617e7', '[\"*\"]', NULL, NULL, '2022-08-31 09:58:42', '2022-08-31 09:58:42'),
(8, 'App\\Models\\User', 8, 'API TOKEN', '9c9906e19a22ab514aef87ebcb2c601aefbd991da251e6327ff7cb5514d8adf9', '[\"*\"]', NULL, NULL, '2022-09-01 06:16:20', '2022-09-01 06:16:20'),
(9, 'App\\Models\\User', 9, 'API TOKEN', 'c2764ae48c5e11fe156c922692a4531307cbc2c360f84fed947c2518d887dcaa', '[\"*\"]', NULL, NULL, '2022-09-05 06:48:30', '2022-09-05 06:48:30'),
(10, 'App\\Models\\User', 10, 'API TOKEN', 'b85e74d4ab83d0a02258536f18faadcf119158e46bff1dfce527e04e3cc581a1', '[\"*\"]', NULL, NULL, '2022-09-05 07:01:20', '2022-09-05 07:01:20'),
(11, 'App\\Models\\User', 11, 'API TOKEN', 'fab52230c533176404fa13b852604f73a7dfac9e1662467af6aaa2ce28ff6e35', '[\"*\"]', NULL, NULL, '2022-09-05 07:02:54', '2022-09-05 07:02:54'),
(12, 'App\\Models\\User', 12, 'API TOKEN', '866edb6372396f471642b6e408b027cc019f6c19fac8660852c9ef025b9b3f76', '[\"*\"]', NULL, NULL, '2022-09-06 12:21:42', '2022-09-06 12:21:42');

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

DROP TABLE IF EXISTS `places`;
CREATE TABLE IF NOT EXISTS `places` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `namePlace` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptionPlace` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagePlace` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adressPlace` varchar(254) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitudePlace` double(8,6) DEFAULT NULL,
  `longitudePlace` double(8,6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `place_types_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `places_place_types_id_foreign` (`place_types_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `places`
--

INSERT INTO `places` (`id`, `namePlace`, `descriptionPlace`, `imagePlace`, `adressPlace`, `latitudePlace`, `longitudePlace`, `created_at`, `updated_at`, `place_types_id`) VALUES
(8, 'Saint-Nazaire Atlantique Football', 'Le Saint-Nazaire Atlantique Football ou SNAF est un club de football français fondé en 2014 et basé à Saint-Nazaire, à la suite de la fusion du Stade nazairien et du Saint-Nazaire OS.', 'snaf_1662124469.png', '102 Av. François Mitterrand, 44600 Saint-Nazaire', 47.272300, -2.205199, '2022-08-29 11:56:42', '2022-09-02 11:14:29', 4),
(13, 'Le VIP', 'Le VIP est une scène de musiques actuelles qui dispose d\'une salle de concerts de 550 places, de 3 studios de répétition et d\'un centre de ressources.', 'levip_1662025628.jpg', 'Bd de la Légion d\'Honneur, 44600 Saint-Nazaire', 47.275377, -2.202996, '2022-09-01 07:47:08', '2022-09-01 07:47:08', 11),
(11, 'La Baleine Déshydratée', 'La Baleine Déshydratée est avant tout un bar connecté. Une carte, un compte, et vous êtes prêts pour devenir des experts de la dégustation !', 'baleine-deshydratee_1661956576.jpg', 'Pl. du Commando, 44600 Saint-Nazaire', 47.272183, -2.205242, '2022-08-31 12:36:16', '2022-08-31 12:36:16', 7),
(12, 'Arinfo', 'Depuis 1992, ARINFO a formé des milliers de professionnels dans les domaines de l\'architecture, du graphisme ou encore du web. Quel que soit votre profil, âge ou expérience, en reconversion pro complète ou en élargissement de vos compétences, nous accompagnons chacun de nos apprenants vers les métiers de demain.', 'logo_Arinfo_RVB (1)_1661956788.png', '89 Av. de la République, 44600 Saint-Nazaire', 47.282430, -2.211746, '2022-08-31 12:39:48', '2022-08-31 12:39:48', 10);

-- --------------------------------------------------------

--
-- Structure de la table `place_types`
--

DROP TABLE IF EXISTS `place_types`;
CREATE TABLE IF NOT EXISTS `place_types` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `namePlaceType` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `place_types`
--

INSERT INTO `place_types` (`id`, `namePlaceType`, `created_at`, `updated_at`) VALUES
(3, 'Restaurant', '2022-08-26 06:07:55', '2022-08-26 06:59:11'),
(4, 'Club de sport', '2022-08-29 10:05:58', '2022-08-29 10:05:58'),
(5, 'Cinéma', '2022-08-29 10:14:13', '2022-08-29 10:14:13'),
(7, 'Bar', '2022-08-29 10:23:39', '2022-08-29 10:39:16'),
(8, 'Zone portuaire', '2022-08-30 06:29:28', '2022-08-30 06:29:28'),
(9, 'Bibliothèque', '2022-08-30 08:06:03', '2022-08-30 08:06:16'),
(10, 'Centre de formation', '2022-08-31 12:37:29', '2022-08-31 12:37:29'),
(11, 'Salle de concert', '2022-09-01 07:41:48', '2022-09-01 07:41:48'),
(12, 'Ecole', '2022-09-06 05:28:30', '2022-09-06 05:28:30');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(12, 'arthur', 'arfhjtfjur@hotmail.fr', NULL, '$2y$10$zIIi3.AEkiaUlPDl6hUqxeGUvI7v83g/DtQJltz6M9cemhJBVPaHi', NULL, '2022-09-06 12:21:42', '2022-09-06 12:21:42'),
(11, 'zinedine', 'zinedine@admin.admin', NULL, '$2y$10$LQqX6ule563cVG3epl1Z1eB5UqIU2jZBvb06cr4vze/zQ4EeJGOR2', NULL, '2022-09-05 07:02:54', '2022-09-05 07:02:54'),
(10, 'arthur', 'arthur@hotmail.fr', NULL, '$2y$10$uq4EuzDylXRYCReeNGAp4uEH9/ygvNzSiEJFgEdRjj93icCLgjlM.', NULL, '2022-09-05 07:01:20', '2022-09-05 07:01:20'),
(9, 'paul', 'test@hotmail.fr', NULL, '$2y$10$hheH9RKvD3LTlMsDEb.MmOzzy6Gs2JThVUtQj.IaBp6V6AxpDePGK', NULL, '2022-09-05 06:48:30', '2022-09-05 06:48:30'),
(1, 'admin', 'admin@admin.admin', NULL, '$2y$10$OynwFSf6Y0qgxBZS3keeJ.X.eRKWr/yRisYn4sxUh6gD5CDsSeSIy', NULL, '2022-09-01 06:16:20', '2022-09-01 06:16:20');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
