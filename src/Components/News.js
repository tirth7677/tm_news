import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} - Tm-news`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=847782958349471dbc4b59a8a53e4e97&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlepreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey="Enter your api key"&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlenextclick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apikey=847782958349471dbc4b59a8a53e4e97&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">Tm-news Top Headlines</h1>
        <br />
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 60) : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 146)
                        : ""
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : (element.urlToImage =
                            "https://camo.githubusercontent.com/52ea2d77e3c453c1cd1188cef5df627153bb420f8393b76c35559aaa3495ed5f/68747470733a2f2f692e696d6775722e636f6d2f68553367454e622e706e67")
                    }
                    newsurl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlepreviousclick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
