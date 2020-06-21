/*
Exercício

Transforme os seguintes trechos de código utilizando async/await:
Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
        delay().then(() => {
        console.log('1s');
            delay().then(() => {
            console.log('2s');
                delay().then(() => {
                console.log('3s');
        });
    })
});
}
umPorSegundo();

Resolução:
*/
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    async function umPorSegundo () {
        await delay()
        console.log('1s');

        await delay()
        console.log('2s');

        await delay()
        console.log('3s')
    }

umPorSegundo();


/*
Transforme os seguintes trechos de código utilizando async/await:

import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
       console.log(response.data);
    })
       .catch(err => {
         console.log('Usuário não existe');
    })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

Resolução:
*/
import axios from 'axios';
async function getUserFromGithub(user) {
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response)
        }catch (err){
            console.log('User Notfound')
        }
}
getUserFromGithub('dolofo');
getUserFromGithub('dolofo23165');


/*
class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
        console.log(response.data);
    })
        .catch(err => {
         console.log('Repositório não existe');
    })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

Resolução:
*/
class Github {
    static async getRespositories (repo){
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch (err) {
            console.log('Repositório não encontrado')
        }
    }
}
Github.getRespositories('rocketseat/rocketseat.com.br')
Github.getRespositories('rocketseatt/dsfgsdgs')


const buscarUsuario = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (err) {
        console.log('Usuário não existe')
    }
}

buscarUsuario('dolofo');