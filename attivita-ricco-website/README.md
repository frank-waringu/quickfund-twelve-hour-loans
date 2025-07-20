# Attivita Ricco Limited Website

A professional, multi-page static website for Attivita Ricco Limited, a Kenyan financial institution offering business loans with a 12-hour turnaround time.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with perfect mobile optimization
- **Fast Loading**: Pure HTML, CSS, and JavaScript - no frameworks or dependencies
- **Professional Appearance**: Clean, modern design suitable for a financial institution
- **Complete Functionality**: All forms, navigation, and interactions work seamlessly
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **CPanel Ready**: Directly uploadable to any hosting provider

## 📁 File Structure

```
attivita-ricco-website/
├── index.html          # Home page
├── about.html          # About Us page
├── loans.html          # Business Loans page
├── contact.html        # Contact page
├── apply.html          # Loan Application page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets
│   ├── logo.png        # Company logo (to be provided)
│   ├── hero-business.jpg
│   ├── about-company.jpg
│   ├── team-ceo.jpg
│   ├── team-loans.jpg
│   └── team-support.jpg
└── README.md           # This file
```

## 🚀 Quick Start

1. **Upload to CPanel**:
   - Compress the entire `attivita-ricco-website` folder into a ZIP file
   - Log into your CPanel File Manager
   - Navigate to `public_html` (or your domain's root directory)
   - Upload and extract the ZIP file
   - Your website will be live immediately!

2. **Local Testing**:
   - Simply open `index.html` in any web browser
   - All links and functionality work offline

## 🎨 Customization Guide

### 1. Logo and Branding

**Important**: Replace the placeholder logo with your actual logo:

1. Add your logo file as `images/logo.png`
2. Update the theme colors in `css/style.css`:

```css
:root {
    /* Update these colors to match your logo */
    --primary-color: #YOUR_PRIMARY_COLOR;
    --primary-dark: #YOUR_DARKER_SHADE;
    --primary-light: #YOUR_LIGHTER_SHADE;
    --accent-color: #YOUR_ACCENT_COLOR;
}
```

### 2. Images

Replace these placeholder images in the `images/` folder:
- `logo.png` - Your company logo
- `hero-business.jpg` - Hero section image
- `about-company.jpg` - About page image
- `team-ceo.jpg` - Team/leadership image
- `team-loans.jpg` - Loan officers image
- `team-support.jpg` - Support team image

**Recommended Sizes**:
- Logo: 200x80px (PNG with transparent background)
- Hero image: 1200x800px
- Other images: 800x600px

### 3. Content Updates

**Contact Information**: Update these in all relevant files:
- Phone: +254 738 810000
- Email: info@attivitar.com
- Address: Currently set to "Nairobi, Kenya"

**Company Details**: Customize the content in:
- `index.html` - Hero section and company intro
- `about.html` - Company story, mission, vision
- `loans.html` - Loan features and requirements
- `contact.html` - Contact details and office hours

### 4. Google Maps Integration

In `contact.html`, replace the Google Maps iframe with your actual location:

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation with hamburger menu
- Touch-optimized buttons and forms
- Readable text on all screen sizes
- Fast loading on mobile networks

## 🔧 Technical Features

### Forms
- **Contact Form**: Collects inquiries with form validation
- **Loan Application**: Comprehensive application with file uploads
- **Form Validation**: Client-side validation for better user experience
- **Success Messages**: Clear feedback after form submission

### JavaScript Features
- Mobile navigation toggle
- FAQ accordion functionality
- Form validation and submission
- Smooth scrolling
- Scroll animations
- File upload previews
- Phone number formatting

### CSS Features
- CSS Grid and Flexbox for layouts
- CSS Variables for easy theme customization
- Professional animations and transitions
- Print-friendly styles
- Accessibility considerations

## 🌐 Browser Support

The website works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Loading Speed**: Optimized for fast loading
- **File Sizes**: Minimal CSS and JavaScript
- **Images**: Placeholder images can be optimized for web
- **No Dependencies**: No external libraries or frameworks

## 🔒 Security Notes

- Forms include CSRF protection considerations
- Input validation on both client and server side (when backend is added)
- No sensitive data stored in frontend code
- Secure file upload handling (when backend is implemented)

## 🚀 Deployment Options

### Option 1: CPanel (Recommended)
1. Create a ZIP file of the entire website folder
2. Upload to your hosting provider's File Manager
3. Extract in the `public_html` directory

### Option 2: FTP Upload
1. Use an FTP client like FileZilla
2. Upload all files to your web server's document root

### Option 3: Git Deployment
1. Initialize a git repository
2. Push to your hosting provider's git service
3. Deploy via git hooks

## 🛠 Backend Integration

The forms are currently frontend-only. To make them functional:

1. **Contact Form**: Add a PHP/Node.js script to handle form submissions
2. **Loan Application**: Implement secure file upload and data processing
3. **Database**: Store applications and contact submissions
4. **Email**: Send confirmation emails and notifications

Example PHP handler structure:
```php
// contact-handler.php
<?php
if ($_POST['name'] && $_POST['email'] && $_POST['message']) {
    // Process form data
    // Send email
    // Store in database
}
?>
```

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions for all pages
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images (add when replacing placeholders)
- Clean URLs
- Fast loading times

## 🤝 Support

For technical support or customization:
1. Check the browser's developer console for any errors
2. Ensure all file paths are correct after upload
3. Verify that your hosting supports HTML, CSS, and JavaScript
4. Test forms with your backend implementation

## 📋 Launch Checklist

Before going live:

- [ ] Replace logo.png with actual company logo
- [ ] Update all placeholder images
- [ ] Customize colors to match branding
- [ ] Update contact information throughout site
- [ ] Add Google Maps embed for actual location
- [ ] Test all forms and navigation
- [ ] Verify mobile responsiveness
- [ ] Check loading speed
- [ ] Implement backend form handling (if needed)
- [ ] Test on multiple browsers
- [ ] Verify all links work correctly

## 📄 License

This website template is created specifically for Attivita Ricco Limited. All rights reserved.

---

**Built with ❤️ for Attivita Ricco Limited**

For any questions or support, please contact your development team.