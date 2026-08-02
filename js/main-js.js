document.getElementById('year').textContent = new Date().getFullYear();

    // Hero text content for different modes
    const heroContent = {
      hire: {
        title: 'Grow at the speed of your ambition',
        description: 'Book trusted, vetted help for cleaning, repairs, moving and more — scheduled in minutes, done on your terms.'
      },
      tasker: {
        title: 'Earn on Your Own Terms',
        description: 'Offer your expertise and services to thousands of customers. Build your reputation, set your rates, and earn more on your schedule.'
      }
    };

    // Mode toggle functionality
    const modeHireBtn = document.getElementById('modeHire');
    const modeTaskerBtn = document.getElementById('modeTasker');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');

    function updateHeroContent(mode) {
      const content = heroContent[mode];
      heroTitle.textContent = content.title;
      heroDescription.textContent = content.description;
    }

    modeHireBtn.addEventListener('change', () => {
      if (modeHireBtn.checked) {
        updateHeroContent('hire');
      }
    });

    modeTaskerBtn.addEventListener('change', () => {
      if (modeTaskerBtn.checked) {
        updateHeroContent('tasker');
      }
    });

    /* ---- Services data (same content as original) ---- */
    const SERVICES = [
      {
        key: 'cleaning', label: 'Cleaning', icon: 'bi-stars',
        subs: {
          'Vacation and rental': ['Turnover cleaning', 'Airbnb prep', 'Deep clean before check-in'],
          'Residential cleaning': ['Standard home clean', 'Move-out clean', 'Recurring weekly clean'],
          'Specialty cleaning': ['Post-construction clean', 'Carpet & upholstery', 'Window cleaning']
        }
      },
      {
        key: 'handyman', label: 'Handyman', icon: 'bi-tools',
        subs: {
          'General repairs': ['Drywall patching', 'Door adjustment', 'Fixture repair'],
          'Wall mounting': ['TV mounting', 'Shelf mounting', 'Mirror hanging'],
          'Small installs': ['Curtain rods', 'Light fixtures', 'Smart locks']
        }
      },
      {
        key: 'moving', label: 'Moving services', icon: 'bi-truck',
        subs: {
          'Local moving': ['Studio move', '1-2 bedroom move', 'Furniture-only move'],
          'Loading & unloading': ['Truck loading', 'Storage unit loading', 'Unloading only'],
          'Packing help': ['Full-home packing', 'Fragile item packing', 'Unpacking service']
        }
      },
      {
        key: 'yardwork', label: 'Yardwork and outdoor', icon: 'bi-tree',
        subs: {
          'Lawn care': ['Mowing', 'Edging', 'Fertilizing'],
          'Garden help': ['Planting', 'Weeding', 'Mulching'],
          'Seasonal cleanup': ['Leaf removal', 'Gutter cleaning', 'Snow removal']
        }
      },
      {
        key: 'furniture', label: 'Furniture assembly', icon: 'bi-house-gear',
        subs: {
          'Flat-pack assembly': ['IKEA assembly', 'Wayfair assembly', 'Target assembly'],
          'Bed frames': ['Platform beds', 'Bunk beds', 'Storage beds'],
          'Office furniture': ['Desks', 'Chairs', 'Shelving units']
        }
      },
      {
        key: 'shopping', label: 'Shopping and delivery', icon: 'bi-cart3',
        subs: {
          'Grocery run': ['Weekly groceries', 'Specialty store run', 'Bulk shopping'],
          'Store pickup': ['Retail pickup', 'Return drop-off', 'Curbside pickup'],
          'Same-day delivery': ['Local delivery', 'Gift delivery', 'Document delivery']
        }
      }
    ];

    const grid = document.getElementById('serviceGrid');
    const accordion = document.getElementById('subcatAccordion');

    function renderServices(activeKey) {
      grid.innerHTML = SERVICES.map(s => `
      <div class="col">
        <button class="service-card btn w-100 h-100 py-4 rounded-3 d-flex flex-column align-items-center gap-2 ${s.key === activeKey ? 'active' : ''}" data-key="${s.key}">
          <i class="bi ${s.icon}"></i>
          <span class="fw-semibold small text-center">${s.label}</span>
        </button>
      </div>
    `).join('') + `
      <div class="col">
        <button class="btn w-100 h-100 py-4 rounded-3 bg-white text-navy d-flex flex-column align-items-center justify-content-center gap-2" id="moreBtn" style="color:#0c1526;">
          <i class="bi bi-arrow-right-circle fs-4"></i>
          <span class="fw-semibold small">More</span>
        </button>
      </div>
    `;
    }

    function renderSubcats(activeKey) {
      const service = SERVICES.find(s => s.key === activeKey);
      if (!service) { accordion.innerHTML = ''; return; }
      const names = Object.keys(service.subs);
      accordion.innerHTML = names.map((name, i) => {
        const id = 'sub' + i;
        return `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${id}">
              ${name}
            </button>
          </h2>
          <div id="${id}" class="accordion-collapse collapse" data-bs-parent="#subcatAccordion">
            <div class="accordion-body d-flex flex-wrap gap-2 pt-0 pb-3">
              ${service.subs[name].map(item => `<a href="#" class="text-decoration-none small px-3 py-2 rounded-pill" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);">${item}</a>`).join('')}
            </div>
          </div>
        </div>
      `;
      }).join('');
    }

    let activeService = 'cleaning';
    renderServices(activeService);
    renderSubcats(activeService);

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      if (!card || !card.dataset.key) return;
      activeService = card.dataset.key;
      renderServices(activeService);
      renderSubcats(activeService);
    });