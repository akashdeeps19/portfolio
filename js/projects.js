    // {
    //     id : 'project',
    //     title : '',
    //     img : './img/',
    //     tag : '',
    //     description : ``,
    //     demo_link : '',
    //     github_link : ''
    // },

let projects = [
    {
        id : 'project1',
        title : 'Virtual file system for Google Drive',
        img : './img/gdrivefs.png',
        tag : 'systems',
        description : `In this project I have created a tool that lets you mount your google drive directly onto your linux system.
                        This project uses FUSE (Filesystem in Userspace) which is an interface for userspace programs to export a filesystem to the Linux kernel.
                        </br>Languages used : Python`,
        demo_link : 'https://github.com/akashdeeps19/gdrivefs',
        github_link : 'https://github.com/akashdeeps19/gdrivefs'
    },
    {
        id : 'project2',
        title : 'Twitter sentiment analysis',
        img : './img/sent_analysis.png',
        tag : 'web_apps',
        description : `Full stack web app using MEAN stack.The aim of this project is to make a webapp that can perform a sentiment analysis of real data collected 
                        from Twitter and make a website for the user to gain insight into a hashtag.For example, a user can enter a hashtag and can know the 
                        percentage of people supporting the hashtag and the people against it.`,
        demo_link : 'https://github.com/harsh2338/WTA-Twitter',
        github_link : 'https://github.com/harsh2338/WTA-Twitter'
    },
    {
        id : 'project3',
        title : 'Flappy Bird AI using NEAT',
        img : './img/flappy_bird.png',
        tag : 'AI',
        description : `An AI to beat the flappy bird game using the NEAT algorithm.
                        NeuroEvolution of Augmenting Topologies (NEAT) is a genetic algorithm (GA) 
                        for the generation of evolving artificial neural networks</br>
                        Languages used : Javascript (p5.js library)</br>
                        CHECK OUT THE DEMO`,
        demo_link : 'https://akashdeeps19.github.io/NEAT/examples/flappyBird/index.html',
        github_link : 'https://github.com/akashdeeps19/NEAT'
    },
    {
        id : 'project4',
        title : 'Soccer AI using finite state machines',
        img : './img/soccer.png',
        tag : 'AI',
        description : `An AI using finite state machine theory applied to the game of soccer.Play against the AI
                        or watch them battle each other</br>
                        Languages used : Javascript (p5.js library)</br>
                        CHECK OUT THE DEMO`,
        demo_link : 'https://akashdeeps19.github.io/soccer/',
        github_link : 'https://github.com/akashdeeps19/soccer'
    },
    {
        id : 'project5',
        title : 'MazeRunner',
        img : './img/mazerunner.png',
        tag : 'games',
        description : `A pac-man styled game with random mazes built using depth first search
                        The player has to reach the end of the maze by avoiding enemies
                        Languages used : Javascript (p5.js library)</br>
                        CHECK OUT THE DEMO`,
        demo_link : 'https://akashdeeps19.github.io/MazeRunner/',
        github_link : 'https://github.com/akashdeeps19/MazeRunner'
    },
];


function addProject(project){
    let project_card = `<div class="col-lg-4 col-md-6 col-sm-12 element-item ${project.tag}">
                            <div class="our-project">
                                <div class="img">
                                    <a data-toggle="modal" href="#${project.id}">
                                        <img src=${project.img} alt="portfolio-1"class="img-fluid">
                                        <div class="title py-4">
                                            <h4 class="text-uppercase">${project.title}</h4>
                                        </div>
                                    </a>
                                </div>
                                
                                <div class="modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-labelledby="${project.id}Label" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">${project.title}</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <p>${project.description}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="project-links mr-auto">
                                                <a class="btn btn-outline-light" href=${project.demo_link} target="_blank">Demo</a>
                                                <a class="btn btn-outline-light" href=${project.github_link} target="_blank">Github</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    $('#projectGrid').append(project_card)
}


for(let project of projects)
    addProject(project)

$(document).ready(function () {
    $('.project-area .button-group #btn1').trigger('click');
    $('.project-area .button-group #btn1').trigger('touch');
});
$(window).on("load", function() {
    $('.project-area .button-group #btn1').trigger('click');
    $('.project-area .button-group #btn1').trigger('touch');
});