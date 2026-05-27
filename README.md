# 🌟 Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and professional experience.

## 🌐 Live Demo

👉 **[View Live Portfolio](https://obaidinfo.xyz)**

Alternative links:
- 🔗 [www.obaidinfo.xyz](https://www.obaidinfo.xyz)
- 🔗 [obaidabdullah16.github.io/Personal-Portfolio-Website/](https://obaidabdullah16.github.io/Personal-Portfolio-Website/)

---

## 📋 Features

- ✨ Modern and clean design
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ⚡ Fast loading performance
- 🎯 SEO optimized
- 🎨 Beautiful animations and transitions
- 📧 Contact form with email integration
- 🔗 Social media links
- 📄 Downloadable resume
- 🌙 Smooth scrolling navigation

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5 (Semantic markup)
  - CSS3 (Flexbox, Grid, Animations)
  - JavaScript (DOM manipulation, Event handling)
  
- **Hosting:**
  - AWS Amplify
  - CloudFront CDN
  - Route 53 DNS

## 📁 Project Structure

```
Personal-Portfolio-Website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Mobile responsive styles
│   └── animations.css     # CSS animations
├── js/
│   ├── main.js            # Main JavaScript
│   ├── smooth-scroll.js   # Smooth scrolling
│   └── form-handler.js    # Contact form logic
├── assets/
│   ├── images/            # Portfolio images
│   ├── icons/             # Social media icons
│   └── resume.pdf         # Resume file
└── README.md
```

## 🚀 Local Development

1. Clone the repository:
```bash
git clone https://github.com/ObaidAbdullah16/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website
```

2. Open in your browser:
```bash
# Simply open index.html in your default browser
# Or use a local server
python -m http.server 8000
```

3. Visit: `http://localhost:8000`

## ☁️ Hosted on AWS Amplify

This website is hosted on **AWS Amplify**, a fully managed hosting service that provides several key advantages:

### Why AWS Amplify?

- **✅ Continuous Deployment**: Automatically deploys updates when code is pushed to GitHub
- **✅ Global CDN**: Content delivered through CloudFront for lightning-fast load times worldwide
- **✅ Auto-Scaling**: Handles traffic spikes automatically without manual intervention
- **✅ HTTPS by Default**: Built-in SSL/TLS certificates for secure connections
- **✅ Zero Server Management**: No infrastructure to maintain or configure
- **✅ Branch Previews**: Test changes in separate environments before going live
- **✅ Custom Domain Support**: Easy integration with custom domain names

### 🔄 Automatic Updates

The website uses **CI/CD (Continuous Integration/Continuous Deployment)** through AWS Amplify:

1. **Push code** to GitHub repository
2. **Amplify detects** the changes automatically
3. **Builds and deploys** the updated website in minutes
4. **Live website** reflects the changes instantly

No manual deployment needed – just push your code and it's live! 🚀

## 🎨 Sections Included

### 1. Hero Section
- Eye-catching introduction
- Call-to-action button
- Background animation

### 2. About Me
- Professional summary
- Skills and expertise
- Personal background

### 3. Projects
- Featured projects showcase
- Project descriptions
- Live demo links
- GitHub repository links

### 4. Skills
- Technical skills
- Tools and technologies
- Proficiency levels

### 5. Contact
- Contact form
- Social media links
- Email address
- Phone number

### 6. Footer
- Quick links
- Social media icons
- Copyright info

## 💡 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for all devices
- Optimized touch interactions

### Performance
- Optimized images
- Minified CSS/JS
- CDN delivery via CloudFront
- Fast load times

### SEO Optimization
- Meta tags
- Open Graph tags
- Semantic HTML5
- XML sitemap

### Accessibility
- ARIA labels
- Keyboard navigation
- Alt text for images
- High contrast colors

## 🔧 Configuration

### Update Contact Information

Edit `index.html`:
```html
<!-- Email -->
<a href="mailto:your-email@example.com">Email Me</a>

<!-- Phone -->
<a href="tel:+1234567890">Call Me</a>

<!-- Social Media -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### Customize Colors

Edit `css/style.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #ff6b6b;
}
```

### Add New Projects

Edit `index.html` and add to projects section:
```html
<div class="project-card">
  <h3>Project Name</h3>
  <p>Project description</p>
  <a href="live-link">View Live</a>
  <a href="github-link">GitHub</a>
</div>
```

## 📱 Responsive Breakpoints

```css
/* Mobile: 320px - 576px */
/* Tablet: 577px - 992px */
/* Desktop: 993px+ */
```

## 🚀 Deployment

### Deploy with Amplify (Recommended)

```bash
# Connect to Amplify
amplify init

# Configure
amplify add hosting

# Deploy
amplify publish

# Or simply push to GitHub and let Amplify auto-deploy
```

### Deploy with GitHub Pages

```bash
# Push to GitHub
git push origin main

# Go to Settings → Pages
# Select "main" branch
# Done!
```

## 🐛 Known Issues

None currently. If you find any bugs, please [report them](https://github.com/ObaidAbdullah16/Personal-Portfolio-Website/issues).

## 📝 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Comments system
- [ ] Newsletter signup

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Obaid Abdullah**
- GitHub: [@ObaidAbdullah16](https://github.com/ObaidAbdullah16)
- Portfolio: [obaidinfo.xyz](https://obaidinfo.xyz)
- Email: contact@obaidinfo.xyz

## 📞 Support

If you encounter any issues or have questions:
- Open an [Issue](https://github.com/ObaidAbdullah16/Personal-Portfolio-Website/issues)
- Check [Discussions](https://github.com/ObaidAbdullah16/Personal-Portfolio-Website/discussions)
- Visit my [Portfolio](https://obaidinfo.xyz)

## ⭐ Show Your Support

Give a ⭐️ if you found this project helpful!

---

**Last Updated:** May 26, 2026
