import ChatWindow from '../components/ChatWindow';
export default function Home(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 sticky top-0">
        <div className="max-w-3xl mx-auto font-bold">Shopping Chat Agent — Mobiles</div>
      </header>
      <main className="py-6">
        <ChatWindow />
      </main>
    </div>
  );
}
