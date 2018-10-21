export const COUNTER_INCREMENT = 'INCREMENT';
export const COUNTER_DECREMENT = 'DECREMENT';

export function incrementBy(number) {
  return { type: COUNTER_INCREMENT, amount: number };
}

export function decrementBy(number) {
  return { type: COUNTER_DECREMENT, amount: number };
}