import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa deserunt atque cum tenetur, necessitatibus, quis consequuntur distinctio modi eveniet aspernatur ut quibusdam quaerat, aperiam veniam alias. Aspernatur, tempora illo!</p>
                </div>
                <div className="card-action ligthen-4 grey-text">
                    <div>Posted By Aman Gupta</div>
                    <div>2nd, September, 2018</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;

