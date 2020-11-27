import React from 'react';


const Frameworks = ({ posts, loading }) => {

    if (loading) { //if api is loading, show below message and let the user know 
        return <h2>Loading API ....</h2>
    }

    const renderData = posts.map(item =>
        <tr key={item.id}>
            <td><img src={item.owner.avatar_url} style={{ width: "25px" }} alt="Logo" /></td>
            <td className="text-capitalize">{item.name}</td>
            <td>{item.description}</td>
            <td>{item.stargazers_count}</td>
            <td>{item.forks}</td>
            <td>{item.open_issues}</td>
            <td><a href={item.homepage} target="external">View</a></td>
        </tr>
    )

    return <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Logo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Stars</th>
                    <th scope="col">Forks</th>
                    <th scope="col">Issus</th>
                    <th scope="col">Site</th>
                </tr>
            </thead>
            <tbody>
                {renderData}
            </tbody>
        </table>
    </div>

};


export default Frameworks;
