import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import { CategoryList } from '../Categories/CategoryList';
import { Preloader } from '../Shared/Preloader';
import { Search } from '../Shared/Search';

import { useLocation, useHistory } from 'react-router-dom';

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathName, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        push({
            pathName,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, []);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
};
