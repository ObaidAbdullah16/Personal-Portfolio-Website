# 🌐 Portfolio Hosting Guide: AWS Amplify + CloudFront + Route 53

Complete end-to-end guide on hosting the Personal Portfolio Website on AWS with custom domain and SSL certificate.

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Services Used & Why](#services-used--why)
3. [Prerequisites](#prerequisites)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [DNS Configuration](#dns-configuration)
6. [SSL Certificate](#ssl-certificate)
7. [Monitoring & Maintenance](#monitoring--maintenance)
8. [Cost Analysis](#cost-analysis)
9. [Troubleshooting](#troubleshooting)

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    User Browser                              │
│              (obaidinfo.xyz Request)                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
        ┌────────────────────────┐
        │    Route 53 DNS        │
        │  (Domain Resolution)   │
        └────────┬───────────────┘
                 │
                 ↓
    ┌────────────────────────────────┐
    │  CloudFront Distribution       │
    │  (CDN, HTTPS, Caching)         │
    │  ├─ 150+ Edge Locations        │
    │  ├─ SSL/TLS Termination        │
    │  └─ Cache Invalidation         │
    └────────┬───────────────────────┘
             │
             ↓
    ┌────────────────────────────────┐
    │   AWS Amplify                  │
    │  (Builds & Deployment)         │
    │  ├─ GitHub Integration         │
    │  ├─ Auto Deploy on Push        │
    │  └─ Static Asset Hosting       │
    └────────┬───────────────────────┘
             │
             ↓
    ┌────────────────────────────────┐
    │  S3 Backend Storage            │
    │  (Files & Assets)              │
    │  ├─ index.html                 │
    │  ├─ CSS & JS Files             │
    │  └─ Images & Media             │
    └────────────────────────────────┘

Performance Flow:
User Request → Route 53 → CloudFront Cache → Amplify → S3
```

---

## 🛠️ Services Used & Why

### 1. **AWS Route 53** (DNS Management)
**What it does:**
- Manages your domain name (obaidinfo.xyz)
- Routes traffic to the correct AWS resources
- Provides DNS failover and health checking

**Why use it:**
- ✅ **Integrated with AWS** - No need for external DNS
- ✅ **Low Latency** - Global DNS infrastructure
- ✅ **100% Uptime SLA** - Highly reliable
- ✅ **Automatic Health Checks** - Monitor availability
- ✅ **Traffic Routing Policies** - Advanced routing options
- ✅ **Cost**: $0.50/month per hosted zone

**Competitors:**
- Cloudflare DNS (free)
- GoDaddy DNS (free with domain)
- Namecheap DNS (free)

---

### 2. **AWS Certificate Manager (ACM)** (SSL/TLS Certificates)
**What it does:**
- Provides FREE SSL/TLS certificates
- Auto-renews certificates before expiration
- Supports HTTPS for your domain

**Why use it:**
- ✅ **100% FREE** - No renewal fees ever
- ✅ **Automatic Renewal** - 30 days before expiry
- ✅ **Integrates with CloudFront** - Seamless setup
- ✅ **No Certificate Management** - AWS handles everything
- ✅ **Wildcard Certificates** - *.obaidinfo.xyz supported
- ✅ **DNS Validation** - Automatic verification

**What it enables:**
- 🔒 Green lock icon in browser
- 🔐 Encrypted communication (HTTPS)
- 📈 Better SEO rankings
- 👥 User trust & security

---

### 3. **AWS Amplify** (Build & Deployment)
**What it does:**
- Builds your code from GitHub
- Deploys static website automatically
- Manages preview environments
- Handles performance optimization

**Why use it:**
- ✅ **CI/CD Integration** - Auto-deploy on GitHub push
- ✅ **Git-Integrated** - No manual builds needed
- ✅ **Branch Previews** - Test changes before merge
- ✅ **Performance Optimization** - Minification, compression
- ✅ **Free Tier**: 15GB build minutes/month
- ✅ **Static Hosting** - No server management needed
- ✅ **Custom Domain Support** - Easy setup
- ✅ **Auto HTTPS Redirect** - HTTP → HTTPS

**Competitors:**
- Vercel (free tier, better for Next.js)
- Netlify (free tier, great for static sites)
- GitHub Pages (free, limited features)
- Firebase Hosting (pay-per-use model)

---

### 4. **AWS CloudFront** (Content Delivery Network)
**What it does:**
- Caches your website at 150+ edge locations globally
- Serves content from closest server to user
- Handles HTTPS termination
- Compresses content automatically

**Why use it:**
- ✅ **Global Performance** - Users worldwide get fast speeds
- ✅ **DDoS Protection** - Built-in AWS Shield Standard
- ✅ **SSL/TLS Offloading** - Reduces origin load
- ✅ **Bandwidth Savings** - Compression reduces data transfer
- ✅ **Cache Control** - Customize caching strategies
- ✅ **Free Tier**: 50GB/month data transfer out

**Features:**
- 150+ edge locations worldwide
- Automatic compression (gzip, brotli)
- Cache invalidation
- Custom origin support

**Competitors:**
- Cloudflare (free tier with limitations)
- Akamai (expensive, enterprise-focused)
- Fastly (expensive)
- Bunny CDN (cheap, good performance)

---

### 5. **AWS S3** (Storage Backend)
**What it does:**
- Stores your website files securely
- Acts as origin for CloudFront
- Provides high availability storage

**Why use it:**
- ✅ **99.999999999% Durability** - 11 nines!
- ✅ **99.99% Availability** - SLA guaranteed
- ✅ **Infinite Scalability** - Handles unlimited traffic
- ✅ **Cost-Effective** - Only pay for what you use
- ✅ **Free Tier**: 5GB storage

---

## 📋 Prerequisites

Before starting, you need:

1. **GitHub Account** - [github.com](https://github.com)
2. **AWS Account** - [aws.amazon.com](https://aws.amazon.com)
3. **Domain Name** - Already owned (obaidinfo.xyz)
4. **Git Installed** - [git-scm.com](https://git-scm.com)
5. **Code Repository** - Your portfolio files on GitHub

### AWS Account Setup:
- ✅ Create free account
- ✅ Add payment method (won't charge for free tier)
- ✅ Create IAM user (optional but recommended)

---

## 🚀 Step-by-Step Deployment

### **PHASE 1: Repository Setup**

#### Step 1.1: Clone Your Repository

```bash
# Clone the portfolio repository
git clone https://github.com/ObaidAbdullah16/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website

# Verify files are present
ls -la
# Output should show:
# index.html
# css/
# js/
# assets/
# README.md
```

#### Step 1.2: Verify Project Structure

```
Personal-Portfolio-Website/
├── index.html          ✅ Main page
├── css/
│   ├── style.css       ✅ Styling
│   └── responsive.css  ✅ Mobile styles
├── js/
│   ├── main.js         ✅ Main logic
│   └── smooth-scroll.js ✅ Interactions
├── assets/
│   ├── images/         ✅ Portfolio images
│   ├── icons/          ✅ Social icons
│   └── resume.pdf      ✅ Resume file
└── README.md
```

**Important:** Make sure `index.html` is at the root level (not inside a folder).

---

### **PHASE 2: Certificate Setup (ACM)**

#### Step 2.1: Create SSL Certificate

1. **Open AWS Certificate Manager:**
   - Go to [AWS Console](https://console.aws.amazon.com)
   - Search for "Certificate Manager"
   - **Select region: US East (N. Virginia)** (required for CloudFront)
   - Click "Request certificate"

2. **Certificate Details:**
   - Certificate type: **Public certificate**
   - Click **Next**

3. **Add Domain Names:**
   ```
   obaidinfo.xyz
   www.obaidinfo.xyz
   ```
   - Click "Add another domain name" for www variant
   - Click **Request**

4. **DNS Validation:**
   - Choose "DNS validation" (automatic)
   - AWS will show CNAME records to add
   - Click "Create records in Route 53" (if already using Route 53)
   - **Wait 5-10 minutes** for validation
   - Status should change from "Pending" to "Issued" ✅

**What just happened:**
- AWS created a FREE SSL certificate
- Certificate auto-renews annually
- Now your domain can use HTTPS securely

---

### **PHASE 3: AWS Amplify Setup**

#### Step 3.1: Connect GitHub Repository

1. **Open AWS Amplify:**
   - Go to [AWS Console](https://console.aws.amazon.com)
   - Search for "Amplify"
   - Click "Create app"

2. **Connect Repository:**
   - Select "GitHub" as source
   - Click "Connect branch"
   - GitHub authentication popup will appear
   - Authorize AWS to access your GitHub repositories
   - Select repository: `Personal-Portfolio-Website`

3. **Select Branch:**
   - Choose branch: **main**
   - Click **Next**

#### Step 3.2: Build Settings

1. **Environment Variables:**
   - Leave empty (unless your project needs them)
   - Click **Next**

2. **Review Settings:**
   - App name: `portfolio-app` (or your choice)
   - Review all settings shown
   - Click **Save and deploy**

**Building Process:**
- Amplify will automatically build your project
- Check deployment logs in real-time
- When complete, you'll get a temporary URL

#### Step 3.3: Amplify Domain Setup

1. **Set Custom Domain:**
   - Amplify Dashboard → **Domain management**
   - Click **Add domain**
   - Enter: `obaidinfo.xyz`

2. **Configure DNS Records:**
   - Amplify will show required DNS records
   - If using Route 53: Click "Add DNS records automatically"
   - If not: Add records manually to your DNS provider

3. **Wait for Activation:**
   - Status: "Pending" → "Verifying" → "Activated"
   - This takes 5-15 minutes
   - You might see SSL warning during verification (normal)

**What just happened:**
- Your portfolio is now live at `obaidinfo.xyz`
- SSL certificate is active
- HTTPS is enforced automatically

---

### **PHASE 4: CloudFront Setup**

#### Step 4.1: Create Distribution

1. **Open CloudFront:**
   - Go to [AWS Console](https://console.aws.amazon.com)
   - Search for "CloudFront"
   - Click **Create distribution**

2. **Origin Configuration:**
   - Origin domain: Your Amplify domain (d1234567.amplifyapp.com)
   - Origin path: Leave empty
   - Protocol: **HTTP only** (Amplify handles HTTPS)

3. **Behavior Settings:**
   - Viewer protocol policy: **Redirect HTTP to HTTPS**
   - Allowed HTTP methods: **GET, HEAD**
   - Caching: Use default settings
   - Compress objects: **Yes**

4. **Custom Domain & Certificate:**
   - Alternate domain names: `obaidinfo.xyz`, `www.obaidinfo.xyz`
   - SSL certificate: Select your ACM certificate (us-east-1)
   - Default root object: `index.html`

5. **Review & Create:**
   - Review all settings carefully
   - Click **Create distribution**
   - **Status**: "Deploying" (takes 10-15 minutes)

#### Step 4.2: Update Route 53

1. **Point Domain to CloudFront:**
   - Route 53 → Hosted zones → `obaidinfo.xyz`
   - Create record:
     ```
     Record name: (leave empty for @)
     Type: A (Alias)
     Alias target: Your CloudFront domain
     Routing policy: Simple
     ```

2. **Add www subdomain:**
   ```
   Record name: www
   Type: CNAME
   Value: obaidinfo.xyz
   ```

3. **Save Records**

**What just happened:**
- Users visiting `obaidinfo.xyz` get fastest possible speed
- Content cached globally at 150+ locations
- SSL/TLS termination at edge servers
- Automatic compression & optimization applied

---

### **PHASE 5: Testing & Verification**

#### Step 5.1: Test Website

```bash
# Clear DNS cache
ipconfig /flushdns  (Windows)
sudo dscacheutil -flushcache  (Mac)
sudo systemd-resolve --flush-caches  (Linux)

# Wait 5 minutes for DNS propagation
```

#### Step 5.2: Verify in Browser

Visit these URLs and verify everything works:

1. **HTTPS Connection:**
   - Visit `https://obaidinfo.xyz`
   - Check for green lock 🔒
   - Click lock → Certificate should show your domain

2. **Redirect Test:**
   - Visit `http://obaidinfo.xyz`
   - Should redirect to `https://` automatically

3. **WWW Redirect:**
   - Visit `https://www.obaidinfo.xyz`
   - Should load same content as root

4. **Performance Check:**
   - Open DevTools (F12)
   - Check "Network" tab
   - CSS/JS should show "from cache" or "cached"

#### Step 5.3: SSL Certificate Validation

```bash
# Check certificate details
openssl s_client -connect obaidinfo.xyz:443

# Look for:
# subject=CN = obaidinfo.xyz
# issuer=C = US, O = Amazon, CN = Amazon RSA 2048 M01
```

---

## 🌐 DNS Configuration

### Complete DNS Record Setup

```
Zone: obaidinfo.xyz
TTL: 300 (5 minutes)

Record 1: Root Domain
Name:     @ (or obaidinfo.xyz)
Type:     A (Alias)
Value:    CloudFront domain
Target:   d1234567.cloudfront.net

Record 2: WWW Subdomain
Name:     www
Type:     CNAME
Value:    obaidinfo.xyz

Record 3: MX Records (optional, for email)
Name:     @ (root)
Type:     MX
Value:    10 mail.obaidinfo.xyz

Record 4: TXT Records (optional, SPF)
Name:     @ (root)
Type:     TXT
Value:    "v=spf1 -all"
```

### How DNS Works:

```
User enters: obaidinfo.xyz
     ↓
Browser queries Route 53
     ↓
Route 53 returns: CloudFront domain
     ↓
Browser connects to CloudFront
     ↓
CloudFront serves from cache or origin
     ↓
User sees your portfolio ✨
```

---

## 🔒 SSL Certificate

### Certificate Details

```
Certificate Name:      obaidinfo.xyz
Type:                  Public certificate
Domains:               
  - obaidinfo.xyz
  - www.obaidinfo.xyz
Issuer:                Amazon RSA 2048 M01
Validity:              1 year (auto-renewed)
Renewal:               30 days before expiry (automatic)
Cost:                  FREE
Certificate Location:  US East (N. Virginia)
```

### Why CloudFront Requires US-East-1:

CloudFront globally distributes your certificate from N. Virginia region. All other regions' certificates are not compatible with CloudFront.

### Auto-Renewal Process:

```
Day 1: Certificate issued
     ↓
Day 335: Renewal email sent
     ↓
Day 340: Auto-renewal starts
     ↓
Day 360: Certificate renewed (no downtime)
     ↓
Day 365: New certificate active
```

**You don't need to do anything** - AWS handles everything automatically.

---

## 📊 Monitoring & Maintenance

### CloudFront Monitoring

1. **Check Cache Hit Ratio:**
   - CloudFront Console → Monitoring
   - Should see high cache hit ratio (90%+)
   - Lower = more requests hitting origin

2. **Monitor Requests:**
   - CloudFront → Distributions → Monitoring tab
   - View requests, data transfer, errors

3. **View Logs:**
   - CloudFront → Logs tab
   - Logs stored in S3 bucket
   - Useful for troubleshooting

### Amplify Monitoring

1. **Deployment Status:**
   - Amplify Console → App
   - See all deployments
   - Rollback to previous version if needed

2. **Build Logs:**
   - Click on deployment
   - View build output
   - Check for warnings/errors

### Cache Invalidation

When you update your website:

```bash
# Option 1: Automatic (Amplify)
git push origin main
# Amplify auto-rebuilds and invalidates cache

# Option 2: Manual (CloudFront)
# CloudFront → Distributions → Create Invalidation
# Path: /*
# This clears all cached files (takes 2-3 minutes)
```

### Performance Testing

```bash
# Test page load time
curl -w "@curl-format.txt" -o /dev/null -s https://obaidinfo.xyz

# Check if content is compressed
curl -I https://obaidinfo.xyz
# Look for: Content-Encoding: gzip
```

---

## 💰 Cost Analysis

### Monthly Costs Breakdown

| Service | Usage | Cost |
|---------|-------|------|
| Route 53 | 1 hosted zone | $0.50 |
| ACM | SSL certificate | FREE |
| Amplify | 15GB free tier | FREE* |
| CloudFront | <50GB transfer | FREE* |
| S3 | <5GB storage | FREE* |
| **Total** | | **~$0.50/month** |

*Free tier applies to first 12 months

### Cost Comparison

| Platform | Monthly Cost | Features |
|----------|-------------|----------|
| AWS Amplify | $0.50 | Full CI/CD, CDN, SSL |
| Vercel | FREE | Limited features |
| Netlify | FREE | Limited features |
| GitHub Pages | FREE | Basic hosting only |
| Bluehost | $2.95+ | Shared hosting |
| Linode | $5+ | VPS, overkill |

**AWS is competitive even after free tier ends.**

---

## 🔧 Troubleshooting

### Issue 1: Website Shows "Not Secure"

**Symptoms:**
- Red warning in address bar
- Certificate error message

**Solutions:**
1. Wait 10-15 minutes for CloudFront deployment
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check ACM certificate is "Issued" status
4. Verify certificate domain matches URL
5. Try different browser (rules out browser cache)

**Command to check:**
```bash
openssl s_client -connect obaidinfo.xyz:443 < /dev/null | grep -i subject
```

---

### Issue 2: DNS Not Resolving

**Symptoms:**
- "Can't reach this website"
- "ERR_NAME_NOT_RESOLVED"

**Solutions:**
1. Flush DNS cache:
   ```bash
   ipconfig /flushdns  (Windows)
   ```

2. Check Route 53 records:
   - Console → Route 53 → Hosted zones
   - Verify A record points to CloudFront
   - Wait 5 minutes for TTL

3. Test DNS resolution:
   ```bash
   nslookup obaidinfo.xyz
   # Should return CloudFront domain
   ```

---

### Issue 3: Old Content Still Showing

**Symptoms:**
- Updated files not visible
- Browser shows cached version

**Solutions:**
1. **Hard refresh:**
   ```
   Ctrl+Shift+R  (Windows)
   Cmd+Shift+R   (Mac)
   ```

2. **Clear CloudFront cache:**
   - CloudFront → Distributions
   - Click your distribution
   - Invalidations tab
   - Create invalidation: path `/*`
   - Wait 2-3 minutes

3. **Set cache headers (in Amplify):**
   - Reduce cache time for HTML
   - Increase cache time for images/CSS

---

### Issue 4: High Latency for Some Users

**Symptoms:**
- Slow load time for users in certain regions
- Inconsistent performance

**Solutions:**
1. **Check CloudFront distribution:**
   - Ensure all 150+ locations are enabled
   - Don't restrict to specific regions

2. **Check origin health:**
   - CloudFront → Health checks
   - Verify origin (Amplify) is responding

3. **Optimize content:**
   - Compress images
   - Minify CSS/JS
   - Reduce file sizes

---

### Issue 5: Amplify Deployment Failed

**Symptoms:**
- Deployment shows "Failed" status
- Build log shows errors

**Solutions:**
1. **Check build logs:**
   - Amplify → Deployments
   - Click failed deployment
   - Review error messages

2. **Common causes:**
   - Missing `index.html`
   - Incorrect file paths
   - Node.js dependency issues (if applicable)

3. **Fix & retry:**
   - Fix the issue in GitHub
   - Push to main branch
   - Amplify auto-rebuilds

---

## 📈 Performance Optimization Tips

### 1. Image Optimization
```bash
# Compress images before uploading
# Use tools like:
# - TinyPNG (online)
# - ImageOptim (Mac)
# - IrfanView (Windows)

# Recommend:
# Portfolio images: 100-300KB
# Icons: 10-50KB
# Background images: 50-200KB
```

### 2. Enable Compression
- CloudFront automatically compresses text
- CSS, JS, HTML get 60-80% smaller
- Check with DevTools (Network tab)

### 3. Cache Control Headers
```html
<!-- In index.html meta tags -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
<!-- Cache for 1 year for static assets -->
```

### 4. Lazy Loading Images
```html
<!-- Modern browsers support native lazy loading -->
<img src="portfolio.jpg" loading="lazy" alt="Portfolio">
```

### 5. Minify Assets
```bash
# CSS minification: Remove whitespace
# JS minification: Use tools like UglifyJS
# HTML minification: Remove comments

# Tools:
# - Minifier.org (online)
# - Build tools (Webpack, Gulp)
```

---

## 📝 Monitoring Checklist

### Daily
- [ ] Website accessible at obaidinfo.xyz
- [ ] HTTPS active (green lock)
- [ ] No error logs in CloudFront

### Weekly
- [ ] Check CloudFront cache hit ratio
- [ ] Review Amplify deployment logs
- [ ] Test on mobile device

### Monthly
- [ ] Review CloudFront charges
- [ ] Test from different regions
- [ ] Check SSL certificate expiry date
- [ ] Performance test with tools

### Quarterly
- [ ] Update portfolio content
- [ ] Review AWS best practices
- [ ] Optimize slow-loading resources
- [ ] Security audit

---

## 🎯 Next Steps

1. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Test from multiple locations
   - Optimize based on recommendations

2. **Add Analytics:**
   - CloudWatch (AWS native)
   - Google Analytics (free)
   - Hotjar (session recording)

3. **Set Up Alerts:**
   - CloudFront errors > threshold
   - High latency detected
   - Certificate expiry reminder

4. **Backup Plan:**
   - GitHub is your backup
   - Amplify stores deployment history
   - Easy rollback if needed

---

## 📚 Additional Resources

- [AWS Amplify Docs](https://docs.aws.amazon.com/amplify/)
- [CloudFront Best Practices](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
- [ACM Certificate Guide](https://docs.aws.amazon.com/acm/)
- [Web Performance Guide](https://web.dev/performance/)

---

**Last Updated:** May 27, 2026  
**Status:** ✅ Production Ready  
**Next Review:** August 27, 2026
