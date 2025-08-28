// Serviço para chamada da API NEO

export async function fetchNeoData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API NEO');
  }
  return await response.json();
} 