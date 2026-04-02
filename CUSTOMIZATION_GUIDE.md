# Customization Guide - Oceana Tree Services Website

A step-by-step guide to make this template your own. No coding experience required.

## Before You Start

You'll need a simple text editor. Recommended:
- **Windows**: Notepad++ (free), VS Code (free)
- **Mac**: TextEdit (built-in), VS Code (free)
- **Online**: [replit.com](https://replit.com) (no installation needed)

## 1. Business Information

### Phone Numbers

**Where to change:**
- `index.html` (line 72): Header phone display
- `index.html` (line 83): Navigation contact link
- `index.html` (line 123): Hero button
- `contact.html`: Footer and contact details
- Search for: `(555) 123-4567` and replace everywhere

**How to:**
1. Open `index.html` in your text editor
2. Press `Ctrl+H` (Windows) or `Cmd+H` (Mac) to open Find & Replace
3. Find: `(555) 123-4567`
4. Replace with: your actual phone number
5. Click "Replace All"
6. Save the file
7. Repeat for `contact.html`

### Email Address

Search for and replace: `info@oceanatreeservices.com`

### Business Hours

**Where to find:**
- `index.html` (line 620): Footer
- `contact.html` (line 101): Contact page

**Example format:**
```
Monday - Friday: 7am - 5pm
Saturday: 8am - 4pm
Sunday: Emergency only
```

### Service Areas (Regions)

**Where to find:** `index.html` (around line 450)

Look for sections like:
```html
<div class="region-card">
    <h3>Inner West</h3>
    <p>Including [EDIT: add suburbs], and surrounding areas</p>
</div>
```

**How to update:**
1. Replace `[EDIT: add suburbs]` with actual suburbs your company serves
2. You can add or remove region cards by copying/pasting the entire `<div class="region-card">` block
3. Keep the same HTML structure

## 2. Add Your Images

### Image Checklist

You need to provide images for:
- **hero.jpg** (1200×600px recommended) - Main hero image
- **service-1.jpg through service-6.jpg** (300×220px) - Service cards
- **gallery-1.jpg through gallery-6.jpg** (Square, 400×400px+) - Gallery images

### How to Prepare Images

1. **Resize using online tools** (no software needed):
   - [Canva.com](https://canva.com) (free account)
   - [pixlr.com](https://pixlr.com) (free online editor)
   - [resizeimage.net](https://resizeimage.net) (no signup)

2. **Recommended settings:**
   - Format: JPG (smaller file size)
   - Quality: 80% (balances quality and speed)
   - Size: Under 500KB per image

3. **Name your files exactly:**
   ```
   hero.jpg
   service-1.jpg
   service-2.jpg
   service-3.jpg
   service-4.jpg
   service-5.jpg
   service-6.jpg
   gallery-1.jpg
   gallery-2.jpg
   gallery-3.jpg
   gallery-4.jpg
   gallery-5.jpg
   gallery-6.jpg
   ```

### Upload to GitHub

1. Create `/images` folder in your GitHub repo
2. Upload all images to this folder
3. Images are automatically referenced in HTML

## 3. Change Colors

### Find the Color Variables

Open `styles.css` and look at the top of the file:

```css
:root {
    --primary-dark: #1a1f2e;        /* Main dark background */
    --secondary-dark: #232a3d;      /* Lighter dark background */
    --text-light: #ffffff;          /* Text color (white) */
    --text-muted: #b0b8c5;          /* Muted gray text */
    --accent-gold: #d4af6a;         /* Gold accent color */
    --accent-gold-light: #e8c896;   /* Lighter gold */
    --accent-gold-dark: #b89b4a;    /* Darker gold */
    /* ... more variables ... */
}
```

### How to Change Colors

1. Use a color picker: [htmlcolorcodes.com](https://htmlcolorcodes.com)
2. Copy the hex code (e.g., `#ff0000` for red)
3. Replace in `styles.css`

**Example:** Change gold accent to teal
```css
--accent-gold: #008080;        /* Teal */
--accent-gold-light: #20b2aa;  /* Light teal */
--accent-gold-dark: #006b63;   /* Dark teal */
```

### Color Scheme Ideas

**Modern Green** (for nature):
- Primary: `#0a3622`
- Accent: `#2d6a4f`
- Light: `#52b788`

**Professional Blue** (for trust):
- Primary: `#1b263b`
- Accent: `#178dd9`
- Light: `#3b97d6`

**Warm Orange** (for energy):
- Primary: `#2d1b1b`
- Accent: `#f77f00`
- Light: `#fcbf49`

## 4. Change Fonts

### Current Fonts

- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: DM Sans (clean sans-serif)

### Change to Different Fonts

1. Go to [fonts.google.com](https://fonts.google.com)
2. Search and select fonts you like
3. Click the font → copy the import code
4. Open `styles.css`
5. At the very top, find the font-family declarations
6. Replace the font names

**Example: Change to Roboto + Playfair Display**

In `styles.css`, update:
```css
body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
}
```

## 5. Update Testimonials

**Where to find:** `index.html` (around line 330)

Each testimonial block looks like:
```html
<div class="testimonial-slide">
    <div class="testimonial-content">
        <p class="testimonial-text">"Oceana Tree Services transformed our backyard..."</p>
        <p class="testimonial-author">Sarah Mitchell</p>
    </div>
</div>
```

**How to update:**
1. Replace quote text with real customer testimonials
2. Replace author names with real names
3. You can add more slides by copying the entire `<div class="testimonial-slide">` block
4. The slider automatically handles any number of testimonials

## 6. Update Services Section

**Where to find:** `index.html` (around line 240)

Each service card has this structure:
```html
<div class="service-card">
    <div class="service-image">
        <img src="/images/service-1.jpg" alt="Tree pruning service" loading="lazy">
    </div>
    <h3>Tree Pruning</h3>
    <p>Careful, strategic pruning to enhance tree health...</p>
</div>
```

**How to update:**
1. Change the `h3` heading to your service name
2. Change the `p` description to your service description
3. You can change the image by updating the filename
4. Keep the `alt` text descriptive for accessibility

## 7. Update Content Sections

### Introduction Section
`index.html` around line 190:
- Update the headline: `<h2>Trusted Tree Care Experts</h2>`
- Update the description paragraph
- Modify the three intro points with your own features

### Why Choose Us Section
`index.html` around line 370:
- Each item has an `<h3>` (title) and `<p>` (description)
- Customize all 6 items with your unique selling points

### FAQ Section
`contact.html` around line 160:
- Each FAQ item is a `<div class="faq-item">`
- Update questions and answers
- Add/remove items as needed

## 8. Update Footer Information

**Where to find:**
- `index.html` (end of page)
- `contact.html` (end of page)

**What to change:**
```html
<div class="footer-section">
    <h3>Oceana Tree Services</h3>
    <p>Professional tree care with integrity and expertise.</p>
</div>
```

- Company name
- Tagline
- Contact links
- Hours
- Copyright year

## 9. Create More Pages (Advanced)

To add a new page (e.g., "About Us"):

1. Copy `contact.html` and rename to `about.html`
2. Update the `<title>` tag
3. Update the navigation links to include the new page
4. Update the content
5. Commit and push to GitHub

In all pages, update navigation:
```html
<li><a href="about.html">About</a></li>
```

## 10. Form Setup (Contact Form)

The contact form is ready but needs a backend service to actually send emails.

### Quick Setup with Formspree

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a form and copy your form ID
4. Open `script.js` and search for `handleContactSubmission`
5. Follow the instructions to uncomment the Formspree code
6. Replace `YOUR_FORM_ID` with your actual ID
7. Save and push to GitHub

**That's it!** Forms will now send to your email.

## 11. Analytics & SEO (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add this to the `<head>` section of both HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your actual tracking ID.

### Add Meta Tags

In both `<head>` sections, customize:

```html
<title>Oceana Tree Services | Your Unique Tagline</title>
<meta name="description" content="Your unique business description for search results">
<meta name="keywords" content="tree services, pruning, removal, your city">
```

## Common Edits Checklist

- [ ] Phone number (3 locations)
- [ ] Email address (2 locations)
- [ ] Business hours (2 locations)
- [ ] Service areas/regions
- [ ] Company tagline
- [ ] Service descriptions
- [ ] Testimonials
- [ ] Why choose us points
- [ ] FAQ items
- [ ] Footer information
- [ ] Upload images
- [ ] Set up contact form
- [ ] Deploy to Vercel

## Testing Your Changes

**After each change:**

1. Save the file
2. Push to GitHub (if deployed)
3. Wait for Vercel to deploy (usually 30-60 seconds)
4. Visit your live site and refresh (Ctrl+Shift+R)
5. Check that changes appear correctly

## Troubleshooting Common Issues

### Change doesn't appear on live site
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Wait 1-2 minutes for Vercel to finish deploying
- Check that you pushed to GitHub correctly

### Text looks broken
- Check for missing closing quotes (`"`)
- Look for missing opening/closing tags (`<div>...</div>`)
- Copy-pasting from Microsoft Word can add extra formatting

### Images not showing
- Verify filenames match exactly (case-sensitive)
- Check image is in `/images` folder
- Ensure image format is .jpg, .png, or .webp
- File size should be under 5MB

### Colors don't look right
- Clear browser cache
- Check hex code format (#rrggbb)
- Use [colorpicker.com](https://colorpicker.com) to verify colors

## Getting Help

### If you get stuck:
1. Check the main [README.md](README.md)
2. Search [w3schools.com](https://w3schools.com) for HTML/CSS help
3. Copy error messages into Google for solutions
4. Check browser console (F12 → Console tab) for error messages

### Common resources:
- HTML Help: [w3schools.com/html](https://w3schools.com/html)
- CSS Help: [w3schools.com/css](https://w3schools.com/css)
- Colors: [htmlcolorcodes.com](https://htmlcolorcodes.com)
- Fonts: [fonts.google.com](https://fonts.google.com)

---

**You've got this!** Start with small changes, test, and build up from there. The site is fully functional and ready to customize.
