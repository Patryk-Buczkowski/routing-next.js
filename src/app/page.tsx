import { redirect } from 'next/navigation';

export default function SomePage() {
  redirect('/home');  // Natychmiastowe przekierowanie na inną stronę
  return null;  // Możesz zwrócić null, ponieważ nie ma renderowania tej strony
}
