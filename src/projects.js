import React, { useState, useEffect } from 'react'
import { db } from "./firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import './css/projects-grid.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [isActive, setActive] = useState("");

    const toggleClass = (buttonid) => {
        setActive(buttonid);
    };

    const getProjects = async () => {
        const projectsCollectionRef = collection(db, "Projects");
        const querySnapshot = await getDocs(projectsCollectionRef);
        setProjects(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getAllProjects=()=>{
        getProjects();
        toggleClass("allprojectsbutton");
    }

    useEffect(() => {
        getAllProjects()
        const getSkills = async () => {
            const skillsCollectionRef = collection(db, "Skills");
            const querySnapshot = await getDocs(skillsCollectionRef);
            setSkills(querySnapshot.docs.map((doc) => ({ name: doc.id })))
        }
        getSkills()
    }, [])

    async function queryProjects(skill) {
        const projectsCollectionRef = collection(db, "Projects");
        const q = query(projectsCollectionRef, where("skills", 'array-contains', skill));
        const querySnapshot = await getDocs(q);
        setProjects(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getProjectsBySkill=(skill, index)=>{
        queryProjects(skill)
        toggleClass("button"+index)
    }

    return (
        <div className='projects-grid'>
            <h3>Sort the projects by <mark>stack</mark></h3>
            <div className='sort-buttons'>
                <button className={isActive === "allprojectsbutton" ? 'active-button': null}  onClick={getAllProjects}>All projects</button>
                {skills.map((skill,index) => { return <button className={isActive === "button"+index ? 'active-button': null}  onClick={() => getProjectsBySkill(skill.name,index)}>{skill.name}</button> })}</div>
            <div className="projects-grid-items"> 
            {projects.map((project) => {
                return <AnimationOnScroll animateIn="animate__flipInY">
                    <div className='project-item'>
                    <img src={project.thumbnail} alt={project.name} />
                    <p>{project.name}</p>
                </div>
                </AnimationOnScroll>
            })}
            </div>
        </div>
    )
}
