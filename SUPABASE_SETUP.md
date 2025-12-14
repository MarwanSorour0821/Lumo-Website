# Supabase Setup Instructions

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project

## Step 2: Create the Waitlist Table

In your Supabase project, go to the SQL Editor and run this SQL to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts (for the API)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create a policy for service role to read all
CREATE POLICY "Allow service role to read all" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
```

## Step 3: Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** > **API**
3. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

## Step 4: Set Up Environment Variables

1. Create a file named `.env.local` in the root of your project
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with the values from Step 3.

## Step 5: Restart Your Development Server

After creating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Fill out the email form on your website
2. Click "Get Early Access"
3. Check your Supabase dashboard > Table Editor > waitlist table to verify the email was added

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure `.env.local` exists and has the correct variable names
- **Duplicate email error**: The table has a UNIQUE constraint on email to prevent duplicates
- **RLS policy errors**: Make sure you've run the SQL commands to set up Row Level Security policies

