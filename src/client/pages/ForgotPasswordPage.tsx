import React, { useState } from 'react';
import { supabase } from '../auth/AuthProvider';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/reset-password',
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <form onSubmit={handleSubmit} className="bg-surface p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
        {sent ? (
          <div className="mb-4 text-primary">Check your email for a reset link.</div>
        ) : (
          <>
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
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-primary/90 transition"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
