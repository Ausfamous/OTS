# Project File Structure

```
oceana-tree-services/
│
├── index.html                    # Homepage - main landing page
├── contact.html                  # Contact page with form and details
│
├── styles.css                    # All styling (CSS)
├── script.js                     # All interactivity (JavaScript)
│
├── README.md                     # Main documentation & deployment guide
├── CUSTOMIZATION_GUIDE.md        # Detailed guide to customize content
├── DEPLOYMENT_CHECKLIST.md       # Step-by-step deployment checklist
├── .gitignore                    # Files to exclude from Git
│
└── /images/                      # Image folder (create this)
    ├── hero.jpg
    ├── service-1.jpg
    ├── service-2.jpg
    ├── service-3.jpg
    ├── service-4.jpg
    ├── service-5.jpg
    ├── service-6.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    └── gallery-6.jpg
```

## File Descriptions

### HTML Files (Content)

#### `index.html`
**What it is:** Your homepage - the first page people see

**What it contains:**
- Header with navigation and phone number
- Hero section with headline and CTA
- Quick quote form modal
- Introduction section
- 4-item metrics strip (numbers showing credibility)
- 6-card services section
- "Why Choose Us" section
- Testimonials slider
- Recent work gallery with lightbox
- Service regions/areas section
- Final CTA
- Footer

**When to edit:**
- Change company name, phone, email
- Update service descriptions
- Modify testimonials
- Add/remove regions
- Customize any text content

---

#### `contact.html`
**What it is:** Dedicated contact page

**What it contains:**
- Header (matches homepage)
- Page header with intro text
- Contact form with validation
- Contact information details block
- FAQ section with 6 common questions
- Final CTA section
- Footer (matches homepage)

**When to edit:**
- Update form fields if needed
- Modify FAQ questions/answers
- Change contact details
- Update business hours

---

### CSS File (Styling)

#### `styles.css`
**What it is:** All visual styling and responsive design

**What it contains:**
- CSS variables for colors and spacing
- Typography styles (fonts, sizes, weights)
- Layout and grid systems
- Component styles (buttons, cards, forms)
- Mobile responsive breakpoints
- Animations and transitions
- Print styles

**Key sections:**
- Lines 1-30: CSS variables (colors, fonts, spacing)
- Lines 50-150: Global styles and typography
- Lines 150-400: Header and navigation
- Lines 400-600: Hero and buttons
- Lines 600-900: Main sections (services, testimonials, etc.)
- Lines 1000-1200: Forms
- Lines 1200+: Responsive design (@media queries)

**When to edit:**
- Change colors (update CSS variables at top)
- Adjust spacing and sizing
- Modify responsive breakpoints
- Customize animations

---

### JavaScript File (Functionality)

#### `script.js`
**What it is:** All interactive features and form handling

**What it contains:**
- Mobile menu toggle
- Quote form modal (open/close)
- Form validation (all fields)
- Testimonials slider (auto-rotate)
- Gallery lightbox viewer
- Smooth scrolling
- Contact form handler
- Scroll animations

**Key functions:**
- `initMobileMenu()` - Mobile burger menu
- `initQuoteForm()` - Quote modal popup
- `validateForm()` - Form validation logic
- `initTestimonials()` - Slider functionality
- `initGallery()` - Gallery and lightbox
- `handleContactSubmission()` - Form submission (connect to backend here)

**When to edit:**
- Update form submission logic
- Change modal behavior
- Modify animations
- Add new interactive features

---

### Documentation Files

#### `README.md`
**Purpose:** Main guide covering everything

**Includes:**
- Feature overview
- File structure explanation
- Quick start for development
- GitHub setup (beginner-friendly)
- Vercel deployment instructions
- Contact form setup options
- Troubleshooting guide
- Performance optimization tips

**Read this first** when deploying

---

#### `CUSTOMIZATION_GUIDE.md`
**Purpose:** Detailed how-to for non-technical users

**Includes:**
- Step-by-step business info updates
- Image preparation and upload
- Color customization guide
- Font customization guide
- Content updates (services, testimonials, FAQ)
- Form setup with Formspree
- Analytics setup
- Common troubleshooting
- Checklist of all edits needed

