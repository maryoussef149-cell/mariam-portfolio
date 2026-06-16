# ~/mariam-ayman $ — DevOps Portfolio

A terminal-themed developer portfolio built with React and deployed through a full CI/CD pipeline to AWS EC2 and Vercel.

🔗 **Live:** [mariam-portfolio-khaki.vercel.app](https://mariam-portfolio-khaki.vercel.app)

---

## Tech Stack

- **React** — Frontend framework
- **Nginx** — Static file server inside Docker
- **Docker** — Multi-stage containerization (Node builder → Nginx Alpine)
- **GitHub Actions** — CI/CD pipeline (push to main → auto deploy)
- **AWS EC2** — Cloud hosting
- **Vercel** — Frontend deployment (auto-deploy on push)

---

## CI/CD Pipeline

Every push to `main` triggers the full pipeline automatically:git push → GitHub Actions → Docker build → AWS EC2 deploy → live in ~60s

The pipeline:
1. Builds the React app inside a Node container
2. Copies the build into an Nginx Alpine image
3. Pushes the image to Docker Hub
4. SSHs into EC2 and runs the new container

---

## Project Structure
mariam-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD pipeline
├── public/                  # Static assets
├── src/                     # React source code
├── Dockerfile               # Multi-stage Docker build
├── nginx.conf               # Nginx config to serve React build
├── package.json
└── .env

---

## Docker

Multi-stage build — keeps the final image small:

dockerfile

# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

## GitHub Actions Pipeline
Located at .github/workflows/deploy.yml
Triggers on every push to main:
Builds and tags the Docker image
Pushes to Docker Hub
SSHs into EC2 and pulls + runs the latest image

## Author
Mariam Ayman
CS Student — Cairo University
DevOps Engineering Track
