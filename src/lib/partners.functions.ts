import { createServerFn } from '@tanstack/react-start';
import { partnerSchema } from './partner-schema';

export const submitPartnership = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => partnerSchema.parse(input))
  .handler(async ({ data }) => {
    // This public endpoint permits only validated creation, never reads or client-selected status.
    const { company_url, ...application } = data;
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('partner_applications').insert(application);
    if (error) throw new Error('Unable to save application. Please try again.');
    return { success: true };
  });