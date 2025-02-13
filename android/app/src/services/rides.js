import supabase from './supabaseClient';

export const postRideOffer = async (departureTime, routeId, availableSeats) => {
  const user = supabase.auth.user();
  if (!user) throw new Error('Not authenticated');
  const { error } = await supabase
    .from('ride_offers')
    .insert([{ driver_id: user.id, departure_time: departureTime, route_id: routeId, available_seats: availableSeats }]);
  if (error) throw new Error(error.message);
};

export const getRideOffers = async (routeId) => {
  const { data, error } = await supabase
    .from('ride_offers')
    .select('*')
    .eq('route_id', routeId);
  if (error) throw new Error(error.message);
  return data;
};
