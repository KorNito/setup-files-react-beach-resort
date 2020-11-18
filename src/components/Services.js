import React, { Component } from 'react';
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title:'Free Cocktails',
                info:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            },
            {
                icon: <FaHiking></FaHiking>,
                title:'Endless Hiking',
                info:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title:'Free Shuttle',
                info:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            },
            {
                icon: <FaBeer></FaBeer>,
                title:'Strongest Beer',
                info:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services'></Title>
                <div className='services-center'>
                   {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p> 
                            </article>
                        );
                   })}
                </div>
            </section>
        )
    }
}
