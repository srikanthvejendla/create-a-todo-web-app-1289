import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../auth/AuthProvider';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
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
        <h1 className="text-2xl font-bold mb-6">Register</h1>
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
          {loading ? 'Registering...' : 'Register'}
        </button>
        <div className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
