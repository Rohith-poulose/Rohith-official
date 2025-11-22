/*
  project.js
  - Add your project entries to the `projects` array below.
  - Project object fields (add these as needed):
    id: number                 // unique id
    title: string              // project title
    category: string           // category/niche (e.g., "3D", "Graphic Design")
    description: string        // short description shown on card
    longDescription: string    // (optional) longer description for detail page/modal
    image: string              // main thumbnail image path
    gallery: [string]          // (optional) array of image URLs for gallery/carousel
    techniques: [string]       // (optional) list of techniques used (e.g., "Sculpting", "Rigging")
    softwares: [string]        // (optional) list of software used (e.g., "Blender", "Photoshop")
    year: string|number        // (optional) year or date
    role: string               // (optional) your role on the project
    client: string             // (optional) client or brand name
    url: string                // (optional) external link to project or case study

  - Add or edit projects below. See the example template right after the array.
*/

const projects = [
  {
    id: 1,
    title: "Ephemeral Shadows: 3D Floral Still Life",
    category: "3D",
    description: "A minimalist 3D study focusing on glass refraction, organic modeling, and atmospheric window lighting.",
    longDescription: "This project was developed as a collegiate study in photorealism and atmospheric composition. The primary goal was to replicate the delicate interaction between organic forms and harsh, directional light to create a mood of quiet isolation. Created entirely within Blender, the vase was modeled using hard-surface techniques to ensure accurate refraction, while the flowers utilized organic modeling to achieve natural curvature. A key technical focus was the lighting setup; I utilized a specific 'gobo' (stencil) light technique to simulate the sharp window shadow on the back wall, grounding the object in a realistic environment. The final render demonstrates a mastery of the Cycles render engine, specifically in handling transmission materials (glass/water) and high-contrast lighting scenarios. It successfully captures a serene, melancholic aesthetic.",
    image: "/assets/project/Images/flower.png",
    gallery: ["/assets/project/Images/flower.png"],
    techniques: ["Hard-surface modeling", "Lighting", "Materials", "Compositing"],
    softwares: ["Blender", "Substance Painter", "Photoshop"],
    year: 2025,
    role: "3D Artist",
    client: "Personal",
    url: "#"
  },
  {
    id: 2,
    title: "ARHome: AR Interior Design App",
    category: "UX/UI Design",
    description: "seamless mobile interface designed to bridge the gap between e-commerce and reality, allowing users to visualize furniture in their space via AR.",
    longDescription: "This project addresses a common pain point in online furniture shopping: the uncertainty of fit and style. The goal was to design an intuitive mobile application that leverages Augmented Reality (AR) to let users virtually 'place' items in their homes before purchasing. sing Figma, I focused on a clean, minimalist aesthetic with a warm, earthy color palette to evoke a sense of 'home' and comfort. The user flow centers around the central 'Scan/AR' action button in the navigation bar, ensuring the core feature is always accessible. I prioritized visual hierarchy, ensuring high-quality product imagery stands out against the clean UI. The final high-fidelity prototype offers a user-friendly experience that simplifies decision-making. It successfully combines standard e-commerce functionality (browsing, categorization) with immersive technology, reducing purchase anxiety for the user.",
    image: "/assets/project/Images/designapp.png",
    gallery: ["/assets/project/Images/designapp.png"],
    techniques: ["User Interface Design", "Prototyping", "Wireframing", "Visual Hierarchy", "Interaction Design"],
    softwares: ["Figma"],
    year: 2024,
    role: "UI/UX Designer",
    client: "Nexgear",
    url: "#"
  },
  {
    id: 3,
    title: "3D Animation - Push the Box",
    category: "3D Animation",
    description: "A 3D animated sequence exploring character weight and force against a dynamic, low-poly harbor backdrop.",
    longDescription: "This college project aimed to master the principles of character animation, specifically focusing on conveying the sense of physical exertion, weight, and resistance. The goal was to create a believable interaction between a rigged human character and a heavy object. Using Blender, I rigged a character model and animated a push cycle, paying close attention to body mechanics and timing to sell the weight of the large wooden crate. The surrounding harbor environment was modeled in a low-poly style to maintain focus on the action. Additionally, I implemented Blender's cloth simulation modifier on the ship's sails in the background to add secondary motion and atmospheric realism to the scene. The final animation successfully demonstrates a clear understanding of character kinematics and environmental interaction, creating a cohesive and dynamic short scene.",
    image: "/assets/project/Images/push.png",
    gallery: ["/assets/project/Images/push.png"],
    techniques: ["Character Animation", "Rigging", "Cloth Simulation", "Low-poly Modeling", "Scene Composition"],
    softwares: ["Blender"],
    year: 2025,
    role: "Animator",
    client: "Personal",
    url: "#"
  },
  {
    id: 4,
    title: "NexGear: Game Dev Learning & Career Hub",
    category: "UX/UI Design",
    description: "A comprehensive mobile platform connecting aspiring game developers with educational resources and industry job opportunities.",
    longDescription: "The gaming industry can be difficult to navigate for beginners. The objective was to create 'NexGear,' a unified platform that bridges the gap between skill acquisition and employment. The challenge was to design an interface that appeals to gamers and tech enthusiasts while maintaining professional clarity. I developed a distinct brand identity using a vibrant purple monochrome palette, symbolizing creativity and wisdom in the tech space. The user journey was mapped to allow users to easily toggle between learning modules and job boards. Special attention was paid to the onboarding experience (as seen in the mockup) to ensure users immediately understand the app's value proposition. The resulting UI is modern, energetic, and intuitive. It successfully organizes complex information—courses, tutorials, and job listings—into a streamlined mobile experience that encourages user retention and career progression.",
    image: "/assets/project/Images/nexgear.png",
    gallery: ["/assets/project/Images/nexgear.png"],
    techniques: ["App Interface Design", "Brand Identity", "User Flow Mapping", "Onboarding UX", "Prototyping"],
    softwares: ["Figma", "Illustrator"],
    year: 2024,
    role: "UX/UI Designer",
    client: "Nexgear",
    url: "#"
  },
  {
    id: 5,
    title: "The Hitman's Table: Desert Eagle & Noir Study",
    category: "3D",
    description: "A photorealistic hard-surface study of a Desert Eagle handgun, staged in a narrative noir environment with cinematic lighting.",
    longDescription: "The primary goal of this project was to master complex hard-surface modeling topologies using a firearm as the subject. Beyond the model itself, I wanted to create a story through set dressing, referencing classic cinema (specifically the 'Fairvale Dispatch' from Psycho) to establish a dark, crime-thriller atmosphere. The Desert Eagle was modeled in Blender using boolean workflows and subdivision surface techniques to ensure clean reflections on the metallic parts. I paid special attention to the 'imperfections'—adding scratches, fingerprints, and gun oil residue during the texturing phase to achieve a photorealistic look. The lighting setup utilizes warm, low-key tungsten lights to contrast with the cool metal, enhancing the noir mood. The final render stands as a strong example of product visualization within a narrative context. It demonstrates high-fidelity texturing, precise UV mapping, and the ability to use environmental storytelling to elevate a standard prop model.",
    image: "/assets/project/Images/gun.png",
    gallery: ["/assets/project/Images/gun.png"],
    techniques: ["Hard Surface Modeling", "PBR Texturing", "UV Unwrapping", "Environmental Storytelling", "Cinematic Lighting"],
    softwares: ["Blender", "Substance Painter", "Photoshop"],
    year: 2025,
    role: "3D Modeler",
    client: "Personal",
    url: "#"
  },
  {
    id: 6,
    title: "France Clothing Store: Brand Identity & Visiting Card",
    category: "Graphic Design",
    description: "A bold, minimalist visiting card design for a fashion retailer, featuring a custom vector logo and textured finish.",
    longDescription: "To create a distinct and professional brand identity for 'France Clothing Store' that reflects both heritage and modern style. The client required a memorable visiting card that would establish a strong first impression with customers and partners.I designed the logo entirely in Adobe Illustrator, incorporating the Gallic rooster as a central motif to align with the brand name's cultural roots. I selected a strong, industrial sans-serif typeface to convey durability and reliability. The layout was meticulously balanced to ensure the logo takes prominence, and I utilized a paper texture overlay in the presentation to visualize the tactile quality of the final premium print. The final design delivers a versatile brand mark and a clean, impactful card layout that effectively communicates the store's identity, ready for high-quality print production.",
    image: "/assets/project/Images/card.png",
    gallery: ["/assets/project/Images/card.png"],
    techniques: ["Print design", "Typography", "Layout"],
    softwares: ["Illustrator", "InDesign", "Photoshop"],
    year: 2025,
    role: "Graphic Designer",
    client: "France Clothing Store",
    url: "#"
  },
  {
    id: 7,
    title: "A Nexgear Production - 2D Animation",
    category: "2D Animation",
    description: "A clean, kinetic typography title sequence designed to establish the visual identity for NexGear video content.",
    longDescription: "As part of the broader NexGear branding initiative, the goal was to create a professional intro/outro sequence for video content. The animation needed to be snappy, modern, and consistent with the app's established visual language. Developed in Adobe Animate, I focused on 'Kinetic Typography'—using motion to give character to the text. I utilized vector graphics to ensure the animation remains crisp at any resolution. Key attention was given to the 'easing' (timing and spacing) of the text revealing and the underline stroke to create a smooth, professional flow. The result is a versatile motion asset that reinforces brand recognition. It serves as a polished signature for the NexGear brand ecosystem, bridging static design with dynamic motion",
    image: "/assets/project/Images/title.png",
    gallery: ["/assets/project/Images/title.png"],
    techniques: ["Frame-by-frame", "Timing", "Motion Graphics"],
    softwares: ["Adobe Animate", "After Effects", "Photoshop"],
    year: 2024,
    role: "2D Animator",
    client: "Nexgear",
    url: "#"
  },
  {
    id: 8,
    title: "The Heavy Lift: Body Mechanics Study",
    category: "3D Animation",
    description: "A character animation sequence focusing on body mechanics, weight distribution, and the physical exertion of a deadlift.",
    longDescription: "In character animation, conveying weight is one of the most difficult challenges. The objective of this project was to animate a stylized character performing a heavy lift, ensuring the viewer physically feels the effort and resistance of the object. Working in Blender, I utilized a character rig to block out the key poses of the deadlift. I focused heavily on the 'anticipation' phase (gathering energy) and the 'overshoot' (settling after the lift). I used Inverse Kinematics (IK) to plant the feet and hands firmly, ensuring no sliding occurred during the exertion phase. The lighting was kept moody to highlight the silhouette and form of the character. The final sequence demonstrates a strong grasp of physics and timing. It successfully creates the illusion of mass, showing how force travels through the body from the legs to the spine.",
    image: "/assets/project/Images/wieghtlifting.png",
    gallery: ["/assets/project/Images/wieghtlifting.png"],
    techniques: ["Pose breakdown", "Secondary motion", "Timing"],
    softwares: ["Blender"],
    year: 2025,
    role: "Animator",
    client: "Personal",
    url: "#"
  },
  {
    id: 9,
    title: "Meils: Responsive Fashion Hub",
    category: "UX/UI Design",
    description: "A sleek, dark-themed e-commerce landing page designed with a focus on responsiveness and high-contrast visual hierarchy.",
    longDescription: "The goal was to design a high-impact landing page for 'Meils,' a modern clothing brand. The client needed a site that felt premium and edgy, while ensuring a seamless shopping experience across different screen sizes (Desktop and Tablet). I utilized Figma to create a responsive grid system. I chose a dark monochrome color palette to make the fashion photography pop and to give the brand a 'streetwear' aesthetic. Special attention was paid to the typography—using bold sans-serif fonts for headers to grab attention—and the placement of Call-to-Action (CTA) buttons to drive user engagement. The final design is a fully responsive UI that adapts fluidly between devices. It successfully combines a minimalist layout with strong e-commerce functionality, ensuring readability and style are maintained on any screen.",
    image: "/assets/project/Images/meils.png",
    gallery: ["/assets/project/Images/meils.png"],
    techniques: ["Responsive Design", "Dark Mode UI", "Grid Systems", "Typography", "Visual Hierarchy"],
    softwares: ["Figma", "Photoshop"],
    year: 2024,
    role: "UI Designer",
    client: "Meils Clothing",
    url: "#"
  },
  {
    id: 10,
    title: "Sweet Realism: Vector Product Illustration",
    category: "Graphic Design",
    description: "A photorealistic study of packaging design created entirely using Adobe Illustrator's Gradient Mesh tool to simulate glass transparency and depth.",
    longDescription: "The challenge of this project was to achieve photographic realism within a vector environment, specifically focusing on the complex material properties of glass and semi-translucent liquid (jam). I relied heavily on the Adobe Illustrator Gradient Mesh tool. By creating a complex grid of anchor points, I manually painted light and shadow to sculpt the curvature of the jar. Special attention was paid to the specular highlights on the shoulders of the jar and the refraction of light through the bottom to give the jam volume. The label was warped to match the cylindrical perspective. The result is a fully scalable, resolution-independent vector graphic that mimics the depth and lighting of a 3D render or photograph, demonstrating advanced technical proficiency in Illustrator.",
    image: "/assets/project/Images/glass.jpg",
    // gallery: ["/assets/project/Images/glass.jpg"],
    techniques: ["Gradient Mesh", "Vector Photorealism", "Light & Shadow Study", "Perspective Warping", "Product Packaging"],
    softwares: ["Adobe Illustrator"],
    year: 2024,
    role: "Illustrator",
    client: "Personal",
    url: "#"
  },
  {
    id: 11,
    title: "Future OS: iOS 26 Concept Animation",
    category: "3D Animation",
    description: "A futuristic 3D concept animation showcasing a reimagined, minimalist Control Center interface for the next generation of iOS.",
    longDescription: "To explore the intersection of 3D motion graphics and user interface design by visualizing a futuristic operating system concept. The goal was to replicate the high-end, clean aesthetic typical of Apple product reveals while proposing a new, circular UI language for the Control Center. The device was modeled in Blender using precise hard-surface techniques to match current industrial design standards. The screen content was designed to feature a floating, modular interface. The animation focuses on smooth camera sweeps and depth-of-field transitions to create a sense of depth between the glass screen and the digital elements. The final piece serves as a compelling motion design study, blending product visualization with speculative UI design to create a believable 'tech reveal' commercial.",
    image: "/assets/project/Images/iso26.png",
    gallery: ["/assets/project/Images/iso26.png"],
    techniques: ["Product Visualization", "Camera Animation", "Hard Surface Modeling", "UI Prototyping", "Cinematic Lighting"],
    softwares: ["Blender"],
    year: 2025,
    role: "Motion Designer",
    client: "Personal",
    url: "#"
  },
  {
    id: 12,
    title: "Mjolnir: Mythic Weapon Study",
    category: "3D",
    description: "A cinematic 3D rendition of the iconic Mjolnir, resting in a rugged, rocky environment with atmospheric lighting.",
    longDescription: "The goal was to move beyond simple prop modeling and create a full narrative scene. I wanted to capture the weight and ancient history of the weapon through texturing and lighting, rather than just its geometry. Modeled in Blender, I used hard-surface techniques for the hammer head and curve modifiers to create the intricate wrapping on the leather handle. A major focus was the material work—adding surface imperfections, scratches, and metal fatigue to tell the story of a weapon used in battle. The scene is lit with cool, low-key lighting to emphasize the 'magical' and moody atmosphere, using depth of field to draw the eye directly to the subject. The final render is a high-fidelity image that demonstrates skills in texturing, composition, and creating atmospheric depth within a 3D environment.",
    image: "/assets/project/Images/thor.png",
    gallery: ["/assets/project/Images/thor.png"],
    techniques: ["Hard Surface Modeling", "Environmental Design", "PBR Texturing", "Cinematic Lighting", "Depth of Field"],
    softwares: [ "Blender", "Substance Painter"],
    year: 2025,
    role: "3D Artist",
    client: "Personal",
    url: "#"
  },
  {
    id: 13,
    title: "City Stroll: 2D Walk Cycle Study",
    category: "2D Animation",
    description: "A vibrant, looping 2D walk cycle featuring a stylized character traversing a colorful vector cityscape.",
    longDescription: "The walk cycle is the cornerstone of character animation. The objective of this project was to create a seamless, believable loop that captures the personality of the character through their gait, while maintaining consistent volume and timing. Created entirely within Adobe Animate, I designed the character and background using vector tools to ensure clean lines and scalability. I broke down the walk into key contact positions (contact, down, passing, up) to establish the rhythm. The background features a detailed street scene with distinct layers (fence, trees, telephone booth), designed to potentially support parallax scrolling. The final animation is a smooth, continuous loop that demonstrates a solid grasp of animation principles, specifically timing, spacing, and the mechanics of human locomotion.",
    image: "/assets/project/Images/walk.png",
    gallery: ["/assets/project/Images/walk.png"],
    techniques: ["Vector Illustration", "Walk Cycle Mechanics", "Looping Animation", "Character Motion", "Scene Composition"],
    softwares: ["Adobe Animate", "Adobe Illustrator"],
    year: 2024,
    role: "2D Animator",
    client: "Personal",
    url: "#"
  },
  {
    id: 14,
    title: "NexGear: Brand Identity Logo",
    category: "Graphic Design",
    description: "A geometric, minimalist logo design symbolizing structure and development, serving as the core identity for the NexGear platform.",
    longDescription: "To create a memorable visual identity for 'NexGear,' a game development learning hub. The logo needed to visually represent the concept of 'building' and 'structure' inherent in coding and 3D modeling, while appealing to a modern, tech-savvy audience. Designed in Adobe Illustrator, the icon is constructed using a geometric grid to form a hexagon that implies a 3D cube. The use of solid versus dashed lines represents the difference between the 'visible' final product and the 'underlying' code or wireframe—a nod to the educational aspect of the app. The electric purple color was chosen to stand out in dark-mode environments, common in coding tools. The final logo is a scalable vector asset that functions effectively as an app icon, a website header, and a motion graphic element, anchoring the entire brand ecosystem.",
    image: "/assets/project/Images/logo.jpg",
    gallery: ["/assets/project/Images/logo.jpg"],
    techniques: ["Vector Illustration", "Geometric Construction", "Typography", "Color Theory", "Icon Design"],
    softwares: ["Illustrator", "Photoshop"],
    year: 2024,
    role: "Brand Designer",
    client: "Nexgear",
    url: "#"
  },
  {
    id: 15,
    title: "Impact vs. Impress: Social Media Kinetic Typography",
    category: "2D Animation",
    description: "A kinetic typography short created for social media, using text manipulation to deliver a message about authentic digital presence.",
    longDescription: "The goal was to create a punchy, shareable animation that addresses social media psychology. Specifically, I wanted to visually transform a negative statement into a positive call to action using motion. Created in Adobe Animate, this project relies heavily on timing and 'text replacement' techniques. I animated a red strikethrough effect to cancel out specific words (like 'don't'), dynamically changing the sentence's meaning in real-time. The background utilizes a dotted world map vector to symbolize global connectivity, while the icons below anchor the context. The final result is a clean, message-driven motion graphic suitable for Instagram Reels or LinkedIn, effectively demonstrating how simple text animation can alter narrative tone.",
    image: "/assets/project/Images/textani.png",
    gallery: ["/assets/project/Images/textani.png"],
    techniques: ["Kinetic Typography", "Vector Animation", "Timing & Pacing", "Visual Storytelling", "Symbol Management"],
    softwares: ["After Effects", "Illustrator"],
    year: 2024,
    role: "Motion Designer",
    client: "Personal",
    url: "#"
  }
];

