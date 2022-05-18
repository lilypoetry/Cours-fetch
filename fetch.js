/**
 * API fetch()
 */

fetch('datas.json') // Demande de données
    .then(response => response.json()) // Type de réponse
    .then(users => 
    {
        // Convertis le JSON en Object JavaScript
        // const users = JSON.stringify(datas);
        // console.log(users);

        // Boucler sur les données reçues
        const body = document.querySelector('body');
        users.forEach(user =>
        {
            // Création d'une balise <p>
            let h1 = document.createElement('h1');
            h1.innerText = user.name;

            // Création d'une balise <img>
            let img = document.createElement('img');
            img.src = user.photo;

            body.appendChild(h1);
            body.appendChild(img);
        });
    })
    .catch(error => alert(error)); // Attrape les erreurs de fetch()