import Profile from '../components/Profile';
import TopBar from '../components/TopBar';
import Clock from '../components/Clock';

export default function Home() {
  return (
    <>
      <TopBar left={<span>D-Angelo</span>} center={<span>Profile</span>} right={<Clock />} />
      <main className="min-h-screen flex items-center justify-center">
        <Profile />
      </main>
    </>
  );
}
