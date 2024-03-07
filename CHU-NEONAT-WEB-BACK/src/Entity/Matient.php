<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MatientRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatientRepository::class)]
#[ApiResource]
class Matient
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $prenomMere = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $villeDeNaissance = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $sexeAvantExamen = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $telephone = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $regionDeNaissance = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $adresse = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $couvertureSanitaire = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $villeProvenance = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modeDadmission = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $medecinGardeAdmission = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $diagnosticDentree = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $motifDhospitalisation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $professionMere = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $professionPere = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $cosanguinite = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $atcdPatho = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $histoireDeLaMaladieMere = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $lieuAccouchement = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $presentationAcc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $rpdeAcc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $liquideAmniotiqueAcc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $survFoetaleAccouchement = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $maniereAccouchement = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $criEnfant = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $cyanoseEnfant = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $reanimationEnfant = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $typeBasse = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $indicationCesarienne = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $maturation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $auscultation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $aspects = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $poulsPeripheriques = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $organesGenitauxExternes = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $conscienceExamNeurologique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $criExamNeurologique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $tonusExamNeurologique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $hpmExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $smgExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $asciteExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $mpExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $aaExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $ombilicExamAbdominoPelvien = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descMeconium = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descExamCutaneoMuqueux = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $moro = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $succion = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $grasping = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $pointsCardinaux = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $allongementCroise = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $marcheAutomatique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $atresieOesophage = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $fenteLabioPalatine = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $atresieDesChoanes = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $anomalieOrthopedique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $autreAnomalie = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $conclusionCliniqueEtDiagnostiquesEvoques = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $diagnosticRetenues = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $conduiteATenir = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $lieuDeTransfert = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $diagnoticDeSortie = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $causeDeDeces = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $examenComplémentaireSurveillanceClinique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $resultatSurveillanceClinique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentairesSurveillanceClinique = null;

    #[ORM\Column(nullable: true)]
    private ?int $ip = null;

    #[ORM\Column(nullable: true)]
    private ?int $age = null;

    #[ORM\Column(nullable: true)]
    private ?int $ageMere = null;

    #[ORM\Column(nullable: true)]
    private ?int $agePere = null;

    #[ORM\Column(nullable: true)]
    private ?int $pariteMere = null;

    #[ORM\Column(nullable: true)]
    private ?int $gestiteMere = null;

    #[ORM\Column(nullable: true)]
    private ?int $ageGestationnel = null;

    #[ORM\Column(nullable: true)]
    private array $preciserIvg = [];

    #[ORM\Column(nullable: true)]
    private ?int $nbreFrere = null;

    #[ORM\Column(nullable: true)]
    private ?int $dureeDeTravailAcc = null;

    #[ORM\Column(nullable: true)]
    private ?int $apgar1Min = null;

    #[ORM\Column(nullable: true)]
    private ?int $apgar5Min = null;

    #[ORM\Column(nullable: true)]
    private ?int $apgar10Min = null;

    #[ORM\Column(nullable: true)]
    private ?int $battementsDesAilesAuNez = null;

    #[ORM\Column(nullable: true)]
    private ?int $tirageIntercostal = null;

    #[ORM\Column(nullable: true)]
    private ?int $balancementsThoracoAbdominal = null;

    #[ORM\Column(nullable: true)]
    private ?int $entonnoirXyphoidien = null;

    #[ORM\Column(nullable: true)]
    private ?int $ceignementExpiratoire = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDeNaissance = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $heureDeNaissance = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDadmission = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $heureDadmission = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $heureCesarienne = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $heureEmissionMeconium = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateSortie = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDeTransfert = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDeDeces = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $heureDeDeces = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateSurveillanceClinique = null;

    #[ORM\Column(nullable: true)]
    private ?float $poidsNaiss = null;

    #[ORM\Column(nullable: true)]
    private ?float $tailleNaiss = null;

    #[ORM\Column(nullable: true)]
    private ?float $pcNaiss = null;

    #[ORM\Column(nullable: true)]
    private ?float $tMereAcc = null;

    #[ORM\Column(nullable: true)]
    private ?float $pEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $tEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $pcEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $trcEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $taEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $dextro = null;

    #[ORM\Column(nullable: true)]
    private ?float $sa2 = null;

    #[ORM\Column(nullable: true)]
    private ?float $frEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $fcEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $tempEtatGeneral = null;

    #[ORM\Column(nullable: true)]
    private ?float $qteMeconium = null;

    #[ORM\Column(nullable: true)]
    private ?float $scoreDubowitz = null;

    #[ORM\Column(nullable: true)]
    private ?float $scoreFarr = null;













    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenomMere(): ?string
    {
        return $this->prenomMere;
    }

    public function setPrenomMere(?string $prenomMere): self
    {
        $this->prenomMere = $prenomMere;

        return $this;
    }

    public function getVilleDeNaissance(): ?string
    {
        return $this->villeDeNaissance;
    }

    public function setVilleDeNaissance(?string $villeDeNaissance): self
    {
        $this->villeDeNaissance = $villeDeNaissance;

        return $this;
    }

    public function getSexeAvantExamen(): ?string
    {
        return $this->sexeAvantExamen;
    }

    public function setSexeAvantExamen(?string $sexeAvantExamen): self
    {
        $this->sexeAvantExamen = $sexeAvantExamen;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getRegionDeNaissance(): ?string
    {
        return $this->regionDeNaissance;
    }

    public function setRegionDeNaissance(?string $regionDeNaissance): self
    {
        $this->regionDeNaissance = $regionDeNaissance;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCouvertureSanitaire(): ?string
    {
        return $this->couvertureSanitaire;
    }

    public function setCouvertureSanitaire(?string $couvertureSanitaire): self
    {
        $this->couvertureSanitaire = $couvertureSanitaire;

        return $this;
    }

    public function getVilleProvenance(): ?string
    {
        return $this->villeProvenance;
    }

    public function setVilleProvenance(?string $villeProvenance): self
    {
        $this->villeProvenance = $villeProvenance;

        return $this;
    }

    public function getModeDadmission(): ?string
    {
        return $this->modeDadmission;
    }

    public function setModeDadmission(?string $modeDadmission): self
    {
        $this->modeDadmission = $modeDadmission;

        return $this;
    }

    public function getMedecinGardeAdmission(): ?string
    {
        return $this->medecinGardeAdmission;
    }

    public function setMedecinGardeAdmission(?string $medecinGardeAdmission): self
    {
        $this->medecinGardeAdmission = $medecinGardeAdmission;

        return $this;
    }

    public function getDiagnosticDentree(): ?string
    {
        return $this->diagnosticDentree;
    }

    public function setDiagnosticDentree(?string $diagnosticDentree): self
    {
        $this->diagnosticDentree = $diagnosticDentree;

        return $this;
    }

    public function getMotifDhospitalisation(): ?string
    {
        return $this->motifDhospitalisation;
    }

    public function setMotifDhospitalisation(?string $motifDhospitalisation): self
    {
        $this->motifDhospitalisation = $motifDhospitalisation;

        return $this;
    }

    public function getProfessionMere(): ?string
    {
        return $this->professionMere;
    }

    public function setProfessionMere(?string $professionMere): self
    {
        $this->professionMere = $professionMere;

        return $this;
    }

    public function getProfessionPere(): ?string
    {
        return $this->professionPere;
    }

    public function setProfessionPere(?string $professionPere): self
    {
        $this->professionPere = $professionPere;

        return $this;
    }

    public function getCosanguinite(): ?string
    {
        return $this->cosanguinite;
    }

    public function setCosanguinite(?string $cosanguinite): self
    {
        $this->cosanguinite = $cosanguinite;

        return $this;
    }

    public function getAtcdPatho(): ?string
    {
        return $this->atcdPatho;
    }

    public function setAtcdPatho(?string $atcdPatho): self
    {
        $this->atcdPatho = $atcdPatho;

        return $this;
    }

    public function getHistoireDeLaMaladieMere(): ?string
    {
        return $this->histoireDeLaMaladieMere;
    }

    public function setHistoireDeLaMaladieMere(?string $histoireDeLaMaladieMere): self
    {
        $this->histoireDeLaMaladieMere = $histoireDeLaMaladieMere;

        return $this;
    }

    public function getLieuAccouchement(): ?string
    {
        return $this->lieuAccouchement;
    }

    public function setLieuAccouchement(?string $lieuAccouchement): self
    {
        $this->lieuAccouchement = $lieuAccouchement;

        return $this;
    }

    public function getPresentationAcc(): ?string
    {
        return $this->presentationAcc;
    }

    public function setPresentationAcc(?string $presentationAcc): self
    {
        $this->presentationAcc = $presentationAcc;

        return $this;
    }

    public function getRpdeAcc(): ?string
    {
        return $this->rpdeAcc;
    }

    public function setRpdeAcc(?string $rpdeAcc): self
    {
        $this->rpdeAcc = $rpdeAcc;

        return $this;
    }

    public function getLiquideAmniotiqueAcc(): ?string
    {
        return $this->liquideAmniotiqueAcc;
    }

    public function setLiquideAmniotiqueAcc(?string $liquideAmniotiqueAcc): self
    {
        $this->liquideAmniotiqueAcc = $liquideAmniotiqueAcc;

        return $this;
    }

    public function getSurvFoetaleAccouchement(): ?string
    {
        return $this->survFoetaleAccouchement;
    }

    public function setSurvFoetaleAccouchement(?string $survFoetaleAccouchement): self
    {
        $this->survFoetaleAccouchement = $survFoetaleAccouchement;

        return $this;
    }

    public function getManiereAccouchement(): ?string
    {
        return $this->maniereAccouchement;
    }

    public function setManiereAccouchement(?string $maniereAccouchement): self
    {
        $this->maniereAccouchement = $maniereAccouchement;

        return $this;
    }

    public function getCriEnfant(): ?string
    {
        return $this->criEnfant;
    }

    public function setCriEnfant(?string $criEnfant): self
    {
        $this->criEnfant = $criEnfant;

        return $this;
    }

    public function getCyanoseEnfant(): ?string
    {
        return $this->cyanoseEnfant;
    }

    public function setCyanoseEnfant(?string $cyanoseEnfant): self
    {
        $this->cyanoseEnfant = $cyanoseEnfant;

        return $this;
    }

    public function getReanimationEnfant(): ?string
    {
        return $this->reanimationEnfant;
    }

    public function setReanimationEnfant(?string $reanimationEnfant): self
    {
        $this->reanimationEnfant = $reanimationEnfant;

        return $this;
    }

    public function getTypeBasse(): ?string
    {
        return $this->typeBasse;
    }

    public function setTypeBasse(?string $typeBasse): self
    {
        $this->typeBasse = $typeBasse;

        return $this;
    }

    public function getIndicationCesarienne(): ?string
    {
        return $this->indicationCesarienne;
    }

    public function setIndicationCesarienne(?string $indicationCesarienne): self
    {
        $this->indicationCesarienne = $indicationCesarienne;

        return $this;
    }

    public function getMaturation(): ?string
    {
        return $this->maturation;
    }

    public function setMaturation(?string $maturation): self
    {
        $this->maturation = $maturation;

        return $this;
    }

    public function getAuscultation(): ?string
    {
        return $this->auscultation;
    }

    public function setAuscultation(?string $auscultation): self
    {
        $this->auscultation = $auscultation;

        return $this;
    }

    public function getAspects(): ?string
    {
        return $this->aspects;
    }

    public function setAspects(?string $aspects): self
    {
        $this->aspects = $aspects;

        return $this;
    }

    public function getPoulsPeripheriques(): ?string
    {
        return $this->poulsPeripheriques;
    }

    public function setPoulsPeripheriques(?string $poulsPeripheriques): self
    {
        $this->poulsPeripheriques = $poulsPeripheriques;

        return $this;
    }

    public function getOrganesGenitauxExternes(): ?string
    {
        return $this->organesGenitauxExternes;
    }

    public function setOrganesGenitauxExternes(?string $organesGenitauxExternes): self
    {
        $this->organesGenitauxExternes = $organesGenitauxExternes;

        return $this;
    }

    public function getConscienceExamNeurologique(): ?string
    {
        return $this->conscienceExamNeurologique;
    }

    public function setConscienceExamNeurologique(?string $conscienceExamNeurologique): self
    {
        $this->conscienceExamNeurologique = $conscienceExamNeurologique;

        return $this;
    }

    public function getCriExamNeurologique(): ?string
    {
        return $this->criExamNeurologique;
    }

    public function setCriExamNeurologique(?string $criExamNeurologique): self
    {
        $this->criExamNeurologique = $criExamNeurologique;

        return $this;
    }

    public function getTonusExamNeurologique(): ?string
    {
        return $this->tonusExamNeurologique;
    }

    public function setTonusExamNeurologique(?string $tonusExamNeurologique): self
    {
        $this->tonusExamNeurologique = $tonusExamNeurologique;

        return $this;
    }

    public function getHpmExamAbdominoPelvien(): ?string
    {
        return $this->hpmExamAbdominoPelvien;
    }

    public function setHpmExamAbdominoPelvien(?string $hpmExamAbdominoPelvien): self
    {
        $this->hpmExamAbdominoPelvien = $hpmExamAbdominoPelvien;

        return $this;
    }

    public function getSmgExamAbdominoPelvien(): ?string
    {
        return $this->smgExamAbdominoPelvien;
    }

    public function setSmgExamAbdominoPelvien(?string $smgExamAbdominoPelvien): self
    {
        $this->smgExamAbdominoPelvien = $smgExamAbdominoPelvien;

        return $this;
    }

    public function getAsciteExamAbdominoPelvien(): ?string
    {
        return $this->asciteExamAbdominoPelvien;
    }

    public function setAsciteExamAbdominoPelvien(?string $asciteExamAbdominoPelvien): self
    {
        $this->asciteExamAbdominoPelvien = $asciteExamAbdominoPelvien;

        return $this;
    }

    public function getMpExamAbdominoPelvien(): ?string
    {
        return $this->mpExamAbdominoPelvien;
    }

    public function setMpExamAbdominoPelvien(?string $mpExamAbdominoPelvien): self
    {
        $this->mpExamAbdominoPelvien = $mpExamAbdominoPelvien;

        return $this;
    }

    public function getAaExamAbdominoPelvien(): ?string
    {
        return $this->aaExamAbdominoPelvien;
    }

    public function setAaExamAbdominoPelvien(?string $aaExamAbdominoPelvien): self
    {
        $this->aaExamAbdominoPelvien = $aaExamAbdominoPelvien;

        return $this;
    }

    public function getOmbilicExamAbdominoPelvien(): ?string
    {
        return $this->ombilicExamAbdominoPelvien;
    }

    public function setOmbilicExamAbdominoPelvien(?string $ombilicExamAbdominoPelvien): self
    {
        $this->ombilicExamAbdominoPelvien = $ombilicExamAbdominoPelvien;

        return $this;
    }

    public function getDescMeconium(): ?string
    {
        return $this->descMeconium;
    }

    public function setDescMeconium(?string $descMeconium): self
    {
        $this->descMeconium = $descMeconium;

        return $this;
    }

    public function getDescExamCutaneoMuqueux(): ?string
    {
        return $this->descExamCutaneoMuqueux;
    }

    public function setDescExamCutaneoMuqueux(?string $descExamCutaneoMuqueux): self
    {
        $this->descExamCutaneoMuqueux = $descExamCutaneoMuqueux;

        return $this;
    }

    public function getMoro(): ?string
    {
        return $this->moro;
    }

    public function setMoro(?string $moro): self
    {
        $this->moro = $moro;

        return $this;
    }

    public function getSuccion(): ?string
    {
        return $this->succion;
    }

    public function setSuccion(?string $succion): self
    {
        $this->succion = $succion;

        return $this;
    }

    public function getGrasping(): ?string
    {
        return $this->grasping;
    }

    public function setGrasping(?string $grasping): self
    {
        $this->grasping = $grasping;

        return $this;
    }

    public function getPointsCardinaux(): ?string
    {
        return $this->pointsCardinaux;
    }

    public function setPointsCardinaux(?string $pointsCardinaux): self
    {
        $this->pointsCardinaux = $pointsCardinaux;

        return $this;
    }

    public function getAllongementCroise(): ?string
    {
        return $this->allongementCroise;
    }

    public function setAllongementCroise(?string $allongementCroise): self
    {
        $this->allongementCroise = $allongementCroise;

        return $this;
    }

    public function getMarcheAutomatique(): ?string
    {
        return $this->marcheAutomatique;
    }

    public function setMarcheAutomatique(?string $marcheAutomatique): self
    {
        $this->marcheAutomatique = $marcheAutomatique;

        return $this;
    }

    public function getAtresieOesophage(): ?string
    {
        return $this->atresieOesophage;
    }

    public function setAtresieOesophage(?string $atresieOesophage): self
    {
        $this->atresieOesophage = $atresieOesophage;

        return $this;
    }

    public function getFenteLabioPalatine(): ?string
    {
        return $this->fenteLabioPalatine;
    }

    public function setFenteLabioPalatine(?string $fenteLabioPalatine): self
    {
        $this->fenteLabioPalatine = $fenteLabioPalatine;

        return $this;
    }

    public function getAtresieDesChoanes(): ?string
    {
        return $this->atresieDesChoanes;
    }

    public function setAtresieDesChoanes(?string $atresieDesChoanes): self
    {
        $this->atresieDesChoanes = $atresieDesChoanes;

        return $this;
    }

    public function getAnomalieOrthopedique(): ?string
    {
        return $this->anomalieOrthopedique;
    }

    public function setAnomalieOrthopedique(?string $anomalieOrthopedique): self
    {
        $this->anomalieOrthopedique = $anomalieOrthopedique;

        return $this;
    }

    public function getAutreAnomalie(): ?string
    {
        return $this->autreAnomalie;
    }

    public function setAutreAnomalie(?string $autreAnomalie): self
    {
        $this->autreAnomalie = $autreAnomalie;

        return $this;
    }

    public function getConclusionCliniqueEtDiagnostiquesEvoques(): ?string
    {
        return $this->conclusionCliniqueEtDiagnostiquesEvoques;
    }

    public function setConclusionCliniqueEtDiagnostiquesEvoques(?string $conclusionCliniqueEtDiagnostiquesEvoques): self
    {
        $this->conclusionCliniqueEtDiagnostiquesEvoques = $conclusionCliniqueEtDiagnostiquesEvoques;

        return $this;
    }

    public function getDiagnosticRetenues(): ?string
    {
        return $this->diagnosticRetenues;
    }

    public function setDiagnosticRetenues(?string $diagnosticRetenues): self
    {
        $this->diagnosticRetenues = $diagnosticRetenues;

        return $this;
    }

    public function getConduiteATenir(): ?string
    {
        return $this->conduiteATenir;
    }

    public function setConduiteATenir(?string $conduiteATenir): self
    {
        $this->conduiteATenir = $conduiteATenir;

        return $this;
    }

    public function getLieuDeTransfert(): ?string
    {
        return $this->lieuDeTransfert;
    }

    public function setLieuDeTransfert(?string $lieuDeTransfert): self
    {
        $this->lieuDeTransfert = $lieuDeTransfert;

        return $this;
    }

    public function getDiagnoticDeSortie(): ?string
    {
        return $this->diagnoticDeSortie;
    }

    public function setDiagnoticDeSortie(?string $diagnoticDeSortie): self
    {
        $this->diagnoticDeSortie = $diagnoticDeSortie;

        return $this;
    }

    public function getCauseDeDeces(): ?string
    {
        return $this->causeDeDeces;
    }

    public function setCauseDeDeces(?string $causeDeDeces): self
    {
        $this->causeDeDeces = $causeDeDeces;

        return $this;
    }

    public function getExamenComplémentaireSurveillanceClinique(): ?string
    {
        return $this->examenComplémentaireSurveillanceClinique;
    }

    public function setExamenComplémentaireSurveillanceClinique(?string $examenComplémentaireSurveillanceClinique): self
    {
        $this->examenComplémentaireSurveillanceClinique = $examenComplémentaireSurveillanceClinique;

        return $this;
    }

    public function getResultatSurveillanceClinique(): ?string
    {
        return $this->resultatSurveillanceClinique;
    }

    public function setResultatSurveillanceClinique(?string $resultatSurveillanceClinique): self
    {
        $this->resultatSurveillanceClinique = $resultatSurveillanceClinique;

        return $this;
    }

    public function getCommentairesSurveillanceClinique(): ?string
    {
        return $this->commentairesSurveillanceClinique;
    }

    public function setCommentairesSurveillanceClinique(?string $commentairesSurveillanceClinique): self
    {
        $this->commentairesSurveillanceClinique = $commentairesSurveillanceClinique;

        return $this;
    }

    public function getIp(): ?int
    {
        return $this->ip;
    }

    public function setIp(?int $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(?int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getAgeMere(): ?int
    {
        return $this->ageMere;
    }

    public function setAgeMere(?int $ageMere): self
    {
        $this->ageMere = $ageMere;

        return $this;
    }

    public function getAgePere(): ?int
    {
        return $this->agePere;
    }

    public function setAgePere(?int $agePere): self
    {
        $this->agePere = $agePere;

        return $this;
    }

    public function getPariteMere(): ?int
    {
        return $this->pariteMere;
    }

    public function setPariteMere(?int $pariteMere): self
    {
        $this->pariteMere = $pariteMere;

        return $this;
    }

    public function getGestiteMere(): ?int
    {
        return $this->gestiteMere;
    }

    public function setGestiteMere(?int $gestiteMere): self
    {
        $this->gestiteMere = $gestiteMere;

        return $this;
    }

    public function getAgeGestationnel(): ?int
    {
        return $this->ageGestationnel;
    }

    public function setAgeGestationnel(?int $ageGestationnel): self
    {
        $this->ageGestationnel = $ageGestationnel;

        return $this;
    }

    public function getPreciserIvg(): array
    {
        return $this->preciserIvg;
    }

    public function setPreciserIvg(?array $preciserIvg): self
    {
        $this->preciserIvg = $preciserIvg;

        return $this;
    }

    public function getNbreFrere(): ?int
    {
        return $this->nbreFrere;
    }

    public function setNbreFrere(?int $nbreFrere): self
    {
        $this->nbreFrere = $nbreFrere;

        return $this;
    }

    public function getDureeDeTravailAcc(): ?int
    {
        return $this->dureeDeTravailAcc;
    }

    public function setDureeDeTravailAcc(?int $dureeDeTravailAcc): self
    {
        $this->dureeDeTravailAcc = $dureeDeTravailAcc;

        return $this;
    }

    public function getApgar1Min(): ?int
    {
        return $this->apgar1Min;
    }

    public function setApgar1Min(?int $apgar1Min): self
    {
        $this->apgar1Min = $apgar1Min;

        return $this;
    }

    public function getApgar5Min(): ?int
    {
        return $this->apgar5Min;
    }

    public function setApgar5Min(?int $apgar5Min): self
    {
        $this->apgar5Min = $apgar5Min;

        return $this;
    }

    public function getApgar10Min(): ?int
    {
        return $this->apgar10Min;
    }

    public function setApgar10Min(?int $apgar10Min): self
    {
        $this->apgar10Min = $apgar10Min;

        return $this;
    }

    public function getBattementsDesAilesAuNez(): ?int
    {
        return $this->battementsDesAilesAuNez;
    }

    public function setBattementsDesAilesAuNez(?int $battementsDesAilesAuNez): self
    {
        $this->battementsDesAilesAuNez = $battementsDesAilesAuNez;

        return $this;
    }

    public function getTirageIntercostal(): ?int
    {
        return $this->tirageIntercostal;
    }

    public function setTirageIntercostal(?int $tirageIntercostal): self
    {
        $this->tirageIntercostal = $tirageIntercostal;

        return $this;
    }

    public function getBalancementsThoracoAbdominal(): ?int
    {
        return $this->balancementsThoracoAbdominal;
    }

    public function setBalancementsThoracoAbdominal(?int $balancementsThoracoAbdominal): self
    {
        $this->balancementsThoracoAbdominal = $balancementsThoracoAbdominal;

        return $this;
    }

    public function getEntonnoirXyphoidien(): ?int
    {
        return $this->entonnoirXyphoidien;
    }

    public function setEntonnoirXyphoidien(?int $entonnoirXyphoidien): self
    {
        $this->entonnoirXyphoidien = $entonnoirXyphoidien;

        return $this;
    }

    public function getCeignementExpiratoire(): ?int
    {
        return $this->ceignementExpiratoire;
    }

    public function setCeignementExpiratoire(?int $ceignementExpiratoire): self
    {
        $this->ceignementExpiratoire = $ceignementExpiratoire;

        return $this;
    }

    public function getDateDeNaissance(): ?\DateTimeInterface
    {
        return $this->dateDeNaissance;
    }

    public function setDateDeNaissance(?\DateTimeInterface $dateDeNaissance): self
    {
        $this->dateDeNaissance = $dateDeNaissance;

        return $this;
    }

    public function getHeureDeNaissance(): ?\DateTimeInterface
    {
        return $this->heureDeNaissance;
    }

    public function setHeureDeNaissance(?\DateTimeInterface $heureDeNaissance): self
    {
        $this->heureDeNaissance = $heureDeNaissance;

        return $this;
    }

    public function getDateDadmission(): ?\DateTimeInterface
    {
        return $this->dateDadmission;
    }

    public function setDateDadmission(?\DateTimeInterface $dateDadmission): self
    {
        $this->dateDadmission = $dateDadmission;

        return $this;
    }

    public function getHeureDadmission(): ?\DateTimeInterface
    {
        return $this->heureDadmission;
    }

    public function setHeureDadmission(?\DateTimeInterface $heureDadmission): self
    {
        $this->heureDadmission = $heureDadmission;

        return $this;
    }

    public function getHeureCesarienne(): ?\DateTimeInterface
    {
        return $this->heureCesarienne;
    }

    public function setHeureCesarienne(?\DateTimeInterface $heureCesarienne): self
    {
        $this->heureCesarienne = $heureCesarienne;

        return $this;
    }

    public function getHeureEmissionMeconium(): ?\DateTimeInterface
    {
        return $this->heureEmissionMeconium;
    }

    public function setHeureEmissionMeconium(?\DateTimeInterface $heureEmissionMeconium): self
    {
        $this->heureEmissionMeconium = $heureEmissionMeconium;

        return $this;
    }

    public function getDateSortie(): ?\DateTimeInterface
    {
        return $this->dateSortie;
    }

    public function setDateSortie(?\DateTimeInterface $dateSortie): self
    {
        $this->dateSortie = $dateSortie;

        return $this;
    }

    public function getDateDeTransfert(): ?\DateTimeInterface
    {
        return $this->dateDeTransfert;
    }

    public function setDateDeTransfert(?\DateTimeInterface $dateDeTransfert): self
    {
        $this->dateDeTransfert = $dateDeTransfert;

        return $this;
    }

    public function getDateDeDeces(): ?\DateTimeInterface
    {
        return $this->dateDeDeces;
    }

    public function setDateDeDeces(?\DateTimeInterface $dateDeDeces): self
    {
        $this->dateDeDeces = $dateDeDeces;

        return $this;
    }

    public function getHeureDeDeces(): ?\DateTimeInterface
    {
        return $this->heureDeDeces;
    }

    public function setHeureDeDeces(?\DateTimeInterface $heureDeDeces): self
    {
        $this->heureDeDeces = $heureDeDeces;

        return $this;
    }

    public function getDateSurveillanceClinique(): ?\DateTimeInterface
    {
        return $this->dateSurveillanceClinique;
    }

    public function setDateSurveillanceClinique(?\DateTimeInterface $dateSurveillanceClinique): self
    {
        $this->dateSurveillanceClinique = $dateSurveillanceClinique;

        return $this;
    }

    public function getPoidsNaiss(): ?float
    {
        return $this->poidsNaiss;
    }

    public function setPoidsNaiss(?float $poidsNaiss): self
    {
        $this->poidsNaiss = $poidsNaiss;

        return $this;
    }

    public function getTailleNaiss(): ?float
    {
        return $this->tailleNaiss;
    }

    public function setTailleNaiss(?float $tailleNaiss): self
    {
        $this->tailleNaiss = $tailleNaiss;

        return $this;
    }

    public function getPcNaiss(): ?float
    {
        return $this->pcNaiss;
    }

    public function setPcNaiss(?float $pcNaiss): self
    {
        $this->pcNaiss = $pcNaiss;

        return $this;
    }

    public function getTMereAcc(): ?float
    {
        return $this->tMereAcc;
    }

    public function setTMereAcc(?float $tMereAcc): self
    {
        $this->tMereAcc = $tMereAcc;

        return $this;
    }

    public function getPEtatGeneral(): ?float
    {
        return $this->pEtatGeneral;
    }

    public function setPEtatGeneral(?float $pEtatGeneral): self
    {
        $this->pEtatGeneral = $pEtatGeneral;

        return $this;
    }

    public function getTEtatGeneral(): ?float
    {
        return $this->tEtatGeneral;
    }

    public function setTEtatGeneral(?float $tEtatGeneral): self
    {
        $this->tEtatGeneral = $tEtatGeneral;

        return $this;
    }

    public function getPcEtatGeneral(): ?float
    {
        return $this->pcEtatGeneral;
    }

    public function setPcEtatGeneral(?float $pcEtatGeneral): self
    {
        $this->pcEtatGeneral = $pcEtatGeneral;

        return $this;
    }

    public function getTrcEtatGeneral(): ?float
    {
        return $this->trcEtatGeneral;
    }

    public function setTrcEtatGeneral(?float $trcEtatGeneral): self
    {
        $this->trcEtatGeneral = $trcEtatGeneral;

        return $this;
    }

    public function getTaEtatGeneral(): ?float
    {
        return $this->taEtatGeneral;
    }

    public function setTaEtatGeneral(?float $taEtatGeneral): self
    {
        $this->taEtatGeneral = $taEtatGeneral;

        return $this;
    }

    public function getDextro(): ?float
    {
        return $this->dextro;
    }

    public function setDextro(?float $dextro): self
    {
        $this->dextro = $dextro;

        return $this;
    }

    public function getSa2(): ?float
    {
        return $this->sa2;
    }

    public function setSa2(?float $sa2): self
    {
        $this->sa2 = $sa2;

        return $this;
    }

    public function getFrEtatGeneral(): ?float
    {
        return $this->frEtatGeneral;
    }

    public function setFrEtatGeneral(?float $frEtatGeneral): self
    {
        $this->frEtatGeneral = $frEtatGeneral;

        return $this;
    }

    public function getFcEtatGeneral(): ?float
    {
        return $this->fcEtatGeneral;
    }

    public function setFcEtatGeneral(?float $fcEtatGeneral): self
    {
        $this->fcEtatGeneral = $fcEtatGeneral;

        return $this;
    }

    public function getTempEtatGeneral(): ?float
    {
        return $this->tempEtatGeneral;
    }

    public function setTempEtatGeneral(?float $tempEtatGeneral): self
    {
        $this->tempEtatGeneral = $tempEtatGeneral;

        return $this;
    }

    public function getQteMeconium(): ?float
    {
        return $this->qteMeconium;
    }

    public function setQteMeconium(?float $qteMeconium): self
    {
        $this->qteMeconium = $qteMeconium;

        return $this;
    }

    public function getScoreDubowitz(): ?float
    {
        return $this->scoreDubowitz;
    }

    public function setScoreDubowitz(?float $scoreDubowitz): self
    {
        $this->scoreDubowitz = $scoreDubowitz;

        return $this;
    }

    public function getScoreFarr(): ?float
    {
        return $this->scoreFarr;
    }

    public function setScoreFarr(?float $scoreFarr): self
    {
        $this->scoreFarr = $scoreFarr;

        return $this;
    }

}
