/*
  project.js
  - Add your project entries to the `projects` array below.
  - Each project should include: id, title, category, description, image, url (optional)
  - This script renders the projects into a responsive grid and provides a category filter.
*/

const projects = [
  {
    id: 1,
    title: "Realistic Flower Vase",
    category: "3D",
    description: "A Realistic 3D model of a flower vase with detailed textures and lighting.",
    image: "/assets/project/Images/flower.png",
    url: "#"
  },
  {
    id: 2,
    title: "AR Home - Interior Visualization App",
    category: "UX/UI Design",
    description: "Virtual interior design app allowing users to visualize furniture in their homes using argumented reality.",
    image: "/assets/project/Images/designapp.png",
    url: "#"
  },
  {
    id: 3,
    title: "3D Animation -Push the Box",
    category: "3D Animation",
    description: "A 3D Anitaion showcasing a character pushing a box across a terrain.",
    image: "/assets/project/Images/push.png",
    url: "#"
  },
  {
    id: 4,
    title: "Nexgear -Game Development Learning App",
    category: "UX/UI Design",
    description: "Versatile learning app for aspiring game developers with interactive tutorials and project showcases.",
    image: "/assets/project/Images/nexgear.png",
    url: "#"
  },
  {
    id: 5,
    title: "Pistol -3D Model",
    category: "3D",
    description: "Mafia style pistol model with realistic textures and details.",
    image: "/assets/project/Images/gun.png",
    url: "#"
  },
  {
    id: 6,
    title: "France Clothing Store -Visiting Card Design",
    category: "Graphic Design",
    description: "Mafia style pistol model with realistic textures and details.",
    image: "/assets/project/Images/card.png",
    url: "#"
  },
  {
    id: 7,
    title: "A Nexgear Production -2D Animation",
    category: "2D Animation",
    description: "2D Animation intro for Nexgear production studio.",
    image: "/assets/project/Images/title.png",
    url: "#"
  },
  {
    id: 8,
    title: "Weight Lifting -3D Animation",
    category: "3D Animation",
    description: "Low poly 3D animation of a character lifting weights.",
    image: "/assets/project/Images/wieghtlifting.png",
    url: "#"
  },
  {
    id: 9,
    title: "Meils Clothing -Responsive Website Design",
    category: "UI/UX Design",
    description: "Responsive e-commerce website design for Meils Clothing brand.",
    image: "/assets/project/Images/meils.png",
    url: "#"
  },
  {
    id: 10,
    title: "Glass Jar -Illustration ",
    category: "Graphic Design",
    description: "Detailed illustration of a glass jar with reflections and shadows.",
    image: "/assets/project/Images/glass.jpg",
    url: "#"
  },
  {
    id: 11,
    title: "IOS 26 Mimalist 3D Animation",
    category: "3D Animation",
    description: "A minimalist 3D animation showcasing the IOS 26 features.",
    image: "/assets/project/Images/iso26.png",
    url: "#"
  },
  {
    id: 12,
    title: "Thor Hammer -3D model",
    category: "3D",
    description: "A detailed 3D model of Thor's hammer with realistic textures.",
    image: "/assets/project/Images/thor.png",
    url: "#"
  },
  {
    id: 13,
    title: "Walk Cycle -2D Animation",
    category: "2D Animation",
    description: "A smooth 2D walk cycle animation of a character.",
    image: "/assets/project/Images/walk.png",
    url: "#"
  },
  {
    id: 14,
    title: "Nexgear Logo Design",
    category: "Graphic Design",
    description: "Modern and sleek logo design for Nexgear brand.",
    image: "/assets/project/Images/logo.jpg",
    url: "#"
  },
  {
    id: 15,
    title: "Text Animation -2D Motion Graphics",
    category: "2D Animation",
    description: "Dynamic text animation using motion graphics techniques.",
    image: "/assets/project/Images/textani.png",
    url: "#"
  }
];

function getUniqueCategories(items) {
  const cats = new Set(items.map(p => p.category));
  return ["All", ...Array.from(cats)];
}

