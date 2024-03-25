import React, { useState, useEffect } from 'react';
import { useTable, useFilters } from 'react-table';
import { useGetAllUsersQuery } from 'services/registerApi';
import Logo from 'assets/images/logo.png';
import miaLogo from 'assets/images/miaLogo.png';
import {  usePagination} from 'react-table';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    Paper,
    Checkbox,
    ListItemText,
    Typography,
    FormControl,
    InputLabel,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    TableContainer,
    Table,
    Grid,
    Box
} from '@mui/material';

import jsPDF from 'jspdf';


import { useNavigate } from 'react-router-dom';


const TextFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <TextField
            size="small"
            value={filterValue || ''}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filtrer..."
        />
    );
};


const affPatient = () => {
    const { data: users } =  useGetAllUsersQuery();
    const [isLoading, setIsLoading] = useState(true);

    const [rows, setRows] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState(['ip','dateDadmission','villeDeNaissance','action']);

    const [error, setError] = useState(null);

    useEffect(() => {
        if (users && !isLoading) {
          setRows(users['hydra:member']);
        }
      }, [users, isLoading]);
    

    useEffect(() => {
        fetch(' http://127.0.0.1:8000/api/matients')
          .then(response => response.json())
          .then(data => {
            const patients = data['hydra:member'];
            setRows(patients);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données de l\'API:', error);
            setIsLoading(false);
            setError(error);
          });
      }, []);


      useEffect(() => {
          // Mettre à jour les colonnes du tableau lorsque selectedColumns change
          const updatedColumns = columns.filter((column) => selectedColumns.includes(column.accessor));
          setTableColumns(updatedColumns);
      }, [selectedColumns]);

    const generatePDF = (rowData) => {


        const doc = new jsPDF();
        const lineHeight = 10;
        doc.setFontSize(11);
        const logo = new Image();
        logo.src = Logo;
        const logoo = new Image();
        logoo.src = miaLogo;
        const logoWidth = 35; // Ajustez la largeur de l'image si nécessaire
        const logoHeight = 35; // Ajustez la hauteur de l'image si nécessaire
        doc.addImage(logo, 'PNG', 10 , 4, 40, 40);
        doc.addImage(logoo, 'PNG', 165 , 8, logoWidth, logoHeight);
        doc.setFont('helvetica', 'bold');
        //   doc.text(`           المملكة المغربية`, 120, 10 + lineHeight );
        //   doc.text(`          وزارة الصحة`, 120, 16 + lineHeight );
        //   doc.text(`المركز الاستشفائي محمد السادس `, 114, 22 + lineHeight );
        //   doc.text(`                  وجدة`,  120, 28 + lineHeight );
        doc.text(`           Royaume du Maroc`, 80, 10 + lineHeight );
        doc.text(`          Ministère de la santé`, 80, 16 + lineHeight );
        doc.text(`CENTRE HOSPITALIER MOHAMMED VI `, 73, 22 + lineHeight );
        doc.text(`                  OUJDA`,  81, 28 + lineHeight );
        doc.setFontSize(16);
        doc.text(`OBSERVATION MEDICALE NEONATOLOGIE`,  45, 45 + lineHeight);
        doc.setFontSize(10);

        doc.text(`IPP : ${rowData.ip}`, 100, 60 + lineHeight);
        doc.text(`Nom et Prénom de la maman: ${rowData.nom} ${rowData.prenomMere}`, 100, 67 + lineHeight);

        doc.text(`Âge: ${rowData.age}`, 100, 74 + lineHeight);
        doc.text(`Sexe : ${rowData.sexeAvantExamen}`, 130, 74 + lineHeight);
        doc.setFont('helvetica', 'normal');

        doc.text(`Adresse exacte :   ${rowData.adresse}`, 10, 85 + lineHeight);
        doc.text(`Date d'entrée: ${rowData.dateDadmission ? new Date(rowData.dateDadmission).toLocaleDateString('fr-FR') : ''}`, 93, 93 + lineHeight);
        doc.text(`Date de sortie: ${rowData.dateSortie? new Date(rowData.dateSortie).toLocaleDateString('fr-FR') : ''}`, 93, 101 + lineHeight);
        doc.text(`Décédé le : ${rowData.dateDeDeces? new Date(rowData.dateDeDeces).toLocaleDateString('fr-FR') : ''}`, 93, 110 + lineHeight);
        doc.text(`Cause de décés  : ${rowData.causeDeDeces}`,93,117+lineHeight);
        doc.text(`Diagnostic de sortie: ${rowData.diagnoticDeSortie}`, 93, 125 + lineHeight);
        doc.text(`Téléphone: ${rowData.telephone}`, 10, 93 + lineHeight);
        doc.text(`Mode d'Admission:${rowData.modeDadmission} `, 10, 101 + lineHeight);
        doc.text(`Couverture Sanitaire: ${rowData.couvertureSanitaire} `, 10, 110 + lineHeight);
        doc.text(`Provenance: ${rowData.villeProvenance}`, 10, 117 + lineHeight);
        doc.text(`Diagnostic d'Entrée: ${rowData.diagnosticDentree}`, 10, 125 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`Médecin de Garde : Dr ${rowData.medecinGardeAdmission}`, 10, 140 + lineHeight);
        doc.setFont('helvetica', 'normal');

        doc.text(`Date de Naissance: ${rowData.dateDeNaissance? new Date(rowData.dateDeNaissance).toLocaleDateString('fr-FR') : ''}`, 10, 150 + lineHeight);
        doc.text(`Heure de Naissance: ${rowData.heureDeNaissance? new Date(rowData.heureDeNaissance).toLocaleDateString('fr-FR') : ''}`, 95, 150 + lineHeight);
        // doc.text(`Ville de Naissance: ${rowData.villeDeNaissance}`, 10, 90 + lineHeight);
        // doc.text(`Région de Naissance: ${rowData.regionDeNaissance}`, 10, 100 + lineHeight);

        doc.text(`Date d'admission: ${rowData.dateDadmission ? new Date(rowData.dateDadmission).toLocaleDateString('fr-FR') : ''}`, 10, 160 + lineHeight);

        doc.text(`Heure d'Admission: `, 95, 160 + lineHeight);

        doc.setFont('helvetica', 'bold');
        doc.text(`PARENTS: `, 10, 170 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`Âge Mère: ${rowData.ageMere}`, 10, 180 + lineHeight);
        doc.text(`Âge Père: ${rowData.agePere}`, 90, 180 + lineHeight);
        doc.text(`Profession Mère: ${rowData.professionMere}`, 10, 190 + lineHeight);
        doc.text(`Profession Père: ${rowData.professionPere}`, 90, 190 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`Motif d'Hospitalisation: ${rowData.motifDhospitalisation}`, 10, 200 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`Consanguinité: ${rowData.cosanguinite}`, 10, 210 + lineHeight);
        doc.text(`GROSSESSE : ${rowData.pariteMere}`, 10, 220 + lineHeight);
        doc.text(`Parité Mère: ${rowData.pariteMere}`, 40, 220 + lineHeight);
        doc.text(`Gestité Mère: ${rowData.gestiteMere}`, 100, 220 + lineHeight);
        doc.text(`Âge Gestationnel: ${rowData.ageGestationnel}`, 30, 230 + lineHeight);
        doc.text(`SEROLOGIES : `, 10, 240 + lineHeight);
        doc.text(`DEROULEMENT GROSSESSE : `, 10, 250 + lineHeight);
        doc.text(`Préciser IVG: ${rowData.preciserIvg}`, 30, 260 + lineHeight);
        doc.text(`Nombre de Frères: ${rowData.nbreFrere}`, 10, 270 + lineHeight);
        doc.text(`Antécédents Pathologiques: ${rowData.atcdPatho}`, 90, 270 + lineHeight);

        doc.addPage()

        doc.setFont('helvetica', 'bold');
        doc.text(`ACCOUCHEMENT : `, 10, 10 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`LIEU D'ACCOUCHEMENT  : ${rowData.lieuAccouchement} `, 10, 20 + lineHeight);
        doc.text(`DUREE DE TRAVAIL  : ${rowData.dureeDeTravailAcc}`, 10, 30 + lineHeight);
        doc.text(`PRESENTATION  : ${rowData.presentationAcc}`, 10, 40 + lineHeight);
        doc.text(`RPDE  : ${rowData.rpdeAcc}`, 10, 50 + lineHeight);
        doc.text(`LIQUIDE AMNIOTIQUE  : ${rowData.liquideAmniotiqueAcc}`, 10, 60 + lineHeight);
        doc.text(`TEMPERATURE DE LA MERE  : ${rowData.tMereAcc}`, 10, 70 + lineHeight);
        doc.text(`SURVEILLANCE FEOTALE  : ${rowData.survFoetaleAccouchement}`, 10, 80 + lineHeight);
        doc.text(`VOIE D'ACCOUCHEMENT  : ${rowData.maniereAccouchement}`, 10, 90 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`HISTOIRE DE LA MALADIE DE LA MERE  : `, 10, 104 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.histoireDeLaMaladieMere}`, 50, 110 + lineHeight);

        doc.setFont('helvetica', 'bold');

        doc.text(`ETAT DU NOUVEAU-NE A LE NAISSANCE  : `, 10, 130 + lineHeight);
        doc.setFont('helvetica', 'normal');

        doc.text(`APGAR :`, 10, 140 + lineHeight);
        doc.text(`1MN : ${rowData.apgar1Min}`, 40, 140 + lineHeight);
        doc.text(`5MN : ${rowData.apgar5Min}`, 70, 140 + lineHeight);
        doc.text(`10MN : ${rowData.apgar10Min}`, 100, 140 + lineHeight);
        doc.text(`CRI : ${rowData.criEnfant}`, 10, 150 + lineHeight);
        doc.text(`CYANOSE : ${rowData.cyanoseEnfant}`, 10, 160 + lineHeight);
        doc.text(`REANIMATION : ${rowData.reanimationEnfant}`, 10, 170 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`MENSURATION A LA NAISSANCE : `, 10, 200 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`Poids : ${rowData.poidsNaiss}               KgTaille : ${rowData.tailleNaiss} cm                     PC: ${rowData.pcNaiss} cm`, 10, 210 + lineHeight);

        doc.addPage()
        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN A L'ADMISSION : `, 10, 10 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`ETAT GENERAL : `, 10, 20 + lineHeight);
        doc.text(`P: ${rowData.pEtatGeneral} g`, 50, 20 + lineHeight);
        doc.text(`T: ${rowData.tEtatGeneral} cm`, 80, 20 + lineHeight);
        doc.text(`PC: ${rowData.pcEtatGeneral} cm`, 110, 20 + lineHeight);

        doc.text(`TRC: ${rowData.trcEtatGeneral}`, 50, 30 + lineHeight);
        doc.text(`TA: ${rowData.taEtatGeneral}`, 80, 30 + lineHeight);
        doc.text(`SAO2/DEXTRO: ${rowData.sa2} / ${rowData.dextro}`, 110, 30 + lineHeight);

        doc.text(`FR: ${rowData.frEtatGeneral}`, 50, 40 + lineHeight);
        doc.text(`FC: ${rowData.fcEtatGeneral}`, 80, 40 + lineHeight);
        doc.text(`T : ${rowData.tempEtatGeneral}`, 110, 40 + lineHeight);


        doc.text(`ASPECTS :  `, 10, 50 + lineHeight);
        doc.setFont('helvetica', 'normal');

        doc.text(` ${rowData.aspects}`, 40, 50 + lineHeight);

        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN PLEURO-PULMONAIRE :  `, 10, 70 + lineHeight);
        doc.text(`Score de SILVERMAN :  `, 90, 70 + lineHeight);
        doc.setFont('helvetica', 'normal');

        doc.text(` Battements des Ailes au Nez : ${rowData.battementsDesAilesAuNez} `,10 ,80+lineHeight);
        doc.text(` Tirage Intercostal :  ${rowData.tirageIntercostal} `,10 ,90+lineHeight);
        doc.text(` Balancements Thoraco-Abdominal : ${rowData.balancementsThoracoAbdominal} `,10 ,100+lineHeight);
        doc.text(` Entonnoir Xyphoïdien ${rowData.entonnoirXyphoidien} `,10 ,110+lineHeight);
        doc.text(` Ceignement Expiratoire ${rowData.ceignementExpiratoire} `,10 ,120+lineHeight);

        doc.text(`AUSCULTATION :  ${rowData.auscultation}`, 10, 130 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN CARDIO-VASCULAIRE :  `, 10, 140 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`Pouls Périphériques (FEMORAUX): ${rowData.poulsPeripheriques}`,10, 150 + lineHeight)

        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN NEUROLOGIQUE :  `, 10, 170 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`CONSCIENCE : ${rowData.conscienceExamNeurologique}`,10, 180 + lineHeight)
        doc.text(`CRI : ${rowData.criExamNeurologique}`,10, 190 + lineHeight)
        doc.text(`TONUS : ${rowData.tonusExamNeurologique}`,10, 200 + lineHeight)
        doc.text(`REFLEXES ARCHAIQUES :  `, 10, 210 + lineHeight);
        doc.text(`Moro :              ${rowData.moro}`,30, 220 + lineHeight)
        doc.text(`Succion :           ${rowData.succion}`,30, 230 + lineHeight)
        doc.text(`Grasping :          ${rowData.grasping}`,30, 240 + lineHeight)
        doc.text(`Points Cardinaux :  ${rowData.pointsCardinaux}`,30, 250 + lineHeight)
        doc.text(`Allongement Croisé: ${rowData.allongementCroise}`,30, 260 + lineHeight)
        doc.text(`Marche Automatique: ${rowData.marcheAutomatique}`,30, 270 + lineHeight)

        doc.addPage()

        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN ABDOMINO-PELVIEN :  `, 10, 10 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`HPM: ${rowData.hpmExamAbdominoPelvien}`,10, 20 + lineHeight)
        doc.text(`SMG: ${rowData.smgExamAbdominoPelvien}`,10, 30 + lineHeight)
        doc.text(`ASCITE : ${rowData.asciteExamAbdominoPelvien}`,10, 40 + lineHeight)
        doc.text(`MASSE PALPABLE : ${rowData.mpExamAbdominoPelvien}`,10, 50 + lineHeight)
        doc.text(`ANOMALIES ANALES : ${rowData.aaExamAbdominoPelvien}`,10, 60 + lineHeight)
        doc.text(`OMBILIC : ${rowData.ombilicExamAbdominoPelvien}`,10, 70 + lineHeight)
        doc.text(`MECONIUM : ${rowData.descMeconium}`,10, 80 + lineHeight)
        doc.text(`HEURE D'EMISSION : ${rowData.heureEmissionMeconium}`,20, 90 + lineHeight)
        doc.text(`QUANTITE : ${rowData.qteMeconium}`,20, 100 + lineHeight)

        doc.setFont('helvetica', 'bold');
        doc.text(`EXAMEN CUTANEO-MUQUEUX :  `, 10, 115 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.descExamCutaneoMuqueux}`,10, 125 + lineHeight)

        doc.text(`Organes Génitaux Externes : ${rowData.organesGenitauxExternes} `, 10, 140 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`CRITERES DE MATURITE :  `, 10, 150 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`SCORE DE DUBOWITZ : ${rowData.scoreDubowitz} SA`,20, 160 + lineHeight)
        doc.text(`SCORE DE FARR : ${rowData.scoreFarr}`,20, 170 + lineHeight)

        doc.setFont('helvetica', 'bold');
        doc.text(`BILAN MALFORMATIF :  `, 10, 180 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`ATRESIE OESOPHAGE : ${rowData.atresieOesophage}`,20, 190 + lineHeight)
        doc.text(`FENTE LABIO-PALATINE : ${rowData.fenteLabioPalatine}`,20, 200 + lineHeight)
        doc.text(`ATRESIE DES CHOANES : ${rowData.atresieDesChoanes}`,20, 210 + lineHeight)
        doc.text(`ANOMALIE ORTHOPEDIQUE : ${rowData.anomalieOrthopedique}`,20, 220 + lineHeight)
        doc.text(`Autres anomalies : ${rowData.autreAnomalie}`,20, 230 + lineHeight)
        doc.addPage()
        doc.setFont('helvetica', 'bold');
        doc.text(`CONCLUSION CLINIQUE ET DIAGNOSTICS EVOQUES :  `, 10, 10 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.conclusionCliniqueEtDiagnostiquesEvoques}`,20, 20 + lineHeight)

        doc.setFont('helvetica', 'bold');
        doc.text(`DIAGNOSTIC RETENU :  `, 10, 40 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.diagnosticRetenues}`,20, 50 + lineHeight)
        doc.setFont('helvetica', 'bold');
        doc.text(`CONDUITE A TENIR :  `, 10, 70 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.conduiteATenir}`,20, 80 + lineHeight)




        const pdf = doc.output('blob');
        const blobUrl = URL.createObjectURL(pdf);
        window.open(blobUrl, '_blank');
    };
    const generatePDF2 = (rowData) => {


        const doc = new jsPDF();
        const lineHeight = 10;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.setFontSize(11);
        const logo = new Image();
        logo.src = Logo;
        const logoo = new Image();
        logoo.src = miaLogo;
        const logoWidth = 35; // Ajustez la largeur de l'image si nécessaire
        const logoHeight = 35; // Ajustez la hauteur de l'image si nécessaire
        doc.addImage(logo, 'PNG', 10 , 4, 40, 40);
        doc.addImage(logoo, 'PNG', 165 , 8, logoWidth, logoHeight);
        doc.setFont('helvetica', 'bold');
        //   doc.text(`           المملكة المغربية`, 120, 10 + lineHeight );
        //   doc.text(`          وزارة الصحة`, 120, 16 + lineHeight );
        //   doc.text(`المركز الاستشفائي محمد السادس `, 114, 22 + lineHeight );
        //   doc.text(`                  وجدة`,  120, 28 + lineHeight );
        doc.text(`           Royaume du Maroc`, 80, 10 + lineHeight );
        doc.text(`          Ministère de la santé`, 80, 16 + lineHeight );
        doc.text(`CENTRE HOSPITALIER MOHAMMED VI `, 73, 22 + lineHeight );
        doc.text(`                  OUJDA`,  81, 28 + lineHeight );


      
        // Diviser la page en deux parties
        const firstPartWidth = pageWidth / 6;
        const secondPartWidth = (2 * pageWidth) / 6;
      
   // Partie gauche de la page

        doc.setFontSize(12);



// Récupérer les utilisateurs depuis l'API
        const usersByPosition = {
            'Chef de service': [],
            'Professeur agrégé': [],
            'Professeur assistant': [],
            'Infirmier chef': [],
            'Médecin résident': [],
            'Médecin interne': [],
        };

// Regrouper les utilisateurs par position
users?.['hydra:member']?.forEach((user) => {
    const position = user.position;
    if(user.actif === 'Actif'){
        if (position in usersByPosition) {
    usersByPosition[position].push(user);
  }
    }
  
  
});

// Définir la position de départ pour l'affichage des utilisateurs
let linePosition = 60;

// Parcourir chaque catégorie de position et afficher les utilisateurs correspondants
Object.entries(usersByPosition).forEach(([position, userList]) => {
  // Mettre à jour la position de départ avant d'afficher la position
  linePosition += lineHeight;

  doc.setFont('helvetica', 'bold');
  doc.text(position, 10, linePosition);

  doc.setFont('helvetica', 'normal');
  userList.forEach((user) => {
    linePosition += lineHeight;
    const fullName = `${user.firstname} ${user.lastname}`;
    doc.text(fullName, 10, linePosition);
  });

  linePosition += lineHeight;
});

      
        // Partie droite de la page

        doc.setFontSize(14);
        doc.text(`COMPTE RENDU D'HOSPITALISATION`, secondPartWidth + 10, 60 + lineHeight);
      
        doc.setFontSize(12);
        
        doc.setFont('helvetica', 'bold'); // Rétablir la police normale
        doc.text(`Nom de la mère :`, secondPartWidth + 10, 80 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(` né de ${rowData.nom} ${rowData.prenomMere} `, secondPartWidth + 50, 80 + lineHeight) ;
        doc.setFont('helvetica', 'bold');
        doc.text(`IPP: ${rowData.ip}`, secondPartWidth + 100, 80 + lineHeight);
        
        doc.text(`Diagnostic d'admission:`, secondPartWidth + 10, 90 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(` ${rowData.diagnosticDentree}`, secondPartWidth + 65, 90 + lineHeight);
        doc.setFont('helvetica', 'bold'); // Rétablir la police normale
        doc.text(`Date d'entrée:`, secondPartWidth + 10, 100 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(` ${rowData.dateDadmission ? new Date(rowData.dateDadmission).toLocaleDateString('fr-FR') : ''}`, secondPartWidth + 40, 100 + lineHeight);
        doc.setFont('helvetica', 'bold'); // Rétablir la police normale
        doc.text(`Date de décès:`, secondPartWidth + 10, 110 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(` ${rowData.dateDeDeces ? new Date(rowData.dateDeDeces).toLocaleDateString('fr-FR') : ''}`, secondPartWidth + 40, 110 + lineHeight);
        doc.setFont('helvetica', 'bold');

        doc.text(`Diagnostic de décès: ${rowData.causeDeDeces}`, secondPartWidth + 10, 120 + lineHeight);
      
        doc.setFont('helvetica', 'bold'); // Définir la police en gras
        doc.text(`Identité:`, secondPartWidth + 10, 140 + lineHeight);
        doc.setFont('helvetica', 'normal'); // Rétablir la police normale
        doc.text(`        Il s'agit nouveau né de Mme ${rowData.nom} ${rowData.prenomMere} de sexe ${rowData.sexeAvantExamen},
        né le ${rowData.dateDeNaissance ? new Date(rowData.dateDeNaissance).toLocaleDateString('fr-FR') : ''}. Originaire de ${rowData.villeProvenance}
        Issu d'un mariage ${rowData.cosanguinite === "non" ? "non" : ""}cosanguin`, secondPartWidth , 160 + lineHeight);
        doc.text(`Ayant ${rowData.couvertureSanitaire} comme couverture sanitaire.`, secondPartWidth + 10, 180 + lineHeight);
        doc.text(`Mère âgée de ${rowData.ageMere} ans, avec ${rowData.atcdPatho} antécédents pathologiques.`, secondPartWidth + 10, 190 + lineHeight);
      
        doc.text(`Le score de Dubowitz à la naissance : ${rowData.scoreDubowitz}`, secondPartWidth + 10, 200 + lineHeight);
        doc.text(`Accouchement par voie ${rowData.maniereAccouchement} `, secondPartWidth + 10, 210 + lineHeight);
        doc.text(`APGAR à la naissance : ${rowData.apgar1Min}`, secondPartWidth + 10, 220 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`Admis pour : `, secondPartWidth + 10, 240 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.motifDhospitalisation}`, secondPartWidth + 40, 240 + lineHeight);
        doc.setFont('helvetica', 'bold');
        doc.text(`Examen clinique à l'admission :  `, secondPartWidth + 10, 250 + lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(`${rowData.reanimationEnfant}`, secondPartWidth + 20, 260 + lineHeight);

        doc.addPage()


        doc.setFont('helvetica', 'bold');
        doc.text(`Sur le plan hémodynamique :  `, secondPartWidth + 10,   lineHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(` FC : ${rowData.fcEtatGeneral}`, secondPartWidth + 75,  lineHeight);

        doc.text(`Sur le plan respiratoire : FR : ${rowData.frEtatGeneral} cpm`, secondPartWidth + 10, 10 + lineHeight);
        doc.text(`Poids : ${rowData.poidsNaiss} KgTaille : ${rowData.tailleNaiss} cm   PC: ${rowData.pcNaiss} cm`, secondPartWidth + 10, 20 + lineHeight);
        doc.text(`Examen cardio-vasculaire : `, secondPartWidth + 10, 340 + lineHeight);
        doc.text(`Pouls Périphériques :  ${rowData.poulsPeripheriques}`, secondPartWidth + 10, 30 + lineHeight);

        doc.text(`Examen abdominal: `, secondPartWidth + 10, 45 + lineHeight);
        doc.text(`Examen des OGE : ${rowData.organesGenitauxExternes} ${rowData.sexeAvantExamen} .`, secondPartWidth + 10, 55 + lineHeight);
        doc.text(`Bilan biologique à l'admission:`, secondPartWidth + 10, 65 + lineHeight);
        doc.text(`${rowData.diagnosticDentree}`, secondPartWidth + 10, 75 + lineHeight);

        doc.text(`Diagnostic retenu : ${rowData.diagnosticRetenues}`, secondPartWidth + 10, 85 + lineHeight);
        doc.text(`Conclusion clinique : ${rowData.conclusionCliniqueEtDiagnostiquesEvoques}`, secondPartWidth + 10, 105 + lineHeight);

        const pdf = doc.output('blob');
        const blobUrl = URL.createObjectURL(pdf);
        window.open(blobUrl, '_blank');
      };
      


    const handleColumnSelectChange = (event) => {
        setSelectedColumns(event.target.value);
      };
    const columns = React.useMemo(
        () => [
            {
                Header: 'IPP',accessor: 'ip',Filter: TextFilter,
            },
            
            {
                Header: 'Nom Mere',
                accessor: 'nom',
                Filter: TextFilter,
                Cell: ({ value }) => {
                    const non = value ? value : '';
                    return non;
                }
            },
             {
                            Header: 'Prénom Mère',accessor: 'prenomMere',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Ville de Naissance',accessor: 'villeDeNaissance',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Sexe Avant Examen',accessor: 'sexeAvantExamen',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Téléphone',accessor: 'telephone',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Âge',accessor: 'age',Filter: TextFilter,
                        },
                        {
                            Header: 'Date de Naissance',accessor: 'dateDeNaissance',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Heure de Naissance',accessor: 'heureDeNaissance',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }                        },
                        {
                            Header: 'Région de Naissance',accessor: 'regionDeNaissance',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Adresse',accessor: 'adresse',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Couverture Sanitaire',accessor: 'couvertureSanitaire',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Ville Provenance',accessor: 'villeProvenance',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Mode d\'Admission',accessor: 'modeDadmission',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Date d\'Admission',accessor: 'dateDadmission',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Heure d\'Admission',accessor: 'heureDadmission',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }
                        },
                        {
                            Header: 'Médecin Garde Admission',accessor: 'medecinGardeAdmission',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Diagnostic d\'Entrée',accessor: 'diagnosticDentree',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Motif d\'Hospitalisation',accessor: 'motifDhospitalisation',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Âge Mère',accessor: 'ageMere',Filter: TextFilter,
                        },
                        {
                            Header: 'Profession Mère',accessor: 'professionMere',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Âge Père',accessor: 'agePere',Filter: TextFilter,
                        },
                        {
                            Header: 'Profession Père',accessor: 'professionPere',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Consanguinité',accessor: 'cosanguinite',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Parité Mère',accessor: 'pariteMere',Filter: TextFilter,
                        },
                        {
                            Header: 'Gestité Mère',accessor: 'gestiteMere',Filter: TextFilter,
                        },
                        {
                            Header: 'Âge Gestationnel',accessor: 'ageGestationnel',Filter: TextFilter,
                        },
                        {
                            Header: 'Préciser IVG',accessor: 'preciserIvg',Filter: TextFilter,
                        },
                        {
                            Header: 'Nombre de Frères',accessor: 'nbreFrere',Filter: TextFilter,
                            
                        },
                        {
                            Header: 'Antécédents Pathologiques',accessor: 'atcdPatho',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Histoire de la Maladie Mère',accessor: 'histoireDeLaMaladieMere',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Poids de Naissance',accessor: 'poidsNaiss',Filter: TextFilter,
                        },
                        {
                            Header: 'Taille de Naissance',accessor: 'tailleNaiss',Filter: TextFilter,
                        },
                        {
                            Header: 'PC de Naissance',accessor: 'pcNaiss',Filter: TextFilter,
                        },
                        {
                            Header: 'Date Admission de la Mère Accouchement',accessor: 'dateDadmissionDeLaMereAccouchement',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Heure Admission de la Mère Accouchement',accessor: 'heureDadmissionDeLaMereAccouchement',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }                        },
                        {
                            Header: 'Lieu Accouchement',accessor: 'lieuAccouchement',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Durée de Travail Accouchement',accessor: 'dureeDeTravailAcc',Filter: TextFilter,
                        },
                        {
                            Header: 'Présentation Accouchement',accessor: 'presentationAcc',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'RPDE Accouchement',accessor: 'rpdeAcc',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Liquide Amniotique Accouchement',accessor: 'liquideAmniotiqueAcc',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'T Mère Accouchement',accessor: 'tMereAcc',Filter: TextFilter,
                        },
                        {
                            Header: 'Survie Foetale Accouchement',accessor: 'survFoetaleAccouchement',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Manière Accouchement',accessor: 'maniereAccouchement',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Apgar 1 Min',accessor: 'apgar1Min',Filter: TextFilter,
                        },
                        {
                            Header: 'Apgar 5 Min',accessor: 'apgar5Min',Filter: TextFilter,
                        },
                        {
                            Header: 'Apgar 10 Min',accessor: 'apgar10Min',Filter: TextFilter,
                        },
                        {
                            Header: 'Cri de l\'Enfant' ,accessor: 'criEnfant',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Cyanose de l\'Enfant',accessor : 'cyanoseEnfant',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Réanimation de l\'Enfant',accessor: 'reanimationEnfant',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Type Basse',accessor: 'typeBasse',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Indication Césarienne',accessor: 'indicationCesarienne',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Heure Césarienne',accessor: 'heureCesarienne',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }                        },
                        {
                            Header: 'Maturation',accessor: 'maturation',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Auscultation',accessor: 'auscultation',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Aspects',accessor: 'aspects',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'P État Général',accessor: 'pEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'T État Général',accessor: 'tEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'PC État Général',accessor: 'pcEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'TRC État Général',accessor: 'trcEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'TA État Général',accessor: 'taEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'Battements des Ailes au Nez',accessor: 'battementsDesAilesAuNez',Filter: TextFilter,
                        },
                        {
                            Header: 'Tirage Intercostal',accessor: 'tirageIntercostal',Filter: TextFilter,
                        },
                        {
                            Header: 'Balancements Thoraco-Abdominal',accessor: 'balancementsThoracoAbdominal',Filter: TextFilter,
                        },
                        {
                            Header: 'Entonnoir Xyphoïdien',accessor: 'entonnoirXyphoidien',Filter: TextFilter,
                        },
                        {
                            Header: 'Ceignement Expiratoire',accessor: 'ceignementExpiratoire',Filter: TextFilter,
                        },
                        {
                            Header: 'Dextro',accessor: 'dextro',Filter: TextFilter,
                        },
                        {
                            Header: 'Sa2',accessor: 'sa2',Filter: TextFilter,
                        },
                        {
                            Header: 'FR État Général',accessor: 'frEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'FC État Général',accessor: 'fcEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'Temp État Général',accessor: 'tempEtatGeneral',Filter: TextFilter,
                        },
                        {
                            Header: 'Pouls Périphériques',accessor: 'poulsPeripheriques', Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Organes Génitaux Externes',accessor: 'organesGenitauxExternes',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Conscience Exam Neurologique',accessor: 'conscienceExamNeurologique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Cri Exam Neurologique',accessor: 'criExamNeurologique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Tonus Exam Neurologique',accessor: 'tonusExamNeurologique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'HPM Exam Abdomino-Pelvien',accessor: 'hpmExamAbdominoPelvien',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'SMG Exam Abdomino-Pelvien',accessor: 'smgExamAbdominoPelvien', Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Ascite Exam Abdomino-Pelvien',accessor: 'asciteExamAbdominoPelvien',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'MP Exam Abdomino-Pelvien',accessor: 'mpExamAbdominoPelvien',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'AA Exam Abdomino-Pelvien',accessor: 'aaExamAbdominoPelvien',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'ombilic examen',accessor: 'ombilicExamAbdominoPelvien',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Description Meconium ',accessor: 'descMeconium',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Quantité Meconium ',accessor: 'qteMeconium',Filter: TextFilter,
                        },
                        {
                            Header: 'heure emission  Meconium ',accessor: 'heureEmissionMeconium',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }                        },
                      
            
                        {
                            Header: 'Score Dubowitz',accessor: 'scoreDubowitz',Filter: TextFilter,
                        },
                        {
                            Header: 'Score Farr',accessor: 'scoreFarr',Filter: TextFilter,
                        },
                        {
                            Header: 'Description Exam Cutanéo-Muqueux',accessor: 'descExamCutaneoMuqueux',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Moro',accessor: 'moro',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Succion',accessor: 'succion',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Grasping',accessor: 'grasping',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Points Cardinaux',accessor: 'pointsCardinaux',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Allongement Croisé',accessor: 'allongementCroise',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Marche Automatique',accessor: 'marcheAutomatique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Atresie Oesophage',accessor: 'atresieOesophage',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Fente Labio-Palatine',accessor: 'fenteLabioPalatine',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Atresie des Choanes',accessor: 'atresieDesChoanes',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Anomalie Orthopédique',accessor: 'anomalieOrthopedique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Autre Anomalie',accessor: 'autreAnomalie',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Conclusion Clinique et Diagnostiques Évoqués',accessor: 'conclusionCliniqueEtDiagnostiquesEvoques',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Diagnostic Retenues',accessor: 'diagnosticRetenues',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Conduite à Tenir',accessor: 'conduiteATenir',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Date de Sortie',accessor: 'dateSortie',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Lieu de Transfert',accessor: 'lieuDeTransfert',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Date de Transfert',accessor: 'dateDeTransfert',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Date de Décès',accessor: 'dateDeDeces',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'Diagnostic de Sortie',accessor: 'diagnoticDeSortie',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Heure de Décès',accessor: 'heureDeDeces',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const heureDeNaissance = value ? new Date(value).toLocaleTimeString('fr-FR') : '';
                                return heureDeNaissance;
                            }                        },
                        {
                            Header: 'Cause de Décès',accessor: 'causeDeDeces',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Date de Surveillance Clinique',accessor: 'dateSurveillanceClinique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const dateDeNaissance = value ? new Date(value).toLocaleDateString('fr-FR') : '';
                                return dateDeNaissance;
                            }
                        },
                        {
                            Header: 'SurveillanceClinique',accessor: 'examenComplémentaireSurveillanceClinique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Résultat Surveillance Clinique',accessor: 'resultatSurveillanceClinique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
                        {
                            Header: 'Commentaires Surveillance Clinique',accessor: 'commentairesSurveillanceClinique',Filter: TextFilter,
                            Cell: ({ value }) => {
                                const non = value ? value : '';
                                return non;
                            }
                        },
            
            {
                Header: 'ACTIONS',accessor:'action',Filter: TextFilter,

                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => generatePDF(row.original)}
                            style={{ marginRight: '5px' }}
                        >
                            Rapport
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => generatePDF2(row.original)}
                            style={{ marginRight: '5px' }}
                        >
                            Compte rendu
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleModifier(row.original)}
                            style={{ marginRight: '5px' }}
                        >
                            Modifier
                        </Button>

                    </div>
                ),
            },
        ],
        []
    );
    const [tableColumns, setTableColumns] = useState(columns);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows: filteredRows,
        prepareRow,
        state,
        page,


        canPreviousPage,
        canNextPage,
        previousPage,
        nextPage
    } = useTable(
        {
            columns: tableColumns,
            data: rows,
            initialState: { filters: [] , pageIndex: 0, pageSize: 6}, // Initialiser les filtres à vide
        },
        useFilters,
        usePagination, // Ajoutez usePagination ici
    );

    const navigate = useNavigate();

    const handleModifier = (row) => {
        // Logique pour la modification d'une entrée
        console.log('handleModifier yassi');
        navigate(`/medecin/modifierPatient/${row.id}`);
        // Remplacez '../modifier' par le chemin de votre page de modification et row.id par l'identifiant de la ligne correspondante

        // ...
    };

    const handleDesactiver = (row) => {
        // Logique pour la suppression d'une entrée
        console.log('handleDes yassi')

        // ...
    };

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    



    return (



        <div className="dossier-rapport">
            <div className="scroll-bar">

                <div className="scroll-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
                    <div className="" style={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" component="label" >
                            Veuillez sélectionner les informations du nouveau-né à afficher dans le tableau :
                        </Typography>
                    </div>
                </div>
                <div className="scroll-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px' }}>
                    <div className="" style={{ textAlign: 'center' }}>
                        <div className="column-toggle" style={{ display: 'flex', alignItems: 'center' }}>

                            <FormControl variant="outlined" style={{ width: '200px' }}>
                                <InputLabel id="info-patient-label" sx={{ fontWeight: 'bold', color: 'black' }}>Info Patient à afficher</InputLabel>
                                <Select
                                    labelId="info-patient-label"
                                    multiple
                                    value={selectedColumns}
                                    onChange={handleColumnSelectChange}
                                    renderValue={(selected) => selected.join(', ')}
                                >
                                    <MenuItem value="" disabled>
                                        Info Patient à afficher
                                    </MenuItem>
                                    {columns.map((column) => (
                                        <MenuItem key={column.accessor} value={column.accessor}>
                                            <Checkbox checked={selectedColumns.includes(column.accessor)} />
                                            <ListItemText primary={column.Header} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-container">
                <div
                    style={{
                        margin: '10px',
                        border: '2px solid rgb(0,117,253)',
                        borderRadius: '8px',
                        padding: '10px',
                        position: 'relative'
                    }}
                >
                    <h4
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'rgb(249,250,252)',
                            padding: '0 10px'
                        }}
                    >
                        Liste des nouveau nés

                    </h4>

                    <TableContainer component={Paper} sx={{ marginTop: 2, overflowX: 'auto',width: '100%' }}>
                        <Table {...getTableProps()}>
                            <TableHead>
                                {headerGroups.map((headerGroup) => (
                                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <TableCell {...column.getHeaderProps()} style={{ minWidth: '250px' }}>
                                                {column.render('Header')}
                                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHead>
                            <TableBody {...getTableBodyProps()}>
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <TableRow {...row.getRowProps()} >
                                            {row.cells.map((cell) => (
                                                <TableCell {...cell.getCellProps()} style={{ minWidth: '250px' }}>{cell.render('Cell')}</TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                                style={{ marginRight: '5px' }}
                            >
                                Précédent
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                                style={{ marginLeft: '5px' }}
                            >
                                Suivant
                            </Button>
                        </Box>
                    </Box>
                </Grid>




            </div>
        </div>

    );
};

export default affPatient;