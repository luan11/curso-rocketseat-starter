import api from './api';

class App {
    constructor(){
        this.repos = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = e => this.addRepo(e);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepo(e){
        e.preventDefault();

        const inputRepo = this.inputEl.value;

        if(inputRepo.length === 0)
            return;

        this.setLoading();

        try{
            const response = await api.get(`/repos/${inputRepo}`);

            const { name, description, html_url, owner: {avatar_url} } = response.data;

            this.repos.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = '';

            this.render();
        }catch(err){
            alert("O repositório não existe!");
        }

        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';
        this.repos.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.setAttribute('href', repo.html_url);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();