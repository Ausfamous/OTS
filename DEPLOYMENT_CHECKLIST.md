# Deployment Checklist

Follow this checklist to get your site live in under 30 minutes.

## Pre-Deployment (15 minutes)

### Content
- [ ] Replace `(555) 123-4567` with your actual phone number
- [ ] Replace `info@oceanatreeservices.com` with your actual email
- [ ] Update business hours in footer and contact page
- [ ] Update service areas (replace `[EDIT: add suburbs]` with real locations)
- [ ] Update all service descriptions
- [ ] Update testimonials with real customer quotes
- [ ] Update "Why Choose Us" section with your USPs
- [ ] Update company tagline in header footer

### Images
- [ ] Prepare and optimize 13 images:
  - 1 hero image (1200×600px)
  - 6 service images (300×220px each)
  - 6 gallery images (square, 400×400px+)
- [ ] Save all images in JPG format, under 500KB each
- [ ] Name images exactly as specified in HTML

### Forms
- [ ] Choose form service (Formspree recommended)
- [ ] Sign up for form service
- [ ] Get form endpoint/ID
- [ ] Update `script.js` with your endpoint
- [ ] Test form locally (F12 → Console to see submissions)

## GitHub Setup (10 minutes)

### Step 1: Create GitHub Account
- [ ] Go to [github.com](https://github.com)
- [ ] Click "Sign up"
- [ ] Complete signup and verify email

### Step 2: Create Repository
- [ ] Click **+** (top-right) → **New repository**
- [ ] Name: `oceana-tree-services`
- [ ] Description: "Professional tree services website"
- [ ] Select **Public**
- [ ] Click **Create repository**

### Step 3: Upload Files
**Using GitHub Web Interface (easiest):**
- [ ] Click **Add file** → **Upload files**
- [ ] Drag and drop these files:
  - index.html
  - contact.html
  - styles.css
  - script.js
  - README.md
  - CUSTOMIZATION_GUIDE.md
  - .gitignore
- [ ] Click **Commit changes**

- [ ] Create `/images` folder:
  - Click **Add file** → **Create new file**
  - Type: `images/.gitkeep`
  - Click **Commit**

- [ ] Upload images to `/images`:
  - Click **Add file** → **Upload files**
  - Navigate to `/images` folder
  - Upload all 13 images
  - Click **Commit changes**

- [ ] Verify all files are there by checking GitHub repo

## Vercel Deployment (5 minutes)

### Step 1: Sign Up
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click **Sign Up** → **Continue with GitHub**
- [ ] Authorize Vercel

### Step 2: Deploy Project
- [ ] Click **Add New...** → **Project**
- [ ] Click **Import Git Repository**
- [ ] Find `oceana-tree-services` repo
- [ ] Click **Import**
- [ ] Leave settings as default
- [ ] Click **Deploy**

### Step 3: Wait & Verify
- [ ] Wait 1-2 minutes for deployment
- [ ] You'll see a **Congratulations!** message
- [ ] Copy your new URL (e.g., `oceana-tree-services.vercel.app`)
- [ ] Visit the URL and test the site
- [ ] Verify all pages load correctly

## Post-Deployment (5 minutes)

### Test the Live Site
- [ ] Homepage loads without errors
- [ ] Contact page loads
- [ ] Navigation links work
- [ ] Images display correctly
- [ ] All text is visible and correct
- [ ] Mobile menu works on phone
- [ ] Form validation works (try submitting empty form)
- [ ] Testimonials slider works
- [ ] Gallery lightbox works
- [ ] Phone and email links work (`tel:` and `mailto:`)

### Set Up Custom Domain (Optional)

**If you have a domain:**
- [ ] Purchase domain from GoDaddy, Namecheap, etc.
- [ ] In Vercel, go to project → **Settings** → **Domains**
- [ ] Add your domain name
- [ ] Update domain's DNS settings (Vercel gives instructions)
- [ ] Wait 24 hours for DNS to propagate
- [ ] Your site is now at your custom domain

### Add Google Analytics (Optional)

- [ ] Create Google Analytics account
- [ ] Get your tracking ID
- [ ] Open `index.html` in GitHub editor
- [ ] Add analytics code to `<head>`
- [ ] Commit changes (auto-deploys)
- [ ] Wait 5 minutes, then verify tracking in Analytics

## Ongoing Maintenance

### Monthly
- [ ] Check that site loads correctly
- [ ] Review form submissions
- [ ] Verify all links work
- [ ] Check images display properly

### When Updating Content
1. Edit files locally or on GitHub
2. Commit changes
3. Wait 1-2 minutes for auto-deployment
4. Test changes on live site
5. Hard refresh browser if needed (`Ctrl+Shift+R`)

## Quick Fix Reference

**Site not updating after changes?**
- [ ] Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- [ ] Check Vercel deployment completed (visit Vercel dashboard)
- [ ] Wait 2+ minutes if just deployed

**Images not showing?**
- [ ] Verify images are in `/images` folder
- [ ] Check filenames match HTML (case-sensitive)
- [ ] Ensure images are JPG format
- [ ] Check image file size (under 5MB)

**Form not working?**
- [ ] Open browser console (F12 → Console)
- [ ] Look for error messages
- [ ] Verify Formspree endpoint in `script.js`
- [ ] Test on Formspree website directly

**Mobile menu broken?**
- [ ] Hard refresh browser
- [ ] Check browser console for JavaScript errors
- [ ] Test in different browser

## Critical Info to Keep Safe

Save these somewhere secure:

- GitHub username: ___________________
- GitHub password: ___________________
- Vercel project URL: ___________________
- Your phone number: ___________________
- Your email: ___________________
- Form service credentials: ___________________
- Custom domain (if any): ___________________
- Custom domain registrar: ___________________

## You're Live! 🎉

Your website is now live and will automatically update whenever you make changes to GitHub.

### Share Your Site With:
- [ ] Post on social media
- [ ] Send to local business groups
- [ ] Add to Google Business Profile
- [ ] Include in email signatures
- [ ] Print on business cards

### Next Steps:
1. **Add to Google Search** → Google Search Console
2. **Get local reviews** → Google, Yelp
3. **Post photos regularly** → Keep gallery fresh
4. **Respond to inquiries** → Set up email notifications
5. **Track visitors** → Google Analytics dashboard

---

**Estimated total time: 30 minutes from start to live website**

Questions? Check the main README.md or CUSTOMIZATION_GUIDE.md for detailed instructions.
