let projects = [];
function addProject(project){
    let project_card = `<div class="col-lg-4 col-md-6 col-sm-12 element-item ${project.tag}">
                            <div class="our-project">
                                <div class="img">
                                    <a data-toggle="modal" href="#${project.id}">
                                        <img src=${project.img} alt="portfolio-1"class="img-fluid">
                                    </a>
                                </div>
                                <div class="title py-4">
                                    <h4 class="text-uppercase overflow-auto">${project.title}</h4>
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
                                                <a class="btn btn-outline-light" href=${project.demo_link}>Demo</a>
                                                <a class="btn btn-outline-light" href=${project.github_link}>Github</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    $('#projectGrid').append(project_card)
}

addProject({
    id : 'project1',
    title : 'Google Drive ksdbfkjhgsdghjdghjdghsdjgkhgjdshjgdh ljldhgdkhakl lk',
    img : '../img/projects/p1.jpg',
    tag : 'systems',
    description : 'this is a good but bad project',
    demo_link : 'github.com',
    github_link : 'github.com'
})

addProject({
    id : 'project2',
    title : 'Google Drive sdv ksdbfkjhgsdghjdghjdghsdjgkhgjdshjgdh ljldhgdkhakl lk',
    img : '../img/projects/p1.jpg',
    tag : 'upcoming',
    description : 'this is a good bvdssdvsvdddddddddddddddddssssv vvvvvvvvvvvvvvvvut bad project',
    demo_link : 'github.com',
    github_link : 'github.com'
})

