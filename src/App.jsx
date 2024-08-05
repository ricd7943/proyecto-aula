import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Modal from 'react-modal';

import './App.css';

import * as XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';



const ResultadoItem = ({ titulo, valor }) => (
  <div className="resultado-item">
    <strong>{titulo}:</strong> {valor !== null ? valor.toFixed(2) : '-'}
  </div>
);

const TablaResultados = ({ datos }) => (
  <table className="result-table">
    <thead>
      <tr>
        <th>Intervalo</th>
        <th>Marca de Clase</th>
        <th>Frecuencia</th>
        <th>Frecuencia Acumulada</th>
        <th>Frecuencia Relativa</th>
        <th>Diferencia con la Media</th>
        <th>Cuadrado de la Diferencia</th>
        <th>Producto de Frecuencia y Diferencia</th>
        <th>Frecuencia * (Marca de Clase - Media Aritmética)^2</th>
        <th>Marca de Clase - Media Aritmética</th>
      </tr>
    </thead>
    <tbody>
      {datos.map((row, index) => (
        <tr key={index}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);






Modal.setAppElement('#root');

const ResultadoTable = ({ estadisticas }) => {
  const resultadoItems = [
    { titulo: 'Media Aritmética', valor: estadisticas.mediaAritmetica },
    { titulo: 'Mediana', valor: estadisticas.mediana },
    { titulo: 'Moda', valor: estadisticas.moda },
    { titulo: 'Varianza', valor: estadisticas.varianza },
    { titulo: 'Desviación Estándar', valor: estadisticas.desviacionEstandar },
    { titulo: 'Coeficiente de Variación', valor: estadisticas.coeficienteVariacion },
    { titulo: 'Valor Pregunta Avanzada', valor: estadisticas.valorPreguntaAvanzada },
  ];
  return (
    <table className="result-table">
      <thead>
        <tr>
          <th>Estadística</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {resultadoItems.map((item, index) => (
          <tr key={index}>
            <td>{item.titulo}</td>
            <td>{item.valor !== null ? item.valor.toFixed(2) : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};





const App = () => {
  const [intervalos, setIntervalos] = useState([{ lower: '', upper: '' }]);
  const [frecuencias, setFrecuencias] = useState(['']);
  const [datos, setDatos] = useState([]);
  const [estadisticas, setEstadisticas] = useState({
    mediaAritmetica: null,
    mediana: null,
    moda: null,
    varianza: null,
    desviacionEstandar: null,
    coeficienteVariacion: null,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [preguntaAvanzada, setPreguntaAvanzada] = useState('');

  useEffect(() => {
    const initialIntervalos = [
      { lower: 0, upper: 10 },
      { lower: 10, upper: 20 },
      { lower: 20, upper: 30 },
    ];
    const initialFrecuencias = [5, 10, 15];
    setIntervalos(initialIntervalos);
    setFrecuencias(initialFrecuencias);
  }, []);



  const handleIntervalChange = (index, field, value) => {
    const newIntervalos = [...intervalos];
    newIntervalos[index][field] = value;
    setIntervalos(newIntervalos);
  };
  
  const handleFrecuenciaChange = (index, value) => {
    const newFrecuencias = [...frecuencias];
    newFrecuencias[index] = value;
    setFrecuencias(newFrecuencias);
  };
  
  const addRow = () => {
    setIntervalos([...intervalos, { lower: '', upper: '' }]);
    setFrecuencias([...frecuencias, '']);
  };
  
  const removeRow = (index) => {
    const newIntervalos = [...intervalos];
    newIntervalos.splice(index, 1);
    setIntervalos(newIntervalos);
  
    const newFrecuencias = [...frecuencias];
    newFrecuencias.splice(index, 1);
    setFrecuencias(newFrecuencias);
  };
  
  const generarTabla = () => {
    const intervalosArray = intervalos.map((i) => `${i.lower}-${i.upper}`);
    const frecuenciasArray = frecuencias.map((f) => parseInt(f, 10));
  
    if (!validateInputData(intervalosArray, frecuenciasArray)) {
      alert('¡Error! Los datos de entrada no son válidos.');
      return;
    }
  
    const newData = calculateFrequenciesAndStatistics(intervalosArray, frecuenciasArray);
    setDatos(newData);
  
    // Asumiendo que calcularEstadisticas es una función que necesitas definir
    const estadisticasCalculadas = calcularEstadisticas(newData);
    setEstadisticas(estadisticasCalculadas);
  };
  
  const validateInputData = (intervalos, frecuencias) => {
    if (
      !Array.isArray(intervalos) ||
      !Array.isArray(frecuencias) ||
      intervalos.length !== frecuencias.length
    ) {
      return false;
    }
  
    for (let i = 0; i < intervalos.length; i++) {
      const intervalo = intervalos[i].trim();
      const frecuencia = frecuencias[i];
  
      if (!/^(-?\d+(\.\d+)?)-(-?\d+(\.\d+)?)$/.test(intervalo)) {
        return false;
      }
  
      if (!Number.isInteger(frecuencia) || frecuencia <= 0) {
        return false;
      }
    }
  
    return true;
  };
  


  const calculateFrequenciesAndStatistics = (intervalos, frecuencias) => {
    const calculateMean = (frecuencias, classMarks) => {
      let mean = 0;
      const totalFrequency = frecuencias.reduce((sum, freq) => sum + freq, 0);
      for (let i = 0; i < classMarks.length; i++) {
        mean += classMarks[i] * frecuencias[i];
      }
      return mean / totalFrequency;
    };
  
    const classMarks = intervalos.map((intervalo) => {
      const [lowerLimit, upperLimit] = intervalo.split('-').map(parseFloat);
      return (lowerLimit + upperLimit) / 2;
    });
  
    const mean = calculateMean(frecuencias, classMarks);
  
    let accumulatedFrequency = 0;
    const data = classMarks.map((classMark, index) => {
      const frequency = frecuencias[index];
      accumulatedFrequency += frequency;
  
      const difference = (classMark - mean).toFixed(2);
      const squaredDifference = Math.pow(classMark - mean, 2).toFixed(2);
      const frequencyProduct = (frequency * squaredDifference).toFixed(2);
  
      return [
        intervalos[index],
        classMark.toFixed(2),
        frequency,
        accumulatedFrequency,
        (accumulatedFrequency / frecuencias.reduce((sum, freq) => sum + freq, 0)).toFixed(2),
        difference,
        squaredDifference,
        (frequency * difference).toFixed(2),
        frequencyProduct,
        difference,
      ];
    });
  
    return data.slice(0, 10); // Limita los resultados a los primeros 10
  };
  





  const calcularEstadisticas = (data) => {
    const frecuencias = data.map((row) => parseInt(row[2], 10));
    const valores = data.map((row) => parseFloat(row[1]));

    const calculateMean = (valores, frecuencias) => {
      const sumProduct = valores.reduce((acc, val, index) => acc + val * frecuencias[index], 0);
      const sumFrecuencias = frecuencias.reduce((acc, freq) => acc + freq, 0);
      return sumProduct / sumFrecuencias;
    };

    const mean = calculateMean(valores, frecuencias);
    const median = (arr) => {
      const mid = Math.floor(arr.length / 2);
      const nums = [...arr].sort((a, b) => a - b);
      return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    const mode = (arr) => {
      const freqMap = {};
      let maxFreq = 0;
      let mode;
      for (const num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
          maxFreq = freqMap[num];
          mode = num;
        }
      }
      return mode;
    };

    const moda = (valores) => {
      const frequencyMap = new Map();
      let maxFrequency = 0;
      let mode = null;

      valores.forEach((value) => {
        const frequency = (frequencyMap.get(value) || 0) + 1;
        frequencyMap.set(value, frequency);

        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          mode = value;
        }
      });

      return mode;
    };



    const variance = valores.reduce((acc, val, index) => {
      return acc + Math.pow(val - mean, 2) * frecuencias[index];
    }, 0) / frecuencias.reduce((acc, freq) => acc + freq, 0);

    const standardDeviation = Math.sqrt(variance);

    const coefficientOfVariation = (standardDeviation / mean) * 100;

    return {
      mediaAritmetica: mean,
      mediana: median(valores),
      moda: mode(valores),
      varianza: variance,
      desviacionEstandar: standardDeviation,
      coeficienteVariacion: coefficientOfVariation,
    };
  };






  const handleToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handlePreguntaChange = (e) => setPreguntaAvanzada(e.target.value);

  const handleCalcularPreguntaAvanzada = () => {
    const pregunta = preguntaAvanzada.toLowerCase();
    let valorCalculado;

    if (pregunta.includes('peso total') && pregunta.includes('ciudad')) {
      const poblacion = 100000; // Valor de ejemplo, puede ser ajustado
      const pesoPromedio = 70; // Valor de ejemplo, puede ser ajustado
      valorCalculado = poblacion * pesoPromedio;
    } else if (pregunta.includes('total') && pregunta.includes('peso')) {
      const totalWeight = datos.reduce((acc, row) => acc + parseFloat(row[6] || 0), 0);
      valorCalculado = totalWeight;
    } else if (pregunta.includes('media') && pregunta.includes('total')) {
      const totalMedia = estadisticas.mediaAritmetica;
      valorCalculado = totalMedia;
    } else if (pregunta.includes('desviacion') && pregunta.includes('total')) {
      const totalDesviacion = estadisticas.desviacionEstandar;
      valorCalculado = totalDesviacion;
    } else if (pregunta.includes('frecuencia') && pregunta.includes('total')) {
      const totalFrecuencia = frecuencias.reduce((acc, freq) => acc + parseInt(freq, 10), 0);
      valorCalculado = totalFrecuencia;
    } else {
      alert('No se pudo calcular la respuesta a la pregunta avanzada.');
      return;
    }

    setEstadisticas({
      ...estadisticas,
      valorPreguntaAvanzada: valorCalculado,
    });

    alert(`Resultado de la pregunta avanzada: ${valorCalculado}`);
  };







const handleGeneratePDF = async () => {
  // Lógica para generar el PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();
  page.drawText('Estadísticas Generadas:', { x: 50, y: height - 50, size: 20 });
  
  // Aquí puedes agregar más detalles sobre las estadísticas al PDF
  const pdfBytes = await pdfDoc.save();
  const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  setPdfData(pdfBlob);
  await uploadFileToServer(pdfBlob, 'pdf');
  handleOpenModal(pdfBlob);
  
    setPdfData(pdfBytes);
};

const handleGenerateExcel = async () => {
  // Lógica para generar el Excel
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([
    ['Intervalo', 'Marca de Clase', 'Frecuencia', 'Frecuencia Acumulada', 'Frecuencia Relativa', 'Diferencia con la Media', 'Cuadrado de la Diferencia', 'Producto de Frecuencia y Diferencia', 'Frecuencia * (Marca de Clase - Media Aritmética)^2', 'Marca de Clase - Media Aritmética'],
    ...datos
  ]);
  XLSX.utils.book_append_sheet(wb, ws, 'Resultados');
  const excelBytes = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const excelBlob = new Blob([excelBytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  setExcelData(excelBlob);
  await uploadFileToServer(excelBlob, 'excel');
  handleOpenModal(excelBlob);
};

const uploadFileToServer = async (file, fileType) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileType', fileType);

  try {
    const response = await fetch('/api/upload', {  // Cambia la URL según tu API
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al subir el archivo');
    }

    const result = await response.json();
    alert('Archivo guardado exitosamente en el servidor');
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error al guardar el archivo');
  }
};

const handleOpenModal = (content) => {
  setPdfData(content);
  setModalIsOpen(true);
};




const data = {
  labels: datos.map((row) => row[0]),
  datasets: [
    {
      label: 'Frecuencia',
      data: datos.map((row) => row[2]),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Frecuencia Acumulada',
      data: datos.map((row) => row[2]),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};






  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const darkModeClass = isDarkMode ? 'dark-mode' : '';







  return (
    <div className={`app ${darkModeClass}`}>

      <div className="menu-icon">
        <headers>
          <img1 src="/images/3OIP.jpg" alt='Bolívar' className="logo" />
          <h3>Estadística</h3>
          <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </headers>
      </div>

      <div className="pregunta-avanzada">
        <label>
          <h3>Ingresa una Pregunta</h3>
          
          <label htmlFor="preguntaAvanzada">Pregunta:</label>
        <input
          type="text"
          id="preguntaAvanzada"
          value={preguntaAvanzada}
          onChange={(e) => setPreguntaAvanzada(e.target.value)}
        />
        </label>
        <button onClick={handleCalcularPreguntaAvanzada}>Calcular</button>
      </div>


      <label htmlFor="Ingresar datos">Ingresar Datos:</label>
      <div className="input-container">
        {intervalos.map((intervalo, index) => (
          <div key={index} className="interval-row">


         <label htmlFor="Inferior">Limite Inferior:</label>
            <input
              type="number"
              placeholder="Límite inferior"
              value={intervalo.lower}
              onChange={(e) =>
                handleIntervalChange(index, 'lower', e.target.value)
              }
            />
            <label htmlFor="Superior">Limite Superior:</label>
            <input
              type="number"
              placeholder="Límite superior"
              value={intervalo.upper}
              onChange={(e) =>
                handleIntervalChange(index, 'upper', e.target.value)
              }
            />
            <label htmlFor="Frecuencia">Frecuencia:</label> 
            <input
              type="number"
              placeholder="Frecuencia"
              value={frecuencias[index]}
              onChange={(e) => handleFrecuenciaChange(index, e.target.value)}
            />
            <button onClick={() => removeRow(index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <button onClick={addRow}>Agregar Fila</button>
      <button onClick={generarTabla}>Generar Tabla</button>
     




      <div>
        <h2>Resultados</h2>
        <TablaResultados datos={datos} />
        <div className="estadisticas">








          
          <h2>Valores</h2>
          <div>
            <ResultadoItem titulo="Media Aritmética" valor={estadisticas.mediaAritmetica} />
            <ResultadoItem titulo="Mediana" valor={estadisticas.mediana} />
            <ResultadoItem titulo="Moda" valor={estadisticas.moda} />
            <ResultadoItem titulo="Varianza" valor={estadisticas.varianza} />
            <ResultadoItem titulo="Desviación Estándar" valor={estadisticas.desviacionEstandar} />
            <ResultadoItem titulo="Coeficiente de Variación" valor={estadisticas.coeficienteVariacion} />
          </div>
        </div>

        <h3>Gráficos</h3>
        <div className="charts">
          <div className="chart">
            <Line data={data} options={options} />
          </div>
          <div className="chart">
            <Pie data={data} options={options} />
          </div>
        </div>

       
      </div>

      <nav class="navbar">
          <button id="generatePDFButton">Generar PDF</button>
          <button id="generateExcelButton">Generar Excel</button>
         
         <input type="file" id="uploadPDF" accept="application/pdf" />  
        </nav>


        <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Archivo Generado"
>
  <h2>Archivo Generado</h2>
  <div>
    <button onClick={() => handleOpenModal(pdfData)}>Ver PDF</button>
    <button onClick={() => handleOpenModal(excelData)}>Ver Excel</button>
  </div>
  <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
</Modal>

    </div>
  );
};

export default App;
