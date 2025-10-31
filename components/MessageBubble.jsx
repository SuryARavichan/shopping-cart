export default function MessageBubble({sender = 'agent', text}){
  const isUser = sender === 'user';
  return (
    <div className={`${isUser ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-3 rounded ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {text}
      </div>
    </div>
  );
}
