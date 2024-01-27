import React, { Component } from 'react'
import Newcomponents from './Newcomponents'
import InfiniteScroll from 'react-infinite-scroll-component'



export default class News extends Component {
    static defaultProps = {
        catagory: "general"
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0
        }
    }
    fetchMoreData=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page+1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page +1
        })
    }
    async componentDidMount() {
        this.props.setProgress(30);
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=6`;
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResults
        })
        this.props.setProgress(100);
    }
    render() {
        return (
            <>
                <div className="my-5 text-center">
                    <h1>newsNuts -Top Headlines</h1>
                    <div className="container text-center">
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResult}
                            loader={<h4>Loading...</h4>}
                        >
                            <div className='container'>
                            <div className="row">
                                {this.state.articles.map((elements) => {
                                    return <div className='col-lg-4 my-3' key={elements.url}>
                                        <Newcomponents title={elements.title?elements.title:News} description={elements.description} imageUrl={!elements.urlToImage ? "https://tse4.mm.bing.net/th?id=OIP.FPj9g9rHFtLlE8pz32urPwHaHa&pid=Api&P=0&h=500" : elements.urlToImage} url={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} />
                                    </div>
                                })}
                            </div>
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </>
        )
    }
}
