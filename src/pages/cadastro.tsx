import { useState } from 'react';

export function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: 'Pietro Schirano',
    cpf: '',
    rg: '',
    orgao: 'SSPMG',
    estadoCivil: 'Solteiro',
    regimePatrimonial: 'Comunhão parcial de bens',
    profissao: 'Contador',
    cep: '30431191',
    cidade: 'Pietro Schirano',
    estado: 'MG',
    logradouro: 'Pietro Schirano',
    bairro: 'Pietro Schirano',
    numero: '2473',
    complemento: 'Pietro Schirano',
    login: 'email@email.com.br',
    senha: '••••••••••••••••••',
    participacao: '45'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Implementar lógica de envio
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-8">
        <div className="flex items-center">
          <img src="/obvia-logo-azul.png" alt="Óbvia" className="h-8" />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 pr-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium text-[#47B5FF] mb-6">
                Vamos abrir sua empresa!
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Nesta primeira etapa, precisamos de alguns dados sobre você. 😊
              </p>

              {/* Steps */}
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#47B5FF] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-[#47B5FF] font-medium">Seus dados</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-500">Sobre a empresa</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-500">Sócios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div className="bg-[#f8fafc] rounded-lg p-8">
              <h1 className="text-2xl font-semibold mb-8">Seus dados</h1>

              <form onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <h2 className="text-xl font-medium mb-4">Dados Pessoais</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        placeholder="xxx.xxx.xxx-xx"
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">RG</label>
                      <input
                        type="text"
                        name="rg"
                        value={formData.rg}
                        onChange={handleChange}
                        placeholder="xx.xxx-xxx"
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Órgão</label>
                      <input
                        type="text"
                        name="orgao"
                        value={formData.orgao}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Profissão</label>
                      <input
                        type="text"
                        name="profissao"
                        value={formData.profissao}
                        onChange={handleChange}
                        placeholder="Informe a sua profissão."
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Anexar CNH ou RG</label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <svg className="w-6 h-6 text-[#47B5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                        </div>
                        <p className="text-xs text-[#47B5FF]">Arraste e solte o arquivo aqui</p>
                        <p className="text-xs text-gray-500 mt-1">Limite de arquivo 25 MB</p>
                      </div>
                    </div>


                  </div>
                </div>

                {/* Endereço */}
                <h2 className="text-xl font-medium mb-4">Endereço</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Logradouro</label>
                      <input
                        type="text"
                        name="logradouro"
                        value={formData.logradouro}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                      <input
                        type="text"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                      <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                      <input
                        type="text"
                        name="complemento"
                        value={formData.complemento}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Anexar Comprovante de Endereço</label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <svg className="w-6 h-6 text-[#47B5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                        </div>
                        <p className="text-xs text-[#47B5FF]">Arraste e solte o arquivo aqui</p>
                        <p className="text-xs text-gray-500 mt-1">Limite de arquivo 25 MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informações Adicionais */}
                <h2 className="text-xl font-medium mb-4">Informações Adicionais</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado Civil</label>
                      <div className="relative">
                        <select
                          name="estadoCivil"
                          value={formData.estadoCivil}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF] appearance-none pr-10"
                        >
                          <option value="Solteiro">Solteiro</option>
                          <option value="Casado">Casado</option>
                          <option value="Divorciado">Divorciado</option>
                          <option value="Viúvo">Viúvo</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Regime patrimonial</label>
                      <div className="relative">
                        <select
                          name="regimePatrimonial"
                          value={formData.regimePatrimonial}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF] appearance-none pr-10"
                        >
                          <option value="Comunhão parcial de bens">Comunhão parcial de bens</option>
                          <option value="Comunhão universal de bens">Comunhão universal de bens</option>
                          <option value="Separação total de bens">Separação total de bens</option>
                          <option value="Participação final nos aquestos">Participação final nos aquestos</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Carteira Profissional</label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <svg className="w-6 h-6 text-[#47B5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                        </div>
                        <p className="text-xs text-[#47B5FF]">Arraste e solte o arquivo aqui</p>
                        <p className="text-xs text-gray-500 mt-1">Limite de arquivo 25 MB</p>
                        <p className="text-xs text-gray-500 mt-1">Caso seja advogado anexe sua carteira OAB aqui.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acesso ao Gov.br */}
                <h2 className="text-xl font-medium mb-4">Acesso ao Gov.br</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Login</label>
                      <input
                        type="email"
                        name="login"
                        value={formData.login}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                      <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Participação societária */}
                <h2 className="text-xl font-medium mb-4">Participação societária</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8 max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Informe o valor em percentual da sua participação na empresa.
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="participacao"
                      value={formData.participacao}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#47B5FF] focus:border-[#47B5FF] pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <span className="text-gray-500">%</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#47B5FF] text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-[#3da4ea] transition-colors flex items-center"
                  >
                    Avançar
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
