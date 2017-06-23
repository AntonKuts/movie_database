import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

  state = {
    post: [],
    loading: true,
    error:null,
  }


    componentDidMount() {
      axios.get('http://api.themoviedb.org/3/movie/popular?api_key=49a5dbae3f8c8632aba8f07513a7cbb2&language=ru-RU&page=1')
        .then(res =>{
          this.setState({
            post: res.data.results,
            loading: false,
            error: null
          })
        }).catch(err =>{
        this.setState({
          loding: false,
          error: err
        });
      })
    }

    renderLoding(){
      return (
        <div>loading...</div>
      );
    }


    renderError(){
      return(
        <div>Something went wrong {this.stste.error.message}</div>
      )
    }
    renderPosts(){
      const {error, post} = this.state;
      if(error){
    return this.renderError;
      }


  console.log({post});
      return (
        <div className="mainBox">
          {post.map(post => (
            <div key={post.id} className="card">
              <img className="img1" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`} alt="#"/>
              <h3>{post.title}</h3>
              <div className="cardForText">
                <div className="cardForTextSmall1">
                  <h4>Язык: {post.original_language}</h4>
                </div>
                <div className="cardForTextSmall2">
                  <h4 className="left1">Рейтинг: <span className="red">{post.vote_average}</span></h4>
                </div>
                  <div>
                    <p className="pForText">{post.overview}</p>
                </div>
              </div>
            </div>
          )
        )}
        </div>
      );
    }
    render() {
      const {loding} = this.state;

      return (
        <div>
          <h2>Movies</h2>
          {loding ? this.renderLoding():this.renderPosts()}
        </div>
      );
    }
  };