/*
 Example expanded project (copy/paste and edit into the `projects` array):

 {
   id: 99,
   title: "Example Project Title",
   category: "Graphic Design",
   description: "Short summary for the grid/card.",
   longDescription: "Longer case-study text shown on the project detail page or modal. Explain objective, process, and outcome.",
   image: "/assets/project/Images/example-thumb.jpg",
   gallery: [
     "/assets/project/Images/example-1.jpg",
     "/assets/project/Images/example-2.jpg"
   ],
   techniques: ["Vector Illustration", "Layout", "Color Theory"],
   softwares: ["Illustrator", "Photoshop"],
   year: 2024,
   role: "Lead Designer",
   client: "Client Name",
   url: "https://example.com/case-study"
 }

 // Add your real projects above in the `projects` array. Use the fields shown in the example.
*/

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
  const techniques = p.techniques || p.Techniques || [];
  if (techniques && Array.isArray(techniques) && techniques.length) {
    const techWrap = document.createElement('div');
    techWrap.className = 'tech-list';
    techniques.forEach(t => {
      const tspan = document.createElement('span');
      tspan.className = 'tech-badge';
      tspan.textContent = t;
      techWrap.appendChild(tspan);
    });
    info.appendChild(techWrap);
  }

  // softwares (optional array) - show a compact list on the card
  const softwares = p.softwares || p.Softwares || [];
  if (softwares && Array.isArray(softwares) && softwares.length) {
    const swWrap = document.createElement('div');
    swWrap.className = 'softwares-list';
    // show up to 3 softwares on the card
    softwares.slice(0, 3).forEach(s => {
      const sspan = document.createElement('span');
      sspan.className = 'tech-badge software';
      sspan.textContent = s;
      swWrap.appendChild(sspan);
    });
    info.appendChild(swWrap);
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
  // open modal when clicking card — but ignore clicks on internal links or buttons
  wrap.addEventListener('click', (e) => {
    // if a link/button inside the card was clicked, don't open modal
    if (e.target.closest('a') || e.target.closest('button')) return;
    openProjectModal(p);
  });
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
  modal.querySelector('.modal-desc').textContent = p.longDescription || p.description || '';

  const tech = modal.querySelector('.modal-tech');
  tech.innerHTML = '';
  const techniques = p.techniques || p.Techniques || [];
  if (techniques && Array.isArray(techniques)) {
    techniques.forEach(t => {
      const el = document.createElement('span');
      el.className = 'tech-badge modal';
      el.textContent = t;
      tech.appendChild(el);
    });
  }

  // Softwares
  const meta = modal.querySelector('.modal-meta');
  let metaHtml = '';
  const year = p.year || p.Year || '';
  const role = p.role || p.Role || '';
  const client = p.client || p.Client || '';
  if (year) metaHtml += `<span class="muted">${year}</span> `;
  if (role) metaHtml += `• <span class="muted">${role}</span> `;
  if (client) metaHtml += `• <span class="muted">${client}</span>`;
  // prepend category label too
  modal.querySelector('.modal-meta').innerHTML = `<span class="project-category">${p.category}</span> ${metaHtml}`;

  // Gallery (if provided) - create thumbnails and main image change
  const media = modal.querySelector('.modal-media');
  const mainImg = media.querySelector('img');
  const galleryWrap = modal.querySelector('.modal-tech'); // reuse this area for thumbnails label
  // create a separate gallery container
  const existingGallery = modal.querySelector('.modal-gallery');
  if (existingGallery) existingGallery.remove();
  if (p.gallery && Array.isArray(p.gallery) && p.gallery.length) {
    const g = document.createElement('div');
    g.className = 'modal-gallery';
    p.gallery.forEach((src, idx) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.alt = `${p.title} ${idx + 1}`;
      thumb.className = 'modal-thumb';
      thumb.loading = 'lazy';
      thumb.addEventListener('click', (e) => { mainImg.src = src; });
      g.appendChild(thumb);
    });
    media.appendChild(g);
    mainImg.src = p.gallery[0];
  } else {
    mainImg.src = p.image || '/assets/images/placeholder.png';
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
  updateDisplayedProjects();
}

