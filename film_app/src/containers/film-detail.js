import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmDetail extends Component {
    render() {
        if(!this.props.film) {
            return <div>
                <h2>Добро пожаловать</h2>
                <p><img alt="arrow-left" src="img/restart.svg" className="img-arr-left" /> выбрать фильм</p>
            </div>
        }
        return (
            <div>
            <div className="book-detail">
                <div className="col-sm-4">
                <img alt="Img" src={this.props.film.img} />
                    </div>
                <div className="desc-film">
                    Название: <h6>{this.props.film.title}</h6>
                    Оригинал: <h6>{this.props.film.originTitle}</h6>
                    Год: <h6>{this.props.film.year}</h6>
                    Страна: <h6>{this.props.film.country}</h6>
                    Режиссер: <h6>{this.props.film.direct}</h6>
                    Жанр: <h6>{this.props.film.genre}</h6>
                    В ролях: <h6>{this.props.film.actors}</h6>
                </div>
            </div>
                <h4>Описание:</h4>
                <div className="desription">{this.props.film.description}</div>
                <div><iframe title="video" width="660" height="415" src={this.props.film.trailer}></iframe></div>
                </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        film: state.activeFilm
    }
}

export default connect(mapStateToProps)(FilmDetail);
