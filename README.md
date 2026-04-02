# Oceana Tree Services Website

A professional, static HTML/CSS/JavaScript website for a tree services business. Fully responsive, no dependencies, no build tools required.

## Features

- **2-page static site**: Homepage and Contact Us page
- **Premium design**: Dark navy with gold accents, smooth animations
- **Fully responsive**: Mobile, tablet, and desktop optimized
- **Fast loading**: Pure HTML/CSS/JavaScript, no frameworks
- **Easy deployment**: Works on Vercel, GitHub Pages, or any static host
- **Contact forms**: With client-side validation
- **Image galleries**: With lightbox viewer
- **Testimonials slider**: Auto-rotating with navigation
- **Accessibility**: WCAG 2.1 compliant, semantic HTML, ARIA labels
- **SEO ready**: Meta tags, semantic structure, proper heading hierarchy

## File Structure

```
.
├── index.html              # Homepage
├── contact.html            # Contact page
├── styles.css              # All CSS styling
├── script.js               # All JavaScript functionality
├── README.md               # This file
└── /images/                # Placeholder directory for images
    ├── hero.jpg
    ├── service-1.jpg through service-6.jpg
    ├── gallery-1.jpg through gallery-6.jpg
    └── (all .jpg files referenced in HTML)
```

## Quick Start (Development)

1. **Download/Clone the project**
   ```bash
   git clone <your-repo-url>
   cd oceana-tree-services
   ```

2. **Add your images**
   - Create an `/images` folder in the project directory
   - Add the placeholder images (hero.jpg, service-1.jpg, etc.)
   - Or replace image paths in HTML with your own image URLs

3. **Edit business details**
   - Replace phone number: `(555) 123-4567` with your actual number
   - Replace email: `info@oceanatreeservices.com` with your email
   - Replace service areas: Look for `[EDIT: add suburbs]` placeholders
   - Update hours and any other business information

4. **Set up contact form** (See "Contact Form Setup" section below)

5. **Open in browser**
   - Simply open `index.html` in your web browser
   - No local server needed for testing

## GitHub Setup (Beginner Guide)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts to create a free account
4. Verify your email

### Step 2: Create a New Repository

1. Click the **+** icon in the top-right corner
2. Select **New repository**
3. Name your repo: `oceana-tree-services` (or your preferred name)
4. Add description: "Professional tree services website"
5. Select **Public** (so it can be deployed on Vercel)
6. Click **Create repository**

### Step 3: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest for beginners)**

1. On your repository page, click **Add file** → **Upload files**
2. Drag and drop these files onto the upload area:
   - `index.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Click **Commit changes**

4. Create the `/images` folder:
   - Click **Add file** → **Create new file**
   - Type `images/.gitkeep` in the filename field
   - Click **Commit new file**
   
5. Upload your images to the `/images` folder:
   - Click **Add file** → **Upload files**
   - Choose "images" as the target folder
   - Upload all your images
   - Click **Commit changes**

**Option B: Using Git Command Line (For developers)**

```bash
# Initialize local repo
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Oceana Tree Services website"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/oceana-tree-services.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment (Automatic & Free)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel to access your GitHub account
4. You'll be redirected to Vercel's dashboard

### Step 2: Import Your Project

1. Click **Add New...** → **Project**
2. Click **Import Git Repository**
3. Find your `oceana-tree-services` repository
4. Click **Import**

### Step 3: Configure & Deploy

1. The default settings are fine (no build command needed)
2. Click **Deploy**
3. Wait 1-2 minutes for deployment to complete
4. You'll see your live website URL (something like `oceana-tree-services.vercel.app`)

### Step 4: Use Your Own Domain (Optional)

