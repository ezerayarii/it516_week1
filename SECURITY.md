# SECURITY.md

## Week 9 Security Review

### OWASP A05: Security Misconfiguration

To reduce security risks, security headers were added to the Next.js application. These headers help protect users from clickjacking, content injection, and information leakage.

Implemented headers:

- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy (CSP)

These configurations help prevent attackers from embedding the site in malicious pages and reduce the risk of unauthorized content execution.

### OWASP A07: Identification and Authentication Failures

Authentication was implemented using Auth.js (NextAuth v5) with GitHub OAuth.

Security measures include:

- AUTH_SECRET stored as an environment variable.
- Session management handled by Auth.js.
- Secure authentication flow using GitHub OAuth.
- Sign-out functionality properly destroys active sessions.

These protections reduce the risk of unauthorized access and credential-related attacks.

## Additional Security Measures

- HTTPS enforced through Vercel deployment.
- Environment variables stored securely.
- No database credentials committed to GitHub.
- Session cookies configured by Auth.js with secure defaults.