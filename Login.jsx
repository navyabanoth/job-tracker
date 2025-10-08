import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../auth.js';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    login({ email, password });
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen gradient-bg grid place-items-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl p-6 shadow-card border border-black/5">
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-sm text-black/60 mb-6">Log in to explore roles and track your path.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="w-full rounded-xl border border-black/10 px-4 py-2" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input className="w-full rounded-xl border border-black/10 px-4 py-2" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="w-full rounded-xl bg-primary-600 text-white px-4 py-2 font-medium shadow-card hover:bg-primary-700">Log in</button>
        </form>
        <p className="text-sm text-black/60 mt-4">New here? <Link to="/signup" className="text-primary-700 font-medium">Create an account</Link></p>
      </div>
    </div>
  );
}






