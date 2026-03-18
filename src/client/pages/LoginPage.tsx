import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../auth/AuthProvider';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <form onSubmit={handleSubmit} className="bg-surface p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        {error && <div className="mb-4 text-danger">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-border rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border border-border rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-primary/90 transition"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
        <div className="mt-4 text-sm text-center">
          <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>
        <div className="mt-2 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary hover:underline">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
