import { useState } from 'react';
import { signIn } from '@/lib/auth';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await signIn({ email, password });
      if (!result.success) {
        setError(result.error || 'Erro ao fazer login');
        return;
      }
      // Handle successful login - store tokens, redirect, etc.
      console.log('Login successful:', result.data);
    } catch (err) {
      setError('Ocorreu um erro ao tentar fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Background image container */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/background-login.png)' }}
      >
        <div className="absolute inset-0 bg-black/[0.03]"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-10 bg-black/20">
        <div>
          <img src="/obvia-logo.png" alt="Óbvia" className="h-8 brightness-0 invert" />
        </div>
        <div>
          <a href="/contato" className="text-[13px] text-white hover:text-[#47B5FF] transition-colors">Entre em contato</a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative flex min-h-screen">
        {/* Left side - Tagline */}
        <div className="hidden md:flex md:flex-1 items-center">
          <div className="text-white max-w-[420px] ml-20">
            <h1 className="text-[40px] leading-[1.15] font-light mb-0">
              Contabilidade não é fácil
              <br />
              pra ninguém.
            </h1>
            <h2 className="text-[40px] leading-[1.15] font-light mt-0">
              Pra gente, é <span className="font-medium">Obvia</span>.
            </h2>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[384px] bg-white p-8 rounded-lg shadow-sm mx-4 md:mx-0">
            <h2 className="text-[22px] font-semibold mb-6 text-[#111827]">Entrar</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] focus:outline-none focus:border-[#47B5FF] focus:ring-1 focus:ring-[#47B5FF] text-[#111827] placeholder:text-[#6B7280] text-[13px] transition-colors placeholder:text-[13px] placeholder:font-normal hover:border-[#47B5FF]"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] focus:outline-none focus:border-[#47B5FF] focus:ring-1 focus:ring-[#47B5FF] text-[#111827] placeholder:text-[#6B7280] text-[13px] transition-colors placeholder:text-[13px] placeholder:font-normal hover:border-[#47B5FF]"
                  required
                />
              </div>

              <div className="flex items-center justify-between mt-1">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#D1D5DB] text-[#47B5FF] focus:ring-[#47B5FF] focus:ring-offset-0 focus:ring-1 cursor-pointer"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="ml-2 text-[13px] text-[#4B5563]">Lembrar</span>
                </label>

                <a href="/esqueci-senha" className="text-[13px] text-[#4B5563] hover:text-[#47B5FF] transition-colors">
                  Esqueci minha senha
                </a>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#47B5FF] hover:bg-[#47B5FF]/90 active:bg-[#47B5FF]/80 text-white text-[13px] font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-2">
              {error && (
                <div className="text-sm text-red-500">{error}</div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-[13px] text-[#4B5563]">
                Não tem uma conta? <a href="/registro" className="font-medium text-[#47B5FF] hover:text-[#3da4ea]">Registre-se</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
