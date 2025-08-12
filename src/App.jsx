import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';
import WalkForm from './components/WalkForm';
import WalkResult from './components/WalkResult';
import WalkHistory from './components/WalkHistory';

const SCREENS = {
  FORM: 'form',
  RESULT: 'result',
  HISTORY: 'history'
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.FORM);
  const [currentWalk, setCurrentWalk] = useState(null);
  const [walks, setWalks] = useLocalStorage('walkHistory', []);
  const [isDark, setIsDark] = useDarkMode();

  const handleWalkSubmit = (walkData) => {
    const newWalks = [walkData, ...walks];
    setWalks(newWalks);
    setCurrentWalk(walkData);
    setCurrentScreen(SCREENS.RESULT);
  };

  const handleNewWalk = () => {
    setCurrentWalk(null);
    setCurrentScreen(SCREENS.FORM);
  };

  const handleViewHistory = () => {
    setCurrentScreen(SCREENS.HISTORY);
  };

  const handleDeleteWalk = (walkId) => {
    const updatedWalks = walks.filter(walk => walk.id !== walkId);
    setWalks(updatedWalks);
  };

  switch (currentScreen) {
    case SCREENS.RESULT:
      return (
        <WalkResult
          walkData={currentWalk}
          onNewWalk={handleNewWalk}
          onViewHistory={handleViewHistory}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
        />
      );
    
    case SCREENS.HISTORY:
      return (
        <WalkHistory
          walks={walks}
          onNewWalk={handleNewWalk}
          onDeleteWalk={handleDeleteWalk}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
        />
      );
    
    default:
      return (
        <WalkForm 
          onSubmit={handleWalkSubmit} 
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
        />
      );
  }
}

export default App;