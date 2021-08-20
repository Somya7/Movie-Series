import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.logo_path} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.name}</h2>
            <ul className="list-group">
              
            
            
              <li className="list-group-item">
                <strong>name:</strong> {movie.production_companies.name}
              </li>
              <li className="list-group-item">
                <strong>origin_country:</strong> {movie.production_companies.origin_country}
              </li>
            
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              
              <hr />
              <a
                href={'https://www.themoviedb.org/' + movie.production_companies.id}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);