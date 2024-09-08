import { useState, ChangeEvent, FormEvent } from 'react';

type Car = {
  modelo: string;
  ano: string;
  quilometragem: string;
  marca: string;
}

export default function AddCarro() {
  const [formData, setFormData] = useState<Car>({
    modelo: '',
    ano: '',
    quilometragem: '',
    marca: ''
  });

  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarAno = (ano: number): string | null => {
    const anoAtual = new Date().getFullYear();
    if (ano < 1980) {
      return 'O ano não pode ser menor que 1980.';
    } else if (ano > anoAtual + 1) {
      return 'O ano não pode ser maior que o ano atual mais um.';
    }
    return null;
  };

  const validarKm = (quilometragem: number): string | null => {
    if (quilometragem < 0) {
      return 'A quilometragem não pode ser menor que 0';
    }
    return null;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ano = parseInt(formData.ano, 10);
    const quilometragem = parseFloat(formData.quilometragem);
    const erro = validarAno(ano);
    const erro2 = validarKm(quilometragem);

    if (erro) {
      setError(erro);
      return;
    } else if (erro2) {
      setError2(erro2);
      return;
    }

    setError(null);
    setError2(null);
    setCars([...cars, formData]);
    setFormData({
      modelo: '',
      ano: '',
      quilometragem: '',
      marca: ''
    });
  };

  return (
    <section className="w-11/12 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-xl my-32">
      <div className='w-full flex justify-center'>
        <h2 className="text-xl lg:text-3xl font-bold mb-4">Adicionar Carro</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="marca" className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
            <input type="text" id="marca" name="marca" value={formData.marca} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2"/>
          </div>
          <div className="flex-1">
            <label htmlFor="modelo" className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
            <input type="text" id="modelo" name="modelo" value={formData.modelo} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2"/>
          </div>
        </div>
        <div>
          <label htmlFor="ano" className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
          <input type="number" id="ano" name="ano" value={formData.ano} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2"/>
        </div>
        <div>
          <label htmlFor="quilometragem" className="block text-sm font-medium text-gray-700 mb-1">Quilometragem</label>
          <input type="text" id="quilometragem" name="quilometragem" value={formData.quilometragem} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2"/>
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        {error2 && <div className="text-red-500 text-sm mb-4">{error2}</div>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Adicionar Carro</button>
      </form>

      {/* Lista de carros */}
      <div>
        <h3 className="text-xl lg:text-3xl font-bold mb-4">Lista de Carros</h3>
        <ul className="space-y-4">
          {cars.map((car, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md bg-gray-200">
              <h4 className="font-semibold text-xl lg:text-2xl">{car.modelo} ({car.ano})</h4>
              <p className='text-black text-base'><strong>Marca:</strong> {car.marca}</p>
              <p className='text-black text-base'><strong>Quilometragem:</strong> {car.quilometragem} km</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}