function getSelectedCategory() {
  const select = document.getElementById('categoryFilter');
  return select ? select.value : 'all';
}

function getSelectedSort() {
  const s = document.getElementById('sortSelect');
  return s ? s.value : 'newest';
}

function getSearchQuery() {
  const inp = document.getElementById('searchInput');
  return inp && inp.value ? inp.value.trim().toLowerCase() : '';
}

function sortProjects(list) {
  const sortBy = getSelectedSort();
  const copy = list.slice();
  if (sortBy === 'newest' || sortBy === 'oldest') {
    copy.sort((a,b) => {
      const ay = Number(a.year || a.Year || 0) || 0;
      const by = Number(b.year || b.Year || 0) || 0;
      return (ay - by) * (sortBy === 'newest' ? -1 : 1);
    });
  } else if (sortBy === 'az' || sortBy === 'za') {
    copy.sort((a,b) => {
      const ta = (a.title || '').toLowerCase();
      const tb = (b.title || '').toLowerCase();
      if (ta < tb) return sortBy === 'az' ? -1 : 1;
      if (ta > tb) return sortBy === 'az' ? 1 : -1;
      return 0;
    });
  } else if (sortBy === 'most-tech' || sortBy === 'fewest-tech') {
    copy.sort((a,b) => {
      const at = (a.techniques || a.Techniques || []).length;
      const bt = (b.techniques || b.Techniques || []).length;
      return (at - bt) * (sortBy === 'most-tech' ? -1 : 1);
    });
  }
  return copy;
}

