import supabase from './supabaseClient';

export const bookRide = async (rideOfferId, passengerId) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ride_offer_id: rideOfferId, passenger_id: passengerId, status: 'Booked', payment_status: 'Pending' }]);
  
  if (error) throw new Error(error.message);
  return data;
};
