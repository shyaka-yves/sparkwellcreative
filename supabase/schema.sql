-- Enable row level security
-- NOTE: For a real production app, you should define granular RLS policies.
-- For this agency site, we'll start with basic authenticated access for admin.

-- 1. Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  category TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  client TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Team table
CREATE TABLE IF NOT EXISTS team (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  bio TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Pricing table
CREATE TABLE IF NOT EXISTS pricing (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  period TEXT DEFAULT 'month',
  features TEXT[] DEFAULT '{}',
  is_popular BOOLEAN DEFAULT false,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Contacts table (for form submissions)
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Site Content table (for dynamic text)
CREATE TABLE IF NOT EXISTS site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  "key" TEXT NOT NULL,
  value TEXT NOT NULL,
  UNIQUE(section, "key")
);

-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE team ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Basic Policies (Public Read, Admin Write)
-- Public Read
CREATE POLICY "Public Read Services" ON services FOR SELECT USING (true);
CREATE POLICY "Public Read Portfolio" ON portfolio FOR SELECT USING (true);
CREATE POLICY "Public Read Team" ON team FOR SELECT USING (true);
CREATE POLICY "Public Read Pricing" ON pricing FOR SELECT USING (true);
CREATE POLICY "Public Read Site Content" ON site_content FOR SELECT USING (true);

-- Authenticated Write (Admin)
CREATE POLICY "Admin Write Services" ON services FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin Write Portfolio" ON portfolio FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin Write Team" ON team FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin Write Pricing" ON pricing FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin Write Contacts" ON contacts FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin Write Site Content" ON site_content FOR ALL TO authenticated USING (true);

-- Public Write for Contacts (to allow form submissions)
CREATE POLICY "Public Submit Contacts" ON contacts FOR INSERT WITH CHECK (true);
