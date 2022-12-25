const setAuthToken = (user) => {
    const currentUser = {
        email: user?.email,
        name: user?.displayName,
      
    };

    fetch(`${process.env.REACT_APP_URL}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            localStorage.setItem('token', data.token);
        })
        .catch((err) => {
            console.error(err);
        });
};
export default setAuthToken;