function createProjectCard(p) {
  const wrap = document.createElement('div');
  wrap.className = 'project-card';

  const img = document.createElement('img');
  img.src = p.image || '/assets/images/placeholder.png';
  img.alt = p.title;
  img.loading = 'lazy';
  wrap.appendChild(img);

  const info = document.createElement('div');
  info.className = 'project-info';

  const h3 = document.createElement('h3');
  h3.textContent = p.title;
  info.appendChild(h3);

  const cat = document.createElement('span');
  cat.className = 'project-category';
  cat.textContent = p.category;
  info.appendChild(cat);

  const pdesc = document.createElement('p');
  pdesc.textContent = p.description;
  info.appendChild(pdesc);

  // techniques (optional array)
  if (p.techniques && Array.isArray(p.techniques) && p.techniques.length) {
    const techWrap = document.createElement('div');
    techWrap.className = 'tech-list';
    p.techniques.forEach(t => {
      const tspan = document.createElement('span');
      tspan.className = 'tech-badge';
      tspan.textContent = t;
      techWrap.appendChild(tspan);
    });
    info.appendChild(techWrap);
  }

  if (p.url) {
    const a = document.createElement('a');
    a.href = p.url;
    a.className = 'btn';
    a.textContent = 'View';
    a.target = '_blank';
    info.appendChild(a);
  }

  wrap.appendChild(info);
  // open modal when clicking card (but not when clicking the internal link/button)
  wrap.addEventListener('click', () => openProjectModal(p));
  return wrap;
}


// --- Modal implementation (full-page project detail) ---
function createModalShell() {
  if (document.getElementById('projectModal')) return;
  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="modal-backdrop" data-close="true"></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="pm-title">
      <button class="modal-close" aria-label="Close project">×</button>
      <div class="modal-body">
        <div class="modal-media"><img src="" alt=""/></div>
        <div class="modal-details">
          <h2 id="pm-title"></h2>
          <div class="modal-meta"></div>
          <p class="modal-desc"></p>
          <div class="modal-tech"></div>
          <div class="modal-actions"></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // events
  modal.querySelector('.modal-close').addEventListener('click', closeProjectModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

function openProjectModal(p) {
  createModalShell();
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.add('open');
  const img = modal.querySelector('.modal-media img');
  img.src = p.image || '/assets/images/placeholder.png';
  img.alt = p.title;
  modal.querySelector('#pm-title').textContent = p.title;
  modal.querySelector('.modal-meta').innerHTML = `<span class="project-category">${p.category}</span>`;
  modal.querySelector('.modal-desc').textContent = p.description;

  const tech = modal.querySelector('.modal-tech');
  tech.innerHTML = '';
  if (p.techniques && Array.isArray(p.techniques)) {
    p.techniques.forEach(t => {
      const el = document.createElement('span');
      el.className = 'tech-badge modal';
      el.textContent = t;
      tech.appendChild(el);
    });
  }

  const actions = modal.querySelector('.modal-actions');
  actions.innerHTML = '';
  if (p.url) {
    const a = document.createElement('a');
    a.href = p.url;
    a.target = '_blank';
    a.className = 'btn';
    a.textContent = 'Open Project';
    actions.appendChild(a);
  }

  // focus management
  modal.querySelector('.modal-close').focus();
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
}

function renderProjects(list) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(p => grid.appendChild(createProjectCard(p)));
  // trigger entrance animation by toggling a loaded class
  grid.classList.remove('loaded');
  setTimeout(() => grid.classList.add('loaded'), 30);
}

function populateFilter() {
  const select = document.getElementById('categoryFilter');
  if (!select) return;
  const cats = getUniqueCategories(projects);
  // Clear existing (except default)
  select.innerHTML = '';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.toLowerCase();
    opt.textContent = c;
    select.appendChild(opt);
  });
}

function handleFilterChange() {
  const select = document.getElementById('categoryFilter');
  if (!select) return;
  const val = select.value;
  if (val === 'all') renderProjects(projects);
  else {
    const filtered = projects.filter(p => p.category.toLowerCase() === val);
    renderProjects(filtered);
  }
}

// Styles for the grid were moved to `assets/Project/Project.css` to keep presentation centralized.

document.addEventListener('DOMContentLoaded', () => {
  populateFilter();
  renderProjects(projects);
  const select = document.getElementById('categoryFilter');
  if (select) select.addEventListener('change', handleFilterChange);
});
