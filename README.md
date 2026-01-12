# HarborLink Logistics LLC

A professional, maritime-inspired website for HarborLink Logistics LLC - Caribbean shipping and freight forwarding services.

## Quick Start

1. **Add your logo**: Place your logo file as `images/logo.png`
2. **Configure contact form**: Update the Formspree endpoint in `index.html` (see below)
3. **Deploy to GitHub Pages** (see deployment instructions)

## Project Structure

```
harborlink-logistics/
├── index.html          # Main website
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   └── logo.png        # Your logo (add this)
└── README.md           # This file
```

## Contact Form Setup (Formspree)

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint (looks like: `https://formspree.io/f/xyzabcde`)
3. In `index.html`, find this line:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
   ```
4. Replace `your-form-id` with your actual Formspree form ID

## Deploying to GitHub Pages

### Option 1: Using GitHub Website

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and sign in
   - Click "New repository"
   - Name it `harborlink-logistics` (or your preferred name)
   - Make it Public
   - Click "Create repository"

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files from this folder
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your site**
   - Wait 1-2 minutes for deployment
   - Your site will be at: `https://yourusername.github.io/harborlink-logistics`

### Option 2: Using Git Command Line

```bash
# Navigate to project folder
cd /Users/kevinmoreau/harborlink-logistics

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - HarborLink Logistics website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/harborlink-logistics.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository Settings > Pages.

## Custom Domain (Optional)

If you have a custom domain:

1. In GitHub repo Settings > Pages, enter your domain
2. Create a file called `CNAME` in the root with your domain:
   ```
   www.harborlinklogistics.com
   ```
3. Update your domain's DNS settings (add CNAME record pointing to `yourusername.github.io`)

## Features

- Responsive design (mobile, tablet, desktop)
- Floating WhatsApp button
- Smooth scroll navigation
- Contact form with validation
- Maritime-inspired Navy/Teal/White theme
- SEO-friendly meta tags
- Scroll animations

## Contact Information

- **Phone**: (786) 715-8532
- **WhatsApp**: +1 786-715-8532
- **Email**: stevemondelus2007@gmail.com

## Services

- Package Receiving & Consolidation
- Vehicle Transport Coordination
- Payment Services for U.S. Vendors
- Export Documentation Support
- Freight Forwarding & Consulting
- Customs Coordination

## Ports & Coverage

**Departure Ports:**
- Port of Miami
- Port Everglades

**Destinations:**
- The Bahamas (Primary)
- Puerto Rico
- Jamaica
- Turks & Caicos
- Additional Caribbean islands

---

Built for HarborLink Logistics LLC
