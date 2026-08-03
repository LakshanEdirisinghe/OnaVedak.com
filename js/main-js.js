import { SERVICES } from './services-data.js';

document.getElementById('year').textContent = new Date().getFullYear();

    const heroContent = {
      hire: {
        title: 'Book Home Service Providers at Your Fingertips',
        description: 'rusted, vetted help for cleaning, repairs, moving and more — scheduled in minutes, done on your terms.'
      },
      tasker: {
        title: 'Earn on Your Own Terms',
        description: 'Offer your expertise and services to thousands of customers. Build your reputation, set your rates, and earn more on your schedule.'
      }
    };

    const modeHireBtn = document.getElementById('modeHire');
    const modeTaskerBtn = document.getElementById('modeTasker');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    

    function updateHeroContent(mode) {
      const content = heroContent[mode];
      heroTitle.textContent = content.title;
      heroDescription.textContent = content.description;
      localStorage.setItem('userMode', mode);
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

    const savedMode = localStorage.getItem('userMode');
    if (savedMode === 'tasker') {
      modeTaskerBtn.checked = true;
      updateHeroContent('tasker');
    }

    /* SERVICES imported from js/services-data.js */

    const grid = document.getElementById('serviceGrid');
    const accordion = document.getElementById('subcatAccordion');

    let sortableInstance = null;

    function getSavedOrder() {
      try {
        const raw = localStorage.getItem('servicesOrder');
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    }

    function saveOrder(keys) {
      try { localStorage.setItem('servicesOrder', JSON.stringify(keys)); } catch (e) {}
    }

    function applyOrder(list) {
      const saved = getSavedOrder();
      if (!saved || !Array.isArray(saved)) return list;
      const map = new Map(list.map(s => [s.key, s]));
      const ordered = [];
      saved.forEach(k => { if (map.has(k)) ordered.push(map.get(k)); });
      // include any new items not present in saved order
      list.forEach(s => { if (!saved.includes(s.key)) ordered.push(s); });
      return ordered;
    }

    function renderServices(activeKey) {
      const ordered = applyOrder(SERVICES);
      // Render as a horizontal scrollable row of cards (no "More" card)
      grid.innerHTML = `
        <div class="services-row d-flex gap-3 py-2" role="list">
          ${ordered.map(s => `
            <div class="service-item" role="listitem">
              <button class="service-card btn py-3 px-4 rounded-3 d-flex flex-column align-items-center gap-2 ${s.key === activeKey ? 'active' : ''}" data-key="${s.key}">
                <i class="bi ${s.icon} fs-4"></i>
                <span class="fw-semibold small text-center">${s.label}</span>
              </button>
            </div>
          `).join('')}
        </div>
      `;

      const row = grid.querySelector('.services-row');
      if (row) initSortable(row);
    }

    function initSortable(row) {
      // destroy previous instance if present
      if (sortableInstance && typeof sortableInstance.destroy === 'function') {
        try { sortableInstance.destroy(); } catch (e) {}
        sortableInstance = null;
      }

      // Sortable is loaded from CDN and exposes Sortable global
      if (typeof Sortable === 'undefined') return;

      sortableInstance = Sortable.create(row, {
        draggable: '.service-item',
        direction: 'horizontal',
        animation: 150,
        chosenClass: 'sortable-chosen',
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        fallbackOnBody: true,
        onEnd: function () {
          // collect new order of keys
          const keys = Array.from(row.querySelectorAll('.service-item > .service-card')).map(b => b.dataset.key).filter(Boolean);
          saveOrder(keys);
        }
      });
    }

    function renderSubcats(activeKey) {
      const service = SERVICES.find(s => s.key === activeKey);
      if (!service) { accordion.innerHTML = ''; return; }
      const names = Object.keys(service.subs);
      accordion.innerHTML = `
        <div class="service-result-grid">
          ${names.map(name => `
            <div class="service-result-card">
              <h3 class="service-result-title">${name}</h3>
              <div class="service-result-tags">
                ${service.subs[name].map(item => `<span class="service-result-tag">${item}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let activeService = 'homecleaning';
    renderServices(activeService);
    renderSubcats(activeService);

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      if (!card || !card.dataset.key) return;
      activeService = card.dataset.key;
      renderServices(activeService);
      renderSubcats(activeService);
    });

    // drag-to-scroll helper
    function enableDragScroll(container) {
      let isDown = false;
      let startX;
      let scrollLeft;

      container.style.cursor = 'grab';

      container.addEventListener('pointerdown', (e) => {
        isDown = true;
        container.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
      });

      container.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        container.scrollLeft = scrollLeft - dx;
      });

      container.addEventListener('pointerup', (e) => {
        isDown = false;
        container.releasePointerCapture(e.pointerId);
        container.style.cursor = 'grab';
      });

      container.addEventListener('pointerleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
      });
    }