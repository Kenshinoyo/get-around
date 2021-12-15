import React from 'react';
import { useNavigate } from 'react-router-dom';
import DBCrudTool from '../components/DBCrudToolV2';

const Blogs = (props) => {
    console.log(props)

    const navigate = useNavigate();

    return (
        <div>
            Blog Site
            <DBCrudTool navigate = {navigate} />
        </div>
    );
};

export default Blogs;