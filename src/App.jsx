
import './App.css'

// Importamos react router  dom
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

// Importamos los componentes
import CompClienteMostrar from './componentes/CompClienteMostrar';
import CompAgregarClientes from './componentes/CompAgregarClientes';
import CompModClientes from './componentes/CompModClientes';
import CompMenu from './componentes/CompMenu';
import CompFooter from './componentes/CompFooter';

//Tareas
import CompAgregarTareas from './componentes/CompAgregarTareas';
import CompTareaMostrar from './componentes/CompTareaMostrar';
import CompModTareas from './componentes/CompModTareas';

function App() {

  return (
    
      <div className='App'>
        <CompMenu/>
        <BrowserRouter>
        <Routes>
          <Route path='/clientes'exact element={<CompClienteMostrar/>}/>
          <Route path='/clientes/agregar'exact element={<CompAgregarClientes/>}/>
          <Route path='/clientes/editar/:id'exact element={<CompModClientes/>}/>
          <Route path='/tareas'exact element={<CompTareaMostrar/>}/>
          <Route path='/tareas/agregar'exact element={<CompAgregarTareas/>}/>
          <Route path='/tareas/editar/:id'exact element={<CompModTareas/>}/>
        </Routes>
        </BrowserRouter>
        <CompFooter/>

      </div>
      
  )
}

export default App