function updateDisplayedProjects() {
  const category = getSelectedCategory();
  let list = projects.slice();
  if (category && category !== 'all') {
    list = list.filter(p => (p.category || '').toLowerCase() === category);
  }
  // apply search filter (title, techniques, client, description)
  const q = getSearchQuery();
  if (q) {
    const tokens = q.split(/\s+/).filter(Boolean);
    list = list.filter(p => {
      const hay = [p.title, p.client, p.description, p.longDescription]
        .concat((p.techniques || p.Techniques || []).slice(0))
        .concat((p.softwares || p.Softwares || []).slice(0))
        .filter(Boolean)
        .join(' ').toLowerCase();
      return tokens.every(t => hay.indexOf(t) !== -1);
    });
  }
  list = sortProjects(list);
  renderProjects(list);
}

// Styles for the grid were moved to `assets/Project/Project.css` to keep presentation centralized.

document.addEventListener('DOMContentLoaded', () => {
  populateFilter();
  // ensure sort select exists and wire change handlers
  const catSelect = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortSelect');
  const searchInput = document.getElementById('searchInput');
  if (catSelect) catSelect.addEventListener('change', handleFilterChange);
  if (sortSelect) sortSelect.addEventListener('change', () => updateDisplayedProjects());
  // debounce helper for search
  function debounce(fn, wait) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); }; }
  if (searchInput) searchInput.addEventListener('input', debounce(() => updateDisplayedProjects(), 220));
  // initial render with current sort/filter
  updateDisplayedProjects();
});
