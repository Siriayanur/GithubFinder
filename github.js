class GitHub {

    // whenever a object is created, by default It is assigned with :
    constructor() {
        client_id: '7f67f09eaf752a8d3252';
        client_secret: 'ecfa4b8bb130ddbaf39a9dd3a1942c6b3264af0b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            // In ES6 profile : profile can be simply written as profile
            profile,
            repos
        }



    }

};