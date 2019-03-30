// Exercicio 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
};

umPorSegundo();

// Exercicio 2
import api from 'axios';

const getGitHubUser = async username => {
    try {
        const response = await api.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    } catch (err) {
        console.warn("Não foi possível obter uma resposta da API");
    }
};

getGitHubUser("luan11");
getGitHubUser("lulzradsa");

// Exercicio 3
class GitHub {
    static async getRepo(repo){
        try {
            const response = await api.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(err) {
            console.warn("Repositório não existe!");
        }
    }

    static async searchUser(username){
        try {
            const response = await api.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
        } catch(err) {
            console.warn("Este usuário não existe!");
        }
    }
}

GitHub.getRepo('luan11/budgetsApp');
GitHub.getRepo('rocketseat/dslkvmskv');

// Exercicio 4
GitHub.searchUser('luan11');