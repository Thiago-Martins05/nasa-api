// Serviço para chamada da API ROVER

export async function fetchRoverData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API ROVER');
  }
  return await response.json();
} 