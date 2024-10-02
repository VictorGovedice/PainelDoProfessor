import { Box, Typography, Button, Card, CardContent, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import Calendar from 'react-calendar'; // Importa o componente de calendário
import 'react-calendar/dist/Calendar.css'; // Importa os estilos padrão do calendário
import styles from './Dashboard.module.scss'; // Importa os estilos personalizados
import teacherImage from '@assets/images/1.png'; // Corrige o caminho da imagem do avatar
import { useState } from 'react'; // Hook para gerenciar a data selecionada

export function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para a data selecionada

  // Função chamada quando uma nova data é selecionada
  const onDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log('Data selecionada:', date);
  };

  return (
    <Box className={styles.dashboardContainer}>
      {/* Cabeçalho */}
      <Box className={styles.header}>
        <Avatar src={teacherImage} alt="Teacher" className={styles.avatar} />
        <Box>
          <Typography variant="h5">Olá, Teacher Victor</Typography>
          <Typography variant="subtitle1">Professor de Inglês</Typography>
        </Box>
      </Box>

      {/* Cards principais */}
      <Box className={styles.cardsContainer}>
        <Card className={styles.cardPrimary}>
          <CardContent>
            <Typography variant="h6" className={styles.cardTitle}>
              Histórico de aulas
            </Typography>
            <Typography variant="subtitle1">Setembro de 2024</Typography>
            <Typography variant="body2">12 aulas realizadas</Typography>
            <Button className={styles.accessButton}>ACESSAR</Button>
          </CardContent>
        </Card>

        <Box className={styles.secondaryCards}>
          <Card className={styles.cardSecondary}>
            <CardContent>
              <CalendarTodayIcon fontSize="large" />
              <Typography variant="h6">Calendário</Typography>
              <Button className={styles.accessButton}>ACESSAR</Button>
            </CardContent>
          </Card>

          <Card className={styles.cardSecondary}>
            <CardContent>
              <PersonIcon fontSize="large" />
              <Typography variant="h6">Perfil</Typography>
              <Button className={styles.accessButton}>ACESSAR</Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Próximas aulas */}
      <Box className={styles.upcomingClasses}>
        <Typography variant="h6">Próximas aulas</Typography>
        <Typography variant="subtitle1">Outubro 2024</Typography>
        <Box className={styles.calendar}>
          {/* Componente de Calendário Real */}
          <Calendar
            onChange={onDateChange} // Função chamada quando uma data é selecionada
            value={selectedDate} // Data atualmente selecionada
            locale="pt-BR" // Localização em português
          />
        </Box>
        <Box className={styles.classDetails}>
          <Typography variant="body2">08:00 - Confidence Building</Typography>
          <Button className={styles.checkInButton}>FAZER CHECK-IN</Button>
          <Typography variant="body2">18:00 - Apex</Typography>
          <Button className={styles.checkInButton}>FAZER CHECK-IN</Button>
        </Box>
      </Box>

      {/* Última aula realizada */}
      <Box className={styles.lastClass}>
        <Typography variant="h6">Última aula realizada</Typography>
        <Typography variant="body2">
          5 de setembro - Apex - 10 alunos presentes
        </Typography>
        <Button className={styles.historyButton}>VER HISTÓRICO</Button>
      </Box>
    </Box>
  );
}
