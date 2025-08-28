// Serviço para chamada da API APOD

export async function fetchApodData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API APOD');
  }
  return await response.json();
}
