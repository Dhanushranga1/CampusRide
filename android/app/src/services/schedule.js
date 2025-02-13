import supabase from './supabaseClient';

export const addSchedule = async (day, startTime, endTime) => {
  const user = supabase.auth.user();
  if (!user) throw new Error('Not authenticated');
  const { error } = await supabase
    .from('schedules')
    .insert([{ user_id: user.id, day, start_time: startTime, end_time: endTime }]);
  if (error) throw new Error(error.message);
};
