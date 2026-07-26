const data = {
    plumbing: `
        <h4>Plumbing</h4>

        <ul>
            <li>Leak Repair</li>
            <li>Bathroom Installation</li>
            <li>Kitchen Plumbing</li>
            <li>Drain Cleaning</li>
        </ul>
    `,

    electrician: `
        <h4>Electrician</h4>

        <ul>
            <li>House Wiring</li>
            <li>Switch Repair</li>
            <li>Generator Installation</li>
            <li>Solar Panels</li>
        </ul>
    `,

    cleaning: `
        <h4>Cleaning</h4>

        <ul>
            <li>House Cleaning</li>
            <li>Office Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Window Cleaning</li>
        </ul>
    `,

    painting: `
        <h4>Painting</h4>

        <ul>
            <li>House Painting</li>
            <li>Furniture Painting</li>
            <li>Commercial Painting</li>
        </ul>
    `,
};

export function initializeMegaMenu() {
    const contentArea = document.getElementById("contentArea");

    document.querySelectorAll(".category").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const service = item.dataset.service;

            contentArea.innerHTML = data[service];
        });
    });

    contentArea.innerHTML = data.plumbing;
}

export function navBarNormal() {
    return `

    <nav class="navbar navbar-expand-lg fixed-top navBg-color">
        <div class="container-fluid">

            <!-- Brand -->
            <a class="navbar-brand text-light" href="#">
                <strong>Ona</strong>Vedak.com
            </a>

            <!-- Toggle Button -->
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-list text-light" viewBox="0 0 16 16">

                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>

            </button>

            <!-- Collapsible Content -->
            <div class="collapse navbar-collapse" id="navbarNav">

                <!-- Center Menu -->
                <ul class="navbar-nav mx-auto">

                    <li class="nav-item dropdown ">

                        <a class="nav-link d-down-navbar text-light dropdown-toggle" href="#" data-bs-toggle="dropdown">

                            Explore Services

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                class="bi bi-menu-up ms-2" viewBox="0 0 16 16">
                                <path
                                    d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793zM1 9V6h14v3zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5" />
                            </svg>

                        </a>

                        <div class="dropdown-menu mega-dropdown-menu p-0">

                            <div class="container rounded-3 ">

                                <div class="row ">

                                    <div class="col-lg-4 pe-2 p-0 ">

                                        <div class="list-group   overflow-y-auto  " style="max-height: 400px;">

                                            <!-- <div class="ms-2 " style="color: #e2e2e2;">Home cleaning</div>
                                            <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="plumbing">
                                                Plumbing
                                            </a>

                                            <a class="list-group-item  border-0 list-group-item-action category maga-d-down-items" data-service="electrician">
                                                Electrician
                                            </a>
                                            <div class="ms-2 " style="color: #e2e2e2;">Outdoor</div>

                                            <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="cleaning">
                                                Cleaning
                                            </a>

                                            <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                                Painting
                                            </a>
                                            <div class="ms-2 " style="color: #e2e2e2;">Essential</div>
                                            <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                                Painting
                                            </a>

                                            <div class="ms-2 " style="color: #e2e2e2;" ">Moving</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Events</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Wellness</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items  " data-service="painting">
                                            Painting
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Pets</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Business</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Other</div>

                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="painting">
                                            Painting
                                        </a>-->


                                        <div style="color: #e2e2e2;" class="ms-2 ">Home cleaning</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="home-cleaning">
                                            House Cleaning
                                        </a>

                                        <div class="ms-2 " style="color: #e2e2e2;">Home maintenance</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="routine-upkeep" >
                                            Routine Upkeep
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Home maintenance</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="pest-safety" >
                                            Pest &amp; Safety
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Home maintenance</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="organization-decor" >
                                            Organization &amp; Décor
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Home remodeling</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="kitchen-bath" >
                                            Kitchen &amp; Bath
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Home remodeling</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="interior-remodeling" >
                                            Interior Remodeling
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Home remodeling</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="exterior-remodeling" >
                                            Exterior Remodeling
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Outdoor upkeep</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="lawn-landscape" >
                                            Lawn &amp; Landscape
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Outdoor upkeep</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="pool-exterior" >
                                            Pool &amp; Exterior
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Essential home services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="plumbing" >
                                            Plumbing
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Essential home services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="electrical-hvac" >
                                            Electrical &amp; HVAC
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Essential home services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="handyman-repairs" >
                                            Handyman &amp; Repairs
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Moving &amp; transport</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="moving-services" >
                                            Moving Services
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Events</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="photography-media" >
                                            Photography &amp; Media
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Events</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="planning-ceremony" >
                                            Planning &amp; Ceremony
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Events</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="entertainment-catering" >
                                            Entertainment &amp; Catering
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Wellness &amp; fitness</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="fitness" >
                                            Fitness
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Wellness &amp; fitness</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="health-therapies" >
                                            Health Therapies
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Pets</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="pet-care" >
                                            Pet Care
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Business services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="marketing-design" >
                                            Marketing &amp; Design
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Business services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="admin-it" >
                                            Admin &amp; IT
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Lessons &amp; tutoring</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="academic" >
                                            Academic
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Lessons &amp; tutoring</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="arts-skills" >
                                            Arts &amp; Skills
                                        </a >

                                        <div class="ms-2 " style="color: #e2e2e2;">Auto services</div>
                                        <a class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="auto-services" >
                                            Auto Services
                                        </a >




                                    </div >

                                </div >

                                <div class="col-lg-8 px-0  " id="contentArea">



                                </div>



                            </div >

                        </div >

                    </div >

                </li >

            </ul >

            <!-- Right Buttons -->
            <div class="d-flex gap-2">

                <button class="btn text-light btn-log">
                    Login
                </button>

                <button class="btn btn-primary">
                    Sign-up
                </button>

            </div>

        </div >

    </div >
    </nav >
    
    `;
}
