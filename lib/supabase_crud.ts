import { supabase } from './supabase';

export const fetchTasks = async () => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching tasks:', error.message);
    return [];
  }

  return data;
};
