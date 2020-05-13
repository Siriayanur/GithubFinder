//Instantiate 
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');


searchUser.addEventListener('keyup', (e) => {
    // Get the input text that is typed
    const userText = e.target.value;

    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    
                    //Show alert
                    ui.showAlert(`User not found`,`alert alert-danger`);


                } else {
                    //Show profile
                    ui.showProfile(data.profile);

                    //Show repos
                    ui.showRepos(data.repos);
                }
            })

    } else {
        // clear profile
        ui.clearProfile();
    }


})