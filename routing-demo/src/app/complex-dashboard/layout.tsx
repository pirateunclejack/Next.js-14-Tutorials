// import UserAnalytics from '@/components/UserAnalytics';
// import RevenueMetrics from '@/components/RevenueMetrics';
// import Notifications from '@/components/Notifications';
export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      {/* <UserAnalytics></UserAnalytics> */}
      {/* <RevenueMetrics></RevenueMetrics> */}
      {/* <Notifications></Notifications> */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
