import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

export default class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <FilmPoster thisMovie={this.props.film} />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.split('-')[0]}</p>
                    </div>
            </div>
        )
    }
}