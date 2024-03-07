<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230618161623 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE matient (id INT AUTO_INCREMENT NOT NULL, nom LONGTEXT DEFAULT NULL, prenom_mere LONGTEXT DEFAULT NULL, ville_de_naissance LONGTEXT DEFAULT NULL, sexe_avant_examen LONGTEXT DEFAULT NULL, telephone LONGTEXT DEFAULT NULL, region_de_naissance LONGTEXT DEFAULT NULL, adresse LONGTEXT DEFAULT NULL, couverture_sanitaire LONGTEXT DEFAULT NULL, ville_provenance LONGTEXT DEFAULT NULL, mode_dadmission LONGTEXT DEFAULT NULL, medecin_garde_admission LONGTEXT DEFAULT NULL, diagnostic_dentree LONGTEXT DEFAULT NULL, motif_dhospitalisation LONGTEXT DEFAULT NULL, profession_mere LONGTEXT DEFAULT NULL, profession_pere LONGTEXT DEFAULT NULL, cosanguinite LONGTEXT DEFAULT NULL, atcd_patho LONGTEXT DEFAULT NULL, histoire_de_la_maladie_mere LONGTEXT DEFAULT NULL, lieu_accouchement LONGTEXT DEFAULT NULL, presentation_acc LONGTEXT DEFAULT NULL, rpde_acc LONGTEXT DEFAULT NULL, liquide_amniotique_acc LONGTEXT DEFAULT NULL, surv_foetale_accouchement LONGTEXT DEFAULT NULL, maniere_accouchement LONGTEXT DEFAULT NULL, cri_enfant LONGTEXT DEFAULT NULL, cyanose_enfant LONGTEXT DEFAULT NULL, reanimation_enfant LONGTEXT DEFAULT NULL, type_basse LONGTEXT DEFAULT NULL, indication_cesarienne LONGTEXT DEFAULT NULL, maturation LONGTEXT DEFAULT NULL, auscultation LONGTEXT DEFAULT NULL, aspects LONGTEXT DEFAULT NULL, pouls_peripheriques LONGTEXT DEFAULT NULL, organes_genitaux_externes LONGTEXT DEFAULT NULL, conscience_exam_neurologique LONGTEXT DEFAULT NULL, cri_exam_neurologique LONGTEXT DEFAULT NULL, tonus_exam_neurologique LONGTEXT DEFAULT NULL, hpm_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, smg_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, ascite_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, mp_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, aa_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, ombilic_exam_abdomino_pelvien LONGTEXT DEFAULT NULL, desc_meconium LONGTEXT DEFAULT NULL, desc_exam_cutaneo_muqueux LONGTEXT DEFAULT NULL, moro LONGTEXT DEFAULT NULL, succion LONGTEXT DEFAULT NULL, grasping LONGTEXT DEFAULT NULL, points_cardinaux LONGTEXT DEFAULT NULL, allongement_croise LONGTEXT DEFAULT NULL, marche_automatique LONGTEXT DEFAULT NULL, atresie_oesophage LONGTEXT DEFAULT NULL, fente_labio_palatine LONGTEXT DEFAULT NULL, atresie_des_choanes LONGTEXT DEFAULT NULL, anomalie_orthopedique LONGTEXT DEFAULT NULL, autre_anomalie LONGTEXT DEFAULT NULL, conclusion_clinique_et_diagnostiques_evoques LONGTEXT DEFAULT NULL, diagnostic_retenues LONGTEXT DEFAULT NULL, conduite_atenir LONGTEXT DEFAULT NULL, lieu_de_transfert LONGTEXT DEFAULT NULL, diagnotic_de_sortie LONGTEXT DEFAULT NULL, cause_de_deces LONGTEXT DEFAULT NULL, examen_complémentaire_surveillance_clinique LONGTEXT DEFAULT NULL, resultat_surveillance_clinique LONGTEXT DEFAULT NULL, commentaires_surveillance_clinique LONGTEXT DEFAULT NULL, ip INT DEFAULT NULL, age INT DEFAULT NULL, age_mere INT DEFAULT NULL, age_pere INT DEFAULT NULL, parite_mere INT DEFAULT NULL, gestite_mere INT DEFAULT NULL, age_gestationnel INT DEFAULT NULL, preciser_ivg JSON DEFAULT NULL, nbre_frere INT DEFAULT NULL, duree_de_travail_acc INT DEFAULT NULL, apgar1_min INT DEFAULT NULL, apgar5_min INT DEFAULT NULL, apgar10_min INT DEFAULT NULL, battements_des_ailes_au_nez INT DEFAULT NULL, tirage_intercostal INT DEFAULT NULL, balancements_thoraco_abdominal INT DEFAULT NULL, entonnoir_xyphoidien INT DEFAULT NULL, ceignement_expiratoire INT DEFAULT NULL, date_de_naissance DATE DEFAULT NULL, heure_de_naissance TIME DEFAULT NULL, date_dadmission DATE DEFAULT NULL, heure_dadmission TIME DEFAULT NULL, heure_cesarienne TIME DEFAULT NULL, heure_emission_meconium TIME DEFAULT NULL, date_sortie DATE DEFAULT NULL, date_de_transfert DATE DEFAULT NULL, date_de_deces DATE DEFAULT NULL, heure_de_deces TIME DEFAULT NULL, date_surveillance_clinique DATE DEFAULT NULL, poids_naiss DOUBLE PRECISION DEFAULT NULL, taille_naiss DOUBLE PRECISION DEFAULT NULL, pc_naiss DOUBLE PRECISION DEFAULT NULL, t_mere_acc DOUBLE PRECISION DEFAULT NULL, p_etat_general DOUBLE PRECISION DEFAULT NULL, t_etat_general DOUBLE PRECISION DEFAULT NULL, pc_etat_general DOUBLE PRECISION DEFAULT NULL, trc_etat_general DOUBLE PRECISION DEFAULT NULL, ta_etat_general DOUBLE PRECISION DEFAULT NULL, dextro DOUBLE PRECISION DEFAULT NULL, sa2 DOUBLE PRECISION DEFAULT NULL, fr_etat_general DOUBLE PRECISION DEFAULT NULL, fc_etat_general DOUBLE PRECISION DEFAULT NULL, temp_etat_general DOUBLE PRECISION DEFAULT NULL, qte_meconium DOUBLE PRECISION DEFAULT NULL, score_dubowitz DOUBLE PRECISION DEFAULT NULL, score_farr DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE medecin (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, roles JSON NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1BDA53C6E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, roles JSON NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE matient');
        $this->addSql('DROP TABLE medecin');
        $this->addSql('DROP TABLE `user`');
    }
}
