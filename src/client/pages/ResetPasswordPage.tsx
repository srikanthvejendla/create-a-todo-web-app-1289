import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../auth/AuthProvider';

const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const accessToken = searchParams.get('access_token');
  const type = searchParams.get('type');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!accessToken || type !== 'recovery') {
      setError('Invalid or expired reset link.');
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <form onSubmit={handleSubmit} className="bg-surface p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
        {success ? (
          <div className="mb-4 text-primary">Password reset! Redirecting to login...</div>
        ) : (
          <>
            {error && <div className="mb-4 text-danger">{error}</div>}
            <div className="mb-4">
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                className="w-full border border-border rounded px-3 py-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-primary/90 transition"
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
