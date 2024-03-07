// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const patients = {
    id: 'patients',
    title: 'Patients',
    type: 'group',
    children: [
        {
            id: 'insert-patients',
            title: 'Ajouter un nouveau Patient',
            type: 'item',
            url: '/medecin/insert-patients',
            icon: icons.ChromeOutlined
        },
        {
            id: 'dossier-rapport',
            title: 'Dossiers et Rapports',
            type: 'item',
            url: '/medecin/dossier-rapport',
            icon: icons.ChromeOutlined
        },
        {
            id: 'statistique',
            title: 'Statistique',
            type: 'item',
            url: '/medecin/statistique',
            icon: icons.ChromeOutlined
        }
        // {
        //     id: 'afficher-patient',
        //     title: 'AfficherPatient',
        //     type: 'item',
        //     url: '/medecin/afficher-patient',
        //     icon: icons.ChromeOutlined
        // }
    ]
};

export default patients;
