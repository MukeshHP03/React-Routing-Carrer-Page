import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

function BreadCrumbs() {
    const location = useLocation();
    // const params = useParams();
    let currentLink = '';
    const crumbs = location.pathname.toString().split('/')
                    .filter(crumb => crumb != '').map(crumb => {
                        currentLink += `/${crumb}`;
                        return <div className='crumb'>
                            <Link
                            key={crumb}
                            to={currentLink}
                            >
                                {crumb}
                            </Link>
                        </div>
                    });
    // console.log(location.pathname);
  return (
    <div className='bread-crumbs'>
      {crumbs}
    </div>
  )
}

export default BreadCrumbs
