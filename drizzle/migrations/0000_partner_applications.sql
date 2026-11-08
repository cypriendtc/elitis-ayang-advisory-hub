CREATE TABLE public.partner_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 contact_name text NOT NULL CHECK (char_length(contact_name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 30),
 property_name text NOT NULL CHECK (char_length(property_name) BETWEEN 1 AND 150),
 property_type text NOT NULL CHECK (property_type IN ('hotel','apartment')),
 city text NOT NULL CHECK (char_length(city) BETWEEN 1 AND 100),
 address text NOT NULL CHECK (char_length(address) BETWEEN 1 AND 300),
 capacity integer NOT NULL CHECK (capacity BETWEEN 1 AND 10000),
 description text NOT NULL CHECK (char_length(description) BETWEEN 1 AND 3000),
 website text NOT NULL DEFAULT '' CHECK (char_length(website) <= 500),
 language text NOT NULL CHECK (language IN ('fr','en')),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
 consent boolean NOT NULL CHECK (consent = true)
);
GRANT ALL ON public.partner_applications TO service_role;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.partner_applications IS 'Private hotel and apartment partnership requests. No public reads or writes; validated server submissions only.';