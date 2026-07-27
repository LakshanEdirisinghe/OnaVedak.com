const data = {
    homecleaning: `
        <div class=" text-center mb-2"><strong>Home Cleaning</strong></div>

<div class="list-group list-group-flush " >
<a href="#" class="list-group-item list-group-item-action"><strong>House Cleaning</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Carpet Cleaning</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Junk Removal</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Pressure Washing</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Upholstery and Furniture Cleaning</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Tile and Grout Cleaning</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Commercial Cleaning</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Window Washing</strong></a>

<a href="#" class="list-group-item list-group-item-action"><strong>Gutter Cleaning</strong></a>
</div>
    `,
    homemaintenance: `
    <div class=" text-center mb-2" > <strong>Home Maintenance</strong></div>

        <div class="list-group list-group-flush" >

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Lawn Mowing and Trimming</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Pool Care and Maintenance</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Fireplace and Chimney Cleaning</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Full Service Lawn Care</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Sprinkler System Repair and Maintenance</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Sump Pump Installation and Repair</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Home Inspection</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Property Management</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Snow Plowing</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Holiday Lighting Installation</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <strong>Computer Repair</strong>
            </a>

            <a href="#" class="list-group-item list-group-item-action"><strong>Gutter Cleaning</strong></a>
        </div>
`
};

export function initializeMegaMenu() {
    let contentArea = document.getElementById("contentArea");

    document.querySelectorAll(".category").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const service = item.dataset.service;

            contentArea.innerHTML = data[service];
        });
    });

    contentArea.innerHTML = data.homecleaning;
}

export function navBarNormal() {
    return `

    <nav class="navbar navbar-expand-lg fixed-top navBg-color" >
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

                            <div class="container rounded-3 shadow ">

                                <div class="row ">

                                    <div class="col-lg-4 pe-2 p-0 mt-2 mb-2 overflow-y-auto  " style="max-height: 400px;">

                                        <div class="list-group ">

                                            <div class=" text-center mb-2"><strong>CATEGORIES</strong></div>



                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="homecleaning">
                                                House Cleaning
                                            </a>
                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="homemaintenance">
                                                Home &amp; Maintenance
                                            </a>


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="routineupkeep" >
                                                Home Remodeling

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="pestsafety" >
                                                Outdoor upkeep
                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="organizationdecor" >
                                                Essential home services

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="kitchenbath" >
                                                Moving & transport

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="interiorremodeling" >
                                                Events

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="lawnlandscape" >
                                                Wellness & fitness

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="poolexterior" >
                                                Pets

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="plumbing" >
                                                Business services

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="electricalhvac" >
                                                Lessons & tutoring

                                            </a >


                                            <a href="#" class="list-group-item border-0 list-group-item-action category maga-d-down-items" data-service="handymanrepairs" >
                                                Auto services

                                            </a >
                                        </div >

                                    </div >

                                    <div class="col-lg-8 px-0 mt-2  overflow-y-auto  " style="max-height: 400px;" id="contentArea">



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
    </ nav>

    `;
}
