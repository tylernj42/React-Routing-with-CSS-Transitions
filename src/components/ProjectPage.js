import React, { Component } from 'react';
import { Link  } from 'react-router-dom'
import PageNotFound from './PageNotFound';
import projects from '../database/projects.js';
import './ProjectPage.css';

class ProjectPage extends Component {
    render() {
        let project = projects.filter( project => 
            this.props.match.url === project.slug
        );

        if(project.length === 1){
            project = project[0];
        }else{
            return <PageNotFound />;
        }

        let content = project.content.split('</p>').map( (paragraph, i) => 
            <p key={i}>{paragraph.replace(/<p>|<\/p>/, '')}</p>
        );

        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8">
                        <h1 className="text-center">{project.title}</h1>
                        <img className="hero-image" src={project.media.large} alt={project.title} />
                        {content}
                        <p className="text-center">
                            <Link to="/projects" className="btn">Back to Projects</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;
