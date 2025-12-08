# 🚀 Next.js 16 Enterprise Architecture Template

<p align="center">
  <img src="https://img.shields.io/badge/next.js-16-black" />
  <img src="https://img.shields.io/badge/typescript-5-blue" />
  <img src="https://img.shields.io/badge/architecture-clean%20%7C%20feature--based%20%7C%20atomic-purple" />
  <img src="https://img.shields.io/badge/status-production--ready-brightgreen" />
</p>

## ✨ Overview

This template provides a scalable, enterprise-ready foundation for building modern Next.js 16 applications with Clean Architecture, Feature-Based Architecture, and Atomic Design built in.

## 🏛️ Architecture Philosophy

### **1. Feature-Based Architecture**

Each domain feature is self-contained:

```
features/
  auth/
  user/
  dashboard/
```

### **2. Atomic Design**

```
atoms → molecules → organisms → templates
```

---

## 🧩 Architecture Diagrams (ASCII)

### **High-Level Architecture**

```
┌───────────────────────────────────────────┐
│                 app/                      │
│    (Routes, layouts, minimal UI)          │
└───────────────────────────────────────────┘
                  │
                  ▼
┌───────────────────────────────────────────┐
│               features/                   │
│  domain | api | hooks | store | ui        │
└───────────────────────────────────────────┘
                  │
                  ▼
┌───────────────────────────────────────────┐
│                shared/                    │
│ components | utils | hooks | lib | store  │
└───────────────────────────────────────────┘
```

### **Atomic Design Diagram**

```
atoms → molecules → organisms → templates → pages
```

---

## 📁 Folder Structure

```
app/
features/
shared/
public/
styles/
__tests__/
```

Detailed structure intentionally omitted here for brevity.

---

## 🛠️ Technologies Used

- **Next.js 16**
- **TypeScript**
- **Zod + React Hook Form**
- **TanStack Query**
- **Zustand**
- **Axios**
- **Jest**

---

## 🚀 Getting Started

### **Clone the repository**

```bash
git clone <repo-url>
cd project
pnpm install
```

### **Start development**

```bash
pnpm dev
```

---

## 📦 Scripts

| Command | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |
| `pnpm test` | Run Jest tests |

---

## 📐 Coding Conventions

- Feature-first structure
- Components follow Atomic Design hierarchy
- Each feature exports a public interface via `index.ts`
- Avoid cross-feature imports unless through shared/

---

## 🧪 Testing

Tests live inside:

```
features/<feature>/tests/
__tests__/
```

---

## ❓ FAQ & Troubleshooting

**Why feature-based?**
Scales better for large teams and complex domains.

**Why Atomic Design?**
Ensures consistent, reusable UI patterns.

---

## 🤝 Contributing

PRs welcome! Follow Conventional Commits.

---

## 📄 License

MIT License.
