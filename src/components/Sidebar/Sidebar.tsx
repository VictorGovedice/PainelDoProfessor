import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styles from './Sidebar.module.scss';
import logo from '@assets/images/logo-alumni.svg';
import dashboardIcon from '@assets/images/icons/dashboard.svg';
import calendarIcon from '@assets/images/icons/calendar.svg';
import alunosIcon from '@assets/images/icons/personalcard.svg';
import dadosIcon from '@assets/images/icons/setting.svg';

export interface SidebarProps {
  setSelectedMenu: (menu: string) => void; // Nova prop para alterar o menu selecionado
}

export function Sidebar({ setSelectedMenu }: SidebarProps) {
  const drawerWidth = 250; // Largura do Drawer

  const DrawerList = (
    <Box sx={{ width: drawerWidth }} className={styles.sidebarContent} role="presentation">
      <img className={styles.logo} src={logo} alt='logo' />
      <List className={styles.list}>
        {
          [
            { text: 'Dashboard', icon: dashboardIcon },
            { text: 'Perfil do Professor', icon: calendarIcon },
            { text: 'Alunos', icon: alunosIcon },
            { text: 'Check-in de Aulas', icon: calendarIcon },
            { text: 'Dados da conta', icon: dadosIcon },
          ]
            .map((item) => (
              <ListItem key={item.text} disablePadding className={styles.item}>
                <ListItemButton 
                  className={styles.button} 
                  onClick={() => setSelectedMenu(item.text)} // Atualiza o menu selecionado
                >
                  <ListItemIcon className={styles.icon}>
                    <img src={item.icon} alt={item.text} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
    </Box>
  );

  return (
    <Drawer className={styles.Sidebar} sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
      variant="permanent"
      anchor="left"
    >
      {DrawerList}
    </Drawer>
  );
}
