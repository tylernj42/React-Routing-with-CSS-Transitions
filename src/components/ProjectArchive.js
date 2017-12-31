import React, { Component } from 'react';
import { Link  } from 'react-router-dom'
import projects from '../database/projects.js';
import './ProjectArchive.css';

class ProjectArchive extends Component {
    render() {
        let projectsList = projects.map( project => 
            <li className="col-sm-3" key={project.id}>
                <Link to={project.slug} style={{backgroundImage: 'url(' + project.media.small + ')'}}>
                    <span>{project.title}</span>
                </Link>
            </li>
        );
        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8">
                        <h1 className="text-center">Projects</h1>
                        <p>
                            You don't know how to do any of those. With a warning label this big, you know they gotta be fun! Wow, you got that off the Internet? In my day, the Internet was only used to download pornography. We can't compete with Mom! Her company is big and evil! Ours is small and neutral!
                        </p>
                    </div>
                </div>
                <ul className="row justify-content-sm-center list-projects">
                    {projectsList}
                </ul>
            </div>
        );
    }
}

export default ProjectArchive;
