import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Brain Tumor Detection & Classification',
        projectDesc: 'Comparative deep learning study implementing 6 architectures (Custom CNN, VGG16, ResNet50, InceptionV3, DenseNet121, MobileNetV2) for MRI-based brain tumor classification. Achieved comprehensive performance analysis on Kaggle Brain Tumor MRI Dataset for superior diagnostic accuracy.',
        tags: ['PyTorch', 'TensorFlow', 'CNN', 'VGG16', 'ResNet50', 'InceptionV3', 'DenseNet121', 'MobileNetV2'],
        code: 'https://github.com/hiapaul/Brain-Tumor-Detection-Using-Deep-Learning',
        demo: 'https://github.com/hiapaul/Brain-Tumor-Detection-Using-Deep-Learning',
        image: one
    },
    {
        id: 2,
        projectName: 'AI-Powered Groundwater Potential Zone Mapping',
        projectDesc: 'Random Forest classifier integrated with Remote Sensing & GIS data to map groundwater potential zones in Kolkata Metropolitan Region. Analyzed 12 environmental features (LULC, soil texture, drainage density, NDVI, TWI, etc.) across 1,500 sample points.',
        tags: ['Random Forest', 'GIS', 'Remote Sensing', 'Scikit-learn', 'Python', 'Spatial ML'],
        code: 'https://github.com/hiapaul/AI-Powered-Groundwater-Potential-Zone-Mapping-Using-Random-Forest-and-GIS',
        demo: 'https://github.com/hiapaul/AI-Powered-Groundwater-Potential-Zone-Mapping-Using-Random-Forest-and-GIS',
        image: two
    },
    {
        id: 3,
        projectName: 'WasteWise - Smart Waste Management System',
        projectDesc: 'Complete waste management system with ML-powered predictions for students in PGs and hostels. Features user authentication, pickup requests, admin dashboard, ETL pipeline, and 4 ML models (Waste Volume Predictor, Demand Forecaster, Waste Type Classifier, Route Optimizer).',
        tags: ['Machine Learning', 'Computer Vision', 'React', 'REST APIs', 'Python', 'ETL'],
        code: 'https://github.com/hiapaul/WasteWise---Smart-Waste-Management-System-',
        demo: 'https://github.com/hiapaul/WasteWise---Smart-Waste-Management-System-',
        image: three
    },
    {
        id: 4,
        projectName: 'Priority-Based Study Planner for GATE',
        projectDesc: 'Rule-based study planner that dynamically allocates study time across subjects based on priority scores and difficulty for GATE aspirants. Features custom priority input, proportional time allocation, and automatic daily schedule generation.',
        tags: ['Python', 'Data Structures', 'Algorithms', 'Scheduling', 'Priority Queue'],
        code: 'https://github.com/hiapaul/Priority-based-study-planner_',
        demo: 'https://github.com/hiapaul/Priority-based-study-planner_',
        image: four
    },
    {
        id: 5,
        projectName: 'Banking Management System in C',
        projectDesc: 'Simple banking system implemented in C demonstrating core operations including user creation, deposits, withdrawals, and balance checking. Built with structures, arrays, functions, and pointers — with proper error handling and insufficient fund protection.',
        tags: ['C', 'Data Structures', 'Pointers', 'File Handling', 'MySQL'],
        code: 'https://github.com/hiapaul/BankingSystemC',
        demo: 'https://github.com/hiapaul/BankingSystemC',
        image: five
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/