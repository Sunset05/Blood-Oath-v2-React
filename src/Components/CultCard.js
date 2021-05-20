import React, { Component } from 'react'

export default class CultCard extends Component {

    state = {
        comments: []
    }

    cult
    componentDidMount(){
        const commentsURL = 'http://localhost:3000/comments/?cult_id='
        fetch(commentsURL + this.props.id)
            .then(response => response.json())
            .then(comments => this.setState({
                comments
            }))
    }


    render() {
        return (
            <div className={'card'}>
                <h1>{this.props.name}</h1>
                <img className={'cult-image'} src={this.props.image}></img>
                <button className='cult-likes' onClick={this.props.handleLikes}> ❤️ {this.props.likes}</button>
                {this.state.comments.map(comment => {
                    //make sure to return on every .map
                    return <p className='comment'>{comment.comment}</p>
                })}
            </div>
        )
    }
}
