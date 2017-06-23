import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

  state = {
    posts: [],
    loading: true,
    error: null,
    counter: 2,
    ids: [],
    searchString: '',
    newTitles: ''
  }

    componentDidMount(){
      axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=49a5dbae3f8c8632aba8f07513a7cbb2&language=ru-RU&page=1`)
        .then(res =>{
          let _ids = [...this.state.posts, ...res.data.results].map(item => item.id);

          // console.log(res);
          this.setState({
            posts: [...res.data.results],
            ids: _ids,
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

    new = () => {
      let counter = this.state.counter;
      console.log('counter: ', counter);
      this.setState({counter: this.state.counter + 1});
      axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=49a5dbae3f8c8632aba8f07513a7cbb2&language=ru-RU&page=${counter}`)
      .then(res =>{
        this.setState({
          posts: [...this.state.posts, ...res.data.results],
          titles: [...this.state.posts, ...res.data.results].map(item => item.title),
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
        <div>Something went wrong {this.state.error.message}</div>
      )
    }
    renderPosts(){
      const {error, posts} = this.state;
      if(error){
    return this.renderError;
      }

      handleChange = () => {
        this.setState({
          searchString: e.target.value
        });
      }

        let search = this.state.titles;
        const searchString = this.state.searchString.trim().toLowerCase();

             if (searchString.length > 0){
               search = search.filter(function(newTitles){
                 return newTitles.toLowerCase().match( searchString );
               });
             }


    console.log(posts);
    console.log(this.state.ids);
    console.log(this.state.newTitles);
      return (
        <div className="mainBox">
          <div className="boxForInput">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Поиск фильма"/>
          </div>
          {posts.map(post => (
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
        <button className="buttonNew" type="button" name="button" onClick={this.new}>Больше фильмов...</button>
        </div>
      );
    }
    render() {
      const {loding} = this.state;

      return (
        <div>
          <h2>Популярные фильмы</h2>
          {loding ? this.renderLoding():this.renderPosts()}
        </div>
      );
    }
  };
