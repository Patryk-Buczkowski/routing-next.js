import { MyLink } from '@/components/buttons/Link';
import Card from '@/components/card';

export default function NotificationsPage() {
  return (
    <>
      <Card className="m-h-[50vh]">Page notification</Card>
      <div className="w-1/2 mx-auto mt-2">
        <MyLink
          to="/complex-dash/archived"
          name="Archive notifications"
        />
      </div>
    </>
  );
}
