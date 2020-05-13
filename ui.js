class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user) {

        this.profile.innerHTML =

            `<div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos; ${user.public_repos}</span>
                <span class="badge badge-primary">Public Gists; ${user.public_gists}</span>
                <span class="badge badge-primary">Followers; ${user.followers}</span>
                <span class="badge badge-primary">Following; ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Company: ${user.created_at}</li>
                </ul>
            </div>

        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos<h3>
    <div id="repos"></div>
    `;

    }

    // clear the profile
    clearProfile(){
        this.profile.innerHTML = '';

    }

    //show alert message
    showAlert(message,className) {
        
        //clear the remaining alerts
        this.clearAlert();
        
        //create div from scratch
         const div = document.createElement('div');

         // add class name
         div.className = className;

         //Add text
         div.appendChild(document.createTextNode(message));

         //getParent
        const container = document.querySelector('.searchContainer');

        // get search box
        const search = document.querySelector('.search');

        //Insert alert
        container.insertBefore(div,search);

        // should dissappear after 3 seconds
        setTimeout(() => {
            this.clearAlert();

        }, 3000);
    }

    //clear alert messages before next input
    clearAlert(){

        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }

    }

    // show the repositories
    showRepos(repos){

        let output='';
        repos.forEach( function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                <div class="col=md=6>
                    <a href="${repo.html_url} target="_blank">${repo.name}</a>
                </div>
                <div class="col=md=6>
                <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
                <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                </div>
                
                </div>
            
            </div>
        `;
        });
    

    // Output the repos
    document.getElementById('repos').innerHTML = output;    
    }
}