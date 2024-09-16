import clientsData from '@/data/clients.json'; // Importa el JSON

export interface Client {
  id: string;
  name: string;
  logo: string;
  url: string;
  namespace: string;
}


export const clients: Client[] = clientsData.map(client => ({
  id: client.id.toString(), // Convertimos id a string
  name: client.name,
  logo: client.img, // Usamos el campo 'img' como 'logo'
  url: client.url,
  namespace: client.namespace,
}));
