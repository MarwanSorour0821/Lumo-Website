# Lumo Website - Waitlist Signup

A modern, beautiful waitlist signup page built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- ✨ Unicorn Studio hero embed
- 📧 Email validation and form handling
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main waitlist page
├── package.json
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Customization

### Connecting to a Backend API

To connect the form to your backend API, update the `handleSubmit` function in `app/page.tsx`:

```typescript
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})

if (response.ok) {
  setStatus('success')
  setMessage('Thank you! You\'ve been added to the waitlist.')
} else {
  setStatus('error')
  setMessage('Something went wrong. Please try again.')
}
```

### Creating an API Route (Next.js)

You can create an API route at `app/api/waitlist/route.ts`:

```typescript
export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Add your email to database/service here
  
  return Response.json({ success: true })
}
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Unicorn Studio** - Hero embed

## License

MIT

