import HeaderHomepage from './HeaderHomepage';
import Bar from './bar';
import './homepage.css';
import Categories from './categories';
import React, { useEffect, useState } from 'react';
import { getAPI } from '../../api';

const Homepage = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async() => {
            const { listCategories } = await getAPI('/data/getDecks');
            listCategories.map(category => ({...category, ref: React.createRef() }));
            setCategories(listCategories);
        }

        getCategories();
    }, []);

    return ( 
        <div className = 'homepage' >
            <HeaderHomepage />
            <Bar categories = { categories }/> 
            <Categories categories = { categories }/> 
        </div>
    );
}

export default Homepage;