**Use this** when customizing content

---

#### `DEPLOYMENT_CHECKLIST.md`
**Purpose:** Fast checklist to go live

**Includes:**
- Pre-deployment checklist
- GitHub setup steps
- Vercel deployment steps
- Post-deployment testing
- Quick fix reference
- Important info storage
- Next steps after launch

**Use this** before deployment

---

#### `.gitignore`
**Purpose:** Tell Git which files to ignore

**Includes:**
- OS files (.DS_Store, Thumbs.db)
- IDE files (.vscode, .idea)
- Temporary files and logs
- Node modules (if you add build tools later)

**Leave as-is** (no editing needed usually)

---

### Images Folder (`/images/`)

**What it is:** All site images

**What you need:**
- `hero.jpg` - Main hero image (1200×600px recommended)
- `service-1.jpg` through `service-6.jpg` - Service cards (300×220px)
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images (square, 400×400px+)

**File format:** JPG (preferred, smaller size) or PNG

**File size:** Under 500KB each (optimize first)

**Path in HTML:** `/images/hero.jpg` (auto-referenced, no changes needed)

---

## How Files Work Together

```
User visits website
    ↓
Browser loads index.html (structure)
    ↓
Browser loads styles.css (styling)
    ↓
Browser loads script.js (interactivity)
    ↓
Browser loads images/* (visuals)
    ↓
Website displays perfectly!
```

## What Happens When You Edit

**Scenario: You change text in index.html**

1. Edit text in HTML file
2. Commit to GitHub
3. Vercel detects changes
4. Vercel re-deploys automatically
5. Website updates in 1-2 minutes

**No build process needed.** Vercel just uploads your static files.

## File Sizes & Performance

Typical file sizes:

```
index.html        ~25 KB
contact.html      ~18 KB
styles.css        ~55 KB
script.js         ~20 KB
Each image        ~50-200 KB
─────────────────────────────
Total site        ~5-8 MB (including images)
```

**Fast load time** because:
- Pure static files (no server processing)
- Optimized CSS (no bloat)
- Minimal JavaScript (no frameworks)
- Images are lazy-loaded (load only when needed)
- Vercel's CDN (global fast delivery)

## Development vs. Production

### Development (local testing)
```bash
1. Edit files locally
2. Open index.html in browser
3. Test everything
4. When ready, commit to GitHub
```

### Production (live)
```bash
1. Files on GitHub
2. Vercel auto-deploys
3. Website live at URL
4. Updates automatic when you push
```

**You never need to manually upload files to servers.**

## Common Edits & File Location

| What to Change | File | Method |
|---|---|---|
| Phone number | index.html, contact.html | Find & replace |
| Email | index.html, contact.html | Find & replace |
| Colors | styles.css | Edit CSS variables |
| Fonts | styles.css | Change font-family |
| Services | index.html | Edit service card content |
| Testimonials | index.html | Edit slide content |
| FAQ | contact.html | Edit faq-item divs |
| Hours | index.html, contact.html | Edit footer content |
| Images | /images/ folder | Upload files |
| Form action | script.js | Edit handleContactSubmission |

## Advanced: Adding More Pages

To create a page like `/about.html`:

1. Copy `contact.html` and rename to `about.html`
2. Update the `<title>` and content
3. Make sure header/footer match other pages
4. Add navigation link in `<nav>` of all pages
5. Commit and push to GitHub

HTML is the same, CSS and JS are shared (no duplication).

## Key Takeaways

- **Simple structure**: Just HTML, CSS, JS (no complexity)
- **Easy to edit**: Just text editing, no coding needed
- **Fast deployment**: One click on Vercel
- **Automatic updates**: Push to GitHub = site updates
- **Professional result**: Looks like a $5000+ custom website

---

For more details, see:
- README.md (general overview)
- CUSTOMIZATION_GUIDE.md (specific changes)
- DEPLOYMENT_CHECKLIST.md (go live steps)