1. In Vercel, go to your project settings
2. Click **Domains**
3. Add your custom domain (you'll need to purchase one from GoDaddy, Namecheap, etc.)
4. Follow Vercel's instructions to update your domain's DNS settings
5. Your site will be live at your custom domain within 24 hours

## Contact Form Setup

The website includes two methods to handle form submissions:

### Option 1: Formspree (Easiest - No Backend Needed)

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form and choose "HTML" mode
4. You'll get a form ID (e.g., `f/abc123def`)
5. Open `script.js` and find the `handleContactSubmission` function (around line 300)
6. Uncomment the Formspree fetch code
7. Replace `YOUR_FORM_ID` with your actual form ID from Formspree
8. That's it! Form submissions will be emailed to you

### Option 2: Your Own Backend Service

1. Set up a backend service (Node.js, Python Flask, etc.)
2. Create an endpoint that accepts POST requests with contact data
3. Open `script.js` and find the `handleContactSubmission` function
4. Uncomment the custom backend fetch code
5. Replace `/api/contact` with your actual backend endpoint
6. Add CORS headers to your backend to allow requests from your domain

### Option 3: Basin or Similar Service

1. Sign up at [basin.io](https://basin.io) or similar
2. Create a form and get your endpoint
3. Update the fetch URL in `script.js`

## Making Updates

### Updating Content Locally

1. Edit files in your text editor (VS Code recommended)
2. Test changes by opening `index.html` in your browser
3. When satisfied, commit and push to GitHub

```bash
git add .
git commit -m "Updated service descriptions"
git push
```

### Vercel Auto-Deploy

Once connected, every push to GitHub automatically deploys to Vercel within seconds. No extra steps needed!

## Customization Guide

### Change Colors

Open `styles.css` and look for CSS variables at the top:

```css
:root {
    --primary-dark: #1a1f2e;        /* Main background */
    --accent-gold: #d4af6a;         /* Gold accents */
    --text-light: #ffffff;          /* Text color */
    /* ... more variables ... */
}
```

Simply change the hex color codes to your preferred colors.

### Change Fonts

In `styles.css`, find the font declarations:

```css
body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
}
```

Replace with fonts from [Google Fonts](https://fonts.google.com).

### Replace Images

1. Take photos of your tree services work
2. Name them: `hero.jpg`, `service-1.jpg`, `gallery-1.jpg`, etc.
3. Upload to `/images` folder
4. No HTML changes needed (same filenames)

### Edit Text Content

Simply open the HTML files and update text:
- Page titles and headings
- Service descriptions
- Testimonials
- Footer information
- Phone numbers and emails

All standard text editing.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fully responsive (0 layout shifts)
- Fast page loads (no dependencies)
- Optimized animations (hardware accelerated)
- Mobile-friendly (Core Web Vitals optimized)

## Accessibility Features

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators on interactive elements
- Alt text on all images
- Proper color contrast ratios

## SEO Optimization

The site includes:
- Descriptive page titles
- Meta descriptions
- Semantic HTML headings
- Proper heading hierarchy (h1 → h2 → h3)
- Mobile meta viewport
- Schema markup ready

For better SEO:
1. Add structured data (schema.org)
2. Create a `sitemap.xml`
3. Submit to Google Search Console
4. Set up Google Analytics

## Troubleshooting

### Form not working?
- Check browser console for errors (F12)
- Ensure Formspree endpoint is correct
- Test with a simple email first

### Images not showing?
- Verify image paths match filenames
- Check `/images` folder exists
- Ensure image formats are .jpg, .png, or .webp
- Verify images are under 5MB each

### Site looks broken on mobile?
- Clear browser cache (Ctrl+Shift+Delete)
- Test in incognito/private mode
- Check that viewport meta tag exists in HTML

### Vercel deployment failing?
- Check that all files are properly committed to GitHub
- Ensure no `node_modules` folder exists
- Verify files aren't too large (>100MB total)
- Check Vercel deployment logs for errors

## Performance Optimization Tips

1. **Optimize images**: Compress before uploading
2. **Lazy loading**: Already implemented in HTML
3. **Minify**: For production, minify CSS/JS
4. **CDN**: Vercel automatically uses their CDN
5. **Caching**: Vercel handles cache headers automatically

## License

This website template is yours to use and modify for your business.

## Support & Further Help

### For Deployment Issues
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub Help: [docs.github.com](https://docs.github.com)

### For Design/Code Changes
- CSS Help: [w3schools.com/css](https://w3schools.com/css)
- JavaScript Help: [javascript.info](https://javascript.info)
- HTML Guide: [w3schools.com/html](https://w3schools.com/html)

### For Hosting Questions
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Support: [github.com/support](https://github.com/support)

---

**Ready to go live?**

1. ✅ Add your images
2. ✅ Update business info
3. ✅ Push to GitHub
4. ✅ Deploy on Vercel
5. ✅ Share your site!

The site is now live and will automatically update whenever you push changes to GitHub.
