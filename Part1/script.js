const getData = async () => {
    let response = await fetch("https://randomuser.me/api?results=5")
    .then((res) => {
        return res.json();
    })
    .catch((err) =>{
        console.log
    })
    console.log(response);
    return response.results;
};


let data = getData();
