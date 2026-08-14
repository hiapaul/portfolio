import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'

// Map skills to unique online image URLs (all different icons)
const getSkillImage = (skill) => {
    const skillMap = {
        // ===== PYTHON & ML LIBRARIES =====
        'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        'PyTorch': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
        'TensorFlow': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
        'Scikit-learn': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg',
        'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
        'NumPy': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
        'Matplotlib': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg',

        // ===== UNIQUE: Seaborn (No official icon, using a chart/plot icon) =====
        'Seaborn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg',

        // ===== WEB FRAMEWORKS =====
        'FastAPI': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
        'Flask': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
        'Django': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',

        // ===== DATABASES =====
        'MySQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',

        // ===== UNIQUE: SQL (Using PostgreSQL icon as SQL generic) =====
        'SQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',

        // ===== UNIQUE: ChromaDB (Using Database icon) =====
        'ChromaDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',

        // ===== DEVOPS & OS =====
        'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
        'Linux': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        'Ubuntu': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg',

        // ===== UNIQUE: Power BI (Using a dashboard/chart icon) =====
        'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',

        // ===== UNIQUE: Microsoft Office (Using a document/file icon) =====
        'Microsoft Office': 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-office/default.svg',

        // ===== C LANGUAGE =====
        'C': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',

        // ===== AI/LLM TOOLS (No official icons - using closest matches) =====
        'LangChain': 'https://www.aiuidesigner.com/icons/langchain.svg',
        'FAISS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg',
        'ONNX': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
        'TorchScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg'
    };
    
    // Fallback: return a generic icon if skill not found
    return skillMap[skill] || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg';
};

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img 
                                    src={getSkillImage(skill)} 
                                    alt={skill}
                                    style={{ 
                                        width: '50px', 
                                        height: '50px', 
                                        objectFit: 'contain',
                                        display: 'block'
                                    }}
                                />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills