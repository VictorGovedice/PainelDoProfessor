import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import './global.scss';

import { Sidebar } from './components';
import styles from './App.module.scss';
import profile from '@assets/images/Profil.png';

import { Dashboard } from './components/Dashboard/Dashboard';  // Importa o componente Dashboard

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard'); // Estado para controlar o menu selecionado

  // Função que renderiza o conteúdo baseado no menu selecionado
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Perfil do Professor':
        return <Typography variant="h4">Perfil do Professor</Typography>;
      case 'Alunos':
        return <Typography variant="h4">Alunos</Typography>;
      case 'Check-in de Aulas':
        return <Typography variant="h4">Check-in de Aulas</Typography>;
      case 'Dados da conta':
        return <Typography variant="h4">Dados da conta</Typography>;
      default:
        return <Typography variant="h4">Selecione um item do menu</Typography>;
    }
  };

  return (
    <div className={styles.App}>
      <Box sx={{ display: 'flex' }}>
        {/* Passa a função setSelectedMenu para o Sidebar */}
        <Sidebar setSelectedMenu={setSelectedMenu} />
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} className={styles.box} component="main">
          {/* Renderiza o conteúdo com base no menu selecionado */}
          {renderContent()}
        </Box>
      </Box>
    </div>
  );
}

export default App;
