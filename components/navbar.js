export function navBarNormal(){

    return `

    <nav class="navbar navbar-expand-lg fixed-top navBg-color">
            <div class="container-fluid">

                <!-- Brand -->
                <a class="navbar-brand text-light" href="#">
                    <strong>Ona</strong>Vedak.com
                </a>

                <!-- Toggle Button -->
                <button class="navbar-toggler border-0 shadow-none"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30"
                        height="30" fill="currentColor"
                        class="bi bi-list text-light" viewBox="0 0 16 16">

                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>

                </button>

                <!-- Collapsible Content -->
                <div class="collapse navbar-collapse" id="navbarNav">

                    <!-- Center Menu -->
                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item dropdown">
                            <a style="font-size: 1.1rem;"
                                class="nav-link dropdown-toggle d-down  text-light"
                                href="#"
                                role="button" data-bs-toggle="dropdown">

                                Explore Services

                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                        href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another
                                        action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something
                                        else here</a></li>
                            </ul>

                        </li>

                    </ul>

                    <!-- Right Buttons -->
                    <div class="d-flex gap-2">

                        <button class="btn text-light btn-log">
                            Login
                        </button>

                        <button class="btn btn-primary">
                            Sign-up
                        </button>

                    </div>

                </div>

            </div>
        </nav>
    
    `;
}