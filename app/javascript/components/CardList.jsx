import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Card from './Card.jsx';


const getStyles = (nameOfBlock) => {
    const styles = {
        container: {
            border: '2px solid yellow',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        cardContainer: {
            marginBottom: '40px'
        }
    };

    return styles[nameOfBlock];
}

class CardList extends Component {
    render () {
        const {
            restaurantList = [],
            isSearchResultPage = false,
            backTo = ''
        } = this.props;

        return (
            <div style={ getStyles('container') }>
                {
                    restaurantList.map((
                        {address, backgroundImgUrl, id, isOpen, name, opens, 
                            price,
                            rating,
                            categories }
                    ) => {
    
                        return (
                            <Link
                                to={{
                                    pathname: `/restaurant/${id}`,
                                    state: {
                                        backTo
                                    }
                                }}
                                key={id}
                                style={ getStyles('cardContainer') }
                            >
                                <Card 
                                    id={id}
                                    address={address}
                                    backgroundImgUrl={backgroundImgUrl}
                                    name={name} 
                                    opens={opens}
                                    isOpen={isOpen}
                                    isSearchResultPage={isSearchResultPage}

                                    price={price}
                                    rating={rating}
                                    categories={categories}
                                />
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;