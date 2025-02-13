import supabase from './supabaseClient';

export const getMatchingRoutes = async (userId, day, startTime, endTime) => {
  const { data: userSchedules, error } = await supabase
    .from('schedules')
    .select('user_id, routes(start_location, end_location)')
    .eq('day', day)
    .lte('start_time', startTime)
    .gte('end_time', endTime)
    .neq('user_id', userId);

  if (error) throw error;

  const matchedRoutes = [];

  for (const schedule of userSchedules) {
    const { data: userRoutes, error: routeError } = await supabase
      .from('routes')
      .select('*')
      .eq('user_id', schedule.user_id);

    if (routeError) throw routeError;

    userRoutes.forEach((route) => {
      if (route.start_location === userRoutes.start_location && route.end_location === userRoutes.end_location) {
        matchedRoutes.push({
          user_id: schedule.user_id,
          route_id: route.id,
          departure_time: schedule.start_time,
        });
      }
    });
  }

  return matchedRoutes;
};
