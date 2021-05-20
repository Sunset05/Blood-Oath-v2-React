import React, { Component } from 'react'
import CultCard from './CultCard'

export default class CardContainer extends Component {
    
    state = {
        cults: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/cults/')
            .then(response => response.json())
            .then(result => this.setState({
                cults: result
            }))
    }   

    handleLikes = () => {
        
    }

    render() {
        return (
            <div className={'card-container'}>
                {this.state.cults.map( cult => {
                    return <CultCard 
                    key={cult.id}
                    id={cult.id}
                    name={cult.name}
                    image={cult.img_url}
                    likes={cult.likes}
                    />
                })}
            </div>
        )
    }
}
