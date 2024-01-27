import React, { Component } from 'react'

export default class Newcomponents extends Component {
    render() {
        let { title, description, imageUrl, author,url , date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ maxHeight: "280px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
                        <a href={url} value="_blank" className="btn btn-dark">Read more</a>
                        <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger" style={{transform: " translate(-100%,-50%)" }}>{source}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
