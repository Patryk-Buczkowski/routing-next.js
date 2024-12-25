import { MyLink } from '@/components/buttons/Link';
import Card from '@/components/card';

export default function ArchiveNotificationsPage() {
  return (
    <>
      <Card className="max-h-[25vh] overflow-auto">
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
        <p>Archive Page notification</p>
      </Card>

      <div className="w-1/2 mx-auto mt-2">
        <MyLink
          to="/complex-dash"
          name="Current notifications"
        />
      </div>
    </>
  );
}
