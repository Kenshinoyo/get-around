import React from 'react';
import { useHistory } from 'react-router-dom';
import DBCrudTool from '../components/DBCrudToolV2';

const Blogs = (props) => {
    console.log(props)

    const history = useHistory();

    return (
        <div>
            Blog Site
            <DBCrudTool history = {history} />
        </div>
    );
};

export default Blogs;